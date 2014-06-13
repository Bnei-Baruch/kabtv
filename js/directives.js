'use strict';

kabtv.directive("kabtvOnload", function (pageSettings) {
    return {
        scope: {},
        templateUrl: './views/onload.html',
        controller: kabTvOnLoadCtrl
    };
});

kabtv.directive("kabtvHeader", function (pageSettings) {
    return {
        templateUrl: './views/header.html',
        controller: kabtvHeaderCtrl
    };
});

kabtv.directive("kabtvFooter", function () {
    return {
        templateUrl: 'views/footer.html',
        controller: kabtvFooterCtrl
    };
});

kabtv.directive("kabtvUpdates", function (getInitData) {
    return {
        templateUrl: 'views/updates.html',
        controller: kabtvUpdatesCtrl
    };
});

kabtv.directive("kabtvTabs", function (getInitData) {
    return {
        scope: {},
        templateUrl: 'views/tabs.html',
        controller: kabtvTabsCtrl
    };
});

kabtv.directive("kabtvAudioPlayer", function () {
    return {
        replace: true,
        templateUrl: 'views/audioPlayer.html',
        controller: kabtvAudioPlayerCtrl,
        link: function ($scope, el, attrs) {
        }
    };
});

kabtv.directive("kabtvClipList", function ( setClipList ) {
    return {
        scope: {},
        replace: true,
        templateUrl: 'views/cliplist.html',
        controller: kabtvClipListCtrl,
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

kabtv.directive('addthisToolbox', ['$timeout', function($timeout) {
    return {
        restrict : 'A',
        transclude : true,
        replace : true,
        template : '<div ng-transclude></div>',
        link : function($scope, element, attrs) {
            $timeout(function () {
                addthis.init();
                addthis.toolbox(element);
//                addthis.toolbox(element, {}, {
//                    title : $scope.playerData.title,
//                    description : $scope.playerData.description
//                });
            });
        }
    };
}]);