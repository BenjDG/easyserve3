const db = require('../models');

module.exports = {
  findAllStatusOptions: function (req, res) {
    console.log(req.session);
    db.status.findAll({})
      .then(result => res.json(result))
      .catch(err => res.status(500).json(err));
  }
};
