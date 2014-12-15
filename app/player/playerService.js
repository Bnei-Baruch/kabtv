(function () {
    'use strict';


    angular.module('kabtv.player')
        .service('ShowTime', ShowTime);

    function ShowTime() {
        return function () {
            var broadcastTime, off, d, localTime , localOffset, Jerusalem, nowtime, nowtimeHours, nowtimeMinutes;
            off = parseInt(10800000);
            d = new Date();
            localTime = d.getTime();
            localOffset = d.getTimezoneOffset() * 60000;
            Jerusalem = localTime + localOffset + off;

            nowtime = new Date(Jerusalem);
            nowtimeHours = nowtime.getHours();
            nowtimeMinutes = nowtime.getMinutes();

            if (parseInt(nowtimeHours) <= 9) {
                nowtimeHours = "0" + nowtimeHours
            }
            if (parseInt(nowtimeMinutes) <= 9) {
                nowtimeMinutes = "0" + nowtimeMinutes
            }
            broadcastTime = nowtimeHours + ":" + nowtimeMinutes;
            return broadcastTime;
        }
    }
}());
