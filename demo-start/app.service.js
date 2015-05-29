var Service;
(function(Service){
	'use strict';

	var helloWorld = (function(){
		function helloWorld(){}

		helloWorld.prototype.hello = function(){
			return 'Hello World.';
		};

		return helloWorld;
	})();

	Service.HelloWorld = helloWorld;

})(Service || (Service = {}));