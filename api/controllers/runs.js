var mongoose = require("mongoose");
var Run = mongoose.model("run");

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.listAll = function(req,res) {
	Run
		.find({})
		.exec(function(err, runs) {
			if (!runs) {
				sendJSONresponse(res, 404, {
					message : "No runs found in database!"
				});
				return;
			}else if (err) {
				sendJSONresponse(res, 404, err);
				return;
			}
			sendJSONresponse(res, 200, runs);
		});
};

module.exports.getById = function(req, res) {
	if (req.params && req.params.runid) {
		Run
			.findById(req.params.runid)
			.exec(function(err, run) {
				if (!run) {
					sendJSONresponse(res, 404, {
						message : "runid not found in database!"
					});
					return;
				}else if (err) {
					sendJSONresponse(res, 404, err);
					return;
				}
				sendJSONresponse(res, 200, run);
			});
	}else{
		sendJSONresponse(res, 404, {
			message : "No runid in request!"
		});
	}
};

module.exports.create = function(req,res) {
	Run
		.create({
			title : req.body.title,
			miles : req.body.miles,
			minutes : req.body.minutes,
			seconds : req.body.seconds,
			notes : req.body.notes
		},
		function(err, run) {
			if (err) {
				sendJSONresponse(res, 400, err);
			}else{
				sendJSONresponse(res, 201, run);
			}
		});
};

module.exports.updateRun = function(req,res) {
	if (!req.params.runid) {
		sendJSONresponse(res, 404, {
			message : "no runid in request!"
		});
		return;
	}

	Run
		.findById(req.params.runid)
		.exec(function(err, run) {
			if (!run) {
				sendJSONresponse(res, 404, {
					message : "runid not found in database!"
				});
				return;
			}else if (err) {
				sendJSONresponse(res, 400, err);
				return;
			}
			run.title = req.body.title;
			run.miles = req.body.miles;
			run.minutes = req.body.minutes;
			run.seconds = req.body.seconds;
			run.notes = req.body.notes;

			run.save(function(err, run) {
				if (err) {
					sendJSONresponse(res, 404, err);
				}else{
					sendJSONresponse(res, 200, run);
				}
			});
		}); 
};

module.exports.deleteRun = function(req,res) {
	if (req.params.runid) {
		Run
			.findByIdAndRemove(req.params.runid)
			.exec(function(err, run) {
				if (err) {
					sendJSONresponse(res, 404, err);
					return;
				}
				sendJSONresponse(res, 204, null);
			});
	}else{
		sendJSONresponse(res, 404, {
			message : "No runid in request!"
		})
	}

};


