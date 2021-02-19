const { Op } = require('sequelize');
const db = require('../models');

module.exports = {
  findAllHotdogs: function (_req, res) {
    db.menuItem.findAll({
      where: {
        category: { [Op.eq]: 'hotdog' }
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findAllDrinks: function (_req, res) {
    db.menuItem.findAll({
      where: {
        category: { [Op.eq]: 'drink' }
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findAllSides: function (_req, res) {
    db.menuItem.findAll({
      where: {
        category: { [Op.eq]: 'side' }
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  },
  findAllIcecream: function (_req, res) {
    db.menuItem.findAll({
      where: {
        category: { [Op.eq]: 'icecream' }
      }
    })
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
