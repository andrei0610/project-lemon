'use strict';

angular.module('theory').controller('TheoryController', ['$scope',
	function($scope) {
		$scope.tabs = [
    {title:'Subiect 1', page: '/public/modules/theory/views/subiect-1.client.view.html'},
    {title:'Subiect 2', page: 'subiect-2.client.view.html'},
    {title:'Subiect 3', page: 'subiect-3.client.view.html'}
  ];
	}
]);
