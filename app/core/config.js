(function() {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        lang: {},
        pageDirection: "rtl",
        isVideo: true,
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
    };

    core.value('config', config);
    var _eng = 'asdasdasd'; //'Kabbalah TV is part of the family of websites owned by the Bnei Baruch Kabbalah Education & Research Institute - <a href="http://www.kabbalah.info" target="_blank">http://www.kabbalah.info</a> - the world\'s largest authentic Kabbalah resource. On Kabbalah TV, you\'ll find live streams the Daily Kabbalah Lesson with Kabbalist Dr. Michael Laitman, where you can ask questions on lesson topics and get them answered live (click the "Questions" tab to do this), as well as view stills of lesson sketches (see the "Sketches" tab during the lessons for the latest sketches stills). In addition to the Daily Kabbalah Lessons, Kabbalah TV streams weekly friends\' gatherings, Kabbalah conventions and other events (see "Schedule" for most updated details).';
    var siteDescription = {
        'ENG': _eng
    };
    core.value('siteDescription', siteDescription);

    core.config(configure)
        .run(runBlock);

    configure.$inject = ['$logProvider', '$routeProvider', 'routehelperConfigProvider', 'exceptionHandlerProvider',
        '$translateProvider'];

    function configure($logProvider, $routeProvider, routehelperConfigProvider, exceptionHandlerProvider,
                       $translateProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        //routehelperConfigProvider.config.docTitle = 'NG-Modular: ';
        var resolveAlways = {
            ready: ['dataservice', function (dataservice) {
                return dataservice.ready();
            }]
        };

        routehelperConfigProvider.config.resolveAlways = resolveAlways;

        routehelperConfigProvider.config.otherwise = {redirectTo: '/stream'};

        // Configure the common exception handler
        exceptionHandlerProvider.configure(config.appErrorPrefix);

        // Configure the translation provider
        $translateProvider.useStaticFilesLoader({
            prefix: 'static/i18n/locale-',
            suffix: '.json'
        }).preferredLanguage('he');
    }

    runBlock.$inject = ['$translate', '$location', '$http', '$rootScope', 'config'];

    function runBlock($translate, $location, $http, $rootScope, config) {
        $http.defaults.headers.common.Accept = 'application/json';

        config.isVideo = $location.host().toLowerCase().indexOf('kab.fm') < 0;

        function setLanguageConfig() {
            var lang = $location.absUrl().split("/")[3].toUpperCase().substring(0, 3);
            if (!config.languages.hasOwnProperty(lang)) {
                 lang = 'HEB';
            }
            config.lang = config.languages[lang];
            config.pageDirection = (lang == "HEB") ? "rtl" : "ltr";
            $translate.use(config.lang.locale);
            document.title = $translate.instant('SITE_TITLE');
        }

        setLanguageConfig();

        $rootScope.$on('routeChangeSuccess', function () { setLanguageConfig(); });
    }

})();