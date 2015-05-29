(function(){
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

	document.addEventListener('DOMContentLoaded', function() {
	  angular.bootstrap(HelloWorld);
	});
})();