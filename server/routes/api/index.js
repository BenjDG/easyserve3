const router = require('express').Router();
const authRoutes = require('./auth');
const empRoutes = require('./emp');
const menuItemRoutes = require('./menuItem');

router.use('/auth', authRoutes);
router.use('/emp', empRoutes);
router.use('/menuitems', menuItemRoutes);

module.exports = router;
