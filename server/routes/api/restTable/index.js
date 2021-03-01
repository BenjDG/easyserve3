const restTable = require("../../../controllers/restTable");
const router = require("express").Router();
//localhost:3001/api/
// route path 'api/resttable/'
router.route("/").get(restTable.findAllRestTables);

module.exports = router;
