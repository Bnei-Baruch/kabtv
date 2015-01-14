(function () {
    'use strict';

    angular.module('kabtv.player')
        .factory('PlayerDataService', PlayerDataService);

    PlayerDataService.$inject = ['$http', 'config', 'API_BASE'];

    function PlayerDataService($http, config, API_BASE) {
        var _svc = {}, _param = {};

        var defParam = {
            params: {
                'lang': config.lang
            }
        };

        _svc.getHeadData = function () {
            _param.params = {
                'placeholder': 'navbar'
            };
            angular.extend(_param.params, defParam.params);
            return $http.get(API_BASE + 'nav_links', _param);
        };

        _svc.getFooterData = function () {
            _param.params = {
                'placeholder': 'footer'
            };
            angular.extend(_param.params, defParam.params);
            return $http.get(API_BASE + 'nav_links', _param);
        };

        _svc.setClipListes = function () {
            return $http.get(API_BASE + 'categories', defParam);
        };

        _svc.setClipList = function (id) {
            return $http.get(API_BASE + 'categories/' + id + '/vod_media');
        };

        _svc.getClipById = function (id) {
            return $http.get(API_BASE + 'vod_media/' + id);
        };


        _svc.getOnlineMedia = function () {
            return $http.get(API_BASE + 'streams');
        };

        _svc.getUpdates = function () {
            return $http.get(API_BASE + 'updates', defParam);
        };

        _svc.getEventStatus = function () {
            return $http.get(API_BASE + 'event_status', defParam);
        };

        _svc.getDynamicGeoStream = function (pUrl) {
            return $http.jsonp(pUrl, {}).success(function (e) {
                return e;
            });
        };

        _svc.getPlayList = function (lang) {
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

            function _then(callback) {
                return callback(tempObj);
            }

            return {then: _then};
            /*return $http.jsonp(pUrl, {}).success(function (e) {
             return e;
             });*/
        };
        return _svc;
    }
}());