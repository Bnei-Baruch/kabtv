if(andiUA.ANDIloadHelp){
			andiHelp = {};andiHelp.andiHelpArr = [{startdate:'2018-01-01',enddate:'2018-04-28',timetoswitch:10,andihelpSmalleLink:' http://gettecla.com',andihelpSmalleText:'take control of your device with your switches or wheelchair controls',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-22-59-10.tecla1.png',andihelpMediumLink:'https://user-a.co.il',andihelpMediumText:'bla bla 200',andihelpMediumSrcImg:'https://user-a.co.il/images/2017-12-30-15-40-07.Untitled320-200.png',},{startdate:'2018-01-01',enddate:'2018-03-31',timetoswitch:30,andihelpSmalleLink:'http://gettecla.com',andihelpSmalleText:'take control of your device with your switches or wheelchair controls',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-22-57-17.tecla2.png',andihelpMediumLink:'https://www.google.co.il/search?ei=_3pHWoysMsHVwQLY_Y24Dw&q=js+image+preview&oq=js+image+pre&gs_l=psy-ab.3.0.0i203k1l2j0j0i22i30k1l7.2647.7746.0.8831.8.7.1.0.0.0.222.940.0j4j1.5.0....0...1c.1.64.psy-ab..2.3.422....0.hwmVR9Ugl6Y',andihelpMediumText:'gfbfgbfgbfgb',andihelpMediumSrcImg:'https://user-a.co.il/images/2017-12-30-12-35-57.Untitled320-200.png',},{startdate:'2018-01-01',enddate:'2018-02-28',timetoswitch:60,andihelpSmalleLink:'https://user-a.co.il',andihelpSmalleText:'הידעת כי תוכל לשמור את הגדרות הנגישות כך שילוו אותך בכל אתר',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-23-03-06.Untitled320.png',},{startdate:'2018-01-01',enddate:'2018-03-31',timetoswitch:60,andihelpSmalleLink:'http://acc.org.il',andihelpSmalleText:'כל פתרונות בהנגשת  מסמכים',andihelpSmalleSrcImg:'https://user-a.co.il/images/2018-01-15-05-15-40.ACC_100x320px.jpg',},];	andiHelp.andiHelpTime = 15000;
    UAsLOvbEEm = function(UAahZIawXH, UAVLJFM) {
        UAahZIawXH = Math.ceil(UAahZIawXH);
        UAVLJFM = Math.floor(UAVLJFM);
        return Math.floor(Math.random() * (UAVLJFM - UAahZIawXH)) + UAahZIawXH;
    };
    if (localStorage.getItem("andiLoopHelpmiddlenumber") == undefined || localStorage.getItem("andiLoopHelpmiddlenumber") == "" || localStorage.getItem("andiLoopHelpmiddlenumber") == null) {
        localStorage.setItem("andiLoopHelpmiddlenumber", 0);
    }
    andiHelp.andiLoopHelpmiddlenumber = localStorage.getItem("andiLoopHelpmiddlenumber");
    if (localStorage.getItem("andiHelpmiddlenumberOfClicks") == undefined || localStorage.getItem("andiHelpmiddlenumberOfClicks") == "" || localStorage.getItem("andiHelpmiddlenumberOfClicks") == null) {
        localStorage.setItem("andiHelpmiddlenumberOfClicks", UAsLOvbEEm(10, 40));
    }
    if (localStorage.getItem("andiHelpmiddlenumberOfClicks") == undefined || localStorage.getItem("andiHelpmiddlenumberOfClicks") == "" || localStorage.getItem("andiHelpmiddlenumberOfClicks") == null) {
        localStorage.setItem("andiHelpmiddlenumberOfClicks", UAsLOvbEEm(3, 10));
    }
    if (localStorage.getItem("andiHelpmiddlenumberOfMins") == undefined || localStorage.getItem("andiHelpmiddlenumberOfMins") == "" || localStorage.getItem("andiHelpmiddlenumberOfMins") == null) {
        localStorage.setItem("andiHelpmiddlenumberOfMins", UAsLOvbEEm(20, 40));
    }
    // window.onbeforeunload = confirmExit;
}
confirmExit = function() {}
andiCloseLargeHelp = function() {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1LargeHelp").css("display", "none");
        try {
            window.clearInterval(andiSetTimeOutHelpLarge);
        } catch (e) {
            if (andiUA.UAbUCbcZ.UAdcyZzol) {
                console.log("Error: " + e);
            }
        }
    }
};
andiCloseMiddleHelp = function() {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1middleHelp").css("display", "none");
        try {
            window.clearInterval(andiSetTimeOutHelpMiddle);
        } catch (e) {
            if (andiUA.UAbUCbcZ.UAdcyZzol) {
                console.log("Error: " + e);
            }
        }
    }
};
andiCloseSmalleHelp = function() {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1SmalleHelp").css("display", "none");
        try {
            window.clearInterval(andiSetTimeOutHelpSmalle);
        } catch (e) {
            if (andiUA.UAbUCbcZ.UAdcyZzol) {
                console.log("Error: " + e);
            }
        }
    }
};
andiOpenLargeHelp = function() {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1LargeHelp").css("display", "block");
        if (localStorage.getItem("UAVacptNpJ") == "on" && localStorage.getItem("UAVnGJJkp") == "off" && andizxc("#UAqKHuDh").css("display") == "none") {
            andiLargeHelpHtml();
            UAOQlQoiorrentLargeHelp(andiHelp.andiLoopHelpmiddlenumber);
        }
        andiRunLargeHelp();
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UANZmYHtab1LargeHelp .UADOClgEchangetolivetext").text(andiUA.UAufVra.UAjBhsJJp269);
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UANZmYHtab1LargeHelp").css({
                "background-color": "#027DC0"
            });
        }
    }
};
andiOpenMiddleHelp = function() {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1middleHelp").css("display", "block");
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        for (var i = 0; i < andiHelp.andiHelpArr.length; i++) {
            if (andiActiveHelpLiveText == "true") {
                andizxc("#UANZmYHtab1middleHelp .UADOClgEimg").append('<a style="display:none" target="_blank" UADOClgEmiddlenumber="' + i + '" href="' + andiHelp.andiHelpArr[i].andihelpMediumLink + '"><div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelp.andiHelpArr[i].andihelpMediumText + "</div></div></a>");
            } else {
                andizxc("#UANZmYHtab1middleHelp .UADOClgEimg").append('<a style="display:none" target="_blank" UADOClgEmiddlenumber="' + i + '"  href="' + andiHelp.andiHelpArr[i].andihelpMediumLink + '"><img src="' + andiHelp.andiHelpArr[i].andihelpMediumSrcImg + '" alt="' + andiHelp.andiHelpArr[i].andihelpMediumText + '" /></a>');
            }
        }
        UAOQlQoiorrentMiddleHelp(andiHelp.andiLoopHelpmiddlenumber);
        andiRunMiddleHelp();
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UANZmYHtab1middleHelp .UADOClgEchangetolivetext").text(andiUA.UAufVra.UAjBhsJJp269);
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UANZmYHtab1middleHelp").css({
                "background-color": "#027DC0"
            });
        }
    }
};
andiOpenSmalleHelp = function() {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1SmalleHelp").css("display", "block");
        UAOQlQoiorrentSmalleHelp(andiHelp.andiLoopHelpmiddlenumber);
        andiRunSmalleHelp();
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UANZmYHtab1SmalleHelp .UADOClgEchangetolivetext").text(andiUA.UAufVra.UAjBhsJJp269);
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UANZmYHtab1SmalleHelp").css({
                "background-color": "#027DC0",
				'color':'#fff',
				'font-size':'14px'
            });
        }
    }
};

