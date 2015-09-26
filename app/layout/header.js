Header.$inject = ['$scope', '$timeout', 'dataservice', 'config', 'logger', 'HELP_IMAGE_BASE'];

function Header($scope, $timeout, dataservice, config, logger, HELP_IMAGE_BASE) {
    var vm = this;
    vm.links = [];
    vm.languages = [];
    vm.logoImage = '';
    vm.helpImage = '';
    vm.helpImageTimer = null;
    vm.isCurrentLang = isCurrentLang;
    vm.gotoHelpMessage = gotoHelpMessage;

    activate();

    function activate() {
        getLanguages();
        onLanguageChanged();
        helpImageUpdate();

        $scope.$on("$destroy", handleDestroy);

        return getHeaderLinks().then(function () {
            logger.info('Loaded top navigation links');
        });
    }

    function getLanguages() {
        vm.languages = [];
        angular.forEach(Object.keys(config.languages), function (value, i) {
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
        return (config.lang.key == lang.key);
    }

    function onLanguageChanged() {
        vm.logoImage = './static/images/kab_tv_' + config.lang.key.toLowerCase() + '.gif';
    }

    function helpImageUpdate() {
        var date = new Date();
        vm.helpImage = HELP_IMAGE_BASE + '&lang=' + getHelpLang() + '&' + '&time=' + date.getTime();
        vm.helpImageTimer = $timeout(helpImageUpdate, 60000);
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

    function gotoHelpMessage() {
        var locale = 'en';
        var style = 'silver';
        switch (config.lang.key.toLowerCase()) {
            case 'heb':
                locale = 'he';
                style = 'silver_he';
                break;
            case 'rus':
                locale = 'ru';
                break;
            case 'eng':
                locale = 'en';
                break;
            case 'spa':
                locale = 'es';
                break;
            case 'fre':
                locale = 'fr';
                break;
            case 'ita':
                locale = 'it';
                break;
            case 'ger':
                locale = 'de';
                break;
            case 'por':
                locale = 'pt';
                break;
        }

        // The code below was given from the old site. Maintain with care...
        if (navigator.userAgent.toLowerCase().indexOf('opera') != -1 && window.event.preventDefault)
            window.event.preventDefault();
        var newWindow = window.open('http://live.kab.tv/client.php?locale=' + locale +
            '&style=' + style + '&group=3&url=' + escape(document.location.href) +
            '&referrer=' + escape(document.referrer),
            'mibew', 'toolbar=0,scrollbars=0,location=0,status=1,menubar=0,width=640,height=480,resizable=1');
        newWindow.focus();
        newWindow.opener = window;
        return false;
    }

    function handleDestroy(event) {
        $timeout.cancel(vm.helpImageTimer);
    }

}

export default Header;