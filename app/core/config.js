(function() {
    'use strict';

    angular.module('app.core')
        .value('config', {
            lang: 'HEB',
            langFullname: 'Hebrew',
            locale: 'he',
            pageDirection: "rtl",
            isVideo: true,
            audioPlayer: null,
            WMVPlayer: null,
            detectIE: null,
            appTitle: 'Kab.tv',
            appErrorPrefix: '[Kab.tv Error] '
        })
        .config(configure);

    configure.$inject = ['$translateProvider'];

    function configure($translateProvider) {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (searchElement, fromIndex) {
                var k;
                if (this == null) {
                    throw new TypeError('"this" is null or not defined');
                }

                var O = Object(this);
                var len = O.length >>> 0;
                if (len === 0) {
                    return -1;
                }
                var n = +fromIndex || 0;

                if (Math.abs(n) === Infinity) {
                    n = 0;
                }
                if (n >= len) {
                    return -1;
                }
                k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
                while (k < len) {
                    if (k in O && O[k] === searchElement) {
                        return k;
                    }
                    k++;
                }
                return -1;
            };
            if (typeof String.prototype.trim !== 'function') {
                String.prototype.trim = function () {
                    return this.replace(/^\s+|\s+$/g, '');
                };
            }
        }

        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/i18n/locale-',
            suffix: '.json'
        }).preferredLanguage('he');
    }

})();