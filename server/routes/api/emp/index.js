const router = require('express').Router();
const employee = require('../../../controllers/employee');
// route path 'api/emp
router.route('/').get(employee.findAllEmployees);
router.route('/:id').get(employee.findEmployeeById);
router.route('/create').post(employee.createNewEmployee);
router.route('/update').put(employee.updateEmployee);
router.route('/delete').delete(employee.deleteEmployee);

module.exports = router;
