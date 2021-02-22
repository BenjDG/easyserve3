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
    console.log(req.body);
    console.log('#########################');
    const { empId, tableId, statusId, notes } = req.body;
    db.order.create({
      employeeId: empId,
      resTableId: tableId,
      statusId: statusId,
      notes: notes
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
