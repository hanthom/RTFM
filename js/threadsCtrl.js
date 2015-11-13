app.controller('threadsCtrl', function($scope, threadsRef, $firebaseArray, $state, userService) {

	$scope.threads = $firebaseArray(threadsRef);

	if (!userService.getUser()) {
		$state.go('login');
	}

	$scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

	$scope.createThread = function(username, title) {
		$scope.threads.$add({
			username: username,
			title: title,
		});
	};

});