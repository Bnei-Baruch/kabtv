(function() {
    'use strict';

    angular.module('kabtv.routes', [])
        .config(configure);

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
        $routeProvider
            .when('/stream',{
                controller: "Stream",
                templateUrl: "app/player/stream.html"
            })
            .when('/clip',{
                controller: "kabtvPlayerCtrl",
                templateUrl: "views/playerClip.html"
            })
            .otherwise({redirectTo:'/stream'})
    }
})();