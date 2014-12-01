(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout', '$window', '$scope', 'config', 'logger'];

    function Shell($timeout, $window, $scope, config, logger) {
        /*jshint validthis: true */
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
            hideSplash();
            calcMainPanelHeight();
            angular.element($window).bind('resize', function () {
                calcMainPanelHeight();
                $scope.$apply();
            });
            logger.success(vm.title + ' loaded!', null);
//            Using a resolver on all routes or dataservice.ready in every controller
//            dataservice.ready().then(function(){
//                hideSplash();
//            });
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }

        function calcMainPanelHeight() {
            vm.mainPanelHeight = $window.innerHeight - 112; // 112 = header.height + footer.height
        }

        function mainPanelStyle() {
            return {'height': vm.mainPanelHeight + 'px'};
        }

    }
})();
