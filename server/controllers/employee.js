const db = require('../models');

module.exports = {
  findAllEmployees: function (_req, res) {
    db.employee.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findEmployeeById: function (req, res) {
    db.employee.findByPk(req.params.id)
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  createNewEmployee: async function (req, res) {
    const { fName, lName, pin } = req.body;
    db.employee.create({
      first_name: fName,
      last_name: lName,
      pin: pin
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  updateEmployee: async function (req, res) {
    const { empId, fName, lName, pin } = req.body;
    db.employee.update({
      first_name: fName,
      last_name: lName,
      pin: pin
    }, {
      where: {
        id: empId
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  deleteEmployee: async function (req, res) {
    const { empId } = req.body;
    db.employee.destroy({
      where: {
        id: empId
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
