kabtv = angular.module('kabtv', []);

kabtv.value('pageSettings', {langVal: "Hebrew", dir: "rtl"});

kabtv.controller("kabTvCtrl", ['$scope','pageSettings', function($scope, pageSettings) {
    $scope.dir = pageSettings.dir;
}]);

kabtv.directive("kabtvHeader", ['getInitData','pageSettings', function (getInitData) {
    return {
        templateUrl: './views/header.html',
        controller: function ($scope, pageSettings) {
            $scope.topMenuData =  getInitData.dataList;
            pageSettings.langVal =  getInitData.lang;
            $scope.lang =  pageSettings.langVal;
            $scope.currentLang = function(lang) {
                var lang =  (pageSettings.langVal == lang) ? "select": "";
                return lang;
            };
                
            $scope.linksList = getInitData.linksList;

        },
    };
}]);

kabtv.directive("kabtvFooter", function (getInitData) {
    return {
        templateUrl: 'views/footer.html',
        controller: function ($scope) {
            $scope.footMenuData =  getInitData.dataList;
        },
    };
});

kabtv.directive("kabtvUpdates", function (getInitData) {
    return {
        templateUrl: 'views/updates.html',
        controller: function ($scope) {
            $scope.updatesData =  getInitData.dataList;
        },
    };
});



kabtv.directive("kabtvTabs", function (getInitData) {
    return {
        templateUrl: 'views/tabs.html',
        controller: function ($scope) {
        },
    };
});



kabtv.directive("kabtvPlayer", function (getVideoAudio, $compile) {
    return {
        replace: true,
        templateUrl: 'views/player.html',
        controller: function ($scope) {

            $scope.isVideo = false;
            var promise = getVideoAudio.audio();
            promise.then(function(d){
                $scope.data = {
                    "audio": "http://files.kabbalahmedia.info/audio/heb_o_rav_bs-akdama-zohar_2014-02-28_lesson.mp3", 
                    "video": "http://files.kabbalahmedia.info/files/heb_o_rav_bs-akdama-zohar_2014-02-28_lesson.mp4"
                };
            });
            $scope.playCont = $scope.data.audio;
            $scope.switchVideoAudio = function (isVideo) {
                $scope.isVideo = isVideo;
            };
        },
        link: function ($scope, el, attrs) {

            $scope.$watch('isVideo', function (newVal, oldVal) {
                if (newVal == oldVal) return;
                var options = {};

                if (newVal) {
                    options = {file: $scope.data.video, width: "100%"};
                } else {
                    options = {file: $scope.data.audio, height: 30, width: "100%"};
                };
                var $el = angular.element(document.querySelector('#player'));
                $el.html('');
                jwplayer("player").setup(options);

            });
        }
    };
});



kabtv.directive("kabtvClipList", function (getInitData) {
    return {
        templateUrl: 'views/cliplist.html',
        controller: function ($scope) {
            $scope.clipList =  getInitData.clipList;
        },
    };
});
