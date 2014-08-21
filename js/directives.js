'use strict';

angular.module('kabtv')
.directive("kabtvAudioPlayer", function (kabtvHttpSvc) {
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
                if(pageSettings.audioPlayer)
                    pageSettings.audioPlayer.stop();
            });
        },
        link: function ($scope, el, attrs) {
        }
    };
})
.directive("kabtvClipList", function ( kabtvHttpSvc ) {
    return {
        scope: {},
        replace: true,
        templateUrl: 'views/cliplist.html',
        controller: function ($scope, $rootScope, $http, $location) {
            $scope.$http = $http;
            $scope.selectedClipList = null;

            kabtvHttpSvc.setClipListes().then(function (reqData) {
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
                kabtvHttpSvc.setClipList(newVal.id).then(function(res){
                    $scope.clipList =  res.data;
                });
            });
        }
    };
});