require('dotenv').config();
const db = require('../models');
const stripe = require('stripe')(process.env.STRIPE);
const HEROKUURL = process.env.HEROKUURL || 'http://localhost:3000';

module.exports = {
  createCheckoutSession: async function (req, res) {
    const orderId = req.body;
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
          const data = await result.orderItems.map(item => {
            // console.log(item.menuItem.title);
            // console.log(item.menuItem.price);
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
            mode: 'payment',
            success_url: `${HEROKUURL}/vieworders`,
            cancel_url: `${HEROKUURL}/order`,
            metadata: {
              orderId: orderId.id
            }
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
