'use strict';

function kabTvOnLoadCtrl($scope, $timeout, $translate, getInitData, pageSettings, detectIE) {
    var helpImageBase = 'http://live.kab.tv/button.php?image=tech';

    getInitData.then(function (reqData) {
        pageSettings.topMenuData = reqData.data.topMenuData;
    });

    $scope.Lang = pageSettings.Lang = getLang();
    $scope.LangFullname = pageSettings.LangFullname = getLangFullname();
    $scope.dir = pageSettings.dir = getDir();
    $scope.locale = pageSettings.locale = getLocale();
    $translate.use($scope.locale);

    pageSettings.detectIE = detectIE();
    $scope.helpImage = '';

    function getLang() {
        var lang = window.location.pathname.split("/")[1] || 'HEB';
        return lang.toUpperCase();
    }

    function getLangFullname() {
        switch ($scope.Lang) {
            case 'HEB':
                return 'Hebrew';
            case 'ENG':
                return 'English';
            case 'RUS':
                return 'Russian';
            case 'SPA':
                return 'Spanish';
            case 'GER':
                return 'German';
            case 'ITA':
                return 'Italian';
            case 'FRE':
                return 'French';
            case 'POR':
                return 'Portuguese';
            default:
                return 'Hebrew';
        }
    }

    function getDir() {
        return ($scope.Lang == "HEB") ? "rtl" : "ltr";
    }

    function getLocale() {
        switch ($scope.Lang) {
            case 'HEB':
                return 'he';
            case 'ENG':
                return 'en';
            case 'RUS':
                return 'ru';
            case 'SPA':
                return 'es';
            case 'GER':
                return 'de';
            case 'ITA':
                return 'it';
            case 'FRE':
                return 'fr';
            case 'POR':
                return 'pt';
            default:
                return 'he';
        }
    }

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
}
kabTvOnLoadCtrl.$inject = ["$scope", "$timeout", "$translate", "getInitData", "pageSettings", "detectIE"];


function kabtvHeaderCtrl($scope, getHeadData, pageSettings) {
    getHeadData.then(function (reqData) {
        $scope.topMenuData = pageSettings.topMenuData;
        $scope.linksList = reqData.data;
    });
    $scope.currentLang = function (lang) {
        return (pageSettings.Lang == lang) ? "select" : "";
    };
}
kabtvHeaderCtrl.$inject = ["$scope", "getHeadData", "pageSettings"];


/*content controllers*/


function kabtvTabsCtrl($scope, $sce) {
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
            $scope.currentTabUrl = $sce.trustAsResourceUrl(url + '?lang=' + $scope.$parent.LangFullname);
        }
    }
}
kabtvTabsCtrl.$inject = ["$scope", "$sce"];


function kabtvUpdatesCtrl($scope, $sce, getUpdates) {
    getUpdates.then(function (reqData) {
        var updates = [];
        reqData.data.forEach(function(update) {
            updates.push({
                'title': $sce.trustAsHtml(update.title),
                'description': $sce.trustAsHtml(update.description),
                'url_caption': $sce.trustAsHtml(update.url_caption),
                'url': $sce.trustAsHtml(update.url)
            });
        });
        $scope.updates = updates;
    });

}
kabtvUpdatesCtrl.$inject = ["$scope", "$sce", "getUpdates"];


function kabtvAudioPlayerCtrl($scope, $element, pageSettings) {
    $scope.isPlay = false;
    $scope.isMute = false;
    $scope.toggleMute = function () {
        $scope.isMute = !$scope.isMute;
        if ($scope.isMute) {
            $scope.muteOnOff = "off";
            pageSettings.audioPlayer.mute();
        } else {
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
        } else {
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
    }

    $element.bind('$destroy', function () {
        pageSettings.audioPlayer.stop();
    });
}
kabtvAudioPlayerCtrl.$inject = ["$scope", "$element", "pageSettings"];


function kabtvPlayerCtrl($scope, $timeout, $compile, getOnlineMedia, getWMVPlayer,
                         pageSettings, getClipById, $location, $routeParams, $translate) {
    $scope.isVideo = true;
    $scope.playObj = null;
    $scope.showFullScreen = false;
    $scope.broadcastTime = '';
    var currentLang, playObj;


    currentLang = ($routeParams.mediaLang) ? $routeParams.mediaLang : $scope.Lang;
    if ($location.$$path == "/clip") {
        getClipById($routeParams.mediaId).then(
            function (reqData) {
                $scope.playerData = reqData.data;
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
            var playObj = getPlayerData(reqData.data);
            var options = {url: playObj.url, width: "100%", format: playObj.format};
            setPlayer(options);
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

    function getPlayerData(playerList, meaidType) {
        if (!playerList) return null;
        var mediaType = (typeof $routeParams.isVideo == "undefined" || $routeParams.isVideo) ? "video" : "audio";
        for (var i = 0; i < playerList.length; i++) {
            var playerData = playerList[i];
            if (playerData.media_type == mediaType &&
                (currentLang == null || playerData.language.toLowerCase() == "heb"))
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

function kabtvClipListCtrl($scope, $rootScope, $http, setClipListes, $location) {
    $scope.$http = $http;
    $scope.selectedClipList = null;

    setClipListes.then(function (reqData) {
        $scope.clipListes = reqData.data;
        $scope.selectedClipList = reqData.data[0];
    });

    $scope.runClip = function (clipData) {
        $location.path('clip/');
        $location.search({"mediaId": clipData.id});
    }
}
kabtvClipListCtrl.$inject = ["$scope", "$rootScope", "$http", "setClipListes", "$location"];

/*footer controllers*/
function kabtvFooterCtrl($scope, getFooterData) {
    getFooterData.then(function (reqData) {
        $scope.footMenuData = reqData.data;
    });
}
kabtvFooterCtrl.$inject = ["$scope", "getFooterData"];
