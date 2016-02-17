var mongoose = require("mongoose");
var distanceGoalSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true,
		unique : true
	},
	targetDate : {
		type : Date,
		required : true
	},
	distance : {
		type : Number,
		required : true
	},
	createdDate : {
		type : Date,
		required : true,
		"default" : Date.now
	}
});

mongoose.model("distanceGoal", distanceGoalSchema);