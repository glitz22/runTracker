var express = require("express");
var router = express.Router();

var othersCtrl = require("../controllers/others");

router.get("/", othersCtrl.angularApp);

module.exports = router;