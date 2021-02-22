const router = require('express').Router();
const authRoutes = require('./auth');
const empRoutes = require('./emp');
const menuItemRoutes = require('./menuItem');
const order = require('./order');

router.use('/auth', authRoutes);
router.use('/emp', empRoutes);
router.use('/menuitems', menuItemRoutes);
router.use('/order', order);

module.exports = router;
