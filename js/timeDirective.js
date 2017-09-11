angular.module("timeApp").directive("showTime", function() {
	return {
		restrict: "E",
		//This property makes sure directives are only used as a element. 
		template: "<div>The current time is {{time}}. </div>",
		link: function(scope, element, attibutes) {
			//This method is where you want to put all your DOM manipulation for JS
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
});