(function () {
    'use strict';

    angular.module('kabtv.player')
        .directive('kabtvSoundPlayer', KabtvSoundPlayer);


    function KabtvSoundPlayer() {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/player/soundmanager.directive.html',
            scope: {
                url: "=url"
            },
            replace: true,
            link: linkFunction

        };

        return directive;

        function linkFunction(scope, el, attr, vm) {
            scope.isPlay = false;
            scope.isMute = false;
            scope.audioPlayer = null;

            scope.toggleMute = function () {
                scope.isMute = !scope.isMute;
                if (scope.isMute) {
                    scope.audioPlayer.mute();
                } else {
                    scope.audioPlayer.unmute();
                }
            };

            scope.togglePlay = function () {
                scope.isPlay = !scope.isPlay;
                if (scope.isPlay) {
                    soundManager.setup({
                        'url': "lib/soundmanager/swf",
                        'onready': function() {
                            scope.audioPlayer = soundManager.createSound({
                                'id': "audio-player",
                                'url': scope.url
                            });
                            scope.audioPlayer.play();
                        }
                    });
                } else {
                    scope.audioPlayer.destruct();
                }
            };

            scope.$watch('url', function(value){
                if(value){
                    if (scope.audioPlayer === null) {
                        scope.togglePlay();
                    } else {
                        scope.audioPlayer.url = value;
                        scope.isPlay = false;
                        scope.togglePlay();
                    }
                }
            });

            el.bind('$destroy', function () {
                if(scope.audioPlayer) {
                    scope.audioPlayer.stop();
                    scope.audioPlayer.destruct();
                }
            });
        }

    }

}());