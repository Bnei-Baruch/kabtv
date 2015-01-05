(function () {
    'use strict';

    angular
        .module('kabtv.tabs')
        .controller('Tabs', Tabs);

    Tabs.$inject = ['$sce', '$window', '$scope', 'dataservice', 'config', 'logger'];

    function Tabs($sce, $window, $scope, dataservice, config, logger) {
        var vm = this;
        vm.tabs = [];
        vm.selectedTab = {};
        vm.selectedTabUrl = '';
        vm.tabContentHeight = null;
        vm.isSelectedTab = isSelectedTab;
        vm.switchTab = switchTab;
        vm.tabContentStyle = tabContentStyle;

        activate();

        function activate() {
            calcTabContentHeight();

            angular.element($window).bind('resize', function () {
                calcTabContentHeight();
                $scope.$apply();
            });

            return getTabs().then(function () {
                logger.info('Loaded Tabs');
                vm.selectedTab = vm.tabs[0];
            });
        }

        function getTabs() {
            return dataservice.getTabs().then(function (data) {
                vm.tabs = data;
                return vm.tabs;
            });
        }

        function isSelectedTab(tab) {
            return (vm.selectedTab == tab);
        }

        function switchTab(index) {
            vm.selectedTab = vm.tabs[index];
            if (vm.selectedTab.url) {
                vm.selectedTabUrl = $sce.trustAsResourceUrl(vm.selectedTab.url + '?lang=' + config.lang.fullName);
            }
        }

        function calcTabContentHeight() {
            vm.tabContentHeight = document.getElementById('tabs').clientHeight - 2;
            var element = document.getElementById('tabs-header');
            vm.tabContentHeight -= (element) ? element.clientHeight : 24;
        }

        function tabContentStyle() {
            return {'height': vm.tabContentHeight + 'px'};
        }
    }
})();
