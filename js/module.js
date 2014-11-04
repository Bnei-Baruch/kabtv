'use strict';

//geo location callback
function DynamicGeoStreamLocator(r){
    var scope = angular.element(document.getElementById('player')).scope();
    scope.buildDynamicGeoStream(r.hlsUrl);
}

angular.module('kabtv',
    ['ngRoute', 'pascalprecht.translate', 'angulartics', 'angulartics.google.analytics', 'kabtvConfig'])
.value('pageSettings', {
    Lang: 'HEB',
    locale: 'he',
    dir: "rtl",
    audioPlayer: null,
    WMVPlayer: null,
    detectIE: null
})
.config(['$translateProvider', function ($translateProvider) {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement, fromIndex) {
            var k;
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var O = Object(this);
            var len = O.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = +fromIndex || 0;

            if (Math.abs(n) === Infinity) {
                n = 0;
            }
            if (n >= len) {
                return -1;
            }
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            while (k < len) {
                if (k in O && O[k] === searchElement) {
                    return k;
                }
                k++;
            }
            return -1;
        };
        if (typeof String.prototype.trim !== 'function') {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }
    }

    $translateProvider.useStaticFilesLoader({
        prefix: 'i18n/locale-',
        suffix: '.json'
    }).preferredLanguage('he');

}])
.config(function($routeProvider) {
	$routeProvider
	.when('/stream',{
		controller: "kabtvPlayerCtrl",
		templateUrl: "views/playerStream.html"
	})
	.when('/clip',{
		controller: "kabtvPlayerCtrl",
		templateUrl: "views/playerClip.html"
	})
	.otherwise({redirectTo:'/stream'})
})
.run(["pageSettings", "$location", "$filter", "detectIE", "$http", 
        function(pageSettings, $location, $filter, detectIE, $http){

    $http.defaults.headers.common.Accept = 'application/json';

    //set page settings
    var lang = (window.location.pathname.split("/")[1] || 'HEB').toUpperCase();
    pageSettings.Lang = lang;
    pageSettings.LangFullname = $filter('getLangFullname')(lang);
    pageSettings.locale = $filter('getLocale')(lang);
    pageSettings.dir = (lang == "HEB") ? "rtl" : "ltr";
    pageSettings.detectIE = detectIE();

    //if kabfm start with audio
    pageSettings.isVideo = $location.host().toLowerCase().indexOf('kab.fm') < 0;
}]);
