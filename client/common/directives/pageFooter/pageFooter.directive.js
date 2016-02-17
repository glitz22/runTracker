(function() {
	angular
		.module("runTrackerApp")
		.directive("pageFooter", pageFooter);

	function pageFooter() {
		return {
			restrict : "E",
			templateUrl : "/common/directives/pageFooter/pageFooter.template.html"
		};
	}		
})();