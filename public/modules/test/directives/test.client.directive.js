'use strict';

angular.module('test').directive('test', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Test directive logic
				// ...

				element.text('this is the test directive');
			}
		};
	}
]);