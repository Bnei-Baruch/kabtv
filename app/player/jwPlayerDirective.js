(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvJwPlayer', PlayerBuilder);


    function PlayerBuilder() {
        var directive = {
            restrict: 'AE',
            template: '<div><div id="player"></div></div>',
            scope: {url: '@'},
            controller: JwPlayerBuilderController,
            controllerAs: 'vm',
            replace: true,
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, el, attr, vm) {
            var jwPlayer = jwplayer("player");
            scope.$watch('url', function (newVal, oldVal) {
                var _urlArr = newVal.split('.');
                if (!newVal || _urlArr[_urlArr.length - 1].replace(' ', '') == 'js')
                    return;
                jwPlayer.setup({
                    file: newVal,
                    type: 'hls',
                    autostart: true,
                    width: "100%"
                });
               // jwPlayer().play();
            });
        }
    }

    JwPlayerBuilderController.$inject = ['$scope', '$timeout', 'PlayerDataService'];
    function JwPlayerBuilderController($scope, $timeout, PlayerDataService) {
        var _urlArr;
        _urlArr = $scope.url.split('.');
        if (_urlArr[_urlArr.length - 1].replace(' ', '') == 'js') {
            PlayerDataService.getDynamicGeoStream($scope.url);
        }

        $scope.buildDynamicGeoStream = function (url) {
            $scope.url = url;
        };

       /* $scope.$on('$destroy', function () {
            $timeout(function () {
                jwplayer("player").remove();

            }, 0);
        });*/
    }

}());
