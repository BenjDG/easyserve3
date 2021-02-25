const db = require('../models');

module.exports = {
  findAllStatusOptions: function (_req, res) {
    db.status.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
