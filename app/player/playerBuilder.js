(function () {
    'use strict';


    angular.module('kabtv.player')
        .controller('PlayerBuilder', PlayerBuilder);

    PlayerBuilder.$inject = ['$location', 'ShowTime'];
    function PlayerBuilder($location, ShowTime) {
        var vm = this;

        $timeout(ShowTime, 30000);

    }
}());