// const db = require('../models');

const login = async (req, res) => {
  console.log(req.body);
  res.json({
    email: req.user.email,
    id: req.user.id
  });
};

const logout = async (req, res) => {
  req.logout();
  res.end();
};

exports.login = login;
exports.logout = logout;
