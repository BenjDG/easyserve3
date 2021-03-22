const router = require('express').Router();
const order = require('../../../controllers/order');
const orderItem = require('../../../controllers/orderItem');

// route path 'api/order/'
router.route('/all').get(order.findAllOrders);
router.route('/cooking').get(order.findAllOrdersWithItemsWhereCooking);
router.route('/:id').get(order.findOrderById);
router.route('/:id/items').get(order.findOrderByIdWithItems);
router.route('/create').post(order.createNewOrder);
router.route('/add/:orderId/:itemId').post(orderItem.createNewOrderItem);
router.route('/update').put(order.updateOrderInfo);
router.route('/updateStatus').patch(order.updateOrderStatus);
router.route('/updateTotal').patch(order.updateOrderTotal);
router.route('/updatePaid').patch(order.updateOrderPaid);
router.route('/delete/item/:orderItemRecId').delete(orderItem.deleteOneOrderItem);
router.route('/delete').delete(order.deleteOneOrder);

module.exports = router;
