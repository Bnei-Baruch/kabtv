function kabTvOnLoadCtrl ($scope,  getInitData, pageSettings) {
    getInitData.then(function (reqData) {
        pageSettings.topMenuData = reqData.data.topMenuData;
    });
    $scope.showDialogSendToFriends = false;
    $scope.$on("show: send to friends", function (e, clipData) {
        $scope.showDialogSendToFriends = true;
    });
    
    $scope.Lang = pageSettings.Lang =  setLang();
    $scope.dir = pageSettings.dir = setDir();

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

}
kabTvOnLoadCtrl.$inject = ["$scope", "getInitData", "pageSettings"];


function kabtvHeaderCtrl ($scope, getHeadData, pageSettings) {
    getHeadData.then(function (reqData) {
        //$scope.lang =  reqData.data.lang;
        $scope.topMenuData =  pageSettings.topMenuData;
        $scope.linksList = reqData.data;
    });
    $scope.currentLang = function(lang) {
        var lang =  (pageSettings.langVal == lang) ? "select": "";
        return lang;
    };
}
kabtvHeaderCtrl.$inject = ["$scope", "getHeadData", "pageSettings"];


/*content controllers*/


function kabtvTabsCtrl ($scope, getTabsIframe, $compile) {
    getTabsIframe.then(function(reqData){
        $scope.tabs = reqData.data.data;
        $scope.switchTab(reqData.data.data[1]);
        $scope.currentTab = reqData.data.defaultTab;
    });
    var $el = angular.element(document.querySelector('#asideTabIframe .forIframe'));
    $scope.switchTab = function (item, index){
        $scope.currentTab = index;
        var attrebuts = {"frameborder": 0,"src": item.url};
        if (item.id == "questions") {attrebuts.scrolling = "no"};
        var setHtml = angular.element("<iframe>").attr(attrebuts);

        if (item.id == "updates") {
            setHtml = $compile(angular.element("<div kabtv-updates>"))($scope);
        };
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
           // pageSettings.audioPlayer.play();
        }else{
            $scope.playOnOff = "on";
           // pageSettings.audioPlayer.stop();
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


function kabtvPlayerCtrl ($scope, $compile, getOnlineMedia, getWMVPlayer) {

    $scope.isVideo = true;
    var promise = getOnlineMedia;
    var currentLang;
    var defaultLangList = ['HEB','RUS','ENG','SPA','GER'];
    promise.then(function(reqData){
        currentLang = reqData.data.defaultLang;
        $scope.payerData = reqData.data;
        $scope.setPlayer(); 
    });
    $scope.switchVideoAudio = function (isVideo) {
        $scope.isVideo = isVideo;
    };

    $scope.switchPlayerLang = function (lang) {
        // if (reqData.data[lang]) {};
        currentLang = lang;
        $scope.setPlayer(); 
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

        var $el = angular.element(document.querySelector('#player'));
        $el[0].innerHTML = '';
    	switch (playObj.format.toLowerCase()) {
    		case "hls":
                options.autostart = true;
                $el.append('<div id="jwPlayerCont">');
    			jwplayer("jwPlayerCont").setup(options);
    			return;
			case "wmv":
                $el.append(getWMVPlayer(playObj.url));
                return;
            case "icecast":
                $el.append(getAudioPlayer(playObj.url));
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
kabtvPlayerCtrl.$inject = ["$scope", "$compile", "getOnlineMedia", "getWMVPlayer"];



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

function sendToFriendsCtrl ( $scope, $http) {
    $scope.showDialog = false;
    $scope.closeWindow = function () {
        $scope.showDialog = false;
    }
    $scope.sendData = {
        sendTo: "111",
        email: "111",
        sendTo: "111",
        message: "111"

    }
    $scope.submit = function () {

    }
}
sendToFriendsCtrl.$inject = ["$scope", "$http", "sendToFriends"];



/*footer controllers*/
function kabtvFooterCtrl ($scope, getFooterData) {
     getFooterData.then(function(reqData){
        $scope.footMenuData =  reqData.data;
     });
 }
kabtvFooterCtrl.$inject = ["$scope", "getFooterData"];
