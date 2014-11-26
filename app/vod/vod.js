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
        vm.vodItems = [];
        vm.changeCategory = changeCategory;
        vm.playVod = playVod;

        activate();

        function activate() {
            return getCategories().then(function () {
                logger.info('Loaded VOD categories');
                vm.selectedCategory = vm.categories[0];
                changeCategory();
            });
        }

        function getCategories() {
            return dataservice.getVodCategories().then(function (data) {
                vm.categories = data;
                return vm.categories;
            });
        }

        function changeCategory() {
            return dataservice.getVodItems(vm.selectedCategory.id).then(function (data) {
                vm.vodItems = data;
                return vm.vodItems;
            });
        }

        function playVod(item) {
            $location.path('clip/');
            $location.search({"mediaId": item.id});
        }

    }
})();
