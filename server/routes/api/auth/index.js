const router = require('express').Router();
const passport = require('../../../config/passport');
const authController = require('../../../controllers/auth');

router.use(passport.authenticate('local', {
  session: false
}));

// Matches with '/api/auth'
router.route('/login').post(authController.login);

module.exports = router;
