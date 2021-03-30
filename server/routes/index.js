const router = require('express').Router();
const apiRoutes = require('./api');
const webhook = require('./webhook');

// api routes
router.use('/api', apiRoutes);
router.use('/webhook', webhook);

module.exports = router;
