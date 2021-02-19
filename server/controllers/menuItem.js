const db = require('../models');

module.exports = {
  findAllHotdogs: function () {
    db.menuitem.findAll({
      where: {
        category: 'hotdog'
      }
    })
      .then(result => result)
      .catch((err) => console.error(err));
  },
  findAllDrinks: function () {
    db.menuitem.findAll({
      where: {
        category: 'drink'
      }
    })
      .then(result => result)
      .catch((err) => console.error(err));
  },
  findAllSides: function () {
    db.menuitem.findAll({
      where: {
        category: 'side'
      }
    })
      .then(result => result)
      .catch((err) => console.error(err));
  },
  findAllIcecream: function () {
    db.menuitem.findAll({
      where: {
        category: 'icecream'
      }
    })
      .then(result => result)
      .catch((err) => console.error(err));
  }
};
