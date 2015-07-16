var App;
(function(App){
	'use strict';

	function helloWorld(helloWorldService){
		this.hello = helloWorldService.hello();
	}
	
	var HelloWorld = angular.
		Component({
			selector: 'hello',
			appInjector: [Service.HelloWorld]
		}).
		View({
			template: '{{ hello }}'
		}).
		Class({
			constructor: [Service.HelloWorld, helloWorld]
		});
		
	App.HelloWorld = HelloWorld;

})(App || (App = {}));