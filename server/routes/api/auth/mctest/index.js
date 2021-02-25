const mctestController = require('../../../../controllers/mctest');
const router = require('express').Router();

// route path 'api/auth/mctest'
router.route('/mctest').get(mctestController.getMctest);

module.exports = router;
