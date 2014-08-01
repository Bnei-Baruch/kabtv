'use strict';

var kabtv = angular.module('kabtv',
    ['ngRoute', 'pascalprecht.translate', 'angulartics', 'angulartics.google.analytics']);

kabtv.value('pageSettings', {
    Lang: 'HEB',
    locale: 'he',
    dir: "rtl",
    audioPlayer: null,
    WMVPlayer: null,
    detectIE: null
})
.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'i18n/locale-',
            suffix: '.json'
        })
        .preferredLanguage('he');
}])
.config(function($routeProvider) {
	$routeProvider
	///stream
	.when('/stream',{
		controller: "kabtvPlayerCtrl",
		templateUrl: "views/playerStream.html"
	})
	///clip 
	.when('/clip',{
		controller: "kabtvPlayerCtrl",
		templateUrl: "views/playerClip.html"
	})
	.otherwise({redirectTo:'/stream'})
})
.run(function(pageSettings, $location, $filter, detectIE){    
    var lang = getLang();
    pageSettings.Lang = lang;
    pageSettings.LangFullname = $filter('getLangFullname')(lang);
    pageSettings.dir = getDir();
    pageSettings.locale = $filter('getLocale')(lang);    
    pageSettings.detectIE = detectIE();
    if($location.host(). toLowerCase().indexOf('kab.fm') >= 0)
        $location.search({"isVideo": false});

    function getLang() {
        var lang = window.location.pathname.split("/")[1] || 'HEB';
        return lang.toUpperCase();
    }

    function getDir() {
        return (lang == "HEB") ? "rtl" : "ltr";
    }
});