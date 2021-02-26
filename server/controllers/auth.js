// const db = require('../models');

const login = async (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id
  });
};

exports.login = login;
