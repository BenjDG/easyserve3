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
  }
  // ,
  // findOrderByIdWithItems: function (req, res) {
  //   db.order.findAll({
  //     include : [
  //       model: db.orderItem
  //     ]
  //   })
  //     .then(result => res.json(result))
  //     .catch(err => res.status(500).json(err));
  // }
};
