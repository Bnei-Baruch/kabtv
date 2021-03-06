(function () {
    'use strict';

    angular.module('kabtv.player')
        .directive('kabtvJwPlayer', KabtvJwPlayer);

    KabtvJwPlayer.$inject = ['$rootScope', 'logger', 'CLIP_ON_FINISH_EVENT'];

    function KabtvJwPlayer($rootScope, logger, CLIP_ON_FINISH_EVENT) {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/player/jwplayer.directive.html',
            scope: {
                stream: "=stream",
                file: "=file"
            },
            replace: true,
            link: linkFunction

        };

        return directive;

        function linkFunction(scope, el, attr, vm) {
            scope.$watch('stream.resolved', function(value){
                if(value){
                    jwplayer("jwplayer-container").setup({
                        playlist: [{
                            sources: [
                                { file: scope.stream.hlsUrl },
                                { file: scope.stream.rtmpUrl }
                            ]
                        }],
                        // primary: 'flash',  -- the world is moving away from flash...
                        // androidhls: true,  -- new versions on jwplayer has this true on default
                        autostart: true,
                        aspectratio: '16:9',
                        width: "100%"
                    });
                }
            });

            scope.$watch('file', function(value){
                if(value){
                    jwplayer("jwplayer-container").setup({
                        file: value,
                        autostart: true,
                        width: "100%",
                        events: {
                            onComplete: onFinishedFile
                        }
                    });
                }
            });

            scope.$on("$destroy", function(event) {
                try {
                    var jwp = jwplayer("jwplayer-container");
                    jwp.stop();
                    jwp.remove();
                } catch (e) {
                    logger.error("Error destroying jwplayer: " + e.message);
                }
            });

            function onFinishedFile() {
                $rootScope.$broadcast(CLIP_ON_FINISH_EVENT);
            }
        }

    }

}());