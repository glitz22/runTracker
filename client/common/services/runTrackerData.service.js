(function() {
	angular
		.module("runTrackerApp")
		.service("runTrackerData", runTrackerData);

	runTrackerData.$inject = ["$http"];

	function runTrackerData($http) {
		function runById(runid) {
			return $http.get("/api/runs/" + runid);
		}

		function getRunList() {
			return $http.get("/api/runList");
		}

		function addRun(data) {
			return $http.post("/api/runs", data);
		}

		return {
			runById : runById,
			getRunList : getRunList,
			addRun : addRun
		};
	}
})();