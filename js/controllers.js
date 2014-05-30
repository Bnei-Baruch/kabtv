function kabTvOnLoadCtrl ($scope, $timeout, getInitData, pageSettings, detectIE) {
    var helpImageBase = 'http://live.kab.tv/button.php?image=tech';
    

    getInitData.then(function (reqData) {
        pageSettings.topMenuData = reqData.data.topMenuData;
    });
    $scope.showDialogSendToFriends = false;
    $scope.$on("show: send to friends", function (e, clipData) {
        $scope.showDialogSendToFriends = true;
    });
    
    pageSettings.detectIE = detectIE();
    $scope.Lang = pageSettings.Lang =  setLang();
    $scope.dir = pageSettings.dir = setDir();
    $scope.helpImage = '';

    function setLang () {
        var url = window.location.href.split("//")[1];
        var lang = url.split("/")[1].toUpperCase();
      //  return lang;
       return "HEB";
    };
    function setDir() {
        var dir = ($scope.Lang == "HEB") ? "rtl" : "ltr";
        return dir;
    };
    function getTopMenuData (){
    }
    function getHelpLang(){
        switch ($scope.Lang.toLowerCase())
        {
            case 'heb': return 'he';
            case 'rus': return 'ru';
            case 'spa': return 'es';
        }
        return 'en';
    }
    function helpImageUpdate(){
        var date = new Date();
        $scope.helpImage = helpImageBase + '&lang=' +  getHelpLang() + '&' + '&time=' + date.getTime();
        $timeout(helpImageUpdate, 60000);
    }
    helpImageUpdate();
}
kabTvOnLoadCtrl.$inject = ["$scope", "$timeout", "getInitData", "pageSettings", "detectIE"];


function kabtvHeaderCtrl ($scope, getHeadData, pageSettings) {
    getHeadData.then(function (reqData) {
        $scope.topMenuData =  pageSettings.topMenuData;
        $scope.linksList = reqData.data;
    });
    $scope.currentLang = function(lang) {
        var lang =  (pageSettings.Lang == lang) ? "select": "";
        return lang;
    };
}
kabtvHeaderCtrl.$inject = ["$scope", "getHeadData", "pageSettings"];


/*content controllers*/


function kabtvTabsCtrl ($scope, getTabsIframe, $compile) {
    getTabsIframe.then(function(reqData){
        $scope.tabs = reqData.data.data;
        $scope.switchTab(reqData.data.data[0]);
        $scope.currentTab = reqData.data.defaultTab;
    });
    var $el = angular.element(document.querySelector('#asideTabIframe .forIframe'));
    $scope.switchTab = function (item, index){
        $scope.currentTab = index;
        var attrebuts = {"frameborder": 0,"src": item.url};
        if (item.id == "questions") {attrebuts.scrolling = "no"};
        var setHtml = angular.element("<iframe>").attr(attrebuts);

        /*if (item.id == "updates") {
            setHtml = $compile(angular.element("<div kabtv-updates>"))($scope);
        };*/
        $el.html('');
        $el.append(setHtml);
    }
}
kabtvTabsCtrl.$inject = ["$scope", "getTabsIframe", "$compile"];



function kabtvUpdatesCtrl ($scope, getUpdates) {
    getUpdates.then(function(reqData){
        $scope.tabs = reqData.data.data;
    });
 
}
kabtvUpdatesCtrl.$inject = ["$scope", "getUpdates"];


function kabtvAudioPlayerCtrl ($scope, $element, pageSettings) {
    $scope.isPlay = false;
    $scope.isMute = false;
    $scope.toggleMute = function () {
        $scope.isMute = !$scope.isMute;
        if ($scope.isMute) {
            $scope.muteOnOff = "off";
            pageSettings.audioPlayer.mute();
        }else{
            $scope.muteOnOff = "on";
            pageSettings.audioPlayer.unmute();
        }
    };
    $scope.togglePlay = function () {
        $scope.isPlay = !$scope.isPlay;
         if ($scope.isPlay) {
            $scope.playOnOff = "off";
            pageSettings.audioPlayer = soundManager.createSound({ 
              url: $scope.audioSrc, 
              autoPlay: true
            }); 
        }else{
            $scope.playOnOff = "on";
           pageSettings.audioPlayer.destruct();
        }
    };


   if (pageSettings.audioPlayer === null) {
        $scope.togglePlay();
    } else {
        pageSettings.audioPlayer.url = $scope.audioSrc;
        $scope.isPlay = false;
        $scope.togglePlay();
    };

    $element.bind('$destroy', function(){
        pageSettings.audioPlayer.stop();
    });
};
kabtvAudioPlayerCtrl.$inject = ["$scope", "$element", "pageSettings"];


