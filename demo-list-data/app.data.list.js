/* global Service */
var App;
(function (App, Utils) {
	'use strict';

	var place = function(Places){
		this.places = Places.get().data;
	}
	
   	var Place = Utils.at({
		Component: {
			selector: 'ph-place',
			appInjector: [Service.Places]
		},
		View: {
			templateUrl: 'app.data.list.html',
			directives: [angular.NgFor]
		},
		parameters: [Service.Places],
		forClass: place 
	});

	App.Place = Place;

})(App || (App = {}));