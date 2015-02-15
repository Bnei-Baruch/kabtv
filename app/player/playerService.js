(function () {
    'use strict';


    angular.module('kabtv.player')
        .service('JerusalemTime', JerusalemTime);

    function JerusalemTime() {
        return function () {
            // Jerusalem time = localTime + localOffset + Jerusalem offset;
            var jarusalemOffset = 2 * 60 * 60 * 1000;
            var now = new Date();
            var jerusalem = now.getTime() + now.getTimezoneOffset() * 60000 + jarusalemOffset;

            var jerusalemNow = new Date(jerusalem);
            var hours = jerusalemNow.getHours();
            var minutes = jerusalemNow.getMinutes();

            if (parseInt(hours) <= 9) {
                hours = "0" + hours
            }
            if (parseInt(minutes) <= 9) {
                minutes = "0" + minutes
            }

            return hours + ":" + minutes;
        }
    }
}());
