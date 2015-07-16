var App;
(function (App, Utils) {
	'use strict';

	var place = function(Places){
		this.places = Places.get().data;
	};

	var Place = angular.
		Component({
			selector: 'ph-place',
			appInjector: [Service.Places]
		}).
		View({
			templateUrl: 'app.data.list.html',
			directives: [angular.NgFor]
		}).
		Class({
			constructor: [Service.Places, place]
		});

		App.Place = Place;

})(App || (App = {}));