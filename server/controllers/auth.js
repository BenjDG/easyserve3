const login = async (req, res) => {
  console.log('login');
  res.json({
    email: req.user.email,
    id: req.user.id,
    first_name: req.user.first_name,
    last_name: req.user.last_name
  });
};

const logout = function (req, res) {
  req.session.destroy();
  res.end();
};

exports.login = login;
exports.logout = logout;
