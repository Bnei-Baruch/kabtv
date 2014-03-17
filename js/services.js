kabtv.service('getInitData', ['$http', 'pageSettings', function ($http, pageSettings) {
    return $http.get('./json/onload.json');
}]);
kabtv.service('getHeadData', ['$http', function ($http) {
    return $http.get('./json/head.json');
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
