var Service;
(function(Service){
	'use strict';

	var places = (function (argument) {
		function places(){}

		places.prototype.get = function() {
			return [
				'Makati City',
				'Mandaluyong City',
				'Quezon City',
				'Taguig City'
			];
		};

		return places;
	})();

	Service.Persons = persons;

})(Service || (Service = {}));