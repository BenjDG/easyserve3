const db = require('../models');

module.exports = {
  findAllEmployees: function () {
    db.employee.findAll({})
      .then(result => result)
      .catch((err) => console.error(err));
  }
};
