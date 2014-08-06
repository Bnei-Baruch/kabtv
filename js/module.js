'use strict';
angular.module('kabtv', ['ngRoute', 'pascalprecht.translate', 'angulartics', 'angulartics.google.analytics'])
.value('pageSettings', {
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
.run(function(pageSettings, $location, $filter, detectIE, $http){    
    var lang = getLang();
    
    //set page settings 
    pageSettings.Lang = lang;
    pageSettings.LangFullname = $filter('getLangFullname')(lang);
    pageSettings.dir = getDir();
    pageSettings.locale = $filter('getLocale')(lang);    
    pageSettings.detectIE = detectIE();

    $http.defaults.headers.common.Accept = 'application/json';
   // $http.defaults.responseType = 'json';


    //if kabfm start with audio
    if($location.host(). toLowerCase().indexOf('kabfm'))
        $location.search({"isVideo": false});

    function getLang() {
        var lang = /*window.location.pathname.split("/")[1] ||*/ 'HEB';
        return lang.toUpperCase();
    }

    function getDir() {
        return (lang == "HEB") ? "rtl" : "ltr";
    }
});