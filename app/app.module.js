(function() {
    'use strict';

    angular.module('kabtv', [
        'app.core',
        'app.layout',
        'kabtv.vod'

    ])
        .run(runBlock);

    runBlock.$inject = ["$location", "$filter", "$http", "config"];

    function runBlock($location, $filter, $http, config) {
        $http.defaults.headers.common.Accept = 'application/json';

        //set page settings
        var lang = ($location.path().split("/")[1] || 'HEB').toUpperCase();
        config.lang = lang;
        //config.langFullname = $filter('getLangFullname')(lang);
        //config.locale = $filter('getLocale')(lang);
        config.dir = (lang == "HEB") ? "rtl" : "ltr";
        //config.detectIE = detectIE();

        //if kabfm start with audio
        config.isVideo = $location.host().toLowerCase().indexOf('kab.fm') < 0;
    }
})();