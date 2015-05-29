var App;
(function (App) {
	'use strict'

	var place = function(Places){
		this.places = Places;
	};

	place.annotations = [
		new angular.ComponentAnnotation({
			selector: 'ph-place',
			appInjector: [Service.Places]
		}),
		new angular.ViewAnnotation({
			templateUrl: 'app.data.list.tpl.html'
		})
	];

	App.Place = place;

})(App || (App = {}));