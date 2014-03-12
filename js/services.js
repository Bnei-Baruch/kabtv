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





kabtv.factory('getVideoAudio', function($http) {
  var myService = {
    video: function() {
      var promise = $http.get('./test.json').then(function (response) {
        return response.data;
      });
      return promise;
    },
    audio: function() {
      //var promise = $http.get('./test.json');
      
      return {then: function (callback){callback();}};
    }
  };
  return myService;
});
