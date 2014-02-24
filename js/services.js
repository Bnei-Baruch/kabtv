kabtv.factory('getInitData', function () {
    var data = {
        dataList: null,
    }
    data.dataList = [
        {
            caption: 'Português',
            url: 'http://kab.tv/por/',
            title: "TV in Portuguese"
        },
        {
            caption: 'Deutsch',
            url: 'http://kab.tv/ger/',
            title: "TV in German"
        },
    ]
    return data;
});


kabtv.factory('getVideoAudio', function($http) {
  var myService = {
    video: function() {
      var promise = $http.get('test.json').then(function (response) {
        return response.data;
      });
      return promise;
    },
    audio: function() {
      var promise = $http.get('test.json').then(function (response) {
        // return response.data;
        return {'audio': "http://icecast.kab.tv/radiozohar2014.mp3"};
      });
      return promise;
    }
  };
  return myService;
});

app.controller('MainCtrl', function( myService,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  myService.async().then(function(d) {
    $scope.data = d;
  });
});