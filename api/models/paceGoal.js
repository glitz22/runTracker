var mongoose = require("mongoose");
var paceGoalSchema = new mongoose.Schema({
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
	minutes : {
		type : Number,
		required : true,
		min : 0
	},
	seconds : {
		type : Number,
		required : true,
		min : 0
	},
	createdDate : {
		type : Date,
		required : true,
		"default" : Date.now
	}
});

mongoose.model("paceGoal",paceGoalSchema);