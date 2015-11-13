app.service('userService', function($firebaseAuth, $state) {

	var authRef = new Firebase("https://burning-inferno-4249.firebaseIO.com");
	var auth = $firebaseAuth(authRef);

	this.getAuth = function() {
		return auth.$getAuth();
	}

	this.register = function(newUser) {
		return auth.$createUser(newUser);
	}

	this.login = function(user) {
		return auth.$authWithPassword(user);
	}

	this.logout = function(user) {
		return auth.$unauth();
	}

	auth.$onAuth(function(authData) {
		if (!authData) {
			$state.go('login');
		}
	})

})