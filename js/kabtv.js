kabtv = angular.module('kabtv', []);

kabtv.directive("kabtvHeader", function () {
    return {
        scope: {},
        controller: function ($scope) {
            function getJson() {
                return [
                    {
                        caption: 'link 1',
                        url: 'http://blalba.com/1'
                    },
                    {
                        caption: 'link 2',
                        url: 'http://blalba.com/2'
                    },
                ];
            }
            $scope.data =  getJson();
        },
        templateUrl: 'views/header.html'
    };
});

kabtv.directive("kabtvFooter", function () {
    return {
        template: 'hello footer: {{ 8+8+8 }}'
    };
});


kabtv.directive("kabtvTabs", function () {
    return {
        template: 'tabs plugin here'
    };
});


