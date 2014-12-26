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
            jwPlayer.setup({
                file: '',
                type: 'hls',
                autostart: true,
                width: "100%"
            });
            scope.$watch('url', function (newVal, oldVal) {
               var _urlArr = newVal.split('.');
                if (!newVal || _urlArr[_urlArr.length - 1].replace(' ', '') == 'js')
                    return;
                jwPlayer.load([
                    { file: newVal }
                ]);
                jwPlayer().play();
            });
        }
    }

    JwPlayerBuilderController.$inject = ['$scope', 'PlayerDataService'];
    function JwPlayerBuilderController($scope, PlayerDataService) {
        var _urlArr;
        _urlArr = $scope.url.split('.');
        if (_urlArr[_urlArr.length - 1].replace(' ', '') == 'js'){
            PlayerDataService.getDynamicGeoStream($scope.url);
        }

        $scope.buildDynamicGeoStream = function (url) {
            $scope.url = url;
        };

    }

}());
