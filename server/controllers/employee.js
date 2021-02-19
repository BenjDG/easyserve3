const db = require('../models');

module.exports = {
  findAllEmployees: function (_req, res) {
    db.employee.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