function andiRunLargeHelp() {
    if (andiUA.ANDIloadHelp) {
        if (andiHelp.andiLoopHelpmiddlenumber >= andiHelp.andiHelpArr.length) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andiSetTimeOutHelpLarge = setInterval(function() {
            if (localStorage.getItem("UAVacptNpJ") == "on" && localStorage.getItem("UAVnGJJkp") == "off" && andizxc("#UAqKHuDh").css("display") == "none") {
                if (andizxc("#UANZmYHtab1LargeHelp").length == 0) {
                    andiLargeHelpHtml();
                }
                UAOQlQoiorrentLargeHelp(andiHelp.andiLoopHelpmiddlenumber);
            }
        }, parseInt(localStorage.getItem("andiHelpmiddlenumberOfMins")) * 1000);
    }
}

function andiRunMiddleHelp() {
    if (andiUA.ANDIloadHelp) {
        if (andiHelp.andiLoopHelpmiddlenumber >= andiHelp.andiHelpArr.length) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andiSetTimeOutHelpMiddle = setInterval(function() {
            UAOQlQoiorrentMiddleHelp(andiHelp.andiLoopHelpmiddlenumber);
        }, andiHelp.andiHelpTime);
    }
}

function andiRunSmalleHelp() {
    if (andiUA.ANDIloadHelp) {
        if (andiHelp.andiLoopHelpmiddlenumber >= andiHelp.andiHelpArr.length) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andiSetTimeOutHelpSmalle = setInterval(function checkIfToSkip() {
            if(checkIfCampainLegal()){
				UAOQlQoiorrentSmalleHelp(andiHelp.andiLoopHelpmiddlenumber);
			} else {
				clearInterval(andiSetTimeOutHelpSmalle);
				andiHelp.andiLoopHelpmiddlenumber++;
				checkIfToSkip();
			}
        }, andiHelp.andiHelpTime);
    }
}

