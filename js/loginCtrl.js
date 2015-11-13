app.controller('loginCtrl', function($scope, userService, $state) {

	$scope.login = function() {
		userService.login($scope.user).then(function() {
			$state.go('threads');
		}).catch(function(err) {
			$scope.error = "Login Error: " + err;
		})
	}

})