require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE);
const HEROKUURL = process.env.HEROKUURL || 'http://localhost:3000';

module.exports = {
  createCheckoutSession: async function (req, res) {
    const { orderId, itemsOrderedArray } = req.body;
    try {
      console.log('stripe');
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt'
              },
              unit_amount: 2000
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        success_url: `${HEROKUURL}/vieworders`,
        cancel_url: `${HEROKUURL}/order`
      });

      res.json({ id: session.id });
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
};
