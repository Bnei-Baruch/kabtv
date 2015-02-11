(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('Clip', Clip);

    Clip.$inject = ['$rootScope', '$routeParams', '$location', 'usSpinnerService', 'dataservice', 'logger'];

    function Clip($rootScope, $routeParams, $location, usSpinnerService, dataservice, logger) {
        var vm = this;
        vm.isWMV = null;
        vm.clip = null;
        vm.clipId = null;
        vm.gotoStream = gotoStream;

        activate();

        $rootScope.$on("the player is end", gotoStream);

        function activate() {
            vm.clipId = $routeParams.mediaId;

            return getClip().then(function () {
                logger.info('Loaded VOD Clip');
            }).finally(function () {
                    usSpinnerService.stop('spinner-1');
                });
        }

        function gotoStream() {
            var _path = '/playlist';
            if ($rootScope.isLive)
                _path = '/stream';
            if ($location.url() != _path)
                $rootScope.$apply($location.url(_path));
        }

        function getClip() {
            return dataservice.getVodItem(vm.clipId).then(function (data) {
                vm.clip = data;
                vm.isWMV = vm.clip.content_type == 'WMV';
                return vm.clip;
            });
        }

    }

}());
