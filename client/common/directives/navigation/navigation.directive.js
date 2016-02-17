(function() {
	angular
		.module("runTrackerApp")
		.directive("navigation", navigation);

	function navigation() {
		return {
			restrict : "E",
			templateUrl : "/common/directives/navigation/navigation.template.html"
		};
	}		
})();