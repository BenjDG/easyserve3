const router = require('express').Router();
const menuItem = require('../../../controllers/menuItem');

router.route('/hotdogs').get(menuItem.findAllHotdogs);
router.route('/drinks').get(menuItem.findAllDrinks);
router.route('/sides').get(menuItem.findAllSides);
router.route('/icecream').get(menuItem.findAllIcecream);

module.exports = router;
