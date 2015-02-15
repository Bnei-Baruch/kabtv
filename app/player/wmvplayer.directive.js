(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvWmvPlayer', KabtvWmvPlayer);


    function KabtvWmvPlayer() {
        var directive = {
            restrict: 'AE',
            templateUrl: 'app/player/wmvplayer.directive.html',
            scope: {
                url: "=url"
            },
            replace: true,
            link: linkFunction
        };

        return directive;

        function linkFunction(scope, el, attr, vm) {
            scope.isIE = isIE();
            scope.showFullScreen = false;


            /*full screen for wmv player*/
            scope.gofs = function () {
                if (!scope.url) {
                    return;
                }

                var player = el.find("object")[0];
                if (player && player.playState == 3) {
                    player.fullScreen = true;
                } else {
                    alert("Full Screen is only available when player is running");
                }
            };

            scope.$watch('url', function (newVal, oldVal) {
                var player = el.find("object")[0];
                if (scope.isIE) {
                    player.URL = newVal;
                    player.object.controls.play();
                } else {
                    var clone = el.find("object").clone();
                    var params = clone.find("param");
                    angular.forEach(params, function (param, i) {
                       if (param.name == 'src') {
                           param.value = newVal;
                       }
                    });
                    el.find("object").replaceWith(clone);
                }
            });

            scope.$on('destroy', function () {
                var player = el.find("object")[0];
                player.close();
            });

            function isIE() {
                var ua = window.navigator.userAgent;
                var msie = ua.indexOf('MSIE ');
                var trident = ua.indexOf('Trident/');

                if (msie > 0) {
                    // IE 10 or older => return version number
                    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
                }

                if (trident > 0) {
                    // IE 11 (or newer) => return version number
                    var rv = ua.indexOf('rv:');
                    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
                }

                // other browser
                return false;
            }

        }
    }

}());