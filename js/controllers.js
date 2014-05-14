function kabTvOnLoadCtrl ($scope, $timeout, getInitData, pageSettings) {
    var helpImageBase = 'http://live.kab.tv/button.php?image=tech';
    

    getInitData.then(function (reqData) {
        pageSettings.topMenuData = reqData.data.topMenuData;
    });
    $scope.showDialogSendToFriends = false;
    $scope.$on("show: send to friends", function (e, clipData) {
        $scope.showDialogSendToFriends = true;
    });
    
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
        switch ($scope.Lang)
        {
            case 'HEB': return 'he';
            case 'RUS': return 'ru';
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
kabTvOnLoadCtrl.$inject = ["$scope", "$timeout", "getInitData", "pageSettings"];


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


function kabtvPlayerCtrl ($scope, $compile, getOnlineMedia, getWMVPlayer, pageSettings) {

    $scope.isVideo = true;
    $scope.playObj = null;
    $scope.showFullScreen = false;
    var promise = getOnlineMedia;
    var currentLang;
    promise.then(function(reqData){
        currentLang = reqData.data.defaultLang;
        $scope.payerData = reqData.data;
        $scope.setPlayer(); 
    });
    $scope.videoFilter = function(item) {
        return (($scope.isVideo && item.media_type == 'video' ||
                 !$scope.isVideo && item.media_type == 'audio') &&
                (item.language == 'HEB' ||
                item.language == 'RUS' ||
                item.language == 'ENG' ||
                item.language == 'SPA' ||
                item.language == 'GER'));
    }

    $scope.switchVideoAudio = function (isVideo) {
        $scope.isVideo = isVideo;
    };

    $scope.switchPlayerLang = function (lang) {
        currentLang = lang;
        $scope.setPlayer(); 
    };

    $scope.gofs = function() {
        if ($scope.playObj == null || $scope.playObj.format.toLowerCase() != 'wmv')
            return;
        var fs_str = 'ESC ליציאה ממצב "מסך מלא" לחץ על';
        var nofs_str = 'נא להפעיל נגנ ע"מ לצפותו במסך מלא';
        var player = document.getElementById("playerObj");
        if (player && player.playState == 3) {
           alert(fs_str);
           player.fullScreen = true;
        } else {
           alert(nofs_str);
        }
    };

    $scope.setPlayer = function (playObj) {
        var options = {};
        if ($scope.isClip) {
            options = {file: playObj.url, width: "100%"};
        } else if ($scope.isVideo) {
            if (typeof playObj === "undefined") playObj = getPlayerData($scope.payerData, 'video');
            options = {file: playObj.url, width: "100%"};
        } else if (!$scope.isVideo) {
            if (typeof playObj === "undefined") playObj = getPlayerData($scope.payerData, 'audio');
            options = {file: playObj.url, height: 30, width: "100%"};
        };
        $scope.playObj = playObj;
        if (pageSettings.audioPlayer != null) {
            pageSettings.audioPlayer.destruct();            
        };
        var $el = angular.element(document.querySelector('#player'));
        $el[0].innerHTML = '';
    	switch (playObj.format.toLowerCase()) {
    		case "hls":
                options.autostart = true;
                $el.append('<div id="jwPlayerCont">');
    			jwplayer("jwPlayerCont").setup(options);
                $scope.showFullScreen = false;
    			return;
			case "wmv":
                $el.append(getWMVPlayer(playObj.url));
                $scope.showFullScreen = true;
                return;
            case "icecast":
                $el.append(getAudioPlayer(playObj.url));
                $scope.showFullScreen = false;
        };

        function getPlayerData(playerList, meaidType)
        {
            if (!playerList) return null;
            for (i=0; i<playerList.length; i++)
            {
                playerData = playerList[i];
                if (playerData.media_type == meaidType && 
                    (currentLang == null || playerData.language.toLowerCase() == currentLang.toLowerCase()))
                    return playerData;
            }
            return null;
        }

        function getAudioPlayer(src){
            $scope.audioSrc = src;
            var player = $compile( '<div kabtv-audio-player>' )( $scope );
            return player;
        };
    }
 }
kabtvPlayerCtrl.$inject = ["$scope", "$compile", "getOnlineMedia", "getWMVPlayer", "pageSettings"];



function kabtvClipListCtrl ( $scope, $rootScope, $http, setClipListes) {
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
        /*$rootscope.$emit("toget: switch to clip", clipData);*/
        $rootScope.$broadcast("action: switch to clip", clipData);
    }
}
kabtvClipListCtrl.$inject = ["$scope", "$rootScope", "$http", "setClipListes", "pageSettings"];

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
