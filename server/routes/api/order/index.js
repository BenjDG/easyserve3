const router = require('express').Router();
const order = require('../../../controllers/order');

router.route('/all').get(order.findAllOrders);

module.exports = router;
