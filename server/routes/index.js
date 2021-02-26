const router = require('express').Router();
const apiRoutes = require('./api');

// api routes
router.use('/api', apiRoutes);

router.get('/logout', (req, res) => {
  req.logout();
  res.end();
});

module.exports = router;
