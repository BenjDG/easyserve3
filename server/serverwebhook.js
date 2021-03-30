// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/account/apikeys
require('stripe')('sk_test_51IXcgsKAaRFhH7wwbr4dvs16eeq3T4ydxM5YH9qiRAn46jqedFDRkuQYiihRAEAzT2HTwiaokglxyt0uXxOBJods00SaWAUPZD');

// This example uses Express to receive webhooks
const app = require('express')();

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

// Match the raw body to content type application/json
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (request, response) => {
  const event = request.body;

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!');
      break;
    }
    case 'payment_method.attached': {
      const paymentMethod = event.data.object;
      console.log('PaymentMethod was attached to a Customer!');
      break;
    }
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.json({ received: true });
});

app.listen(4242, () => console.log('Running on port 4242'));
