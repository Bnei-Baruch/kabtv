'use strict';


angular.module('kabtv')
/*data that using on start*/
.service('initData', function () {
    return {
        "topMenuData": [
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
        ]
    };
})
/*build WMV player - temp*/
.service('getWMVPlayer', ['detectIE','pageSettings', function (detectIE, pageSettings) {
    return function (src) {
        var attrs = {
            id: "playerObj",
            name: "playerObj",
            width: "100%",
            height: "305"
        };

        var params = {
            autostart: "true",
            controller: "true",
            volume: "50",
            uiMode: "full",
            animationAtStart: "true",
            showDisplay: "false",
            ShowAudioControls: "true",
            ShowPositionControls: "false",
            transparentAtStart: "false",
            ShowControls: "true",
            ShowStatusBar: "true",
            ShowTracker: "false",
            ClickToPlay: "false",
            DisplayBackColor: "#000000",
            DisplayForeColor: "#ffffff",
            balance: "false"
        };

        if (detectIE()) {
            attrs['classid'] = "CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6";
            attrs['style'] = "background-color: #000000;";
            params['url'] = src;
            params['enabled'] = "true";
            params['mute'] = "false";
            params['bgcolor'] = "#000000";
            params['windowlessVideo'] = "1";
        } else {
            attrs['type'] = "application/x-ms-wmp";
            params['src'] = src;
        }

        var contObj = angular.element("<object>").attr(attrs);
        for (var p in params) {
            if (params.hasOwnProperty(p)) {
                contObj.append(angular.element("<param>").attr({name: p, value: params[p]}));
            }
        }

        pageSettings.WMVPlayer = contObj;
        return contObj;
    };
}])
/*check type of brouser*/
.service("detectIE", function () {
    return function () {
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
    };
})
/*REST API services*/
.factory('kabtvHttpSvc', function ($http, pageSettings) {
    var _svc = {}, _param = {};

    //var API_BASE = 'http://localhost:3000/api/';
    var API_BASE = 'http://cryptic-thicket-2657.herokuapp.com/api/';
//    var API_BASE = 'http://kab.tv/api/';
    var defParam = {
        params: {
         'lang': pageSettings.Lang
        }
    };

    _svc.getHeadData = function() {
        _param.params = {
            'placeholder': 'navbar'
        };
        angular.extend(_param.params, defParam.params);
        return $http.get(API_BASE + 'nav_links', _param);
    };

    _svc.setClipListes = function() {
        return $http.get(API_BASE + 'categories', defParam);
    };

    _svc.setClipList = function(id) {
        return $http.get(API_BASE + 'categories/'+id+'/vod_media');
    };
    _svc.getClipById = function(id) {
        return $http.get(API_BASE + 'vod_media/' + id);
    };
    _svc.getFooterData = function(id) {
        _param.params = {
            'placeholder': 'footer'
        };
        angular.extend(_param.params, defParam.params);
        return $http.get(API_BASE + 'nav_links', _param);
    };
    _svc.getOnlineMedia = function(id) {
        return $http.get(API_BASE + 'streams');
        //return $http.get('C:\Users\davgur\Desktop\test_json.txt');
    };
    _svc.getUpdates = function(id) {
        return $http.get(API_BASE + 'updates', defParam);
    };
    return _svc;

});

