const router = require('express').Router();
const passport = require('../../../config/passport');
const authController = require('../../../controllers/auth');

router.route('/logout').get(authController.logout);

router.use(passport.authenticate('local', {
  session: true
}));

// Matches with '/api/auth'
router.route('/login').post(authController.login);

module.exports = router;
