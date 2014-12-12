(function() {
    'use strict';

    angular.module('app.core')
        .value('config', {
            lang: {},
            pageDirection: "rtl",
            isVideo: true,
            audioPlayer: null,
            WMVPlayer: null,
            detectIE: null,
            appTitle: 'Kab.tv',
            appErrorPrefix: '[Kab.tv Error] ',
            languages: {
                HEB: { key: "HEB", locale: "he", fullName: "Hebrew", caption: "עברית" },
                ENG: { key: "ENG", locale: "en", fullName: "English", caption: "English" },
                RUS: { key: "RUS", locale: "ru", fullName: "Russian", caption: "Русский" },
                SPA: { key: "SPA", locale: "es", fullName: "Spanish", caption: "Español" },
                GER: { key: "GER", locale: "de", fullName: "German", caption: "Deutsch" },
                FRE: { key: "FRE", locale: "fr", fullName: "French", caption: "Français" },
                POR: { key: "POR", locale: "pt", fullName: "Portuguese", caption: "Português" },
                ITA: { key: "ITA", locale: "it", fullName: "Italian", caption: "Italiano" }
            }
        })
        .config(configure)
        .run(runBlock);


    configure.$inject = ['$translateProvider'];

    function configure($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/i18n/locale-',
            suffix: '.json'
        }).preferredLanguage('he');
    }

    runBlock.$inject = ['$translate', '$location', '$http', 'config' ];

    function runBlock($translate, $location, $http, config) {
        $http.defaults.headers.common.Accept = 'application/json';

        var lang = ($location.absUrl().split("/")[3] || 'HEB').toUpperCase();
        config.lang = config.languages[lang];
        config.pageDirection = (lang == "HEB") ? "rtl" : "ltr";
        config.isVideo = $location.host().toLowerCase().indexOf('kab.fm') < 0;

        $translate.use(config.lang.locale);
    }

})();