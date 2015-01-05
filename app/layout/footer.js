(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Footer', Footer);

    Footer.$inject = ['dataservice', 'logger'];

    function Footer(dataservice, logger) {
        var vm = this;
        vm.links = [];

        activate();

        function activate() {
            return getFooterLinks().then(function () {
                logger.info('Loaded footer links');
            });
        }

        function getFooterLinks() {
            return dataservice.getFooterLinks().then(function (data) {
                vm.links = data;
                return vm.links;
            });
        }

    }
})();
