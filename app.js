var app = angular.module('rtfmApp', ['firebase', 'ui.router']);

app.constant("fb", {url:"https://burning-inferno-4249.firebaseIO.com"});

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/threads');

	$stateProvider
		.state('threads', {
			url: '/threads',
			controller: 'threadsCtrl',
			templateUrl: 'templates/threadsTmpl.html',
			resolve: {
				threadsRef: function(threadService) {
					return threadService.getThreads();
				}
			},
		})
		.state('thread', {
			url: '/threads/:threadId',
			controller: 'threadCtrl',
			templateUrl: 'templates/threadTmpl.html',
			resolve: {
				threadRef: function(threadService, $stateParams) {
					return threadService.getThread($stateParams.threadId);
				},
				commentsRef: function(threadService, $stateParams) {
					return threadService.getComments($stateParams.threadId);
				}
			},
		})
		.state('login', {
			url: '/login',
			controller: 'loginCtrl',
			templateUrl: 'templates/login.html',
		})
		.state('signup', {
			url: '/signup',
			controller: 'signupCtrl',
			templateUrl: 'templates/signup.html',
		})
		.state('logout', {
			url:'/logout',
			controller: function(userService) {
				return userService.logout();
			}
		})

})