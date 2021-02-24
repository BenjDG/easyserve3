const router = require('express').Router();
const restTable = require('./restTable');
const authRoutes = require('./auth');
const empRoutes = require('./emp');
const menuItemRoutes = require('./menuItem');
const order = require('./order');
const status = require('./status');

router.use('/auth', authRoutes);
router.use('/emp', empRoutes);
router.use('/menuitems', menuItemRoutes);
router.use('/order', order);
router.use('/resttable', restTable);
router.use('/status', status);

module.exports = router;
