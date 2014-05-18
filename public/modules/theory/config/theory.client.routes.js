'use strict';

//Setting up route
angular.module('theory').config(['$stateProvider',
	function($stateProvider) {
		// Theory state routing
		$stateProvider.
		state('subiect-3', {
			url: '/subiect-3',
			templateUrl: 'modules/theory/views/subiect-3.client.view.html'
		}).
		state('subiect-2', {
			url: '/subiect-2',
			templateUrl: 'modules/theory/views/subiect-2.client.view.html'
		}).
		state('subiect-1', {
			url: '/subiect-1',
			templateUrl: 'modules/theory/views/subiect-1.client.view.html'
		}).
		state('theory', {
			url: '/theory',
			templateUrl: 'modules/theory/views/theory.client.view.html'
		});
	}
]);