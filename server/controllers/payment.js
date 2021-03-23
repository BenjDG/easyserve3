require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE);
const PORT = process.env.PORT || 3000;

module.exports = {
  createCheckoutSession: async function (_req, res) {
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
        success_url: `http://localhost:${PORT}/vieworders`,
        cancel_url: `http://localhost:${PORT}/order`
      });

      res.json({ id: session.id });
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
};