function kabtvPlayerCtrl ($scope, $timeout, $compile, getOnlineMedia, getWMVPlayer, pageSettings, getClipById, $location, $routeParams) {
    $scope.isVideo = true;
    $scope.playObj = null;//TODO: make this local
    $scope.showFullScreen = false;
    $scope.broadcastTime = '';
    var currentLang, playObj;



    currentLang = ($routeParams.mediaLang)? $routeParams.mediaLang: $scope.Lang;
    if ($location.$$path == "/clip") {
        getClipById($routeParams.mediaId).then(
            function (reqData) {
                $scope.playerData = reqData.data;
                setPlayer({url: reqData.data.play_url, format: reqData.data.content_type , width: "100%"});
        });
     } else {
        getOnlineMedia.then(function(reqData){
            $scope.playerData = reqData.data;
            var playObj = getPlayerData(reqData.data);
            var options = {url: playObj.url, width: "100%", format: playObj.format};
            setPlayer(options); 
        });
    };


    function setPlayer (playObj) {
        $scope.playObj = playObj;
        if (pageSettings.audioPlayer != null) {
            pageSettings.audioPlayer.destruct();            
        };
        var $el = angular.element(document.querySelector('#player'));

    	switch (playObj.format.toLowerCase()) {
    		case "hls":
                $el.empty();
                playObj.autostart = true;
                $el.append('<div id="jwPlayerCont">');
    			jwplayer("jwPlayerCont").setup(playObj);
                $scope.showFullScreen = false;
    			break;
			case "wmv":
                if (pageSettings.WMVPlayer == null || !pageSettings.detectIE) {
                    $el.empty();
                    $el.append(getWMVPlayer(playObj.url));
                } else {
                    pageSettings.WMVPlayer[0].object.URL = playObj.url;
                }
                $scope.showFullScreen = true;
                break;
            case "icecast":       
                $el.empty();
                $el.append(getAudioPlayer(playObj.url));
                $scope.showFullScreen = false;
                break;
        }
    }
    showTime();

    function getPlayerData(playerList, meaidType)
    {
        if (!playerList) return null;
        var mediaType = (typeof $routeParams.isVideo == "undefined" || $routeParams.isVideo) ? "video": "audio";
        for (i=0; i<playerList.length; i++)
        {
            var playerData = playerList[i];
            if (playerData.media_type == mediaType && 
                (currentLang == null || playerData.language.toLowerCase() == currentLang.toLowerCase()))
                return playerData;
        }
        return null;
    }

    function getAudioPlayer(src){
        $scope.audioSrc = src;
        var player = $compile( '<div kabtv-audio-player>' )( $scope );
        return player;
    }




    $scope.switchVideoAudio = function (isVideo) {
        $location.path('stream/');
        $location.search({"mediaLang": currentLang, "isVideo": isVideo});
    };

    $scope.switchPlayerLang = function (lang) {
       currentLang = lang;
        $location.search({"mediaLang": lang, "isVideo": $scope.isVideo});
    };
     $scope.getStream = function () {
        $location.path('stream/');
        $location.search({"mediaLang": currentLang, "isVideo": $scope.isVideo});
     }


    function showTime () {
        if ($scope.isClip)
         return;

        var off = parseInt(10800000);
        var d = new Date();
        var localTime = d.getTime();
        var localOffset = d.getTimezoneOffset() * 60000;
        var Jerusalem = localTime + localOffset + off;

        var nowtime = new Date(Jerusalem);
        var nowtimeHours = nowtime.getHours();
        var nowtimeMinutes = nowtime.getMinutes();

        if (parseInt(nowtimeHours) <= 9) { var nowtimeHours = "0" + nowtimeHours }
        if (parseInt(nowtimeMinutes) <= 9) { var nowtimeMinutes = "0" + nowtimeMinutes }
        $scope.broadcastTime = nowtimeHours + ":" + nowtimeMinutes;
        $timeout(showTime, 30000);
    }

    $scope.gofs = function() {
        if ($scope.playObj == null || $scope.playObj.format.toLowerCase() != 'wmv')
            return;
        var fs_str = 'ESC ליציאה ממצב "מסך מלא" לחץ על';
        var nofs_str = 'נא להפעיל נגנ ע"מ לצפותו במסך מלא';
        var player = pageSettings.WMVPlayer[0];
        if (player && player.playState == 3) {
           alert(fs_str);
           player.fullScreen = true;
        } else {
           alert(nofs_str);
        }
    };
    $scope.videoFilter = function(item) {
        return (($scope.isVideo && item.media_type == 'video' ||
            !$scope.isVideo && item.media_type == 'audio') &&
            (item.language == 'HEB' ||
            item.language == 'RUS' ||
            item.language == 'ENG' ||
            item.language == 'SPA' ||
            item.language == 'GER'));
    }
 }

kabtvPlayerCtrl.$inject = ["$scope", "$timeout", "$compile", "getOnlineMedia", "getWMVPlayer", "pageSettings", "getClipById", "$location", "$routeParams"];

function kabtvClipListCtrl ( $scope, $rootScope, $http, setClipListes, $location) {
    $scope.$http = $http;
    $scope.selectedClipList = null;
    $scope.sendToFriends = function () {
        $scope.$emit("show: send to friends", "clipData");
    };

    setClipListes.then(function (reqData) {
        $scope.clipListes =  reqData.data;
        $scope.selectedClipList = reqData.data[0];
    }); 
   
    $scope.runClip = function (clipData) {
        $location.path('clip/');
        $location.search({"mediaId": clipData.id});
    }
}
kabtvClipListCtrl.$inject = ["$scope", "$rootScope", "$http", "setClipListes", "$location"];

function sendToFriendsCtrl ( $scope, $http, setSendToFriend) {
    $scope.showDialog = false;
    $scope.closeWindow = function () {
        $scope.showDialog = false;
    }
    $scope.sendData = {
        to: "111",
        email: "111",
        sendTo: "111",
        message: "111"

    }
    $scope.sendToFriendSubmit = function () {
        setSendToFriend($scope.sendData)
        .success(function(data, status, headers, config){
            $scope.closeWindow();
        })
        .error(function(data, status, headers, config) {
            alert("Error");
        });
    }
}
sendToFriendsCtrl.$inject = ["$scope", "$http", "setSendToFriend"];



/*footer controllers*/
function kabtvFooterCtrl ($scope, getFooterData) {
     getFooterData.then(function(reqData){
        $scope.footMenuData =  reqData.data;
     });
 }
kabtvFooterCtrl.$inject = ["$scope", "getFooterData"];
