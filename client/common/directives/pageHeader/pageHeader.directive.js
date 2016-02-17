(function() {
	angular
		.module("runTrackerApp")
		.directive("pageHeader", pageHeader);

	function pageHeader() {
		return {
			restrict : "E",
			scope : {
				content : "=content"
			},
			templateUrl : "/common/directives/pageHeader/pageHeader.template.html",

		};
	}		
})();