(function(kabtv){
	kabtv.filter( 'getLangFullname', function() {
		return function (lang) {
			var fullLang;
            switch (lang) {
                case 'HEB':
                	fullLang = 'Hebrew';
                	break;
                case 'ENG':
                	fullLang = 'English';
                	break;
                case 'RUS':
                	fullLang = 'Russian';
                	break;
                case 'SPA':
                	fullLang = 'Spanish';
                	break;
                case 'GER':
                	fullLang = 'German';
                	break;
                case 'ITA':
                	fullLang = 'Italian';
                	break;
                case 'FRE':
                	fullLang = 'French';
                	break;
                case 'POR':
                	fullLang = 'Portuguese';
                	break;
                default:
                    fullLang =  'Hebrew';
            }
            return fullLang;
		}
    })
    .filter('getLocale', function() {
		return function (lang) {
			var urlLang;
            switch (lang) {
                case 'HEB':
                	urlLang = 'he';
                	break;
                case 'ENG':
                	urlLang = 'en';
                	break;
                case 'RUS':
                	urlLang = 'ru';
                	break;
                case 'SPA':
                	urlLang = 'es';
                	break;
                case 'GER':
                	urlLang = 'de';
                	break;
                case 'ITA':
                	urlLang = 'it';
                	break;
                case 'FRE':
                	urlLang = 'fr';
                	break;
                case 'POR':
                	urlLang = 'pt';
                	break;
                default:
                    urlLang =  'he';
            }
            return urlLang;
		}
    })

}(angular.module('kabtv')));