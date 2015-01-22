(function () {
    'use strict';

    angular.module('kabtv.player')
        .run(runBlock);

    runBlock.$inject = ['routehelper'];

    function runBlock(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/stream',
                config: {
                    templateUrl: 'app/player/stream.html',
                    controller: 'Stream',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/clip',
                config: {
                    templateUrl: 'app/player/clip.html',
                    controller: 'Clip',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/playlist',
                config: {
                    templateUrl: 'app/player/playlist.html',
                    controller: 'Playlist',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();
