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
        controller: kabtvFooterCtrl,
    };
});

kabtv.directive("kabtvUpdates", function (getInitData) {
    return {
        templateUrl: 'views/updates.html',
        controller: kabtvUpdatesCtrl,
    };
});

kabtv.directive("kabtvTabs", function (getInitData) {
    return {
        scope: {},
        templateUrl: 'views/tabs.html',
        controller: kabtvTabsCtrl,
    };
});

kabtv.directive("kabtvPlayer", function () {
    return {
        replace: true,
        templateUrl: 'views/player.html',
        controller: kabtvPlayerCtrl,
        link: function ($scope, el, attrs) {
            $scope.$on("action: switch to clip", function (e, data) {
                $scope.isClip = true;
                $scope.clipData = data;
                $scope.setPlayer ({src: data.play_url, streamType: data.content_type});
            });
            $scope.$watch('isVideo', function (newVal, oldVal) {
                if (newVal == oldVal) return;
                $scope.setPlayer();
            });
        }
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

kabtv.directive("kabtvSendToFriends", function ( ) {
    return {
        templateUrl: 'views/sendToFriends.html',
        scope: {'showDialog': '=ngShow'},
        controller: sendToFriendsCtrl,
        link: function ($scope, el, attrs) {}
    };
});
