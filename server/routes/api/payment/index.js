const router = require('express').Router();
const payment = require('../../../controllers/payment');
// route path 'api/payment

router.route('/create-checkout-session').post(payment.createCheckoutSession);

module.exports = router;
