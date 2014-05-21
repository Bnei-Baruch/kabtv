var kabtv = angular.module('kabtv', ["ngRoute"]);
kabtv.value('pageSettings', {Lang: null, dir: "rtl", audioPlayer: null, WMVPlayer: null, topMenuData: null, detectIE: null});
kabtv.config(function($routeProvider) {
	$routeProvider
		.when('/',{
			templateUrl: "./index.html",
			//controller
		})
		
});