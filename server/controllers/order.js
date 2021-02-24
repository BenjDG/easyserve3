const db = require('../models');

module.exports = {
  findAllOrders: function (_req, res) {
    db.order.findAll({})
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
    // example { empId: '2', tableId: '2', statusId: '2', notes: 'I like tacos' }
    const { empId, tableId, statusId, notes } = req.body;
    db.order.create({
      employeeId: empId,
      restTableId: tableId,
      statusId: statusId,
      notes: notes
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  updateOrderInfo: async function (req, res) {
    const { orderId, empId, tableId, statusId, notes } = req.body;
    db.order.update({
      employeeId: empId,
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
