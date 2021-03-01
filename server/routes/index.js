const router = require("express").Router();
const apiRoutes = require("./api");
const menuItem = require("../controllers/menuItem");

// api routes
router.use("/api", apiRoutes);

router.get("/test", function(req, res) {
  console.log(menuItem.findAllHotdogs());
});

module.exports = router;
