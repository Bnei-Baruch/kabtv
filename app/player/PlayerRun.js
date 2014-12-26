(function () {
    'use strict';

    angular.module('kabtv.player')
        .run(PlayerRun);

    function PlayerRun($rootScope, $timeout, $translate, streamObj, config, PlayerDataService, isIE) {
        var _streamObj = {};
        PlayerDataService.getOnlineMedia().then(function (reqData) {
            getEventStatus();
            document.title = $translate.instant('SITE_TITLE');

            angular.forEach(reqData.data, function (_streamItem, index) {
                buildStreamObj(_streamItem);
            });
            streamObj.data = _streamObj;
            $rootScope.$broadcast('streamInitialized');
        });
        //check if have online translation - if not dont show quality switcher

        function getEventStatus() {
            var timerInt = 60000;
            if ($rootScope.isOnlineTran === undefined)
                timerInt = 0;
            $timeout(function () {
                PlayerDataService.getEventStatus().then(function (r) {
                    $rootScope.isOnlineTran = r.data.is_live;
                    getEventStatus();
                });
            }, timerInt);
        }

        function addStreamItem(streamItem) {
            var itemLang = streamItem.language.toUpperCase();
            streamObj[itemLang][streamItem.quality] = _stream;
        }

        function buildStreamObj(streamItem) {
            var itemLang = streamItem.language.toUpperCase();
            if (!_streamObj[itemLang]) {
                _streamObj[itemLang] = {
                    language: config.languages[itemLang]
                };
            }
            _streamObj[itemLang][streamItem.quality] = streamItem;
        }


        isIE.value = isIE();

        function isIE() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE ');
            var trident = ua.indexOf('Trident/');

            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            if (trident > 0) {
                // IE 11 (or newer) => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            // other browser
            return false;
        }
    }
}());
