const router = require('express').Router();
const user = require('../../../controllers/user');
// route path 'api/user
router.route('/').get(user.findAllUsers);
router.route('/:id').get(user.findUserById);
router.route('/create').post(user.createNewUser);
router.route('/update').put(user.updateUser);
router.route('/delete').delete(user.deleteUser);

module.exports = router;
