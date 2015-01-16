(function () {
    'use strict';

    angular.module('kabtv.player')
        .run(PlayerRun);

    function PlayerRun($rootScope, $timeout, $translate, streamObj, config, PlayerDataService, $location, isIE) {
        var _streamObj = {}, getEventStatusTimer;
        PlayerDataService.getOnlineMedia().then(function (reqData) {
            getEventStatus();
            document.title = $translate.instant('SITE_TITLE');

            angular.forEach(reqData.data, function (_streamItem, index) {
                buildStreamObj(_streamItem);
            });
            streamObj.data = _streamObj;
            $rootScope.$broadcast('streamInitialized');
        });

        isIE.data = _isIE();

        $rootScope.$on('destroy', function () {
            if (getEventStatusTimer)
                getEventStatusTimer.cancel();
        });
        //check if have online translation - if not dont show quality switcher
        function getEventStatus() {
            var timerInt = 60000;
            if ($rootScope.isOnlineTran === undefined)
                timerInt = 0;
            getEventStatusTimer = $timeout(function () {
                PlayerDataService.getEventStatus().then(function (r) {
                    $rootScope.isOnlineTran = r.data.is_live;
                    if(r.data.is_live && $location.$$path.toLowerCase() == '/playlist')
                        $location.path('/stream');

                    goToDefaultMode();
                    getEventStatus();
                });
            }, timerInt);
        }

        function goToDefaultMode() {
            $location.path('playlist');
            /*if ($rootScope.isOnlineTran && $location.$$path.toLowerCase() == '/stream')
             $location.path('playList');
             else if ($location.$$path.toLowerCase() == '/playlist')
             $location.path('stream');*/
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
            if (streamItem.media_type == 'audio')
                _streamObj[itemLang].audio = streamItem;
            else
                _streamObj[itemLang][streamItem.quality] = streamItem;
        }

        function _isIE() {
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
