(function() {
	angular
		.module("runTrackerApp")
		.controller("runListCtrl", runListCtrl);

	runListCtrl.$inject = ["runTrackerData"];

	function runListCtrl(runTrackerData) {
		var vm = this;

		vm.pageHeader = {
			title : "List of runs"
		};

		runTrackerData.getRunList()
			.success(function(data) {
				vm.runList = data;
			})
			.error(function(err) {
				console.log(err);
			})
	}
})();