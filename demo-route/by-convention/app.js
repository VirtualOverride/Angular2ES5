var App;
(function(App){
	'use strict';

	var app = function(){}

	app.$routeConfig = [
		{ path: '/', redirectTo: 'home' },
		{ path: '/', component: 'home', as: 'home' },
		{ path: '/about', component: 'about', as: 'about' }
	];

	var Bootstrap = Utils.at({
		Component: {
			selector: 'router-app'
		},
		Views: {
			template: '<home><home>'
		},
		directives: [angular.NgOutlet]
		parameters:[],
		forClass: app
	});

	App.Bootstrap = Bootstrap;

	document.addEventListener('DOMContentLoaded', function() {
	  angular.bootstrap(App.Bootstrap, ['ngNewRouter']);
	}, false);
	
})(App || (App = {}));