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
    data.clipList = [{
        content: {
            url: "?item=3478",
            img: {
                url: "http://files.kab.tv/vod/heb/shlavei_sulam/heb_o_rav_tohnit_bb_shelavei-a-sulam2.jpg",
                title: "לגלות את האור"
            },
            text: {
                title: "לגלות את האור",
                text: "מה מרגיש מקובל ברגע גילוי האור? האם זה נעים? מפחיד? איך אנחנו יכולים להכין עצמנו לרגע העצום הזה? אורן לוי לא מוותר לרב לייטמן ושואל את כל השאלות שהיינו רוצים לשאול. הכינו את הכלים"
            }
        },
        sendIcon: {
            title: "שלח/י לחבר",
            src: "images/send.gif"
        },
        downloadIcon: {
            url: "http://files.kab.tv/vod/heb/shlavei_sulam/heb_o_rav_2008-06-27_tohnit_bb_shelavei-a-sulam_or.wmv",
            
            img: {
                title: "הורד קובץ",
                src: "images/save.gif"
            }
        },
        clipData: {
            length: "00:31:50",
            size: "3Mb",
        }
    }];
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
