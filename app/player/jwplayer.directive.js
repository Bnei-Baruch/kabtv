(function () {
    'use strict';

    angular.module('kabtv.player')
        .directive('kabtvJwPlayer', KabtvJwPlayer);


    function KabtvJwPlayer() {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/player/jwplayer.directive.html',
            scope: {
                url: "=url"
            },
            replace: true,
            link: linkFunction

        };

        return directive;

        function linkFunction(scope, el, attr, vm) {
            scope.$watch('url', function(value){
                if(value && value.indexOf('.js', value.length - 3) == -1){
                    jwplayer("jwplayer-container").setup({
                        file: value,
                        type:'hls',
                        autostart: true,
                        aspectratio: '16:9',
                        width: "100%"
                    });
                }
            });
        }

    }

}());