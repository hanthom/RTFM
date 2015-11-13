app.service('userService', function($firebaseAuth, $state) {

	var authRef = new Firebase("https://burning-inferno-4249.firebaseapp.com");
	var auth = $firebaseAuth(authRef);

	this.getUser = function() {
		return auth.$getAuth();
	}

	this.register = function(newUser) {
		return $createUser(newUser);
	}

	this.login = function(user) {
		return $authWithPassword(user);
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