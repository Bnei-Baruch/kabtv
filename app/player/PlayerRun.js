(function () {
    'use strict';

    angular.module('kabtv.player')
        .run(PlayerRun);

    function PlayerRun($rootScope, $timeout, $translate, streamObj, config, PlayerDataService) {
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
            //befor we check if have DynamicGeoStreamLocator if no get default
            if (_streamObj.is_dynamic)
                kabtvHttpSvc.getDynamicGeoStream(_streamObj).then(function (reqData) {
                });
            else
                _streamObj[itemLang][streamItem.quality] = streamItem;
        }

    }
}());
