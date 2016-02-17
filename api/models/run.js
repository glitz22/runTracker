var mongoose = require("mongoose");
var runSchema = new mongoose.Schema({
	title : {
		type : String,
		required : true,
		unique : true
	},
	miles : {
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
	date : {
		type : Date,
		"default" : Date.now
	},
	notes : {
		type : String
	}
});

mongoose.model("run", runSchema);