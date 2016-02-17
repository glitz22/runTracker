(function() {
	angular.module("runTrackerApp", ["ngRoute"]);

	function config($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "/home/home.view.html",
				controller : "homeCtrl",
				controllerAs : "vm"
			})
			.when("/runList", {
				templateUrl : "/runList/runList.view.html",
				controller : "runListCtrl",
				controllerAs : "vm"
			})
			.when("/runs/:runid", {
				templateUrl : "/runs/run.view.html",
				controller : "runCtrl",
				controllerAs : "vm"
			})
			.otherwise({
				redirectTo : "/"
			});
	}

	angular
		.module("runTrackerApp")
		.config(["$routeProvider",config]);

})();		