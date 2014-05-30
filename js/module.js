var kabtv = angular.module('kabtv', ["ngRoute"]);
kabtv.value('pageSettings', {Lang: null, dir: "rtl", audioPlayer: null, WMVPlayer: null, topMenuData: null, detectIE: null});
kabtv.config(function($routeProvider) {
	$routeProvider
	///stream
	.when('/stream',{
		controller: "kabtvPlayerCtrl",
		templateUrl: "views/playerStream.html",
	})
	///clip 
	.when('/clip',{
		controller: "kabtvPlayerCtrl",
		templateUrl: "views/playerClip.html"
	})
	.otherwise({redirectTo:'/stream'})
});