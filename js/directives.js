kabtv.directive("kabtvHeader", function (pageSettings) {
    return {
        scope: {},
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
        controller: function ($scope) {
            $scope.updatesData =  getInitData.dataList;
        },
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
                $scope.setPlayer ({src: data.downloadIcon.url, playerType: "JWPlayer"});
            });
            $scope.$watch('isVideo', function (newVal, oldVal) {
                if (newVal == oldVal) return;
                $scope.setPlayer();
            });
        }
    };
});



kabtv.directive("kabtvClipList", function ( ) {
    return {
        scope: {},
        templateUrl: 'views/cliplist.html',
        controller: kabtvClipListCtrl,
        link: function ($scope, el, attrs) {
            $scope.$watch('selectedClipList', function (newVal, oldVal) {
                if (newVal == null) return;
                $scope.$http.get(newVal.url).then(function(res){
                    $scope.clipList =  res.data.data;
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
        link: function ($scope, el, attrs) {
           /*$scope.$watch('', function (newVal, oldVal) {
                if (newVal == null) return;
                $scope.showDialog  = true;
            }); */
        }
    };
});
