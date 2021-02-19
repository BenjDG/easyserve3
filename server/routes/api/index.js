const router = require('express').Router();
const authRoutes = require('./auth');
const empRoutes = require('./emp');
const menuitem = require('./menuItem');

router.use('/auth', authRoutes);
router.use('/emp', empRoutes);
router.use('/menuitems', menuitem);

module.exports = router;
