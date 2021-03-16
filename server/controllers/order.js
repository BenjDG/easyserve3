const db = require('../models');

module.exports = {
  findAllOrders: function (_req, res) {
    db.order.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findAllOrdersWithItemsWhereCooking: function (_req, res) {
    db.order.findAll({
      where: {
        status_id: 2
      },
      include: [
        {
          model: db.orderItem,
          include: [
            {
              model: db.menuItem
            }
          ]
        }
      ]
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findOrderById: function (req, res) {
    db.order.findByPk(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findOrderByIdWithItems: function (req, res) {
    db.order.findByPk(req.params.id, {
      include: [
        {
          model: db.orderItem,
          include: [
            {
              model: db.menuItem
            }
          ]
        }
      ]
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  createNewOrder: async function (req, res) {
    console.log(req.body);
    const { userId, tableId, statusId, notes } = req.body;
    await db.order.create({
      userId: userId,
      restTableId: tableId,
      statusId: statusId,
      notes: notes
    })
      .then(result => res.json(result))
      .catch(err => {
        console.error(err);
        res.status(500).json(err);
      });
  },
  updateOrderInfo: async function (req, res) {
    const { orderId, userId, tableId, statusId, notes } = req.body;
    db.order.update({
      userId: userId,
      restTableId: tableId,
      statusId: statusId,
      notes: notes
    }, {
      where: {
        id: orderId
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  deleteOneOrder: async function (req, res) {
    const { orderId } = req.body;
    db.order.destroy({
      where: {
        id: orderId
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
