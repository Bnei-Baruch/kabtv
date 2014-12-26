(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvJwPlayer', PlayerBuilder);


    function PlayerBuilder() {
        var directive = {
            restrict: 'AE',
            template: '<div id="jwPlayer"></div>',
            scope: {
                url: "="
            },
            controller: JwPlayerBuilderController,
            controllerAs: 'vm',
            replace: true,
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, el, attr, vm) {
            var jwPlayer = jwplayer("jwPlayer");
            scope.$watch('url', function (newVal, oldVal) {
                if (!newVal)
                    return;

                jwPlayer.setup({
                    file: newVal,
                    type: 'hls',
                    autostart: true,
                    width: "100%"
                });
            });
        }
    }

    JwPlayerBuilderController.$inject = ['$scope', 'isIE'];
    function JwPlayerBuilderController($scope, isIE) {
        var vm = this;

    }

}());
