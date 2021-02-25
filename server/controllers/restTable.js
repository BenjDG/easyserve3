const db = require('../models');

module.exports = {
  findAllRestTables: function (_req, res) {
    db.restTable.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
