function kabTvLoadCtrl ($scope,  getInitData, pageSettings) {
    getInitData.then(function (res) {
    	$scope.dir = res.data.dir;
    	pageSettings.dir = res.data.dir;
    	pageSettings.langVal =  res.data.lang;
        
    });

	$scope.$on("toget: switch to clip", function (e, clipData) {
	    $scope.$broadcast("todo: switch to clip", clipData);
	});

}
kabTvLoadCtrl.$inject = ["$scope", "getInitData", "pageSettings"];


function kabtvHeaderCtrl ($scope, getHeadData, pageSettings) {
    getHeadData.then(function (res) {
        $scope.lang =  res.data.lang;
        $scope.topMenuData =  res.data.headNav;
        $scope.linksList = res.data.headLinks;
    });
    $scope.currentLang = function(lang) {
        var lang =  (pageSettings.langVal == lang) ? "select": "";
        return lang;
    };
}
kabtvHeaderCtrl.$inject = ["$scope", "getHeadData", "pageSettings"];


/*content controllers*/


function kabtvTabsCtrl ($scope, getTabsIframe) {
    getTabsIframe.then(function(res){
        $scope.tabs = res.data.data;
        $scope.switchTab(res.data.data[res.data.defaultTab]);
        $scope.currentTab = res.data.defaultTab;
    });
    var $el = angular.element(document.querySelector('#asideTabIframe .forIframe'));
    $scope.switchTab = function (item, index){
        $scope.currentTab = index;
        var iFrame = angular.element("<iframe>").attr({
            "frameborder": 0,
            "src": item.url
        });
        $el.html('');
        $el.append(iFrame);
    }
}
kabtvTabsCtrl.$inject = ["$scope", "getTabsIframe"];



function kabtvPlayerCtrl ($scope, getVideoAudio) {

    $scope.isVideo = true;
    var promise = getVideoAudio.audio();
    promise.then(function(d){
        $scope.data = {
            "audio": "http://files.kabbalahmedia.info/audio/heb_o_rav_bs-akdama-zohar_2014-02-28_lesson.mp3", 
            "video": "http://files.kabbalahmedia.info/files/heb_o_rav_bs-akdama-zohar_2014-02-28_lesson.mp4"
        };   
    });
    $scope.playCont = $scope.data.audio;
    $scope.switchVideoAudio = function (isVideo) {
        $scope.isVideo = isVideo;
    };

    $scope.setPlayer = function (src) {
        var options = {};
        if ($scope.isVideo || $scope.isClip) {
            options = {file: src, width: "100%"};
        } else {
            options = {file: src, height: 30, width: "100%"};
        };

        var $el = angular.element(document.querySelector('#player'));
        $el.html('');
        var mediaType = "WMV";
    	switch (mediaType) {
    		case "MP4": 
    			jwplayer("player").setup(options);
    			return;
			case "WMV":
    			$el.append(getWMVPlayer(src));
    			return;
    	}
    }
    function getWMVPlayer (src){
    	var param = [];
    	var contObj = angular.element("<object>").attr({
    		type: "application/x-ms-wmp",
    		name: "player",
    		width: "100%",
    		height: "305"
    	});

    	param[0] = angular.element("<param>").attr({
    		name: "balance",
    		value: false
    	}); 
    	param[1] = angular.element("<param>").attr({
    		name: "src",
    		value: src
    	}); 
    	param[2] = angular.element("<param>").attr({
			name: "autostart",
			value: "true"
    	}); 
    	param[3] = angular.element("<param>").attr({
    		name: "src",
    		value: src
    	}); 
    	param[4] = angular.element("<param>").attr({
    		 name: "volume",
    		 value: "50"
    	}); 
    	param[5] = angular.element("<param>").attr({
    		name: "uiMode",
    		value: "full"
    	}); 
    	param[6] = angular.element("<param>").attr({
    		name: "animationAtStart",
    		value: "true"
    	}); 
    	param[7] = angular.element("<param>").attr({
    		name: "controller",
    		value: "true"
    	});
    	param[8] = angular.element("<param>").attr({
    		name: "showDisplay",
    		value: "false"
    	});
    	param[9] = angular.element("<param>").attr({
    		name: "ShowAudioControls",
    		value: true
    	});
    	param[10] = angular.element("<param>").attr({
    		name: "ShowPositionControls",
    		value: false
    	});
    	param[11] = angular.element("<param>").attr({
    		name: "transparentAtStart",
    		value: false
    	});
    	param[12] = angular.element("<param>").attr({
    		name: "ShowControls",
    		value: true
    	});
    	param[13] = angular.element("<param>").attr({
    		name: "ShowStatusBar",
    		value: true
    	}); 
    	param[14] = angular.element("<param>").attr({
    		name: "ShowTracker",
    		value: false
    	}); 
    	param[15] = angular.element("<param>").attr({
    		name: "ClickToPlay",
    		value: false
    	}); 
    	param[16] = angular.element("<param>").attr({
    		name: "DisplayBackColor",
    		value: "#000000"
    	}); 
    	param[17] = angular.element("<param>").attr({
    		name: "DisplayForeColor",
    		value: "#ffffff"
    	}); 
		// contObj.append([param[0], param[1]]);
		for (var i = 0; i < param.length; i++) {
				contObj.append(param[i]);
		};
		return contObj;
    }
}
kabtvPlayerCtrl.$inject = ["$scope", "getVideoAudio"];



function kabtvClipListCtrl ( $scope, $http, setClipListes) {
    $scope.$http = $http;
    $scope.selectedClipList = null;

    setClipListes.then(function (res) {
        $scope.clipListes =  res.data.data;
    }); 
   
    $scope.runClip = function (clipData) {
        $scope.$emit("toget: switch to clip", clipData);
    }
}
kabtvClipListCtrl.$inject = ["$scope", "$http", "setClipListes"];



/*footer controllers*/
function kabtvFooterCtrl ($scope, getFooterData) {
    getFooterData.then(function (res) {
        $scope.footMenuData =  res.data.data;
    });
}
kabtvFooterCtrl.$inject = ["$scope", "getFooterData"];
