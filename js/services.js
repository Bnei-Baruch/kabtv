kabtv.service('getInitData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('./json/onload.json');
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

kabtv.service('getTabsIframe', ['$http', function ($http) {
    return $http.get('./json/tabsiframe.json');
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



kabtv.service('getFooterData', ['$http', 'pageSettings', function ($http, pageSettings) {

    return $http.get('http://api.kab.tv/api/nav_links', {
        params: {
               'callback': 'JSON_CALLBACK',
                'lang': "HEB",//pageSettings.Lang, 
                'placeholder': 'footer',
            }
        });
   
}]);



kabtv.service('sendToFriends', function($http) {
/*    function sendPromise (params) {
        $http.
        return ;
    }
  return sendPromise;*/
});
kabtv.service('getOnlineMedia', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('http://api.kab.tv/api/streams', 
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
