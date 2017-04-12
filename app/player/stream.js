(function () {
    'use strict';

    angular.module('kabtv.player')
        .controller('Stream', Stream);

    Stream.$inject = ['$scope', '$rootScope', '$routeParams', '$location', '$timeout', 'streams', 'dataservice',
        'JerusalemTime', 'config', 'logger', 'siteDescription'];

    function Stream($scope, $rootScope, $routeParams, $location, $timeout, streams, dataservice,
                    JerusalemTime, config, logger, siteDescription) {
        var vm = this;
        vm.isVideo = true;
        vm.isHLS = null;
        vm.isWMV = null;
        vm.isAudio = null;
        vm.stream = null;
        vm.audioStream = null;
        //vm.streamFormats = ['RTMP', 'HLS'];
        vm.currentPlayerLang = config.lang;
        vm.currentPlayerQuality = $routeParams.playerQuality || "high";
        vm.alternateLanguages = [];
        vm.alternateQualities = [];
        vm.hasAudio = null;
        vm.jerusalemTime = null;
        vm.jerusalemTimeTimer = null;
        vm.changeLanguage = changeLanguage;
        vm.changeQuality = changeQuality;
        vm.playVideo = playVideo;
        vm.playAudio = playAudio;
        vm.buildDynamicGeoStream = buildDynamicGeoStream;
        vm.showQualitySelection = showQualitySelection;

        activate();

        function activate() {
            if ($routeParams.mediaLang) {
                vm.currentPlayerLang = config.languages[$routeParams.mediaLang.toUpperCase()];
            }

            getJerusalemTime();

            $scope.$on("$destroy", handleDestroy);

            $rootScope.$watch('isLive', handleLiveStateChange);

            if (Object.keys(streams).length === 0) {
                //logger.info('Loading preferred streams formats');
                //dataservice.getStreamFormats().then(function (data) {
                //    logger.info('Stream formats loaded');
                //    vm.streamFormats = data
                //});

                logger.info('Loading streams from server');
                return dataservice.getStreams().then(function (data) {
                    logger.info('Streams loaded');
                    buildStreams(data);
                    identifyStreams();
                });
            } else {
                logger.info('Streams are already loaded');
                identifyStreams();
            }
            vm.siteDescription = siteDescription[config.lang.key];
        }

        function buildStreams(data) {
            angular.forEach(data, function (item, index) {
                var lang = item.language.toUpperCase();
                item.language = config.languages[lang];
                if (!streams[lang]) {
                    streams[lang] = {};
                }

                if (item.is_dynamic) {
                    item.resolved = false;
                }

                if (item.media_type == 'video') {
                    streams[lang][item.quality] = item;
                } else {
                    streams[lang]['audio'] = item;
                }
            });
        }

        function identifyStreams() {
            vm.stream = null;
            vm.alternateLanguages = [];
            vm.alternateQualities = [];

            var langStreams = streams[vm.currentPlayerLang.key];
            angular.forEach(Object.keys(langStreams), function(value, i) {
                var s = langStreams[value];
                if (value == 'audio') {
                    vm.audioStream = s;
                    vm.hasAudio = true;
                } else if (!s.is_live_only || $rootScope.isLive) {
                    if (s.quality == vm.currentPlayerQuality) {
                        vm.stream = s;
                    } else {
                        vm.alternateQualities.push(s);
                    }
                }
            });

            if (!vm.stream) {
                $location.path('playlist');
                return;
            }

            if (vm.stream.is_dynamic && !vm.stream.resolved) {
                logger.info("Loading dynamic stream for " + vm.stream.language.key + " " + vm.stream.quality);
                dataservice.getDynamicStream(vm.stream.url);
                // We can't use angular jsonp promise because our endpoint doesn't respect the JSONP protocol.
                // Allowing to set the callback name...
            }

            vm.isHLS = vm.stream.format.toLowerCase() == 'hls';
            vm.isWMV = vm.stream.format.toLowerCase() == 'wmv';

            // calc alternate stream with same quality in different languages
            angular.forEach(Object.keys(config.languages), function(value, i) {
                if (value != vm.currentPlayerLang.key) {
                    langStreams = streams[value];
                    angular.forEach(Object.keys(langStreams), function(value, i) {
                        var s = langStreams[value];
                        if (s.quality == vm.currentPlayerQuality) {
                            vm.alternateLanguages.push(s);
                        }
                    });
                }
            });

            if (!config.isVideo) {
                vm.playAudio();
            }
        }

        // This is called by the global scoped JSONP callback. DynamicGeoStreamLocator
        function buildDynamicGeoStream(r) {
            logger.info("Dynamic stream for " + vm.stream.language.key + " " + vm.stream.quality + " loaded.");
            //vm.stream.url = r.hlsUrl || r.netUrl;
            vm.stream.hlsUrl = r.hlsUrl;
            vm.stream.rtmpUrl = r.netUrl + "/" + r.streamName;
            vm.stream.resolved = true;
        }

        function getJerusalemTime() {
            vm.jerusalemTimeTimer = $timeout(function () {
                vm.jerusalemTime = JerusalemTime();
                getJerusalemTime();
            }, (vm.jerusalemTimeTimer == null) ? 0 : 30000);
        }

        function changeLanguage(lang) {
            $location.search({"mediaLang": lang.key});
        }

        function changeQuality(quality) {
            $location.search({"mediaLang": vm.currentPlayerLang.key, "playerQuality": quality});
        }

        function playVideo() {
            vm.isVideo = true;
            vm.isAudio = false;
        }

        function playAudio() {
            if (vm.hasAudio) {
                vm.isVideo = false;
                vm.isAudio = true;
            }
        }

        function showQualitySelection() {
            return (vm.isVideo &&
            ($rootScope.isLive || vm.currentPlayerLang.key == 'HEB' || vm.currentPlayerLang.key == 'RUS'));
        }

        function handleDestroy(event) {
            $timeout.cancel(vm.jerusalemTimeTimer);
        }

        function handleLiveStateChange(newVal, oldVal) {
            if (vm.currentPlayerLang.key != 'HEB' && vm.currentPlayerLang.key != 'RUS') {
                if (!newVal && oldVal) {
                    $location.path('playlist');
                }
            }
        }

    }

}());

// Geo location callback. Must be in the global scope !
function DynamicGeoStreamLocator(r){
    angular.element(document.getElementById('player')).controller().buildDynamicGeoStream(r);
}
