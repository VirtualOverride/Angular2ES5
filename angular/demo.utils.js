var Utils;
(function(Utils){
	'use strict';

	Utils.at = function(metadata) {
		if (!metadata.forClass) return;
		var annotations = [];
		for (var prop in metadata) {
			if (angular[prop+'Annotation']) {
				annotations.push(new angular[prop+'Annotation'](metadata[prop]));
			}
		}
		if (annotations.length) {
			metadata.forClass.annotations = annotations;
		}
		if (metadata.parameters) {
			metadata.forClass.parameters = metadata.parameters;
		}
		return metadata.forClass
	};
	
})(Utils || (Utils = {}));