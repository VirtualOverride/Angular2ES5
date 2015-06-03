var App;
(function (App) {
	'use strict'

	var place = function(Places){
		this.places = Places.get().data;
	}

   	var Place = Utils.at({
		Component: {
			selector: 'ph-place',
			appInjector: [Service.Places]
		},
		View: {
			template: ['',
			'<ul>',
			  '<li *ng-for="#place of places">',
			    '{{ place }}',
			  '</li>',
			'</ul>',
			''].join(''),
			directives: [angular.NgFor]
		},
		parameters: [Service.Places],
		forClass: place 
	});

	App.Place = Place;

})(App || (App = {}));