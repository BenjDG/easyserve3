const status = require('../../../controllers/status');
const router = require('express').Router();

// route path 'api/status/'
router.route('/').get(status.findAllStatusOptions);

module.exports = router;
