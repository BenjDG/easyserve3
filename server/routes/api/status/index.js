const status = require('../../../controllers/status');
const router = require('express').Router();

// route path 'api/status/status'
router.route('/status').get(status.findAllStatusOptions);

module.exports = router;
