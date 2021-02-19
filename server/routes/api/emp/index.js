const router = require('express').Router();
const emp = require('../../../controllers/employee');

router.route('/').get(emp.findAllEmployees);

module.exports = router;
