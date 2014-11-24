(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$location', '$q', 'config', 'exception', 'API_BASE'];

    function dataservice($http, $location, $q, config, exception, API_BASE) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getLanguages: getLanguages,
            getHeaderLinks: getHeaderLinks,
            getFooterLinks: getFooterLinks,
            getVodCategories: getVodCategories,
            //getAvengerCount: getAvengerCount,
            ready: ready
        };

        return service;


        function getHeaderLinks() {
            return $http.get(API_BASE + 'nav_links', {'params': {'lang': config.lang, 'placeholder': 'navbar'}})
                .then(getHeaderLinksComplete)
                .catch(function(message) {exception.catcher('XHR Failed for getHeaderLinks')(message); });

            function getHeaderLinksComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getFooterLinks() {
            return $http.get(API_BASE + 'nav_links', {'params': {'lang': config.lang, 'placeholder': 'footer'}})
                .then(getFooterLinksComplete)
                .catch(function(message) {exception.catcher('XHR Failed for getFooterLinks')(message); });

            function getFooterLinksComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getVodCategories() {
            return $http.get(API_BASE + 'categories', {'params': {'lang': config.lang}})
                .then(getVodCategoriesComplete)
                .catch(function(message) {exception.catcher('XHR Failed for getVodCategories')(message); });

            function getVodCategoriesComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getLanguages() {
            var languages = [
                {
                    "caption": "English",
                    "url": "eng",
                    "title": "TV in English",
                    "language": "ENG"
                },
                {
                    "caption": "Русский",
                    "url": "rus",
                    "title": "TV in Russian",
                    "language": "RUS"
                },
                {
                    "caption": "Español",
                    "url": "spa",
                    "title": "TV in Spanish",
                    "language": "SPA"
                },
                {
                    "caption": "Deutsch",
                    "url": "ger",
                    "title": "TV in German",
                    "language": "GER"
                },
                {
                    "caption": "Français",
                    "url": "fre",
                    "title": "TV in French",
                    "language": "FRE"
                },
                {
                    "caption": "Português",
                    "url": "por",
                    "title": "TV in Portuguese",
                    "language": "POR"
                },
                {
                    "caption": "Italiano",
                    "url": "ita",
                    "title": "TV in Italian",
                    "language": "ITA"
                },
                {
                    "caption": "עברית",
                    "url": "heb",
                    "title": "TV in Hebrew",
                    "language": "HEB"
                }
            ];

            return $q.when(languages);
        }

        //
        //function getAvengerCount() {
        //    var count = 0;
        //    return getAvengersCast()
        //        .then(getAvengersCastComplete)
        //        .catch(exception.catcher('XHR Failed for getAvengerCount'));
        //    function getAvengersCastComplete (data) {
        //        count = data.length;
        //        return $q.when(count);
        //    }
        //}
        //
        //}

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }
            primePromise = $q.when(true).then(success);
            return primePromise;
            function success() {
                isPrimed = true;
                logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();
            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(exception.catcher('"ready" function failed'));
        }
    }
})();