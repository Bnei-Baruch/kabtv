(function () {
    'use strict';

    angular
        .module('kabtv.vod')
        .controller('Vod', Vod);

    Vod.$inject = ['$location', '$window', '$scope', 'dataservice', 'logger'];

    function Vod($location, $window, $scope, dataservice, logger) {
        var vm = this;
        vm.categories = [];
        vm.selectedCategory = {};
        vm.vodItems = [];
        vm.vodItemsHeight = null;
        vm.changeCategory = changeCategory;
        vm.playVod = playVod;
        vm.vodItemsStyle = vodItemsStyle;

        activate();

        function activate() {
            calcVodItemsHeight();

            angular.element($window).bind('resize', function () {
                calcVodItemsHeight();
                $scope.$apply();
            });

            return getCategories().then(function () {
                logger.info('Loaded VOD categories');
                vm.selectedCategory = vm.categories[0];
                changeCategory();
            });
        }

        function calcVodItemsHeight() {
            vm.vodItemsHeight = document.getElementById('vod').clientHeight -
            document.getElementById('vod-categories').clientHeight - 5;
        }

        function vodItemsStyle() {
            return {'height': vm.vodItemsHeight + 'px'};
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
