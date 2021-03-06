app.service('threadService', function(fb) {

	var firebaseRef = new Firebase("https://burning-inferno-4249.firebaseIO.com")

	this.getThreads = function() {
		return new Firebase(fb.url + '/threads');
	}

	this.getThread = function(threadId) {
		return new Firebase(fb.url + '/threads/' + threadId);
	}

	this.getComments = function(threadId) {
		return new Firebase(fb.url + '/threads/' + threadId + '/comments');
	}


})