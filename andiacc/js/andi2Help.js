if(UA.ANDIloadHelp){
			andiHelp = {};andiHelp.andiHelpArr = [{startdate:'2018-01-01',enddate:'2018-04-28',timetoswitch:10,andihelpSmalleLink:' http://gettecla.com',andihelpSmalleText:'take control of your device with your switches or wheelchair controls',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-22-59-10.tecla1.png',andihelpMediumLink:'https://user-a.co.il',andihelpMediumText:'bla bla 200',andihelpMediumSrcImg:'https://user-a.co.il/images/2017-12-30-15-40-07.Untitled320-200.png',},{startdate:'2018-01-01',enddate:'2018-03-31',timetoswitch:30,andihelpSmalleLink:'http://gettecla.com',andihelpSmalleText:'take control of your device with your switches or wheelchair controls',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-22-57-17.tecla2.png',andihelpMediumLink:'https://www.google.co.il/search?ei=_3pHWoysMsHVwQLY_Y24Dw&q=js+image+preview&oq=js+image+pre&gs_l=psy-ab.3.0.0i203k1l2j0j0i22i30k1l7.2647.7746.0.8831.8.7.1.0.0.0.222.940.0j4j1.5.0....0...1c.1.64.psy-ab..2.3.422....0.hwmVR9Ugl6Y',andihelpMediumText:'gfbfgbfgbfgb',andihelpMediumSrcImg:'https://user-a.co.il/images/2017-12-30-12-35-57.Untitled320-200.png',},{startdate:'2018-01-01',enddate:'2018-02-28',timetoswitch:60,andihelpSmalleLink:'https://user-a.co.il',andihelpSmalleText:'הידעת כי תוכל לשמור את הגדרות הנגישות כך שילוו אותך בכל אתר',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-23-03-06.Untitled320.png',},{startdate:'2018-01-01',enddate:'2018-03-31',timetoswitch:60,andihelpSmalleLink:'http://acc.org.il',andihelpSmalleText:'כל פתרונות בהנגשת  מסמכים',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-05-15-40.ACC_100x320px.jpg',},];  
	
	andiHelp.andiHelpTime = 15000;
    UAVfybk = function(UABJwNjQln, UAUCynb) {
        UABJwNjQln = Math.ceil(UABJwNjQln);
        UAUCynb = Math.floor(UAUCynb);
        return Math.floor(Math.random() * (UAUCynb - UABJwNjQln)) + UABJwNjQln;
    };
    if (localStorage.getItem("andiLoopHelpmiddlenumber") == undefined || localStorage.getItem("andiLoopHelpmiddlenumber") == "" || localStorage.getItem("andiLoopHelpmiddlenumber") == null) {
        localStorage.setItem("andiLoopHelpmiddlenumber", 0);
    }
    andiHelp.andiLoopHelpmiddlenumber = localStorage.getItem("andiLoopHelpmiddlenumber");
    if (localStorage.getItem("andiHelpmiddlenumberOfClicks") == undefined || localStorage.getItem("andiHelpmiddlenumberOfClicks") == "" || localStorage.getItem("andiHelpmiddlenumberOfClicks") == null) {
        localStorage.setItem("andiHelpmiddlenumberOfClicks", UAVfybk(10, 40));
    }
    if (localStorage.getItem("andiHelpmiddlenumberOfClicks") == undefined || localStorage.getItem("andiHelpmiddlenumberOfClicks") == "" || localStorage.getItem("andiHelpmiddlenumberOfClicks") == null) {
        localStorage.setItem("andiHelpmiddlenumberOfClicks", UAVfybk(3, 10));
    }
    if (localStorage.getItem("andiHelpmiddlenumberOfMins") == undefined || localStorage.getItem("andiHelpmiddlenumberOfMins") == "" || localStorage.getItem("andiHelpmiddlenumberOfMins") == null) {
        localStorage.setItem("andiHelpmiddlenumberOfMins", UAVfybk(20, 40));
    }
    // window.onbeforeunload = confirmExit;
}
confirmExit = function() {}
andiCloseLargeHelp = function() {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1LargeHelp").css("display", "none");
        try {
            window.clearInterval(andiSetTimeOutHelpLarge);
        } catch (e) {
            if (UA.UAtGnLO.UAKPDJhbW) {
                console.log("Error: " + e);
            }
        }
    }
};
andiCloseMiddleHelp = function() {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1middleHelp").css("display", "none");
        try {
            window.clearInterval(andiSetTimeOutHelpMiddle);
        } catch (e) {
            if (UA.UAtGnLO.UAKPDJhbW) {
                console.log("Error: " + e);
            }
        }
    }
};
andiCloseSmalleHelp = function() {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1SmalleHelp").css("display", "none");
        try {
            window.clearInterval(andiSetTimeOutHelpSmalle);
        } catch (e) {
            if (UA.UAtGnLO.UAKPDJhbW) {
                console.log("Error: " + e);
            }
        }
    }
};
andiOpenLargeHelp = function() {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1LargeHelp").css("display", "block");
        if (localStorage.getItem("UAOQuqDs") == "on" && localStorage.getItem("UAiSpqbTP") == "off" && andizxc("#UAXrXQBkb").css("display") == "none") {
            andiLargeHelpHtml();
            UAEOPVyorrentLargeHelp(andiHelp.andiLoopHelpmiddlenumber);
        }
        andiRunLargeHelp();
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNchangetolivetext").text(UA.UAvtiQvcR.UAEyLkIF269);
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UAuhPooxoQtab1LargeHelp").css({
                "background-color": "#027DC0"
            });
        }
    }
};
andiOpenMiddleHelp = function() {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1middleHelp").css("display", "block");
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        for (var i = 0; i < andiHelp.andiHelpArr.length; i++) {
            if (andiActiveHelpLiveText == "true") {
                andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNimg").append('<a style="display:none" target="_blank" UAdsYhFryNmiddlenumber="' + i + '" href="' + andiHelp.andiHelpArr[i].andihelpMediumLink + '"><div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelp.andiHelpArr[i].andihelpMediumText + "</div></div></a>");
            } else {
                andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNimg").append('<a style="display:none" target="_blank" UAdsYhFryNmiddlenumber="' + i + '"  href="' + andiHelp.andiHelpArr[i].andihelpMediumLink + '"><img src="' + andiHelp.andiHelpArr[i].andihelpMediumSrcImg + '" alt="' + andiHelp.andiHelpArr[i].andihelpMediumText + '" /></a>');
            }
        }
        UAEOPVyorrentMiddleHelp(andiHelp.andiLoopHelpmiddlenumber);
        andiRunMiddleHelp();
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNchangetolivetext").text(UA.UAvtiQvcR.UAEyLkIF269);
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UAuhPooxoQtab1middleHelp").css({
                "background-color": "#027DC0"
            });
        }
    }
};
andiOpenSmalleHelp = function() {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1SmalleHelp").css("display", "block");
        UAEOPVyorrentSmalleHelp(andiHelp.andiLoopHelpmiddlenumber);
        andiRunSmalleHelp();
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNchangetolivetext").text(UA.UAvtiQvcR.UAEyLkIF269);
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UAuhPooxoQtab1SmalleHelp").css({
                "background-color": "#027DC0",
				'color':'#fff',
				'font-size':'14px'
            });
        }
    }
};

