// const db = require('../models');

const login = async (req, res) => {
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
