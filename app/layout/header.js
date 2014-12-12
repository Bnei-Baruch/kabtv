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
            vm.languages = [];
            angular.forEach(Object.keys(config.languages), function(value, i) {
                vm.languages.push(config.languages[value]);
            });
            return vm.languages;
        }

        function getHeaderLinks() {
            return dataservice.getHeaderLinks().then(function (data) {
                vm.links = data;
                return vm.links;
            });
        }

        function isCurrentLang(lang) {
            return (config.lang.key == lang.key) ? "select" : "";
        }

        function onLanguageChanged() {
            vm.logoImage = '/assets/images/kab_tv_' + config.lang.key.toLowerCase() +'.gif';
        }

        function helpImageUpdate() {
            var date = new Date();
            vm.helpImage = HELP_IMAGE_BASE + '&lang=' + getHelpLang() + '&' + '&time=' + date.getTime();
            $timeout(helpImageUpdate, 60000);
        }

        function getHelpLang() {
            switch (config.lang.key.toLowerCase()) {
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
