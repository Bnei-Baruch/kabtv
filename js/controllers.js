'use strict';


angular.module('kabtv')
.controller("kabtvPlayerCtrl", function($scope, $timeout, $compile, $location, $routeParams, $translate, getWMVPlayer, pageSettings, kabtvHttpSvc) {
    $scope.isVideo = true;
    $scope.playObj = null;
    $scope.showFullScreen = false;
    $scope.broadcastTime = '';
/*check stream type depend on url (isvideo and clip)*/
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
        $scope.currentPlayerLang = $routeParams.mediaLang || $scope.Lang;
        $scope.currentPlayerQuality = $routeParams.playerQuality || "high";
        kabtvHttpSvc.getOnlineMedia().then(function (reqData) {
            getEventStatus();
            $scope.playerData = reqData.data;
            $scope.playerDataQuality = setPlayerDataQuality(reqData.data);
            document.title = $translate.instant('SITE_TITLE');
            var playObj = getPlayerData(reqData.data);
            //befor we check if have DynamicGeoStreamLocator if no get default
            if(playObj.is_dynamic) {
                kabtvHttpSvc.getDynamicGeoStream(playObj).then(function (reqData) {
                    setPlayer({url: reqData.hlsUrl, width: "100%", format: "hls"});
                });
            } else {
                setPlayer({url: playObj.url, width: "100%", format: playObj.format});
            }

        });
    }
    $scope.buildDynamicGeoStream = function(url){
        setPlayer({url: url, width: "100%", format: "hls"});
    };
    //check if have online translation - if not dont show quality switcher
    var timerObj;
    function getEventStatus(){
        var timerInt = 60000;
        if ($scope.isOnlineTran === undefined) 
            timerInt = 0;
        timerObj = $timeout(function() {
            kabtvHttpSvc.getEventStatus().then(function(r){
                $scope.isOnlineTran = r.data.is_live;
                getEventStatus();
            });
        }, timerInt);
    }
    $scope.$on( "$destroy", function( event ) { 
        $timeout.cancel( timerObj ); 
    });

/*build player depend on type of stream*/
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
                    type:'hls',
                    autostart: true,
                    width: "100%"
                });
                $scope.showFullScreen = false;
                break;
            case "wmv":
                $el.append(getWMVPlayer(playObj.url));
                /*if (pageSettings.WMVPlayer == null || !pageSettings.detectIE) {
                } else {
                    pageSettings.WMVPlayer[0].close();
                    pageSettings.WMVPlayer[0].object.newMedia( playObj.url );
                    //pageSettings.WMVPlayer[0].object.URL = playObj.url;
                    pageSettings.WMVPlayer[0].object.controls.play();
                }*/
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
    function getPlayerData(playerList, mediaType) {
        if (!playerList) return null;

        var mediaType = "video";
        if (typeof $routeParams.isVideo == "undefined") {
            mediaType = pageSettings.isVideo  ? "video" : "audio";
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
    }

    function getAudioPlayer(src) {
        $scope.audioSrc = src;
        return $compile('<div kabtv-audio-player>')($scope);
    }

    function setPlayerDataQuality(data) {
        var qArr = [];
        angular.forEach(data, function(item, key){
            if (!item.quality) 
                return;
            qArr.push(item);
        });
        return qArr;
    }

    $scope.hasPlayerDataQuality = function() {
        if (!$scope.isVideo) {
            return false;
        }
        var _q = $scope.playerDataQuality || [];
        var _isHas = false;
        for (var i = 0; i < _q.length; i++) {
            if (_q[i].quality != "high" && _q[i].language == $scope.currentPlayerLang){
                _isHas = true;
                break;
            }
        };
        return _isHas;
    };
    $scope.playerQualityChange = function(quality){        
        $location.search({"mediaLang":  $scope.currentPlayerLang, "isVideo": $scope.isVideo, "playerQuality": quality});
    };

    $scope.hasAudio = function (lang){
        var _isHas = false;
        angular.forEach($scope.playerData, function(item, key){
            if(item.language ==  lang && item.media_type == "audio")
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

    function showTime() {
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

        if (parseInt(nowtimeHours) <= 9) {
            nowtimeHours = "0" + nowtimeHours
        }
        if (parseInt(nowtimeMinutes) <= 9) {
            nowtimeMinutes = "0" + nowtimeMinutes
        }
        $scope.broadcastTime = nowtimeHours + ":" + nowtimeMinutes;
        $timeout(showTime, 30000);
    }
/*full screen for wmv player*/
    $scope.gofs = function () {
        if ($scope.playObj == null || $scope.playObj.format.toLowerCase() != 'wmv')
            return;
        var fs_str = $translate.instant('PLAYER_EXIT_FULLSCREEN');
        var nofs_str = $translate.instant('PLAYER_NO_FULLSCREEN');
        var player = pageSettings.WMVPlayer[0];
        if (player && player.playState == 3) {
            alert(fs_str);
            player.fullScreen = true;
        } else {
            alert(nofs_str);
        }
    };
    $scope.videoFilter = function (item) {
        var isShow = false;
        if($scope.isVideo && item.media_type == 'video') {
            isShow = true;
            if(item.quality)
                isShow = (item.quality == "high");
        } else if (!$scope.isVideo && item.media_type == 'audio') {
            isShow = (
                item.language == 'HEB' || 
                item.language == 'RUS' || 
                item.language == 'ENG' || 
                item.language == 'SPA' || 
                item.language == 'GER'
            );    
        };
        
        return isShow;
    }
})
.controller("kabtvHeader", function ($scope, pageSettings, kabtvHttpSvc) {
    kabtvHttpSvc.getHeadData().then(function (reqData) {
        $scope.linksList = reqData.data;
    });
    $scope.isCurrentLang = function (lang) {
        return ($scope.Lang == lang) ? "select" : "";
    };
})
.controller("kabtvMain", function($scope, $timeout, $translate, $filter, initData, pageSettings, detectIE, kabtvHttpSvc) {
    var helpImageBase = 'http://live.kab.tv/button.php?image=tech';

    $scope.topMenuData = initData.topMenuData;
    $scope.Lang = pageSettings.Lang;
    $scope.LangFullname = pageSettings.LangFullname;
    $scope.dir = pageSettings.dir;
    $scope.locale = pageSettings.locale;
    $translate.use($scope.locale);
    $scope.helpImage = '';

    $scope.footMenuData = [];
    kabtvHttpSvc.getFooterData().then(function (reqData) {
        $scope.footMenuData = reqData.data;
    });

    function getHelpLang() {
        switch ($scope.Lang.toLowerCase()) {
            case 'heb':
                return 'he';
            case 'rus':
                return 'ru';
            case 'spa':
                return 'es';
        }
        return 'en';
    }

    function helpImageUpdate() {
        var date = new Date();
        $scope.helpImage = helpImageBase + '&lang=' + getHelpLang() + '&' + '&time=' + date.getTime();
        $timeout(helpImageUpdate, 60000);
    }

    helpImageUpdate();
})
.controller('kabtvTabs', function ($scope, $sce, kabtvHttpSvc) {
    $scope.tabs = ["TAB_UPDATES", "TAB_SCHEDULE", "TAB_QUESTIONS", "TAB_SKETCHES"];
    $scope.tabUrls = {
        "TAB_SCHEDULE": "http://kab.tv/tvlist_gen.php",
        "TAB_QUESTIONS": "http://kab.tv/q.php",
        "TAB_SKETCHES": "http://www.kab.tv/classboard/classboard.php"
    };

    $scope.currentTab = $scope.tabs[0];

    $scope.switchTab = function (item) {
        $scope.currentTab = item;
        var url = $scope.tabUrls[$scope.currentTab];
        if (url) {
            $scope.currentTabUrl = $sce.trustAsResourceUrl(url + '?lang=' + $scope.LangFullname);
        }
    };

    $scope.updates = [];
    kabtvHttpSvc.getUpdates().then(function (reqData) {
        var updates = [];
        reqData.data.forEach(function(update) {
            updates.push({
                'title': $sce.trustAsHtml(update.title),
                'subtitle': $sce.trustAsHtml(update.subtitle),
                'description': $sce.trustAsHtml(update.description),
                'url_caption': $sce.trustAsHtml(update.url_caption),
                'url': $sce.trustAsHtml(update.url),
                'image_url': update.image_url
            });
        });
        $scope.updates = updates;
    });
});