function andiRunLargeHelp() {
    if (UA.ANDIloadHelp) {
        if (andiHelp.andiLoopHelpmiddlenumber >= andiHelp.andiHelpArr.length) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andiSetTimeOutHelpLarge = setInterval(function() {
            if (localStorage.getItem("UAOQuqDs") == "on" && localStorage.getItem("UAiSpqbTP") == "off" && andizxc("#UAXrXQBkb").css("display") == "none") {
                if (andizxc("#UAuhPooxoQtab1LargeHelp").length == 0) {
                    andiLargeHelpHtml();
                }
                UAEOPVyorrentLargeHelp(andiHelp.andiLoopHelpmiddlenumber);
            }
        }, parseInt(localStorage.getItem("andiHelpmiddlenumberOfMins")) * 1000);
    }
}

function andiRunMiddleHelp() {
    if (UA.ANDIloadHelp) {
        if (andiHelp.andiLoopHelpmiddlenumber >= andiHelp.andiHelpArr.length) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andiSetTimeOutHelpMiddle = setInterval(function() {
            UAEOPVyorrentMiddleHelp(andiHelp.andiLoopHelpmiddlenumber);
        }, andiHelp.andiHelpTime);
    }
}

function andiRunSmalleHelp() {
    if (UA.ANDIloadHelp) {
        if (andiHelp.andiLoopHelpmiddlenumber >= andiHelp.andiHelpArr.length) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andiSetTimeOutHelpSmalle = setInterval(function checkIfToSkip() {
            if(checkIfCampainLegal()){
				UAEOPVyorrentSmalleHelp(andiHelp.andiLoopHelpmiddlenumber);
			} else {
				clearInterval(andiSetTimeOutHelpSmalle);
				andiHelp.andiLoopHelpmiddlenumber++;
				checkIfToSkip();
			}
        }, andiHelp.andiHelpTime);
    }
}

