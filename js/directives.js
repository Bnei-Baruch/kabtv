'use strict';

kabtv.directive("kabtvOnload", function () {
    return {
        scope: {},
        templateUrl: './views/onload.html',
        controller: kabTvOnLoadCtrl
    };
});

kabtv.directive("kabtvHeader", function () {
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

kabtv.directive("kabtvUpdates", function () {
    return {
        templateUrl: 'views/updates.html',
        controller: kabtvUpdatesCtrl
    };
});

kabtv.directive("kabtvTabs", function () {
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