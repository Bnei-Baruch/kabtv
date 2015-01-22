(function () {
    'use strict';

    angular.module('kabtv.player', [])
        .value('streams', {})
        .run(runBlock);

    runBlock.$inject = ['$rootScope', '$timeout', '$location', 'dataservice', 'config'];

    function runBlock($rootScope, $timeout, $location, dataservice, config) {
        var isLiveTimer = null;

        $rootScope.$on('$destroy', handleDestroy);

        function getEventStatus() {
            isLiveTimer = $timeout(function () {
                dataservice.getEventStatus().then(function (isLive) {
                    if ($rootScope.isLive === undefined && $location.path().indexOf('clip') < 0) {
                        $rootScope.isLive = isLive;
                        if (config.lang.key == 'HEB' || config.lang.key == 'RUS') {
                            $location.path('stream');
                        } else {
                            $location.path(isLive ? 'stream' : 'playlist');
                        }
                    } else {
                        $rootScope.isLive = isLive;
                    }
                    getEventStatus();
                });
            }, (isLiveTimer == null) ? 0 : 30000);
        }

        function handleDestroy(event) {
            $timeout.cancel(isLiveTimer);
        }

        getEventStatus();

    }

})();
