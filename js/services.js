kabtv.factory('getInitData', function () {
	var data = {
		dataList: null,
	}
	data.dataList = [
        {
            caption: 'Português',
            url: 'http://kab.tv/por/',
            title: "TV in Portuguese"
        },
        {
            caption: 'Deutsch',
            url: 'http://kab.tv/ger/',
            title: "TV in German"
        },
    ]
	return data;
});