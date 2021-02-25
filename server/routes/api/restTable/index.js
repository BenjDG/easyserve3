const restTable = require('../../../controllers/restTable');
const router = require('express').Router();

// route path 'api/resttable/'
router.route('/').get(restTable.findAllRestTables);

module.exports = router;
