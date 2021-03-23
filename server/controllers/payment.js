require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE);

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
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel'
      });

      res.json({ id: session.id });
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
};
