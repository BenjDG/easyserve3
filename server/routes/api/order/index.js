const router = require('express').Router();
const order = require('../../../controllers/order');

// route path 'api/order/'
router.route('/all').get(order.findAllOrders);
router.route('/:id').get(order.findOrderById);
router.route('/:id/items').get(order.findOrderByIdWithItems);
router.route('/create').post(order.createNewOrder);

module.exports = router;
