'use strict';


function kabtvPlayerCtrl($scope, $timeout, $compile, getOnlineMedia, getWMVPlayer,
                         pageSettings, getClipById, $location, $routeParams, $translate) {
    $scope.isVideo = true;
    $scope.playObj = null;
    $scope.showFullScreen = false;
    $scope.broadcastTime = '';

    var currentLang = ($routeParams.mediaLang) ? $routeParams.mediaLang : $scope.Lang;

    if ($location.$$path == "/clip") {
        getClipById($routeParams.mediaId).then(
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
        getOnlineMedia.then(function (reqData) {
            $scope.playerData = reqData.data;
            document.title = $translate.instant('SITE_TITLE');
            var playObj = getPlayerData(reqData.data);
            setPlayer({url: playObj.url, width: "100%", format: playObj.format});
        });
    }

    function setPlayer(playObj) {
        $scope.playObj = playObj;
        if (pageSettings.audioPlayer != null) {
            pageSettings.audioPlayer.destruct();
        }
        var $el = angular.element(document.querySelector('#player'));

        switch (playObj.format.toLowerCase()) {
            case "hls":
                $el.empty();
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
            default:
                console.error('unknown media type: ' + playObj.format.toLowerCase());
        }
    }

    showTime();

    function getPlayerData(playerList, meaidType) {
        if (!playerList) return null;
        var mediaType = (typeof $routeParams.isVideo == "undefined" || $routeParams.isVideo) ? "video" : "audio";
        for (var i = 0; i < playerList.length; i++) {
            var playerData = playerList[i];
            if (playerData.media_type == mediaType &&
                (currentLang.toLowerCase() == playerData.language.toLowerCase()))
                return playerData;
        }
        return null;
    }

    function getAudioPlayer(src) {
        $scope.audioSrc = src;
        return $compile('<div kabtv-audio-player>')($scope);
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
        return (($scope.isVideo && item.media_type == 'video' ||
        !$scope.isVideo && item.media_type == 'audio') &&
        (item.language == 'HEB' ||
            item.language == 'RUS' ||
            item.language == 'ENG' ||
            item.language == 'SPA' ||
            item.language == 'GER'));
    }
}

kabtvPlayerCtrl.$inject = ["$scope", "$timeout", "$compile", "getOnlineMedia",
    "getWMVPlayer", "pageSettings", "getClipById", "$location", "$routeParams", "$translate"];

kabtv.controller("kabtvHeader", function ($scope, getHeadData, pageSettings) {
    getHeadData.then(function (reqData) {
        $scope.topMenuData = pageSettings.topMenuData;
        $scope.linksList = reqData.data;
    });
    $scope.currentLang = function (lang) {
        return (pageSettings.Lang == lang) ? "select" : "";
    };
})
.controller("kabtvMain", function($scope, $timeout, $translate, $filter, initData, pageSettings, detectIE, getFooterData) {
    var helpImageBase = 'http://live.kab.tv/button.php?image=tech';

    $scope.topMenuData = initData.topMenuData;
    $scope.Lang = pageSettings.Lang;
    $scope.LangFullname = pageSettings.LangFullname;
    $scope.dir = pageSettings.dir;
    $scope.locale = pageSettings.locale;
    $translate.use($scope.locale);
    $scope.helpImage = '';

    $scope.footMenuData = [];
    getFooterData.then(function (reqData) {
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
    };
    helpImageUpdate();
})