function checkIfCampainLegal(){
	var UAwtADgYWxOk = true;
	var timeNow = new Date();
	var startdate = new Date(andiHelp.andiHelpArr[andiHelp.andiLoopHelpmiddlenumber].startdate);
	var startdate1970 = startdate.getTime();
	var timeNow1970 = timeNow.getTime();
	var enddate = new Date(andiHelp.andiHelpArr[andiHelp.andiLoopHelpmiddlenumber].enddate);
	var enddate1970 = enddate.getTime();
	console.log(startdate)
	/*if(Invalid Date == 'Invalid Date'){//עדין לא התחיל קמפיין
		console.log(timeNow1970- startdate1970);
		console.log('עדין לא התחיל קמפיין');
	}*/
	if(timeNow1970 < startdate1970){//עדין לא התחיל קמפיין
		console.log(timeNow1970- startdate1970);
		console.log('עדין לא התחיל קמפיין');
		UAwtADgYWxOk = false;
	}
	if(timeNow1970 > startdate1970 && timeNow1970 < enddate1970){//הקמפיין התחיל ועדין לא נגמר
		console.log(timeNow1970- startdate1970);
		console.log('הקמפיין התחיל ועדין לא נגמר');
		UAwtADgYWxOk = true;
	}

	if(timeNow1970 > enddate1970){//הקמפיין נגמר
		console.log(timeNow1970- startdate1970);
		console.log('הקמפיין נגמר');
		UAwtADgYWxOk = true;
	}
	return UAwtADgYWxOk;
}




function countDownLargeHelp() {
    if (UA.ANDIloadHelp) {
        var UAYjeBU = 0;
        setTimeout(function() {
            andizxc("#UAuhPooxoQtab1LargeHelp #UAEOPVyloseHelp").css("display", "block").attr({
                "role": "button",
                "tabindex": "0",
                "aria-label": UA.UAvtiQvcR.UAEyLkIF264
            });
        }, andiHelp.andiHelpTime / 2);
    }
}

function countDownMiddleHelp() {
    if (UA.ANDIloadHelp) {
        var UAYjeBU = 0;
        setTimeout(function() {
            andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNskipbtn").attr({
                "role": "button",
                "tabindex": "0"
            }).html(UA.UAvtiQvcR.UAEyLkIF264 + "<span></span>");
        }, andiHelp.andiHelpTime / 2);
    }
}

