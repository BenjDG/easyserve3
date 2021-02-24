const db = require('../models');

module.exports = {
  createOrderItem: function (_req, res) {
    db.orderItem.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
