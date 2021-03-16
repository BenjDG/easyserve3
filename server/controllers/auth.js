const login = async (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id,
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    role: req.user.role
  });
};

const logout = function (req, res) {
  req.session.destroy();
  res.end();
};

exports.login = login;
exports.logout = logout;
