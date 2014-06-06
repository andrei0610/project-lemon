'use strict';

// Test module config
angular.module('test').run(['Menus',
	function(Menus) {
		// Config logic
	Menus.addMenuItem('topbar', 'Test', 'test');	}
]);
