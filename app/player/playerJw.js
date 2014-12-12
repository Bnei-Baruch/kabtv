(function () {
    'use strict';


    angular.module('kabtv.player')
        .directive('kabtvPlayer', playerBuilder);


    function playerBuilder() {
        var dirObj = {
            scope: {
                url: "=dataUrl"
            },
            template: '<div id="jwPlayerCont"></div>',
            controller: playerBuilder
        }
    }

    PlayerBuilder.$inject = ['el'];
    function PlayerBuilder(el) {
        var vm = this;

        jwplayer("jwPlayerCont").setup({
            file: url,
            type: 'hls',
            autostart: true,
            width: "100%"
        });
        vm.showFullScreen = false;
    }
}());