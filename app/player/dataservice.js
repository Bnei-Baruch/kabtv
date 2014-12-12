(function () {
    'use strict';

    angular.module('kabtv.player')
        .factory('PlayerDataService',PlayerDataService);

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

        _svc.getDynamicGeoStream = function (pObj) {
            return $http.jsonp(pObj.url, {}).success(function (e) {
                return e;
            });
        };
        return _svc;
    }
}());