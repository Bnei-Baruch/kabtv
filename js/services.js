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
		        'Content-Type': 'application/json'
		    }
    	}
	);
}]);

kabtv.service('getTabsIframe', ['$http', function ($http) {
    return $http.get('./json/tabsiframe.json');
}]);

kabtv.service('getUpdates', ['$http', 'pageSettings', function ($http, pageSettings) {
        return $http.get('http://api.kab.tv/api/updates', 
        {
            responseType: 'json', 
            params: {
                'lang': pageSettings.Lang
            },
             headers: {
                'Content-Type': 'application/json'
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
		        'Content-Type': 'application/json'
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
                        'Content-Type': 'application/json'
                    }
                }
            )
        );
    }
    return setClipList;

}]);




kabtv.service('getFooterData', ['$http', 'pageSettings', function ($http, pageSettings) {
   return $http.get('http://api.kab.tv/api/nav_links', 
        {
            responseType: 'json', 
            params: {
                'lang': pageSettings.Lang, 
                'placeholder': 'footer'
            },
             headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}]);


kabtv.service('getOnlineMedia', function($http) {
  return $http.get('./json/onlineMedia.json');
});

kabtv.service('sendToFriends', function($http) {
/*    function sendPromise (params) {
        $http.
        return ;
    }
  return sendPromise;*/
});
