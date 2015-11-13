app.controller('loginCtrl', function($scope, userService, $state) {

	$scope.login = function() {
		return userService.login($scope.user).then(function() {
			console.log("Login successful")
			$state.go('threads');
		}).catch(function(err) {
			$scope.error = "Login Error: " + err;
		})
	}

})