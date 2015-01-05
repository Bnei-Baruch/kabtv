(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$window', '$scope', 'config', 'logger'];

    function Shell($window, $scope, config, logger) {
        var vm = this;
        vm.pageDirection = config.pageDirection;
        vm.title = config.appTitle;
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.showSplash = true;
        vm.mainPanelHeight = null;
        vm.mainPanelStyle = mainPanelStyle;

        activate();

        function activate() {
            calcMainPanelHeight();

            angular.element($window).bind('resize', function () {
                calcMainPanelHeight();
                $scope.$apply();
            });

            logger.success(vm.title + ' loaded!', null);
        }

        function calcMainPanelHeight() {
            vm.mainPanelHeight = $window.innerHeight - 112; // 112 = header.height + footer.height
        }

        function mainPanelStyle() {
            return {'height': vm.mainPanelHeight + 'px'};
        }

    }
})();