function countDownSmalleHelp() {
    if (UA.ANDIloadHelp) {
        var UAYjeBU = 0;
        setTimeout(function() {
            andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNskipbtn").attr({
                "role": "button",
                "tabindex": "0"
            }).html(UA.UAvtiQvcR.UAEyLkIF264 + "<span></span>");
        }, andiHelp.andiHelpTime / 2);
    }
}
andizxc(document).on("click", "#UAuhPooxoQtab1LargeHelp #UAEOPVyloseHelp", function() {
    if (UA.ANDIloadHelp) {
        andiCloseLargeHelp();
        localStorage.setItem("andiCloseLargeHelp", "true");
    }
});
andizxc(document).on("click", "#UAuhPooxoQtab1middleHelp .UAdsYhFryNskipbtn", function() {
    if (UA.ANDIloadHelp) {
        andiCloseMiddleHelp();
        localStorage.setItem("andiCloseMiddleHelp", "true");
    }
});
andizxc(document).on("click", "#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNskipbtn", function() {
    if (UA.ANDIloadHelp) {
        andiCloseSmalleHelp();
        localStorage.setItem("andiCloseSmalleHelp", "true");
    }
});
andizxc(document).on("click", "#UAuhPooxoQtab1LargeHelp .UAdsYhFryNchangetolivetext", function() {
    if (UA.ANDIloadHelp) {
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            localStorage.setItem("andiActiveHelpLiveText", "false");
            var UAdsYhFryNmiddlenumber = andiHelp.andiLoopHelpmiddlenumber - 1;
            if (UAdsYhFryNmiddlenumber < 0) {
                UAdsYhFryNmiddlenumber = andiHelp.andiHelpArr.length - 1;
            }
            andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg").html("").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeLink + '"><img src="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeSrcImg + '" alt="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeText + '" /></a>');
        } else {
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UAuhPooxoQtab1LargeHelp").css({
                "background-color": "#027DC0"
            });
            var andiHelpDesc = andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg img").attr("alt");
            andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg a").html("").html('<div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelpDesc + "</div></div>");
        }
    }
});
andizxc(document).on("click", "#UAuhPooxoQtab1middleHelp .UAdsYhFryNchangetolivetext", function() {
    if (UA.ANDIloadHelp) {
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            localStorage.setItem("andiActiveHelpLiveText", "false");
            var UAdsYhFryNmiddlenumber = andiHelp.andiLoopHelpmiddlenumber - 1;
            if (UAdsYhFryNmiddlenumber < 0) {
                UAdsYhFryNmiddlenumber = andiHelp.andiHelpArr.length - 1;
            }
            andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNimg").html("").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpMediumLink + '"><img src="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpMediumSrcImg + '" alt="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpMediumText + '" /></a>');
            andizxc("#UAuhPooxoQtab1middleHelp").attr("tabindex", "0").focus();
        } else {
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UAuhPooxoQtab1middleHelp").css({
                "background-color": "#027DC0"
            });
            var andiHelpDesc = andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNimg img").attr("alt");
            andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNimg a").html("").html('<div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelpDesc + "</div></div>");
        }
    }
});
andizxc(document).on("click", "#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNchangetolivetext", function() {
    if (UA.ANDIloadHelp) {
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            localStorage.setItem("andiActiveHelpLiveText", "false");
            var UAdsYhFryNmiddlenumber = andiHelp.andiLoopHelpmiddlenumber - 1;
            if (UAdsYhFryNmiddlenumber < 0) {
                UAdsYhFryNmiddlenumber = andiHelp.andiHelpArr.length - 1;
            }
            andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg").html("").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleLink + '"><img src="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleSrcImg + '" alt="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleText + '" /></a>');
        } else {
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UAuhPooxoQtab1SmalleHelp").css({
                "background-color": "#027DC0"
            });
            var andiHelpDesc = andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg img").attr("alt");
            andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg a").html("").html('<div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelpDesc + "</div></div>");
        }
    }
});

function UAEOPVyorrentLargeHelp(UAdsYhFryNmiddlenumber) {
    if (UA.ANDIloadHelp) {
        andizxc("#UAuhPooxoQtab1LargeHelp").css("display", "block");
        andizxc("#UAuhPooxoQtab1LargeHelp #UAEOPVyloseHelp").css("display", "none");
        if (UAdsYhFryNmiddlenumber >= andiHelp.andiHelpArr.length) {
            UAdsYhFryNmiddlenumber = 0;
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNskipbtn").attr({
            "role": "",
            "tabindex": "-1"
        }).html("<span></span>");
        var UAFRdLHJ = document.activeElement;
        andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg").html("");
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeLink + '"><div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;>' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeText + "</div></div></a>");
        } else {
            andizxc("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeLink + '"><img src="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeSrcImg + '" alt="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpLargeText + '" /></a>');
        }
        if (UAdsYhFryNmiddlenumber >= andiHelp.andiHelpArr.length - 1) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        } else {
            andiHelp.andiLoopHelpmiddlenumber++;
        }
        if (andizxc(UAFRdLHJ).is("#UAuhPooxoQtab1LargeHelp .UAdsYhFryNimg a")) {
            UAFRdLHJ.focus();
        }
        countDownLargeHelp();
        setTimeout(function() {
            andizxc("#UAuhPooxoQtab1LargeHelp").css("display", "none");
        }, andiHelp.andiHelpTime);
    }
}

