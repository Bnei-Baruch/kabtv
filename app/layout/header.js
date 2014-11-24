(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('Header', Header);

    Header.$inject = ['$timeout', 'dataservice', 'config', 'logger', 'HELP_IMAGE_BASE'];

    function Header($timeout, dataservice, config, logger, HELP_IMAGE_BASE) {
        /*jshint validthis: true */
        var vm = this;
        vm.links = [];
        vm.languages = [];
        vm.logoImage = '';
        vm.helpImage = '';
        vm.isCurrentLang = isCurrentLang;

        activate();

        function activate() {
            getLanguages();
            onLanguageChanged();
            helpImageUpdate();

            return getHeaderLinks().then(function () {
                logger.info('Loaded top navigation links');
            });
        }

        function getLanguages() {
            return dataservice.getLanguages().then(function (data) {
                vm.languages = data;
                return vm.languages;
            });
        }

        function getHeaderLinks() {
            return dataservice.getHeaderLinks().then(function (data) {
                vm.links = data;
                return vm.links;
            });
        }

        function isCurrentLang(lang) {
            return (config.lang == lang) ? "select" : "";
        }

        function onLanguageChanged() {
            vm.logoImage = '/assets/images/kab_tv_' + config.lang.toLowerCase() +'.gif';
        }

        function helpImageUpdate() {
            var date = new Date();
            vm.helpImage = HELP_IMAGE_BASE + '&lang=' + getHelpLang() + '&' + '&time=' + date.getTime();
            $timeout(helpImageUpdate, 60000);
        }

        function getHelpLang() {
            switch (config.lang.toLowerCase()) {
                case 'heb':
                    return 'he';
                case 'rus':
                    return 'ru';
                case 'spa':
                    return 'es';
            }
            return 'en';
        }

    }
})();
