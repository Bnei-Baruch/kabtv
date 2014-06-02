'use strict';

kabtv.service('getInitData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('./js/onload.json');
}]);

kabtv.service('getHeadData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('http://api.kab.tv/api/nav_links', 
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
 	return $http.get('http://api.kab.tv/api/categories', 
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
            $http.get('http://api.kab.tv/api/categories/'+id+'/vod_media', 
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
            $http.get('http://api.kab.tv/api/vod_media/' + id,
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
    return $http.get('http://api.kab.tv/api/nav_links', {
        params: {
               'callback': 'JSON_CALLBACK',
                'lang': pageSettings.Lang, 
                'placeholder': 'footer'
            }
        });
}]);

kabtv.service('getOnlineMedia', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('http://api.kab.tv/api/streams', 
        {
            responseType: 'json', 
            headers: {
                'Accept': 'application/json'
            }
        }
    );

}]);

kabtv.service('getUpdates', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('http://api.kab.tv/api/updates', 
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
