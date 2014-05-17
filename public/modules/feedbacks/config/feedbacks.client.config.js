'use strict';

// Configuring the Articles module
angular.module('feedbacks').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Feedbacks', 'feedbacks');
		Menus.addMenuItem('topbar', 'New Feedback', 'feedbacks/create');
	}
]);