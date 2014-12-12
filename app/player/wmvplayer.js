(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvWmvPlayer', playerBuilder);


    function playerBuilder() {
        var dirObj = {
            scope: {
                url: "=dataUrl"
            },
            templateUrl: 'wmvPlayer.tpl.html',
            controller: playerBuilder,
            controllerAs: 'vm'
        }
    }

    PlayerBuilder.$inject = [];


    function PlayerBuilder() {
        var vm = this;

        vm.showFullScreen = false;
        vm.isIE = isIE();
        /*full screen for wmv player*/
        vm.gofs = function () {
            if ($scope.playObj == null || $scope.playObj.format.toLowerCase() != 'wmv')
                return;
            var fs_str = $translate.instant('PLAYER_EXIT_FULLSCREEN');
            var nofs_str = $translate.instant('PLAYER_NO_FULLSCREEN');
            var player = pageSettings.WMVPlayer[0];
            if (player && player.playState == 3) {
                alert(fs_str);
                player.fullScreen = true;
            } else {
                alert(nofs_str);
            }
        };
    }

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
}());