function checkIfCampainLegal(){
	var UAcrKTYgOk = true;
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
		UAcrKTYgOk = false;
	}
	if(timeNow1970 > startdate1970 && timeNow1970 < enddate1970){//הקמפיין התחיל ועדין לא נגמר
		console.log(timeNow1970- startdate1970);
		console.log('הקמפיין התחיל ועדין לא נגמר');
		UAcrKTYgOk = true;
	}

	if(timeNow1970 > enddate1970){//הקמפיין נגמר
		console.log(timeNow1970- startdate1970);
		console.log('הקמפיין נגמר');
		UAcrKTYgOk = true;
	}
	return UAcrKTYgOk;
}




function countDownLargeHelp() {
    if (andiUA.ANDIloadHelp) {
        var UAgbUEk = 0;
        setTimeout(function() {
            andizxc("#UANZmYHtab1LargeHelp #UAOQlQoiloseHelp").css("display", "block").attr({
                "role": "button",
                "tabindex": "0",
                "aria-label": andiUA.UAufVra.UAjBhsJJp264
            });
        }, andiHelp.andiHelpTime / 2);
    }
}

function countDownMiddleHelp() {
    if (andiUA.ANDIloadHelp) {
        var UAgbUEk = 0;
        setTimeout(function() {
            andizxc("#UANZmYHtab1middleHelp .UADOClgEskipbtn").attr({
                "role": "button",
                "tabindex": "0"
            }).html(andiUA.UAufVra.UAjBhsJJp264 + "<span></span>");
        }, andiHelp.andiHelpTime / 2);
    }
}

