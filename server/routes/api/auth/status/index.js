const status = require('../../../../controllers/status');
const router = require('express').Router();

// route path 'api/auth/status'
router.route('/').get(status.findAllStatusOptions);

module.exports = router;
