(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('Clip', Clip);

    Clip.$inject = ['$routeParams', '$location', 'usSpinnerService', 'dataservice', 'logger'];

    function Clip($routeParams, $location, usSpinnerService, dataservice, logger) {
        var vm = this;
        vm.isWMV = null;
        vm.clip = null;
        vm.clipId = null;
        vm.gotoStream = gotoStream;

        activate();

        function activate() {
            vm.clipId = $routeParams.mediaId;

            return getClip().then(function () {
                logger.info('Loaded VOD Clip');
            }).finally( function () {
                usSpinnerService.stop('spinner-1');
            });
        }

        function gotoStream() {
            $location.path('stream');
            $location.url($location.path());
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
