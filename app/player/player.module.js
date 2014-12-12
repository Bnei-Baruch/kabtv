(function() {
    'use strict';

    angular.module('kabtv.player', [])
        .config(configure)
        .value('streamObj', {});

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/stream',{
                controller: "Stream",
                templateUrl: "app/player/stream.html"
            })
            .when('/clip',{
                controller: "clip",
                templateUrl: "app/player/clip.html"
            })
            .when('/audio',{
                controller: "audio",
                templateUrl: "app/player/audio.html"
            })
            .when('/playlist',{
                controller: "playlist",
                templateUrl: "app/player/playlist.html"
            })
            .otherwise({redirectTo:'/stream'})
    }
})();
