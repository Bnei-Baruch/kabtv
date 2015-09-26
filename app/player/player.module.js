import angular from 'angular';

import Clip from './clip';
import KabtvJwPlayer from './jwplayer.directive';
import KabtvSoundPlayer from './soundmanager.directive';
import configRoutes from './config.route';
import Playlist from './playlist';
import Stream from './stream';

runBlock.$inject = ['$rootScope', '$timeout', '$location', 'dataservice', 'config'];

function runBlock($rootScope, $timeout, $location, dataservice, config) {
    var isLiveTimer = null;

    $rootScope.config = config;
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

function JerusalemTime() {
    return function () {
        // Jerusalem time = localTime + localOffset + Jerusalem offset;
        var jarusalemOffset = 2 * 60 * 60 * 1000;
        var now = new Date();
        var jerusalem = now.getTime() + now.getTimezoneOffset() * 60000 + jarusalemOffset;

        var jerusalemNow = new Date(jerusalem);
        var hours = jerusalemNow.getHours();
        var minutes = jerusalemNow.getMinutes();

        if (parseInt(hours) <= 9) {
            hours = "0" + hours
        }
        if (parseInt(minutes) <= 9) {
            minutes = "0" + minutes
        }

        return hours + ":" + minutes;
    }
}

export default angular.module('kabtv.player', [])
    .controller('Clip', Clip)
    .controller('Playlist', Playlist)
    .controller('Stream', Stream)
    .directive('kabtvJwPlayer', KabtvJwPlayer)
    .directive('kabtvSoundPlayer', KabtvSoundPlayer)
    .run(runBlock)
    .run(configRoutes)
    .service('JerusalemTime', JerusalemTime)
    .value('streams', {})
    .name;

