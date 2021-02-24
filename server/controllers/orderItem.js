const db = require('../models');

module.exports = {
  createNewOrderItem: async function (req, res) {
    // example { empId: '2', tableId: '2', statusId: '2', notes: 'I like tacos' }
    const { orderId, itemId } = req.params;
    db.orderItem.create({
      order_numberId: orderId,
      menu_itemId: itemId
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
