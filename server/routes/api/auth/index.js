const router = require('express').Router();
const passport = require('../../../config/passport');
const authController = require('../../../controllers/auth');
const status = require('./status');

router.use(passport.authenticate('local'));

// Matches with '/api/auth'
router.route('/login').post(authController.login);
router.use('/status', status);

module.exports = router;
