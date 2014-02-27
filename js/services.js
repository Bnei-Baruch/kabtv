kabtv.factory('getInitData', function (langVal) {
    var data = {
        dataList: null,
        lang: "Hebrew"
    }
    data.dataList = [
        {
            caption: 'Português',
            url: 'http://kab.tv/por/',
            title: "TV in Portuguese",
            lang: "Hebrew"
        },
        {
            caption: 'Deutsch',
            url: 'http://kab.tv/ger/',
            title: "TV in German"
        },
    ];

    data.linksList = [
        {
            caption: 'Israel site',
            url: 'http://kab.co.il/',
            title: "TV in Portuguese"
        },
        {
            caption: 'Blog',
            url: 'http://laitman.ru/',
            title: "TV in German"
        },
    ];
    return data;
});


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
