(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('Stream', Stream);


    Stream.$inject = ['$scope', 'PlayerDataService', '$location', 'config', '$translate', 'streamObj'];


    function Stream($scope, PlayerDataService, $location, config, $translate, streamObj) {
        var vm = this;
        vm.url = '11';
        //if loadeng first one - wait data from playerRun, if not - take data from variable
        if (streamObj.data)
            _init()
        else
            $scope.$on('streamInitialized', _init);

        vm.switchPlayerLang = function (lang) {
            $location.search({"mediaLang": lang.key});
        };


        function _init() {
            var _langKey;
            vm.streamObj = streamObj.data;
            _langKey = $location.$$search.mediaLang || config.lang.key;
            vm.currentPlayerLang = config.languages[_langKey.toUpperCase()];

            vm.currentPlayerQuality = $location.$$search.playerQuality || "high";
            vm.url = vm.streamObj[vm.currentPlayerLang.key][vm.currentPlayerQuality].url;
        }


        /*
         function getPlayerData(playerList, mediaType) {
         if (!playerList) return null;

         var mediaType = "video";
         if (typeof $routeParams.isVideo == "undefined") {
         mediaType = pageSettings.isVideo ? "video" : "audio";
         } else {
         mediaType = ($routeParams.isVideo === true || $routeParams.isVideo === "true") ? "video" : "audio";
         }
         var _player = null;
         $scope.isVideo = (mediaType == "video") ? true : false;
         for (var i = 0; i < playerList.length; i++) {
         var _playerData = playerList[i];
         if (_playerData.media_type == mediaType && ($scope.currentPlayerLang.toLowerCase() == _playerData.language.toLowerCase())) {
         if (mediaType == "audio") {
         _player = _playerData;
         } else if (($scope.currentPlayerQuality == _playerData.quality) || (_playerData.quality == null)) {
         _player = _playerData;
         }
         }
         }
         return _player;
         }*/

        vm.playerQualityChange = function (quality) {
            $location.search({"mediaLang": $scope.currentPlayerLang, "isVideo": $scope.isVideo, "playerQuality": quality});
        };

        /*  vm.$on("$destroy", function (event) {
         $timeout.cancel(timerObj);
         });*/
    }
}())

/*

 .controller("kabtvPlayerCtrl", function ($scope, $timeout, $compile, $location, $routeParams, $translate, getWMVPlayer, pageSettings, kabtvHttpSvc) {
 $scope.isVideo = true;
 $scope.playObj = null;
 $scope.showFullScreen = false;
 $scope.broadcastTime = '';
 */
/*check stream type depend on url (isvideo and clip)*//*

 if ($location.$$path == "/clip") {
 kabtvHttpSvc.getClipById($routeParams.mediaId).then(
 function (reqData) {
 $scope.playerData = reqData.data;
 document.title = reqData.data.title;
 setPlayer({url: reqData.data.play_url, format: reqData.data.content_type, width: "100%"});
 var config = {
 data_track_addressbar: false,
 data_track_clickback: false
 };
 var share = {
 title: $scope.playerData.title,
 description: $scope.playerData.description,
 email_vars: {description: $scope.playerData.description}
 };
 addthis.init();
 addthis.toolbox('#addthis-toolbox', config, share);
 });
 } else {
 }
 $scope.buildDynamicGeoStream = function (url) {
 setPlayer({url: url, width: "100%", format: "hls"});
 };

 */
/*build player depend on type of stream*//*

 function setPlayer(playObj) {
 $scope.playObj = playObj;
 if (pageSettings.audioPlayer != null) {
 pageSettings.audioPlayer.destruct();
 }
 var $el = angular.element(document.querySelector('#player'));

 if (pageSettings.detectIE && pageSettings.WMVPlayer != null) {
 pageSettings.WMVPlayer[0].close();
 }
 $el.empty();
 switch (playObj.format.toLowerCase()) {
 case "hls":
 $el.append('<div id="jwPlayerCont">');
 jwplayer("jwPlayerCont").setup({
 file: playObj.url,
 type: 'hls',
 autostart: true,
 width: "100%"
 });
 $scope.showFullScreen = false;
 break;
 case "wmv":
 $el.append(getWMVPlayer(playObj.url));
 */
/*if (pageSettings.WMVPlayer == null || !pageSettings.detectIE) {
 } else {
 pageSettings.WMVPlayer[0].close();
 pageSettings.WMVPlayer[0].object.newMedia( playObj.url );
 //pageSettings.WMVPlayer[0].object.URL = playObj.url;
 pageSettings.WMVPlayer[0].object.controls.play();
 }*//*

 $scope.showFullScreen = true;
 break;
 case "icecast":
 $el.append(getAudioPlayer(playObj.url));
 $scope.showFullScreen = false;
 break;
 default:
 console.error('unknown media type: ' + playObj.format.toLowerCase());
 }
 }

 showTime();
 function getAudioPlayer(src) {
 $scope.audioSrc = src;
 return $compile('<div kabtv-audio-player>')($scope);
 }


 $scope.hasAudio = function (lang) {
 var _isHas = false;
 angular.forEach($scope.playerData, function (item, key) {
 if (item.language == lang && item.media_type == "audio")
 _isHas = true;
 });
 return _isHas;
 };
 $scope.switchVideoAudio = function (isVideo) {
 $scope.isVideo = isVideo;
 $location.path('stream/');
 $location.search({"mediaLang": $scope.currentPlayerLang, "isVideo": isVideo});
 };

 $scope.switchPlayerLang = function (lang) {
 $location.search({"mediaLang": lang, "isVideo": $scope.isVideo});
 };

 $scope.getStream = function () {
 $location.path('stream/');
 $location.search({"mediaLang": $scope.currentPlayerLang, "isVideo": $scope.isVideo});
 };


 $scope.videoFilter = function (item) {
 var isShow = false;
 if ($scope.isVideo && item.media_type == 'video') {
 isShow = true;
 if (item.quality)
 isShow = (item.quality == "high");
 } else if (!$scope.isVideo && item.media_type == 'audio') {
 isShow = (
 item.language == 'HEB' ||
 item.language == 'RUS' ||
 item.language == 'ENG' ||
 item.language == 'SPA' ||
 item.language == 'GER'
 );
 }
 ;

 return isShow;
 }
 })*/
