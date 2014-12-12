(function () {
    'use strict';

    angular
        .module('kabtv.tabs')
        .controller('Tabs', Tabs);

    Tabs.$inject = ['$sce', 'dataservice', 'config', 'logger'];

    function Tabs($sce, dataservice, config, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.tabs = [];
        vm.selectedTab = {};
        vm.selectedTabUrl = '';
        vm.isSelectedTab = isSelectedTab;
        vm.switchTab = switchTab;

        activate();

        function activate() {
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
    }
})();
