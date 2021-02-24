const db = require('../models');

module.exports = {
  createNewOrderItem: async function (req, res) {
    const { orderId, itemId } = req.params;
    db.orderItem.create({
      order_numberId: orderId,
      menu_itemId: itemId
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  deleteNewOrderItem: async function (req, res) {
    const { orderItemRecId } = req.params;
    db.orderItem.destroy({
      where: {
        id: orderItemRecId
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
