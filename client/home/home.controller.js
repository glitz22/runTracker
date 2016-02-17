(function() {
	angular
		.module("runTrackerApp")
		.controller("homeCtrl", homeCtrl);

	homeCtrl.$inject = ["runTrackerData"];

	function homeCtrl(runTrackerData) {
		var vm = this;

		vm.pageHeader = {
			title : "Welcome to Run Tracker!"
		};

		vm.addRun = function(formData) {
			runTrackerData.addRun({
				title : formData.runTitle,
				miles : formData.miles,
				minutes : formData.minutes,
				seconds : formData.seconds,
				notes : formData.notes
			})
			.success(function(data) {
				vm.formError = "Success! Added run to the database!";
			})
			.error(function(err) {
				vm.formError = "There was a problem. Did not add run to the database.";
			});
		};

		vm.onSubmit = function() {
			vm.formError = "";
			if (!vm.formData || vm.formData.title || !vm.formData.miles || !vm.formData.minutes || !vm.formData.seconds || !vm.formData.notes) {
				vm.formError = "All fields are required.";
				return false;
			}else{
				vm.addRun(vm.formData);
			}
		};
	}
})();	