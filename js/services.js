'use strict';

//var API_BASE = 'http://localhost:3000/api/';
var API_BASE = 'http://api.kab.tv/api/';
angular.module('kabtv')
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
.service('getHeadData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get(API_BASE + 'nav_links',
    	{
    		responseType: 'json', 
    		params: {
    			'lang': pageSettings.Lang, 
    			'placeholder': 'navbar'
    		},
    		 headers: {
		        'Accept': 'application/json'
		    }
    	}
	);
}])
.service('setClipListes', ['$http', 'pageSettings', function ($http, pageSettings) {
 	return $http.get(API_BASE + 'categories',
    	{
    		responseType: 'json', 
    		params: {
    			'lang': pageSettings.Lang
    		},
    		 headers: {
		        'Accept': 'application/json'
		    }
    	}
	);

}])
.service('setClipList', ['$http', 'pageSettings', function ($http, pageSettings) {
    function setClipList (id) {
        return  (
            $http.get(API_BASE + 'categories/' + id + '/vod_media',
                {
                    responseType: 'json', 
                     headers: {
                        'Accept': 'application/json'
                    }
                }
            )
        );
    }
    return setClipList;

}])
.service('getClipById', ['$http', function ($http) {
    return function (id) {
        return  (
            $http.get(API_BASE + 'vod_media/' + id,
                {
                    responseType: 'json',
                     headers: {
                        'Accept': 'application/json'
                    }
                }
            )
        );
    };

}])
.service('getFooterData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get(API_BASE + 'nav_links',
        {
            responseType: 'json',
            params: {
                'lang': pageSettings.Lang,
                'placeholder': 'footer'
            },
            headers: {
                'Accept': 'application/json'
            }
        });
}])
.service('getOnlineMedia', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get(API_BASE + 'streams',
        {
            responseType: 'json', 
            headers: {
                'Accept': 'application/json'
            }
        }
    );

}])
.service('getUpdates', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get(API_BASE + 'updates',
        {
            responseType: 'json', 
            params: {
                'lang': pageSettings.Lang
            },
             headers: {
                'Accept': 'application/json'
            }
        }
    );

}])
.service('getWMVPlayer', ['detectIE','pageSettings', function (detectIE, pageSettings) {
    return function (src) {
        var param = [];
        var contObj = angular.element("<object>").attr({
            type: "application/x-ms-wmp",
            id: "playerObj",
            name: "playerObj",
            width: "100%",
            height: "305"
        });

        if (detectIE()) {
            contObj.attr({ classid: "CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"});
        }
        param.push(
            angular.element("<param>").attr({
                name: "src",
                value: src
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "URL",
                value: src
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "controller",
                value: "true"
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "balance",
                value: false
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "autostart",
                value: "true"
            })
        );


        param.push(
            angular.element("<param>").attr({
                name: "volume",
                value: "50"
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "uiMode",
                value: "full"
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "animationAtStart",
                value: "false"
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "showDisplay",
                value: "false"
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "ShowAudioControls",
                value: true
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "ShowPositionControls",
                value: false
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "transparentAtStart",
                value: false
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "ShowControls",
                value: true
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "ShowStatusBar",
                value: true
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "ShowTracker",
                value: false
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "ClickToPlay",
                value: false
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "DisplayBackColor",
                value: "#000000"
            })
        );
        param.push(
            angular.element("<param>").attr({
                name: "DisplayForeColor",
                value: "#ffffff"
            })
        );

        for (var i = 0; i < param.length; i++) {
            contObj.append(param[i]);
        }
        pageSettings.WMVPlayer = contObj;
        return contObj;
    };
}])
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

.factory('kabtvHttpSvc', function ($http, pageSettings) {
    var _svc = {}, _param = {};
      var defParam = {
        params: {
         'lang': pageSettings.Lang, 
        }
    };

    _svc.getHeadData = function() {
        _param.params = {
            'placeholder': 'navbar'
        }
        angular.extend(_param.params, defParam.params);
        return $http.get('http://api.kab.tv/api/nav_links', _param);
    };

    _svc.setClipListes = function() {
        return $http.get('http://api.kab.tv/api/categories', defParam);
    };

    _svc.setClipList = function(id) {
        return $http.get('http://api.kab.tv/api/categories/'+id+'/vod_media');
    };
    _svc.getClipById = function(id) {
        return $http.get('http://api.kab.tv/api/vod_media/' + id);
    };
    _svc.getFooterData = function(id) {
        _param.params = {
            'placeholder': 'footer'
        }
        angular.extend(_param.params, defParam.params);
        return $http.get('http://api.kab.tv/api/nav_links', _param);
    };
    _svc.getOnlineMedia = function(id) {
        return $http.get('http://api.kab.tv/api/streams');
    };
    _svc.getUpdates = function(id) {
        return $http.get('http://api.kab.tv/api/updates', defParam);
    };
    return _svc;

});

