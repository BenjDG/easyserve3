// const db = require('../models');

const login = async (req, res) => {
  // res.json({
  //   email: req.user.email,
  //   id: req.user.id
  // });
  res.json(req.user);
};

const logout = async (req, res) => {
  req.logout();
  res.json({
    logout: true
  });
};

exports.login = login;
exports.logout = logout;
