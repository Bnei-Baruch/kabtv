(function () {
    'use strict';

    angular.module('kabtv.player')
        .run( PlayerRun);

    function PlayerRun(streamObj, PlayerDataService) {
        var _streamObj = {};

        PlayerDataService.getOnlineMedia().then(function (reqData) {
            getEventStatus();
            document.title = $translate.instant('SITE_TITLE');

            angular.forEach(reqData.data, function (_streamItem, index) {
                buildStreamObj(_streamItem);
            });
            streamObj = _streamObj;
        });

        function addStreamItem(streamItem) {
            var itemLang = streamItem.language.toUpperCase();
            streamObj[itemLang][streamItem.quality] = _stream;
        }

        function buildStreamObj(streamItem) {
            var itemLang = streamItem.language.toUpperCase();
            if (!_streamObj[itemLang]) {
                _streamObj[itemLang] = {
                    language: itemLang
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