function UAEOPVyorrentMiddleHelp(UAdsYhFryNmiddlenumber) {
    if (UA.ANDIloadHelp) {
        if (UAdsYhFryNmiddlenumber >= andiHelp.andiHelpArr.length) {
            UAdsYhFryNmiddlenumber = 0;
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        var UAFRdLHJ = document.activeElement;
        andizxc("#UAuhPooxoQtab1middleHelp .UAdsYhFryNskipbtn").attr({
            "role": "",
            "tabindex": "-1"
        }).html("<span></span>");
        andizxc('[UAdsYhFryNmiddlenumber="' + UAdsYhFryNmiddlenumber + '"]').fadeIn(750);
        countDownMiddleHelp();
        andiSetTimeOutHelpSmalle = setInterval(function() {
            andizxc('[UAdsYhFryNmiddlenumber="' + UAdsYhFryNmiddlenumber + '"]').fadeOut(750);
            if (UAdsYhFryNmiddlenumber >= andiHelp.andiHelpArr.length - 1) {
                UAdsYhFryNmiddlenumber = 0;
                andiHelp.andiLoopHelpmiddlenumber = 0;
            } else {
                UAdsYhFryNmiddlenumber++;
                andiHelp.andiLoopHelpmiddlenumber++;
            }
            setTimeout(function() {
                andizxc('[UAdsYhFryNmiddlenumber="' + UAdsYhFryNmiddlenumber + '"]').fadeIn(750);
                setTimeout(function() {
                    if (andizxc(UAFRdLHJ).is('[UAdsYhFryNmiddlenumber="' + UAdsYhFryNmiddlenumber + '"]')) {
                        UAFRdLHJ.focus();
                    }
                }, 750);
                countDownMiddleHelp();
            }, 650);
        }, 10000);
    }
}

function UAEOPVyorrentSmalleHelp(UAdsYhFryNmiddlenumber) {
    if (UA.ANDIloadHelp) {
        if (UAdsYhFryNmiddlenumber >= andiHelp.andiHelpArr.length) {
            UAdsYhFryNmiddlenumber = 0;
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNskipbtn").attr({
            "role": "",
            "tabindex": "-1"
        }).html("<span></span>");
        var UAFRdLHJ = document.activeElement;
        andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg").html("");
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleLink + '"><div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleText + "</div></div></a>");
        } else {
            andizxc("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleLink + '"><img src="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleSrcImg + '" alt="' + andiHelp.andiHelpArr[UAdsYhFryNmiddlenumber].andihelpSmalleText + '" /></a>');
        }
        if (UAdsYhFryNmiddlenumber >= andiHelp.andiHelpArr.length - 1) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        } else {
            andiHelp.andiLoopHelpmiddlenumber++;
        }
        if (andizxc(UAFRdLHJ).is("#UAuhPooxoQtab1SmalleHelp .UAdsYhFryNimg a")) {
            UAFRdLHJ.focus();
        }
        countDownSmalleHelp();
    }
}

function andiLargeHelpHtml() {
    if (UA.ANDIloadHelp) {
        andizxc("body").prepend('<div id="UAuhPooxoQtab1LargeHelp"><div id="UAuWgkHwHelp"><div id="UAEOPVyloseHelp"><input src="' + UA.UAHAToALT.UAvgvjsLUi + '" type="image" alt="' + UA.UAvtiQvcR.UAJkiEBUdsBtn + '" /></div></div><div class="UAdsYhFryNimg"></div><div class="UAdsYhFryNchangetolivetext"  role="button" aria-label="' + UA.UAvtiQvcR.UAEyLkIF270 + '" tabindex="0">' + UA.UAvtiQvcR.UAEyLkIF268 + '</div><div id="UAkLXLFcmFooter2"><a href="https://www.user-a.co.il" target="_blank">' +
            UA.UAvtiQvcR.UAoBqPTb + "</a></div></div>    ");
        andizxc("#UAuhPooxoQtab1LargeHelp").css("display", "block");
    }
};