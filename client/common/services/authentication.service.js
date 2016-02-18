(function() {
	angular
		.module("runTrackerApp")
		.service("authentication", authentication);

	authentication.$inject = ["$window"];
	function authentication($window) {
		var saveToken = function(token) {
			$window.localStorage["runTrackerToken"] = token;
		};

		var getToken = function() {
			return $window.localStorage["runTrackerToken"] = token;
		};

		return {
			saveToken : saveToken,
			getToken : getToken
		};
	}
})();