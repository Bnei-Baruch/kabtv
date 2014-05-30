var kabtv = angular.module('kabtv', ['ngRoute', 'pascalprecht.translate']);

kabtv.value('pageSettings', {
    Lang: 'HEB',
    locale: 'he',
    dir: "rtl",
    audioPlayer: null,
    WMVPlayer: null,
    topMenuData: null,
    detectIE: null});

kabtv.config(['$translateProvider', function ($translateProvider) {
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'i18n/locale-',
            suffix: '.json'
        })
        .preferredLanguage('he');
}]);

kabtv.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: "./index.html",
            //controller
        })

});