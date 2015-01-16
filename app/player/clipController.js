(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('ClipController', ClipController);


    ClipController.$inject = ['$scope', 'PlayerDataService', '$location', '$translate'];


    function ClipController($scope, PlayerDataService, $location, $translate) {
        var vm = this;
        vm.currentClip = {};
        _init();

        $scope.$on("the player is end", afterFinishedClip);

        function _init() {
            var _clipId = $location.$$search.mediaId;
            if (!_clipId) {
                afterFinishedClip();
                return;
            }
            PlayerDataService.getClipById(_clipId).then(function (reqData) {
                if (!reqData) {
                    afterFinishedClip();
                    return;
                }
                vm.currentClip = reqData.data;
            });
        }

        function afterFinishedClip() {
            if ($rootScope.isOnlineTran) {
                $location.path('/stream');
            } else {
                $location.path('/playList');
            }
        }
    }
}())