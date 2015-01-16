(function() {
    'use strict';

    angular.module('kabtv.player', [])
        .config(configure)
        .value('isIE', {data: null})
        .value('streamObj', {data: null});

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/stream',{
                templateUrl: "app/player/stream.html"
            })
            .when('/clip',{
                templateUrl: "app/player/clip.tpl.html"
            })
            .when('/playlist',{
                templateUrl: "app/player/playlist.tpl.html"
            })
            .otherwise({redirectTo:'/stream'})
    }
})();
