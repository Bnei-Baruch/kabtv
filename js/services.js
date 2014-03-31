kabtv.service('getInitData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('./json/onload.json');
}]);
kabtv.service('getHeadData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.jsonp('http://api.kab.tv/api/nav_links', 
    	{
    		responseType: 'json', 
    		params: {
    			'lang': pageSettings.langVal, 
    			'placeholder': 'navbar'
    		},
    		 headers: {
		        'Content-Type': 'application/json'
		    }
    	}
	);
}]);

kabtv.service('getTabsIframe', ['$http', function ($http) {
    return $http.get('./json/tabsiframe.json');
}]);


kabtv.service('setClipListes', ['$http', function ($http) {
    return $http.get('./json/cliplistes.json');
}]);


kabtv.service('getFooterData', ['$http', function ($http) {
    return $http.get('./json/footer.json');
}]);


kabtv.service('getOnlineMedia', function($http) {
  return $http.get('./json/onlineMedia.json');
});
