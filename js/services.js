'use strict';

//var API_BASE = 'http://localhost:3000/api/';
var API_BASE = 'http://api.kab.tv/api/';

kabtv.service('initData', function () {
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
});

kabtv.service('getHeadData', ['$http', 'pageSettings', function ($http, pageSettings) {
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
}]);

kabtv.service('setClipListes', ['$http', 'pageSettings', function ($http, pageSettings) {
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

}]);

kabtv.service('setClipList', ['$http', 'pageSettings', function ($http, pageSettings) {
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

}]);

kabtv.service('getClipById', ['$http', function ($http) {
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

}]);
kabtv.service('getFooterData', ['$http', 'pageSettings', function ($http, pageSettings) {
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
}]);

kabtv.service('getOnlineMedia', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get(API_BASE + 'streams',
        {
            responseType: 'json', 
            headers: {
                'Accept': 'application/json'
            }
        }
    );

}]);

kabtv.service('getUpdates', ['$http', 'pageSettings', function ($http, pageSettings) {
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

}]);

kabtv.service('getWMVPlayer', ['detectIE','pageSettings', function (detectIE, pageSettings) {
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
}]);

kabtv.service("detectIE", function () {
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
});
