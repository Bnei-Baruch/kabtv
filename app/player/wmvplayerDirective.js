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
            controller: WmvPlayerBuilderController,
            controllerAs: 'vm',
            replace: true,
            link: linkFunction
        };
        return directive;
        function linkFunction(scope, el, attr, vm) {

            var player = el.find("object")[0];


            scope.$watch('url', function (newVal, oldVal) {
                if (!vm.isIE)
                    return;
                player.newMedia(vm.url);
                //pageSettings.WMVPlayer[0].object.URL = playObj.url;
                player.object.controls.play();

            });

            scope.$on('destroy', function () {
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
        vm.isIE = isIE.value;
    }
}());