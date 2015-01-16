(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvJwPlayer', PlayerBuilder);


    function PlayerBuilder($rootScope, $location) {
        var directive = {
            restrict: 'AE',
            template: '<div>{{url}}<div id="player"></div></div>',
            scope: {url: '@'},
            controller: JwPlayerBuilderController,
            controllerAs: 'vm',
            replace: true,
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, el, attr, vm) {
            var jwPlayer = jwplayer("player");
            var jwPlayerSetupObj = {
                autostart: true,
                width: "100%",
                events: {
                    onComplete: onFinishedFile
                }
            };
            function onFinishedFile() {
                if ($rootScope.isOnlineTran) {
                    scope.$apply($location.path('/stream'));
                    return;
                }
                $rootScope.$broadcast("the player is end");
            }
            scope.$watch('url', function (newVal, oldVal) {
                var _urlArr = newVal.split('.');
                if (!newVal || _urlArr[_urlArr.length - 1].replace(' ', '') == 'js')
                    return;
                jwPlayerSetupObj.file = newVal;
                if ($location.$$path.toLowerCase() == '/stream')
                    jwPlayerSetupObj.type = 'hls';

                jwPlayer.setup(jwPlayerSetupObj);
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
