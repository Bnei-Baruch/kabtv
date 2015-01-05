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
                url: '/',
                config: {
                    templateUrl: 'app/player/stream.html',
                    controller: 'Stream',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();
