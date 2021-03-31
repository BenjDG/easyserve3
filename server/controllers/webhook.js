const db = require('../models');

module.exports = {
  webhook: function (req, res) {
    const event = req.body;
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        db.order.update({
          paid: 1
        }, {
          where: {
            id: paymentIntent.metadata.orderId
          }
        })
          .then(result => console.log(result))
          .catch(err => console.error(err));
        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
  }
};
