(function () {
    'use strict';

    angular
        .module('kabtv.vod')
        .controller('Vod', Vod);

    Vod.$inject = ['dataservice', 'logger'];

    function Vod(dataservice, logger) {
        /*jshint validthis: true */
        var vm = this;
        vm.categories = [];
        vm.selectedCategory = {};
        vm.playVod = playVod;

        activate();

        function activate() {
            return getCategories().then(function () {
                logger.info('Loaded VOD categories');
            });
        }

        function getCategories() {
            return dataservice.getVodCategories().then(function (data) {
                vm.categories = data;
                return vm.categories;
            });
        }

        function playVod(item) {

        }

    }
})();
