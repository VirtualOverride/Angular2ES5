/// <reference path="../typings/angularjs/angular.d.ts"/>
var App;
(function(App){
	'use strict';

	var HelloWorld = function(helloWorldService){
		this.hello = helloWorldService.hello();
	};

	HelloWorld.annotations = [
		new angular.ComponentAnnotation({
			selector: 'hello',
			appInjector: [Service.HelloWorld]
		}),
		new angular.ViewAnnotation({
			template: '{{ hello }}'
		})
	];

	HelloWorld.parameters = [[Service.HelloWorld]];

	App.HelloWorld = HelloWorld;

})(App || (App = {}));