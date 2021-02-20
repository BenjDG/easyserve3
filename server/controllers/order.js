const db = require('../models');

module.exports = {
  findAllOrders: function (_req, res) {
    db.order.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
