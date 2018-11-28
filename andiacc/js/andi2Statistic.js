(function(k) {
    screen.width && (screenSizewidth = screen.width ? screen.width : "", screenSizeheight = screen.height ? screen.height : "");
    var a = navigator.appVersion,
        d = navigator.userAgent,
        f = navigator.appName,
        b = "" + parseFloat(navigator.appVersion),
        e;
    parseInt(navigator.appVersion, 10);
    var c, g; - 1 != (c = d.indexOf("Opera")) && (f = "Opera", b = d.substring(c + 6), -1 != (c = d.indexOf("Version")) && (b = d.substring(c + 8))); - 1 != (c = d.indexOf("OPR")) ? (f = "Opera", b = d.substring(c + 4)) : -1 != (c = d.indexOf("Edge")) ? (f = "Microsoft Edge", b = d.substring(c +
        5)) : -1 != (c = d.indexOf("MSIE")) ? (f = "Microsoft Internet Explorer", b = d.substring(c + 5)) : -1 != (c = d.indexOf("Chrome")) ? (f = "Chrome", b = d.substring(c + 7)) : -1 != (c = d.indexOf("Safari")) ? (f = "Safari", b = d.substring(c + 7), -1 != (c = d.indexOf("Version")) && (b = d.substring(c + 8))) : -1 != (c = d.indexOf("Firefox")) ? (f = "Firefox", b = d.substring(c + 8)) : -1 != d.indexOf("Trident/") ? (f = "Microsoft Internet Explorer", b = d.substring(d.indexOf("rv:") + 3)) : (e = d.lastIndexOf(" ") + 1) < (c = d.lastIndexOf("/")) && (f = d.substring(e, c), b = d.substring(c + 1), f.toLowerCase() ==
        f.toUpperCase() && (f = navigator.appName)); - 1 != (g = b.indexOf(";")) && (b = b.substring(0, g)); - 1 != (g = b.indexOf(" ")) && (b = b.substring(0, g)); - 1 != (g = b.indexOf(")")) && (b = b.substring(0, g));
    e = parseInt("" + b, 10);
    isNaN(e) && (b = "" + parseFloat(navigator.appVersion), e = parseInt(navigator.appVersion, 10));
    c = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(a);
    g = navigator.cookieEnabled ? !0 : !1;
    "undefined" != typeof navigator.cookieEnabled || g || (document.cookie = "testcookie", g = -1 != document.cookie.indexOf("testcookie") ? !0 : !1);
    var h =
        "-",
        m = [{
                s: "Windows 10",
                r: /(Windows 10.0|Windows NT 10.0)/
            }, {
                s: "Windows 8.1",
                r: /(Windows 8.1|Windows NT 6.3)/
            }, {
                s: "Windows 8",
                r: /(Windows 8|Windows NT 6.2)/
            }, {
                s: "Windows 7",
                r: /(Windows 7|Windows NT 6.1)/
            }, {
                s: "Windows Vista",
                r: /Windows NT 6.0/
            }, {
                s: "Windows Server 2003",
                r: /Windows NT 5.2/
            }, {
                s: "Windows XP",
                r: /(Windows NT 5.1|Windows XP)/
            }, {
                s: "Windows 2000",
                r: /(Windows NT 5.0|Windows 2000)/
            }, {
                s: "Windows ME",
                r: /(Win 9x 4.90|Windows ME)/
            }, {
                s: "Windows 98",
                r: /(Windows 98|Win98)/
            }, {
                s: "Windows 95",
                r: /(Windows 95|Win95|Windows_95)/
            },
            {
                s: "Windows NT 4.0",
                r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
            }, {
                s: "Windows CE",
                r: /Windows CE/
            }, {
                s: "Windows 3.11",
                r: /Win16/
            }, {
                s: "Android",
                r: /Android/
            }, {
                s: "Open BSD",
                r: /OpenBSD/
            }, {
                s: "Sun OS",
                r: /SunOS/
            }, {
                s: "Linux",
                r: /(Linux|X11)/
            }, {
                s: "iOS",
                r: /(iPhone|iPad|iPod)/
            }, {
                s: "Mac OS X",
                r: /Mac OS X/
            }, {
                s: "Mac OS",
                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
            }, {
                s: "QNX",
                r: /QNX/
            }, {
                s: "UNIX",
                r: /UNIX/
            }, {
                s: "BeOS",
                r: /BeOS/
            }, {
                s: "OS/2",
                r: /OS\/2/
            }, {
                s: "Search Bot",
                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
            }
        ];
    for (l in m) {
        var n = m[l];
        if (n.r.test(d)) {
            h = n.s;
            break
        }
    }
    var l = "-";
    /Windows/.test(h) && (l = /Windows (.*)/.exec(h)[1], h = "Windows");
    switch (h) {
        case "Mac OS X":
            l = /Mac OS X (10[\._\d]+)/.exec(d)[1];
            break;
        case "Android":
            l = /Android ([\._\d]+)/.exec(d)[1];
            break;
        case "iOS":
            l = /OS (\d+)_(\d+)_?(\d+)?/.exec(a), l = l[1] + "." + l[2] + "." + (l[3] | 0)
    }
    a = "no check";
    "undefined" != typeof swfobject && (a = swfobject.getFlashPlayerVersion(), a = 0 < a.major ? a.major + "." + a.minor + " r" + a.release : "-");
    k.jscd = {
        screenW: screenSizewidth,
        screenH: screenSizeheight,
        browser: f,
        browserVersion: b,
        browserMajorVersion: e,
        mobile: c,
        os: h,
        osVersion: l,
        cookies: g,
        flashVersion: a
    }
})(this);
andiUA.andiData = function() {
	(function() {
    if (andiUA.stat) {
        var k = "browsertype:" + jscd.browser + ",browserVer:" + jscd.browserMajorVersion + ",windowW:" + jscd.screenW + ",windowH:" + jscd.screenH + ",os:" + jscd.os + ",osVersion:" + jscd.osVersion + ",mobile:" + jscd.mobile,
            a = localStorage.getItem("systembasicinfo");
        andiUA.UAYMVBJbKf("systembasicinfo") && null != a && -1 == a.indexOf(k) ? andiUA.saveStatisticLocalStorage("systembasicinfo", k) : andiUA.UAYMVBJbKf("systembasicinfo") || andiUA.saveStatisticLocalStorage("systembasicinfo", k)
    }
	})();
};
andiUA.andiData();
andiUA.runStatisMenuUse = function() {
	(function() {
    var k = null;
    andizxc(document).on("mousedown", '#UAKDcFOe, #UAqKHuDh [role="tab"] ,#UAqKHuDh [role="button"],#UAqKHuDh input', function() {
        "UAKDcFOe" != this.id && "UAFqXgXCUinput" != this.id || setTimeout(function() {
            if (andiUA.UARgCBVah) k = new Date, k = k.getTime();
            else {
                var a = new Date;
                a = a.getTime();
                andiUA.saveStatisticLocalStorage("statisticimemenuopendata", "anditime:" + (a - k) / 1E3);
                k = null
            }
        }, 400)
    });
    andizxc('[role="button"],input:not([type="hidden"]), select, textarea, button, *[contenteditable]').each(function() {
        if (!andizxc(this).is("#UAqKHuDh *")) {
            var a =
                andizxc(this),
                d = [],
                f = [];
            if ("" != andizxc(this)[0].id) {
                var b = andizxc('[for="' + andizxc(this)[0].id + '"]').text();
                var e = "" != b.trim() ? b : "none"
            } else e = "none";
            b = andizxc(this)[0].attributes;
            e = "[ANDIlabel:" + e + ",";
            for (var c = 0; c < b.length; c++) {
                var g = b[c].nodeName.toLowerCase();
                if (-1 < "aria- min max role title value name class tabindex id".indexOf(g)) {
                    g = b[c].nodeName.toLowerCase();
                    var h = b[c].nodeValue.toLowerCase();
                    e += g + ":" + h + ",";
                    d.push(g);
                    h = "" == h ? "No value" : h;
                    f.push(h)
                }
            }
            e += "]";
            a = "andiTagName:" + andizxc(a)[0].tagName.toLowerCase() +
                ",inputData:" + e;
            localStorage.getItem("statisticformdata");
            andiUA.saveStatisticLocalStorage("statisticformdata", a)
        }
    });
        andizxc('[href$=".pdf"],[href$=".txt"],[href$=".doc"],[href$=".docx"],[href$=".odt"],[href$=".wps"],[href$=".xlsx"],[href$=".ods"],[href$=".xls"],[href$=".ppt"],[href$=".pptx"],[href$=".pptm"],[href$=".pps"],[href$=".ppsx"]').each(function() {
            var a = andizxc(this).attr("href"),
                d = a.substring(a.lastIndexOf("/") + 1),
                f = -1 < a.indexOf("pdf") ? "pdf" : -1 < a.indexOf("txt") ? "text" :
                -1 < a.indexOf("wps") || -1 < a.indexOf("odt") || -1 < a.indexOf("docx") || -1 < a.indexOf("doc") ? "word" : -1 < a.indexOf("xlsx") || -1 < a.indexOf("ods") || -1 < a.indexOf("xls") ? "excel" : -1 < a.indexOf("ppt") || -1 < a.indexOf("pptx") || -1 < a.indexOf("ppsx") || -1 < a.indexOf("pptm") || -1 < a.indexOf("pps") ? "power point" : "",
                b = andizxc(this).attr("aria-label");
            b = "" == b || void 0 == b ? "no value" : b.trim();
            var e = andizxc(this).attr("title");
            e = "" == e || void 0 == e ? "no value" : e.trim();
            var c = andizxc(this).text();
            c = "" == c || void 0 == c ? "no value" : c.trim();
            andiUA.stat &&
                andiUA.saveStatisticLocalStorage("statisticfiledocdata", f + "@@@filename:'" + d + "',ariaLabel:'" + b + "',title:'" + e + "',href:'" + a + "',text:'" + c + "'")
        });
	})();
	
};
andiUA.runStatisMenuUse();
andiUA.andirunStatistic = function() {};