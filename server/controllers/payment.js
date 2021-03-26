require('dotenv').config();
const db = require('../models');
const stripe = require('stripe')(process.env.STRIPE);
const HEROKUURL = process.env.HEROKUURL || 'http://localhost:3000';

module.exports = {
  createCheckoutSession: async function (req, res) {
    const orderId = req.body;
    console.log(`########################`);
    console.log(orderId);
    console.log(orderId.id);

    try {
      db.order.findByPk(orderId.id, {
        include: [
          {
            model: db.orderItem,
            include: [
              {
                model: db.menuItem
              }
            ]
          }
        ]
      })
        .then(async (result) => {
          // console.log(result);
          // console.log(result.orderItems[0].menuItem);
          console.log(result.orderItems[0].menuItem.title);
          console.log(result.orderItems[0].menuItem.price);
          // const line_items = [];
          const data = await result.orderItems.map(item => {
            console.log(item.menuItem.title);
            console.log(item.menuItem.price);
            const price = +item.menuItem.price * 100;
            console.log(price);
            return {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: item.menuItem.title
                },
                unit_amount: price
              },
              quantity: 1
            };
          });
          console.log('stripe');
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: data,
            // line_items: [
            //   {
            //     price_data: {
            //       currency: 'usd',
            //       product_data: {
            //         name: 'T-shirt'
            //       },
            //       unit_amount: 2000
            //     },
            //     quantity: 1
            //   }
            // ],
            mode: 'payment',
            success_url: `${HEROKUURL}/vieworders`,
            cancel_url: `${HEROKUURL}/order`
          });

          res.json({ id: session.id });
        })
        .catch(err => {
          console.error(err);
          res.json(err);
        });
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
};
