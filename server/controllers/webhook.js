const db = require('../models');

module.exports = {
  webhook: function (req, res) {
    const event = req.body;
    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log('#############');
        console.log(paymentIntent.metadata);
        db.order.update({
          paid: 1
        }, {
          where: {
            id: paymentIntent.metadata.orderId
          }
        })
          .then(result => console.log(result))
          .catch(err => console.error(err));
        console.log('PaymentIntent was successful!');
        console.log(`Order ${paymentIntent.metadata.orderId} updated!`);
        break;
      }
      case 'payment_method.attached': {
        // const paymentMethod = event.data.object;
        console.log('PaymentMethod was attached to a Customer!');
        break;
      }
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
  }
};
