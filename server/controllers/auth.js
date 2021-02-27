// const db = require('../models');

const login = async (req, res) => {
  console.log(req.body);
  res.json({
    email: req.user.email,
    id: req.user.id
  });
};

exports.login = login;
