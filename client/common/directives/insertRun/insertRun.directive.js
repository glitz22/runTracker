(function() {
	angular
		.module("runTrackerApp")
		.directive("insertRun", insertRun);

	function insertRun() {
		return {
			restrict : "E",
			scope : {
				content : "=content"
			},			
			templateUrl : "/common/directives/insertRun/insertRun.template.html"
		};
	}
})();