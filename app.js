


var app = angular.module('rtfmApp', ['firebase', 'ui.router']);

app.constant("fb", {url:"https://burning-inferno-4249.firebaseIO.com"});

app.config(function($stateProvider, $urlRoutherProvider) {

	$urlRoutherProvider.otherwise('/threads');

	$stateProvider
		.state({
			url: '/threads',
			controller: 'threadsCtrl'
			templateUrl: 'templates/threadsTmpl.html',
			resolve: {
				threadsRef: function(threadService) {
					return threadService.getThreads();
				}
			},
		})
		.state({
			url: '/threads/:threadId'
			controller: 'threadCtrl',
			tempalteUrl: 'templates/threadTmpl.html',
			resolve: {
				threadRef: function(threadService, $stateParams) {
					return threadService.getThread($stateParams.threadId);
				},
				commentsRef: function(threadService, $stateParams) {
					return threadService.getComments($stateParams.threadId);
				}
			},
		});

})