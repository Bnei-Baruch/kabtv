Clip.$inject = ['$rootScope', '$routeParams', '$location', 'usSpinnerService', 'dataservice', 'logger',
    'CLIP_ON_FINISH_EVENT'];

function Clip($rootScope, $routeParams, $location, usSpinnerService, dataservice, logger,
              CLIP_ON_FINISH_EVENT) {
    var vm = this;
    vm.isWMV = null;
    vm.clip = null;
    vm.clipId = null;
    vm.gotoStream = gotoStream;

    activate();

    function activate() {
        vm.clipId = $routeParams.mediaId;

        $rootScope.$on(CLIP_ON_FINISH_EVENT, gotoStream);

        return getClip().then(function () {
            logger.info('Loaded VOD Clip');
        }).finally(function () {
            usSpinnerService.stop('spinner-1');
        });
    }

    function gotoStream() {
        $location.path('stream');
    }

    function getClip() {
        return dataservice.getVodItem(vm.clipId).then(function (data) {
            vm.clip = data;
            vm.isWMV = vm.clip.content_type == 'WMV';
            return vm.clip;
        });
    }

}

export default Clip;