function countDownSmalleHelp() {
    if (andiUA.ANDIloadHelp) {
        var UAgbUEk = 0;
        setTimeout(function() {
            andizxc("#UANZmYHtab1SmalleHelp .UADOClgEskipbtn").attr({
                "role": "button",
                "tabindex": "0"
            }).html(andiUA.UAufVra.UAjBhsJJp264 + "<span></span>");
        }, andiHelp.andiHelpTime / 2);
    }
}
andizxc(document).on("click", "#UANZmYHtab1LargeHelp #UAOQlQoiloseHelp", function() {
    if (andiUA.ANDIloadHelp) {
        andiCloseLargeHelp();
        localStorage.setItem("andiCloseLargeHelp", "true");
    }
});
andizxc(document).on("click", "#UANZmYHtab1middleHelp .UADOClgEskipbtn", function() {
    if (andiUA.ANDIloadHelp) {
        andiCloseMiddleHelp();
        localStorage.setItem("andiCloseMiddleHelp", "true");
    }
});
andizxc(document).on("click", "#UANZmYHtab1SmalleHelp .UADOClgEskipbtn", function() {
    if (andiUA.ANDIloadHelp) {
        andiCloseSmalleHelp();
        localStorage.setItem("andiCloseSmalleHelp", "true");
    }
});
andizxc(document).on("click", "#UANZmYHtab1LargeHelp .UADOClgEchangetolivetext", function() {
    if (andiUA.ANDIloadHelp) {
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            localStorage.setItem("andiActiveHelpLiveText", "false");
            var UADOClgEmiddlenumber = andiHelp.andiLoopHelpmiddlenumber - 1;
            if (UADOClgEmiddlenumber < 0) {
                UADOClgEmiddlenumber = andiHelp.andiHelpArr.length - 1;
            }
            andizxc("#UANZmYHtab1LargeHelp .UADOClgEimg").html("").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeLink + '"><img src="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeSrcImg + '" alt="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeText + '" /></a>');
        } else {
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UANZmYHtab1LargeHelp").css({
                "background-color": "#027DC0"
            });
            var andiHelpDesc = andizxc("#UANZmYHtab1LargeHelp .UADOClgEimg img").attr("alt");
            andizxc("#UANZmYHtab1LargeHelp .UADOClgEimg a").html("").html('<div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelpDesc + "</div></div>");
        }
    }
});
andizxc(document).on("click", "#UANZmYHtab1middleHelp .UADOClgEchangetolivetext", function() {
    if (andiUA.ANDIloadHelp) {
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            localStorage.setItem("andiActiveHelpLiveText", "false");
            var UADOClgEmiddlenumber = andiHelp.andiLoopHelpmiddlenumber - 1;
            if (UADOClgEmiddlenumber < 0) {
                UADOClgEmiddlenumber = andiHelp.andiHelpArr.length - 1;
            }
            andizxc("#UANZmYHtab1middleHelp .UADOClgEimg").html("").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpMediumLink + '"><img src="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpMediumSrcImg + '" alt="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpMediumText + '" /></a>');
            andizxc("#UANZmYHtab1middleHelp").attr("tabindex", "0").focus();
        } else {
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UANZmYHtab1middleHelp").css({
                "background-color": "#027DC0"
            });
            var andiHelpDesc = andizxc("#UANZmYHtab1middleHelp .UADOClgEimg img").attr("alt");
            andizxc("#UANZmYHtab1middleHelp .UADOClgEimg a").html("").html('<div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelpDesc + "</div></div>");
        }
    }
});
andizxc(document).on("click", "#UANZmYHtab1SmalleHelp .UADOClgEchangetolivetext", function() {
    if (andiUA.ANDIloadHelp) {
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            localStorage.setItem("andiActiveHelpLiveText", "false");
            var UADOClgEmiddlenumber = andiHelp.andiLoopHelpmiddlenumber - 1;
            if (UADOClgEmiddlenumber < 0) {
                UADOClgEmiddlenumber = andiHelp.andiHelpArr.length - 1;
            }
            andizxc("#UANZmYHtab1SmalleHelp .UADOClgEimg").html("").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleLink + '"><img src="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleSrcImg + '" alt="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleText + '" /></a>');
        } else {
            localStorage.setItem("andiActiveHelpLiveText", "true");
            andizxc("#UANZmYHtab1SmalleHelp").css({
                "background-color": "#027DC0"
            });
            var andiHelpDesc = andizxc("#UANZmYHtab1SmalleHelp .UADOClgEimg img").attr("alt");
            andizxc("#UANZmYHtab1SmalleHelp .UADOClgEimg a").html("").html('<div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelpDesc + "</div></div>");
        }
    }
});

function UAOQlQoiorrentLargeHelp(UADOClgEmiddlenumber) {
    if (andiUA.ANDIloadHelp) {
        andizxc("#UANZmYHtab1LargeHelp").css("display", "block");
        andizxc("#UANZmYHtab1LargeHelp #UAOQlQoiloseHelp").css("display", "none");
        if (UADOClgEmiddlenumber >= andiHelp.andiHelpArr.length) {
            UADOClgEmiddlenumber = 0;
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andizxc("#UANZmYHtab1LargeHelp .UADOClgEskipbtn").attr({
            "role": "",
            "tabindex": "-1"
        }).html("<span></span>");
        var UAVlSYbsZ = document.activeElement;
        andizxc("#UANZmYHtab1LargeHelp .UADOClgEimg").html("");
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UANZmYHtab1LargeHelp .UADOClgEimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeLink + '"><div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;>' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeText + "</div></div></a>");
        } else {
            andizxc("#UANZmYHtab1LargeHelp .UADOClgEimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeLink + '"><img src="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeSrcImg + '" alt="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpLargeText + '" /></a>');
        }
        if (UADOClgEmiddlenumber >= andiHelp.andiHelpArr.length - 1) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        } else {
            andiHelp.andiLoopHelpmiddlenumber++;
        }
        if (andizxc(UAVlSYbsZ).is("#UANZmYHtab1LargeHelp .UADOClgEimg a")) {
            UAVlSYbsZ.focus();
        }
        countDownLargeHelp();
        setTimeout(function() {
            andizxc("#UANZmYHtab1LargeHelp").css("display", "none");
        }, andiHelp.andiHelpTime);
    }
}

