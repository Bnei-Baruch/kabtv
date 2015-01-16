(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvWmvPlayer', PlayerBuilder);


    function PlayerBuilder($timeout, $rootScope, $location) {
        var directive = {
            restrict: 'AE',
            templateUrl: './app/player/wmvPlayerDirective.tpl.html',
            scope: {
                url: "=url"
            },
            controller: WmvPlayerBuilderController,
            controllerAs: 'vm',
            replace: true,
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, el, attr, vm) {
            var _timeoutCheckFinished;
            var player;

            scope.$watch('url', function (newVal, oldVal) {
                if (!player)
                    player = el.find("object")[0];
                checkIsFinished();

                if (!vm.isIE)
                    return;
                player.newMedia(vm.url);
                //pageSettings.WMVPlayer[0].object.URL = playObj.url;
                player.object.controls.play();

            });
            /*  function definePlayerObj() {
             var _player = el.find("object")[0];
             _player.addEventListener("MediaEnded", function () {
             alert('asdasd');
             }, false);
             //_player.currentMedia
             el.find("object").bind('playStateChange', function () {
             alert('asdasd');

             });
             return _player;
             }*/

            function checkIsFinished() {
                console.log(player.playState);
                if (player.playState == 1) {

                    if ($rootScope.isOnlineTran) {
                        scope.$apply($location.path('/stream'));
                        return;
                    }
                    $rootScope.$broadcast("the player is end");
                    return;
                }
                _timeoutCheckFinished = $timeout(checkIsFinished, 5000);
            }

            scope.$on('$destroy', function () {
                $timeout.cancel(_timeoutCheckFinished);
                player.close();
            });

            /*full screen for wmv player*/
            scope.gofs = function () {
                if (!vm.url)
                    return;
                if (player && player.playState == 3) {
                    player.fullScreen = true;
                } else {
                    alert("nofs_str");
                }
            };
        }
    }

    WmvPlayerBuilderController.$inject = ['$scope', 'isIE'];
    function WmvPlayerBuilderController($scope, isIE) {
        var vm = this;

        vm.url = $scope.url
        vm.showFullScreen = false;
        vm.isIE = isIE.data;
    }
}());