var express = require("express");
var router = express.Router();
var jwt = require("express-jwt");
var auth = jwt({
	secret : process.env.JWT_SECRET
});

var runCtrl = require("../controllers/runs");
var authCtrl = require("../controllers/authentication");
//var paceGoalCtrl = require("../controllers/paceGoals");
//var distanceGoalCtrl = require("../controllers/distanceGoals");

//runs
router.get("/runList", runCtrl.listAll);
router.get("/runs/:runid", runCtrl.getById);
router.post("/runs", auth, runCtrl.create);
router.put("/runs/:runid", auth, runCtrl.updateRun);
router.delete("/runs/:runid", auth, runCtrl.deleteRun);

//paceGoals
/*
router.get("/paceGoalList", paceGoalCtrl.listAll);
router.get("/paceGoals/:pacegoaltitle", paceGoalCtrl.getByTitle);
router.post("/paceGoals/", paceGoalCtrl.create);
router.put("/paceGoals/:pacegoaltitle", paceGoalCtrl.updatePaceGoal);
router.delete("/paceGoals/:pacegoaltitle", paceGoalCtrl.deletePaceGoal);
*/

//distanceGoals
/*
router.get("/distanceGoalList", distanceGoalCtrl.listAll);
router.get("/distanceGoals/:distancegoaltitle", distanceGoalCtrl.getByTitle);
router.post("distanceGoals/", distanceGoalCtrl.create);
router.put("distanceGoals/:distancegoaltitle", distanceGoalCtrl.updateDistanceGoal);
router.delete("distanceGoals/distancegoaltitle", distanceGoalCtrl.deleteDistanceGoal);
*/

router.post("/register",authCtrl.register);
router.post("/login",authCtrl.login);

module.exports = router;