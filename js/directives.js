kabtv = angular.module('kabtv', []).value('langVal', "Hebrew");

kabtv.directive("kabtvHeader", ['getInitData', function (getInitData, langVal) {
    return {
        templateUrl: './views/header.html',
        controller: function ($scope, langVal) {
            $scope.topMenuData =  getInitData.dataList;
            langVal =  getInitData.lang;
            $scope.lang =  langVal;
            $scope.currentLang = function(lang) {
                var lang =  (langVal == lang) ? "select": "";
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



/*kabtv.directive("kabtvPlayer", function () {
    return {
        templateUrl: 'views/player.html',
        controller: function ($scope) {
            
        },
    };
});*/

kabtv.directive("kabtvPlayer", function (getVideoAudio, $compile) {
    return {
        replace: true,
        templateUrl: 'views/player.html',
        controller: function ($scope) {

            $scope.isVideo = false;
            var promise = getVideoAudio.audio();
            promise.then(function(d){
                $scope.data = {"audio": "http://icecast.kab.tv/radiozohar2014.mp3", "video": "http://streams.kab.tv/heb.asx"};
            });
            $scope.playCont = $scope.data.audio;
            $scope.switchVideoAudio = function (isVideo) {
                $scope.isVideo = isVideo;
            };
        },
        link: function ($scope, el, attrs) {

            $scope.$watch('isVideo', function (newVal, oldVal) {
                if (newVal == oldVal) return;
                var player = null;
                if (newVal) {
                    player = document.createElement('video');
                    player.poster = $scope.data.video;
                } else {
                    player = document.createElement('audio');
                    player.src = $scope.data.audio;
                };
                player = $compile(angular.element(player))($scope);
                var $el = angular.element(document.querySelector('#id'));
                $el.html('');
                $el.append(player);

            });
        }
    };
});


