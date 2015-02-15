(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('Playlist', Playlist);


    Playlist.$inject = ['$rootScope', '$location', 'dataservice', 'config', 'CLIP_ON_FINISH_EVENT'];


    function Playlist($rootScope, $location, dataservice, config, CLIP_ON_FINISH_EVENT) {
        var vm = this, playListObj = {};
        vm.currentPlayListItem = {};
        vm.runNextItem = runNextItem;

        activate();

        $rootScope.$on(CLIP_ON_FINISH_EVENT, runNextItem);
        $rootScope.$watch('isLive', handleLiveStateChange);

        function activate() {
            dataservice.getPlaylist().then(function (reqData) {
                if (!reqData)
                    return;

                playListObj = buildPlayList(reqData);
                runNextItem();
            });
        }

        function buildPlayList(listData) {
            var _playListObj = {}, _playedPlayList = [], _playedPlayListName = 'playedPlayList' + config.lang.key;

            if (!localStorage.getItem(_playedPlayListName))
                localStorage.setItem(_playedPlayListName, '');

            if (listData.date == new Date().getDate()) {
                _playedPlayList = localStorage.getItem(_playedPlayListName).split(',');
            }
            angular.forEach(listData.list, function (_item, _id) {
                _playListObj[_item.id] = _item;
            });
            angular.forEach(_playedPlayList, function (_id) {
                delete _playListObj[_id];
            });
            return _playListObj;
        }


        function runNextItem() {
            var _playedPlayListName = 'playedPlayList' + config.lang.key;
            var _item = getRandomItem();
            if (!_item) {
                localStorage.setItem(_playedPlayListName, '');
                activate();
                return;
            }
            //add to deleted in the localStorage
            var _playedPlayList = localStorage.getItem(_playedPlayListName);
            localStorage.setItem(_playedPlayListName, _playedPlayList + ',' + _item.id);

            delete playListObj[_item.id];
            vm.currentPlayListItem = _item;
        }

        function getRandomItem() {
            var item, _counter = 0;
            var _randomNum = Math.floor(Math.random() * (Object.keys(playListObj).length - 1));
            angular.forEach(playListObj, function (_item) {
                if (_randomNum == _counter)
                    item = angular.copy(_item);
                _counter++;
            });
            return item;
        }

        function handleLiveStateChange(newVal, oldVal) {
            if (newVal && !oldVal) {
                $location.path('stream');
            }
        }

    }
}());