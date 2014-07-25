'use strict';

/*
kabtv.directive("kabtvOnload", function () {
    return {
        scope: {},
        templateUrl: 'views/onload.html',
        controller: function($scope, $timeout, $translate, $filter, initData, pageSettings, detectIE) {
            var helpImageBase = 'http://live.kab.tv/button.php?image=tech';

            pageSettings.topMenuData = initData.topMenuData;

            $scope.Lang = pageSettings.Lang = getLang();
            $scope.LangFullname = pageSettings.LangFullname = $filter('getLangFullname')($scope.Lang);
            $scope.dir = pageSettings.dir = getDir();
            $scope.locale = pageSettings.locale = $filter('getLocale')($scope.Lang);
            $translate.use($scope.locale);

            pageSettings.detectIE = detectIE();
            $scope.helpImage = '';

            function getLang() {
                var lang = window.location.pathname.split("/")[1] || 'HEB';
                return lang.toUpperCase();
            }

            function getDir() {
                return ($scope.Lang == "HEB") ? "rtl" : "ltr";
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
            };
            helpImageUpdate();
        }
    };
});
kabtv.directive("kabtvHeader", function () {
    return {
        templateUrl: 'views/header.html',
        controller: function ($scope, getHeadData, pageSettings) {
            getHeadData.then(function (reqData) {
                $scope.topMenuData = pageSettings.topMenuData;
                $scope.linksList = reqData.data;
            });
            $scope.currentLang = function (lang) {
                return (pageSettings.Lang == lang) ? "select" : "";
            };
        }
    };
});

kabtv.directive("kabtvFooter", function () {
    return {
        templateUrl: 'views/footer.html',
        controller: function ($scope, getFooterData) {
            getFooterData.then(function (reqData) {
                $scope.footMenuData = reqData.data;
            });
        }
    };
});
*/
kabtv.directive("kabtvUpdates", function () {
    return {
        templateUrl: 'views/updates.html',
        controller: function ($scope, $sce, getUpdates) {
            $scope.updates = [];
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
    };
});

kabtv.directive("kabtvTabs", function () {
    return {
        scope: {},
        templateUrl: 'views/tabs.html',
        controller: function ($scope, $sce) {
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
    };
});

kabtv.directive("kabtvAudioPlayer", function () {
    return {
        replace: true,
        templateUrl: 'views/audioPlayer.html',
        controller: function ($scope, $element, pageSettings) {
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
                    soundManager.setup({
                        'url': "lib/soundmanager/swf",
                        'onready': function() {
                            pageSettings.audioPlayer = soundManager.createSound({
                                'id': "kabtvAudioPlayer",
                                'url': $scope.audioSrc
                            });
                            pageSettings.audioPlayer.play();
                          }
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
        },
        link: function ($scope, el, attrs) {
        }
    };
});

kabtv.directive("kabtvClipList", function ( setClipList ) {
    return {
        scope: {},
        replace: true,
        templateUrl: 'views/cliplist.html',
        controller: function ($scope, $rootScope, $http, setClipListes, $location) {
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
        },
        link: function ($scope, el, attrs) {
            $scope.$watch('selectedClipList', function (newVal, oldVal) {
                if (newVal == null) return;
                setClipList(newVal.id).then(function(res){
                    $scope.clipList =  res.data;
                });
            });
        }
    };
});