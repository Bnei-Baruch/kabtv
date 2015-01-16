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
            var tempObj = {
                date: new Date().getDate(),
                list: [
                    {
                        caption: "מה מרגיש מקובל ברגע גילוי האור? האם זה נעים? מפחיד? איך אנחנו יכולים להכין עצמנו לרגע העצום הזה? אורן לוי לא מוותר לרב לייטמן ושואל את כל השאלות שהיינו רוצים לשאול. הכינו את הכלים",
                        category_id: 6,
                        content_type: "HLS",
                        description: "בשיחה מרתקת חושף בפנינו הרב המקובל את מסעו לעולם הרוחני, מצעדיו הראשונים כילד חקרן וסקרן, המשתוקק לגלות את המשמעות הפנימית של החיים, לנער המתבגר לתוך מציאות חדשה שם מתגלה בפניו הכוח שמנהל את חיינו ועוטף אותנו באהבה אין סופית.",
                        download_url: "http://files.kab.tv/vod/heb/shlavei_sulam/heb_o_rav_2008-06-27_tohnit_bb_shelavei-a-sulam_or.wmv",
                        duration: "00:31:50",
                        id: 811,
                        image_url: "http://files.kab.tv/vod/heb/shlavei_sulam/heb_o_rav_tohnit_bb_shelavei-a-sulam2.jpg",
                        play_url: "http://files.kabbalahmedia.info/download/files/heb_o_rav_2015-01-12_clip_daily-lesson_tora-u-mitsvot-1.mp4",
                        size: null,
                        title: "לגלות את האור"
                    },
                    {
                        caption: "אלדד בק, כתב ידיעות אחרונות, מראיין את הרב דר לייטמן על המשבר העולמי",
                        category_id: 6,
                        content_type: "HLS",
                        description: "asdasdasda",
                        download_url: "http://files.kabbalahmedia.info/download/files/rus_t_rav_rb-1987-25-koved-rosh_2015-01-13_lesson.mp4",
                        duration: "00:43:37",
                        id: 1531,
                        image_url: "http://files.kab.tv/vod/heb/tvprogs/heb_o_rav_2006-09-07_tohnit_berlin_boker-or_eldad-bek_mbr.jpg",
                        play_url: "http://files.kabbalahmedia.info/download/files/heb_o_rav_2015-01-12_clip_daily-lesson_eih-mitgabrim-al-antishemiut-4.mp4",
                        size: null,
                        title: "קבלה, ישראל והמשבר העולמי"
                    },
                    {
                        caption: "משה איבגי לוקח אותנו למסע מרתק בעקבות חכמת הקבלה ותנועת בני ברוך",
                        category_id: 6,
                        content_type: "HLS",
                        description: "משה איבגי, שהקבלה גרמה לשינוי מהותי בחייו ובתפיסת עולמו, לוקח אותנו למסע בעקבות חכמת הקבלה. איבגי מסביר על הקבלה ומטרתה ועל תרומתה לחיים טובים יותר. הוא מספר על המקורות עליהם נסמכת תנועת בני ברוך, על פועלה הנרחב בהפצת חכמת הקבלה ועוד. ",
                        download_url: "http://files.kab.tv/vod/heb/movies/heb_o_rav_2007-12-07_film_tadmit_long.wmv",
                        duration: "00:26:56",
                        id: 1535,
                        image_url: "http://files.kab.tv/vod/heb/movies/heb_o_rav_2007-12-07_film_tadmit_long.jpg",
                        play_url: "http://files.kabbalahmedia.info/download/files/heb_o_rav_2015-01-12_clip_daily-lesson_etsa-le-tsofim-aruts-kabala-4.mp4",
                        size: null,
                        title: "כאיש אחד בלב אחד"

                    }
                ]
            };

            return $q.when(tempObj);
        }

        function getDynamicStream(url) {
            return $http.jsonp(url, {});
            //.catch(function(message) {exception.catcher('JSONP Failed for getDynamicStream')(message); });
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