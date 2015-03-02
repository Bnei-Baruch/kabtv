(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'config', 'exception', 'logger', 'API_BASE'];

    function dataservice($http, $q, config, exception, logger, API_BASE) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getHeaderLinks: getHeaderLinks,
            getFooterLinks: getFooterLinks,
            getTabs: getTabs,
            getVodCategories: getVodCategories,
            getVodItems: getVodItems,
            getVodItem: getVodItem,
            getUpdates: getUpdates,
            getStreams: getStreams,
            getPlaylist: getPlaylist,
            getDynamicStream: getDynamicStream,
            getEventStatus: getEventStatus,
            getStreamFormats: getStreamFormats,
            ready: ready
        };

        return service;


        function getHeaderLinks() {
            return $http.get(API_BASE + 'nav_links', {'params': {'lang': config.lang.key, 'placeholder': 'navbar'}})
                .then(getHeaderLinksComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getHeaderLinks')(message);
                });

            function getHeaderLinksComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getFooterLinks() {
            return $http.get(API_BASE + 'nav_links', {'params': {'lang': config.lang.key, 'placeholder': 'footer'}})
                .then(getFooterLinksComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getFooterLinks')(message);
                });

            function getFooterLinksComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getVodCategories() {
            return $http.get(API_BASE + 'categories', {'params': {'lang': config.lang.key}})
                .then(getVodCategoriesComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getVodCategories')(message);
                });

            function getVodCategoriesComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getVodItems(category_id) {
            return $http.get(API_BASE + 'categories/' + category_id + '/vod_media')
                .then(getVodItemsComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getVodItems')(message);
                });

            function getVodItemsComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getVodItem(clip_id) {
            return $http.get(API_BASE + 'vod_media/' + clip_id)
                .then(getVodItemComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getVodItem')(message);
                });

            function getVodItemComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getUpdates() {
            return $http.get(API_BASE + 'updates', {'params': {'lang': config.lang.key}})
                .then(getUpdatesComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getUpdates')(message);
                });

            function getUpdatesComplete(data, status, headers, config) {
                return data.data;
            }
        }

        function getStreams() {
            return $http.get(API_BASE + 'streams')
                .then(getStreamsComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getStreams')(message);
                });

            function getStreamsComplete(data, status, headers, config) {
                return (data.data);
            }
        }

        function getPlaylist() {
            return $http.get(API_BASE + 'playlists', {'params': {'lang': config.lang.key}})
                .then(getPlaylistComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getPlaylist')(message);
                });

            function getPlaylistComplete(data, status, headers, config) {
                return {
                    date: new Date().getDate(),
                    list: data.data
                };
            }
        }

        function getDynamicStream(url) {
            return $http.jsonp(url, {});
            //.catch(function(message) {exception.catcher('JSONP Failed for getDynamicStream')(message); });
        }

        function getStreamFormats() {
            return $http.get(API_BASE + 'device/stream_formats')
                .then(getStreamFormatsComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getStreamFormats')(message);
                });

            function getStreamFormatsComplete(data, status, headers, config) {
                return (data.data.formats);
            }
        }

        function getEventStatus() {
            return $http.get(API_BASE + 'event_status')
                .then(getEventStatusComplete)
                .catch(function (message) {
                    exception.catcher('XHR Failed for getEventStatus')(message);
                });

            function getEventStatusComplete(data, status, headers, config) {
                return (data.data.is_live);
            }
        }

        function getTabs() {
            var tabs = [
                {
                    "name": "TAB_UPDATES",
                    "url": ""
                },
                {
                    "name": "TAB_SCHEDULE",
                    "url": "http://kab.tv/tvlist_gen.php"
                },
                {
                    "name": "TAB_QUESTIONS",
                    "url": "http://kab.tv/q.php"
                },
                {
                    "name": "TAB_SKETCHES",
                    "url": "http://www.kab.tv/classboard/classboard.php"
                }
            ];
            return $q.when(tabs);
        }

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
                .then(function () {
                    return $q.all(nextPromises);
                })
                .catch(exception.catcher('"ready" function failed'));
        }
    }
})();