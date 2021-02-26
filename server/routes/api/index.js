const router = require('express').Router();
const restTable = require('./restTable');
const authRoutes = require('./auth');
const user = require('./user');
const menuItem = require('./menuItem');
const order = require('./order');
const status = require('./status');

const isAuthenticated = require('../../config/middleware/isAuthenticated');

// path '/api
router.use('/auth', authRoutes);

router.use(isAuthenticated);
router.use('/user', user);
router.use('/menuitems', menuItem);
router.use('/order', order);
router.use('/resttable', restTable);
router.use('/status', status);

module.exports = router;
