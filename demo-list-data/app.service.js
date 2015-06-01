var Service;
(function(Service){
	'use strict';

	var places = (function() {
		function places(){
		}

		places.prototype.get = function() {
			return {
				data: [
					'Makati City',
					'Mandaluyong City',
					'Quezon City',
					'Taguig City'				
				]
			}
		};

		return places;
	})();

	Service.Places = places;

})(Service || (Service = {}));