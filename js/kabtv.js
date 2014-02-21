kabtv = angular.module('kabtv', []);

kabtv.directive("kabtvHeader", ['getInitData', function (getInitData) {
    return {
        templateUrl: 'views/header.html',
        controller: function ($scope) {
            $scope.topMenuData =  getInitData.dataList;
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


