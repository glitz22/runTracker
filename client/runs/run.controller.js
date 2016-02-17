(function() {
	angular
		.module("runTrackerApp")
		.controller("runCtrl", runCtrl);

	runCtrl.$inject = ["$routeParams", "runTrackerData"];
	function runCtrl($routeParams, runTrackerData) {
		var vm = this,
			runid = $routeParams.runid;

		vm.pageHeader = {
			title : "Individual run data for run " + runid
		};

		runTrackerData.runById(runid)
			.success(function(data) {
				vm.runData = { run : data};
				vm.pageHeader = {
					title : "Individual run data for " + vm.runData.date
				};
			})
			.error(function(err) {
				console.log(err);
			});
	}
})();