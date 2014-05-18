'use strict';

// Configuring the Articles module
angular.module('feedbacks').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('bottombar', 'Feedbacks', 'feedbacks');
		Menus.addMenuItem('bottombar', 'Feedback Nou', 'feedbacks/create');
	}
]);
