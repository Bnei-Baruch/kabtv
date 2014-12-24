(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvWmvPlayer', PlayerBuilder);


    function PlayerBuilder() {
        var directive = {
            restrict: 'AE',
            templateUrl: './app/player/wmvPlayerDirective.tpl.html',
            scope: {
                url: "=url"
            },
            controller: PlayerBuilderController,
            controllerAs: 'vm',
            replace: true,
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, el, attr, vm) {

            /*full screen for wmv player*/
            scope.gofs = function () {
                if (!vm.url)
                    return;
                var player = el.find("object")[0];
                if (player && player.playState == 3) {
                    player.fullScreen = true;
                } else {
                    alert("nofs_str");
                }
            };
        }
    }

    PlayerBuilderController.$inject = ['$scope'];
    function PlayerBuilderController($scope) {
        var vm = this;

        vm.url = $scope.url
        vm.showFullScreen = false;
        vm.isIE = isIE();
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