function UAOQlQoiorrentMiddleHelp(UADOClgEmiddlenumber) {
    if (andiUA.ANDIloadHelp) {
        if (UADOClgEmiddlenumber >= andiHelp.andiHelpArr.length) {
            UADOClgEmiddlenumber = 0;
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        var UAVlSYbsZ = document.activeElement;
        andizxc("#UANZmYHtab1middleHelp .UADOClgEskipbtn").attr({
            "role": "",
            "tabindex": "-1"
        }).html("<span></span>");
        andizxc('[UADOClgEmiddlenumber="' + UADOClgEmiddlenumber + '"]').fadeIn(750);
        countDownMiddleHelp();
        andiSetTimeOutHelpSmalle = setInterval(function() {
            andizxc('[UADOClgEmiddlenumber="' + UADOClgEmiddlenumber + '"]').fadeOut(750);
            if (UADOClgEmiddlenumber >= andiHelp.andiHelpArr.length - 1) {
                UADOClgEmiddlenumber = 0;
                andiHelp.andiLoopHelpmiddlenumber = 0;
            } else {
                UADOClgEmiddlenumber++;
                andiHelp.andiLoopHelpmiddlenumber++;
            }
            setTimeout(function() {
                andizxc('[UADOClgEmiddlenumber="' + UADOClgEmiddlenumber + '"]').fadeIn(750);
                setTimeout(function() {
                    if (andizxc(UAVlSYbsZ).is('[UADOClgEmiddlenumber="' + UADOClgEmiddlenumber + '"]')) {
                        UAVlSYbsZ.focus();
                    }
                }, 750);
                countDownMiddleHelp();
            }, 650);
        }, 10000);
    }
}

function UAOQlQoiorrentSmalleHelp(UADOClgEmiddlenumber) {
    if (andiUA.ANDIloadHelp) {
        if (UADOClgEmiddlenumber >= andiHelp.andiHelpArr.length) {
            UADOClgEmiddlenumber = 0;
            andiHelp.andiLoopHelpmiddlenumber = 0;
        }
        andizxc("#UANZmYHtab1SmalleHelp .UADOClgEskipbtn").attr({
            "role": "",
            "tabindex": "-1"
        }).html("<span></span>");
        var UAVlSYbsZ = document.activeElement;
        andizxc("#UANZmYHtab1SmalleHelp .UADOClgEimg").html("");
        var andiActiveHelpLiveText = localStorage.getItem("andiActiveHelpLiveText");
        if (andiActiveHelpLiveText == "true") {
            andizxc("#UANZmYHtab1SmalleHelp .UADOClgEimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleLink + '"><div class="andiWrapHelpDesc"><div style="padding:10px 5px;background-color:#027DC0;color:#fff;font-size: 16px;">' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleText + "</div></div></a>");
        } else {
            andizxc("#UANZmYHtab1SmalleHelp .UADOClgEimg").append('<a target="_blank" href="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleLink + '"><img src="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleSrcImg + '" alt="' + andiHelp.andiHelpArr[UADOClgEmiddlenumber].andihelpSmalleText + '" /></a>');
        }
        if (UADOClgEmiddlenumber >= andiHelp.andiHelpArr.length - 1) {
            andiHelp.andiLoopHelpmiddlenumber = 0;
        } else {
            andiHelp.andiLoopHelpmiddlenumber++;
        }
        if (andizxc(UAVlSYbsZ).is("#UANZmYHtab1SmalleHelp .UADOClgEimg a")) {
            UAVlSYbsZ.focus();
        }
        countDownSmalleHelp();
    }
}

function andiLargeHelpHtml() {
    if (andiUA.ANDIloadHelp) {
        andizxc("body").prepend('<div id="UANZmYHtab1LargeHelp"><div id="UAifxaqUqHelp"><div id="UAOQlQoiloseHelp"><input src="' + andiUA.UANptFk.UAFkmbJhP + '" type="image" alt="' + andiUA.UAufVra.UAMGPMVtwY + '" /></div></div><div class="UADOClgEimg"></div><div class="UADOClgEchangetolivetext"  role="button" aria-label="' + andiUA.UAufVra.UAjBhsJJp270 + '" tabindex="0">' + andiUA.UAufVra.UAjBhsJJp268 + '</div><div id="UAmwoGoc"><a href="https://www.user-a.co.il" target="_blank">' +
            andiUA.UAufVra.UAFdzfnL + "</a></div></div>    ");
        andizxc("#UANZmYHtab1LargeHelp").css("display", "block");
    }
};