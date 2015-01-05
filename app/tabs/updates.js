(function () {
    'use strict';

    angular
        .module('kabtv.tabs')
        .controller('Updates', Updates);

    Updates.$inject = ['$sce', 'dataservice', 'logger'];

    function Updates($sce, dataservice, logger) {
        var vm = this;
        vm.updates = [];

        activate();

        function activate() {
            return getItems().then(function () {
                logger.info('Loaded Updates');
            });
        }

        function getItems() {
            return dataservice.getUpdates().then(function (data) {
                var updates = [];
                data.forEach(function(update) {
                    updates.push({
                        'title': $sce.trustAsHtml(update.title),
                        'subtitle': $sce.trustAsHtml(update.subtitle),
                        'description': $sce.trustAsHtml(update.description),
                        'url_caption': $sce.trustAsHtml(update.url_caption),
                        'url': $sce.trustAsHtml(update.url),
                        'image_url': update.image_url
                    });
                });
                vm.updates = updates;
                return vm.updates;
            });
        }

    }
})();
