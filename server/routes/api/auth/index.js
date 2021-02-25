const router = require('express').Router();
const passport = require('../../../config/passport');
const authController = require('../../../controllers/auth');
const mctest = require('./mctest');

router.use(passport.authenticate('local'));

// Matches with '/api/auth'
router.route('/login').post(authController.login);

router.use('/mctest', mctest);

module.exports = router;
