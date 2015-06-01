var App;
(function (App) {
	'use strict'

	var place = function(Places){
		this.places = Places.get().data;
	}

    place.annotations = [
		new angular.ComponentAnnotation({
			selector: 'ph-place',
			appInjector: [
			  Service.Places
			]
		}),
		new angular.ViewAnnotation({
			template: ['',
			'<ul>',
			  '<li *ng-for="#place of places">',
			    '{{ place }}',
			  '</li>',
			'</ul>',
			''].join(''),
			directives: [angular.NgFor]
		})
	];

	place.parameters = [Service.Places];

	App.Place = place;

})(App || (App = {}));