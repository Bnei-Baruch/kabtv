(function() {
  var ANDIUAvEhQjLcn = document.getElementById("andi2path");
  if (window.location.href.indexOf("andicloud=true") > -1 || localStorage.getItem("andicloud") == "true") {
    localStorage.setItem("andicloud", "true");
    console.log("cloudmode");
    var ANDIUAvEhQjLcn = document.getElementById("andi2path").src;
    if (ANDIUAvEhQjLcn.indexOf("production.user-a.co.il") == -1) {
      document.getElementById("andi2path").removeAttribute("id");
      ANDIUAvEhQjLcn = ANDIUAvEhQjLcn.replace("//testua.user-a.co.il/", "//production.user-a.co.il/");
      var script = document.createElement("script");
      script.src = ANDIUAvEhQjLcn;
      script.id = "andi2path";
      script.type = "text/javascript";
      var head = document.getElementsByTagName("head")[0];
      head.appendChild(script);
      return false;
    } else {
      UAERWUKtca();
    }
  } else {
    if (ANDIUAvEhQjLcn.classList != undefined && ANDIUAvEhQjLcn.classList != "" && ANDIUAvEhQjLcn.classList.contains("anditestmode")) {
      console.log("anditestmode");
      if (window.location.href.indexOf("andi=1") > -1 || localStorage.getItem("andi") == "1") {
        localStorage.setItem("andi", "1");
        if (window.self == top) {
          UAERWUKtca();
        }
      }
    } else {
      if (window.location.href.indexOf("andiqa=qa") > -1 || localStorage.getItem("andiqa") == "qa") {
        localStorage.setItem("andiqa", "qa");
        if (document.getElementById("andi2path").src.indexOf("QA") == -1) {
          document.getElementById("andi2path").removeAttribute("id");
          UAthKNVO = "//testua.user-a.co.il/Customers/_kab_tv/QA";
          var script = document.createElement("script");
          script.src = UAthKNVO + "/andi2fn1.js";
          script.id = "andi2path";
          script.type = "text/javascript";
          var head = document.getElementsByTagName("head")[0];
          head.appendChild(script);
          return false;
        } else {
          UAERWUKtca();
        }
      } else {
        if (window.location.href.indexOf("andi2=debug") > -1 || localStorage.getItem("andi2") == "debug") {
          localStorage.setItem("andi2", "debug");
        } else {
          if (window.self == top) {
            UAERWUKtca();
          }
        }
      }
    }
  }
  function UAERWUKtca() {
    var interval = setInterval(function() {
      if (document.readyState === "complete") {
        clearInterval(interval);
        ANDIUAcqgPuPDE();
      }
    }, 100);
  }
  function ANDIUAcqgPuPDE() {
    andiUA = {};
    andiUA.UAywPXy = 0;
    andiUA.ANDIloadHelp = false;
    andiUA.stat = false;
    andiUA.UATXFTAjRi = true;
    andiUA.UAWWMLJNVT = function(d, c) {
      if ("function" !== typeof d) {
        throw "Not a valid UAhAIAoT";
      }
      var a = document.createElement("script");
      a.onload = d;
      a.src = c;
      a.type = "text/javascript";
      document.getElementsByTagName("head")[0].appendChild(a);
    };
    andiUA.url = "https://user-a.co.il/";
    andiUA.UADocqZihO = "2.0.6";
    andiUA.UAibBnm = 750;
    andiUA.UAVsBKP = true;
    ANDIUAvEhQjLcn = document.getElementById("andi2path").src;
    andiUA.UAthKNVO = ANDIUAvEhQjLcn.replace("/andi2fn1.js", "");
    localStorage.setItem("UAsizeLocalStorage", 4500);
    andiUA.UAYMVBJbKf = function(UAGzPRWJb) {
      if (localStorage.getItem(UAGzPRWJb) == null || localStorage.getItem(UAGzPRWJb) == "null") {
        return false;
      }
      return true;
    };
    andiUA.UAhmgdyoq = function(UAiCaJh) {
      var UAiCaJh = UAiCaJh || "";
      for (var key in window.localStorage) {
        if (window.localStorage.hasOwnProperty(key)) {
          UAiCaJh += window.localStorage[key];
        }
      }
      return UAiCaJh ? 3 + UAiCaJh.length * 16 / (8 * 1024) : 0;
    };
    JS = {};
    if (!Array.prototype.includes) {
      Array.prototype.includes = function(searchElement) {
        if (this == null) {
          throw new TypeError("Array.prototype.includes called on null or undefined");
        }
        var O = Object(this);
        var len = parseInt(O.length, 10) || 0;
        if (len === 0) {
          return false;
        }
        var n = parseInt(arguments[1], 10) || 0;
        var k;
        if (n >= 0) {
          k = n;
        } else {
          k = len + n;
          if (k < 0) {
            k = 0;
          }
        }
        var currentElement;
        while (k < len) {
          currentElement = O[k];
          if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
            return true;
          }
          k++;
        }
        return false;
      };
    }
    live = function(selector, callback) {
      document.observe("click", function(e) {
        var element = e.element();
        if (!element.match(selector)) {
          element = element.ancestors().find(function(elem) {
            return elem.match(selector);
          });
        } else {
          element = null;
        }
        if (element) {
          callback.apply(element);
        }
      });
    };
    andiUA.UAWMMUMfyS = function(arr, value) {
      var i = arr.length;
      while (i--) {
        if (arr[i] == value) {
          return true;
        }
      }
      return false;
    };
    UANjoxh = function(elm, cssUAvWyVk) {
      elm = document.querySelectorAll(elem);
      document.querySelectorAll(elm).forEach(function(el) {
        Object.keys(cssUAvWyVk).forEach(function(attr) {
          var styleProp = attr.UAOFzRga(), cssValue = cssUAvWyVk[attr];
          el.style[styleProp] = cssValue;
        });
      });
    };
    String.prototype.UAGpWlmr = function(extension) {
      var UAEfHmB = this.replace(/\\/g, "/");
      UAEfHmB = UAEfHmB.substring(UAEfHmB.lastIndexOf("/") + 1);
      return extension ? UAEfHmB.replace(/[?#].+$/, "") : UAEfHmB.split(".")[0];
    };
    String.prototype.UAogyVcgwn = function(extension) {
      var UAEfHmB = this.replace(/\\/g, "/");
      UAEfHmB = UAEfHmB.substring(UAEfHmB.lastIndexOf("/") + 1);
      return UAEfHmB;
    };
    String.prototype.UABJBbKac = function(UAuUIIv, UAfYhPTBrq) {
      var str = this;
      UAuUIIv = UAuUIIv.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      return str.replace(new RegExp(UAuUIIv, "gi"), UAfYhPTBrq);
    };
    String.prototype.UAOFzRga = function() {
      var str = this;
      str = str.UABJBbKac("-", " ").toLowerCase().replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
        return p1 + p2.toUpperCase();
      });
      str = str.charAt(0).toLowerCase() + str.slice(1);
      return str.UABJBbKac(" ", "");
    };
    String.prototype.UAQepLHY = function() {
      var str = this;
      var UAQBwioNn = document.createElement("br");
      try {
        UAQBwioNn.querySelector(str);
      } catch (e) {
        return false;
      }
      return true;
    };
    NodeList.prototype.forEach = HTMLCollection.prototype.forEach = Array.prototype.forEach;
    if (!Element.prototype.UAwgmOsu) {
      Element.prototype.UAwgmOsu = Element.prototype.msUAwgmOsuSelector || Element.prototype.webkiUADKHqtOIgmOsuSelector;
    }
    if (!Element.prototype.closest) {
      Element.prototype.closest = function(s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) {
          return null;
        }
        do {
          if (ancestor.UAwgmOsu(s)) {
            return ancestor;
          }
          ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
      };
    }
    Element.prototype.removeAttr = function(attrName) {
      var that = this;
      if (that == null) {
        return false;
      }
      attrName.split(" ");
      for (var UALhajEH = 0; UALhajEH < attrName.length; UALhajEH++) {
        that.removeAttribute(attrName[UALhajEH]);
      }
      return that;
    };
    Element.prototype.addAttr = function(attrUAvWyVk) {
      var that = this;
      if (that == null) {
        return false;
      }
      Object.keys(attrUAvWyVk).forEach(function(attr) {
        that.setAttribute(attr, attrUAvWyVk[attr]);
      });
      return that;
    };
    Element.prototype.getAttr = function(attrName) {
      var that = this;
      if (that == null) {
        return false;
      }
      return this.getAttribute(attrName);
    };
    Element.prototype.UAmofKicsu = function() {
      var that = this;
      if (that == null) {
        return false;
      }
      return this.innerText || this.textContent;
    };
    Element.prototype.UAUCfWNtdf = function(cssUAvWyVk) {
      var that = this;
      if (that == null) {
        return false;
      }
      Object.keys(cssUAvWyVk).forEach(function(attr) {
        var styleProp = attr.UAOFzRga(), cssValue = cssUAvWyVk[attr];
        that.style[styleProp] = cssValue;
      });
      return that;
    };
    Element.prototype.UAXfpcme = function(cssUAvWyVk) {
      var that = this;
      if (that == null) {
        return false;
      }
      return window.getComputedStyle(this, null).getPropertyValue(cssUAvWyVk);
    };
    Element.prototype.UAaudtCNG = function() {
      var that = this;
      if (that == null) {
        return false;
      }
      this.parentNode.removeChild(this);
      return this;
    };
    Element.prototype.UAURupXPEO = function() {
      var that = this;
      if (that == null) {
        return false;
      }
      return this.innerHTML;
    };
    Element.prototype.UAkyWCLiZY = function(newHtml) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.innerHTML = newHtml;
      return this;
    };
    Element.prototype.UAPzpbtvf = function(newHtml) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.insertAdjacentHTML("beforeend", newHtml);
      return this;
    };
    Element.prototype.UAQfCJeO = function(newHtml) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.insertAdjacentHTML("afterbegin", newHtml);
      return this;
    };
    Element.prototype.UAvHJzpnTh = function(newHtml) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.insertAdjacentHTML("afterend", newHtml);
      return this;
    };
    Element.prototype.UAlYqxtf = function(attrUAvWyVk, UAoLmgLRLt) {
      var that = this;
      if (that == null) {
        return false;
      }
      UAoLmgLRLt = UAoLmgLRLt || "1";
      UAoLmgLRLt = " " + UAoLmgLRLt + "s";
      Object.keys(attrUAvWyVk).forEach(function(attr) {
        var styleProp = attr.UAOFzRga(), cssValue = attrUAvWyVk[attr];
        that.style[styleProp] = cssValue;
        that.style.transition = styleProp + UAoLmgLRLt;
      });
      return that;
    };
    Element.prototype.addClass = function(classUACnpgjn) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.classList.add(classUACnpgjn);
      return this;
    };
    Element.prototype.removeClass = function(classUACnpgjn) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.classList.remove(classUACnpgjn);
      return this;
    };
    Element.prototype.hasClass = function(className) {
      var that = this;
      if (that == null) {
        return false;
      }
      return this.className && (new RegExp("(^|\\s)" + className + "(\\s|$)")).test(this.className);
    };
    Element.prototype.UAGxNxZL = function(newNode) {
      var that = this;
      if (that == null) {
        return false;
      }
      this.parentNode.insertBefore(newNode, this.nextSibling);
    };
    andiUA.sleep = function(milliseconds) {
      var start = (new Date).getTime();
      for (var i = 0; i < 1e7; i++) {
        if ((new Date).getTime() - start > milliseconds) {
          break;
        }
      }
    };
    eventOn = function(eventName, selector, fn) {
      var element = document.querySelector("body");
      element.addEventListener(eventName, function(event) {
        var possibleTargets = element.querySelectorAll(selector);
        var target = event.target;
        for (var i = 0, l = possibleTargets.length; i < l; i++) {
          var el = target;
          var p = possibleTargets[i];
          while (el && el !== element) {
            if (el === p) {
              return fn.call(p, event);
            }
            el = el.parentNode;
          }
        }
      });
    };
    var addEvent = function(object, type, callback) {
      if (object == null || typeof object == "undefined") {
        return;
      }
      if (object.addEventListener) {
        object.addEventListener(type, callback, false);
      } else {
        if (object.attachEvent) {
          object.attachEvent("on" + type, callback);
        } else {
          object["on" + type] = callback;
        }
      }
    };
    function UAigQqjt(elem, filter) {
      var sibs = [];
      elem = elem.parentNode.firstChild;
      do {
        if (elem.nodeType === 3) {
          continue;
        }
        if (!filter || filter(elem)) {
          sibs.push(elem);
        }
      } while (elem = elem.nextSibling);
      return sibs;
    }
    function UAHRjVhSL(elem, filter) {
      var sibs = [];
      while (elem = elem.previousSibling) {
        if (elem.nodeType === 3) {
          continue;
        }
        if (!filter || filter(elem)) {
          sibs.push(elem);
        }
      }
      return sibs;
    }
    function UAIVhjxDMq(elem, filter) {
      var sibs = [];
      while (elem = elem.nextSibling) {
        if (elem.nodeType === 3) {
          continue;
        }
        if (!filter || filter(elem)) {
          sibs.push(elem);
        }
      }
      return sibs;
    }
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function(searchValue, index) {
        var len = this.length >>> 0;
        index |= 0;
        if (index < 0) {
          index = Math.max(len - index, 0);
        } else {
          if (index >= len) {
            return -1;
          }
        }
        if (searchValue === undefined) {
          do {
            if (index in this && this[index] === undefined) {
              return index;
            }
          } while (++index !== len);
        } else {
          do {
            if (this[index] === searchValue) {
              return index;
            }
          } while (++index !== len);
        }
        return -1;
      };
    }
    andiUA.UAEqXWiUpx = function(UAGpWlmr, UAfjBBWSl) {
      if (UAfjBBWSl == "js") {
        var UAFGlQB = document.createElement("script");
        UAFGlQB.setAttribute("type", "text/javascript");
        UAFGlQB.setAttribute("src", UAGpWlmr);
      } else {
        if (UAfjBBWSl == "css") {
          var UAFGlQB = document.createElement("link");
          UAFGlQB.setAttribute("rel", "stylesheet");
          UAFGlQB.setAttribute("type", "text/css");
          UAFGlQB.setAttribute("href", UAGpWlmr);
        }
      }
      if (typeof UAFGlQB != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(UAFGlQB);
      }
    };
    andiUA.UAWWMLJNVT(function() {
    }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2BasicFuncions.js");
    andiUA.UAFyQIorC = setInterval(function(UAOEcUOC) {
      if (andiUA.UAQvRrC) {
        if (localStorage.getItem("dontruninthissite") == "true") {
          var Text = document.querySelector("html").getAttr("lang") == "he" ? "\u05dc\u05d7\u05e5 \u05dc\u05d4\u05e4\u05e2\u05dc\u05d4 \u05e9\u05dc \u05d0\u05e0\u05d3\u05d9 \u05d1\u05d0\u05ea\u05e8 \u05d6\u05d4." : "Click to run andi on this site";
          var html = '<div style="z-index: 99999999; text-align:right; background: rgb(0, 133, 186); position: fixed; height: 40px; top: 200px; left: 0px;" id="UAKDcFOe" role="button" aria-label="' + Text + '" tabindex="0" UAdryaDG="true"><span></span><img alt="" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2235%22%20height%3D%2235%22%20viewBox%3D%220%200%2035%2035%22%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M24.1%2026.34L21.003%2019h-7.82l-.67-11.184c-.055-.956.674-1.66%201.63-1.715.96-.054%201.776.73%201.832%201.687l.48%208.213h6.818l2.71%206.216%201-.357c.9-.323%201.895.145%202.217%201.046s-.147%201.777-1.05%202.1L24.1%2026.34z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M20.943%2014h-6.32c-.96%200-1.734-.78-1.734-1.5%200-.718.774-1.5%201.732-1.5h6.32c.958%200%201.735.782%201.735%201.5%200%20.72-.777%201.5-1.734%201.5z%22%2F%3E%3Ccircle%20fill%3D%22%23FFF%22%20cx%3D%2214.835%22%20cy%3D%226.336%22%20r%3D%222.835%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M21.37%2021.76c-.55%202.425-2.68%204.252-5.27%204.252-3.012%200-5.457-2.447-5.457-5.458%200-1.43.568-2.714%201.475-3.683l-.196-3.033-1.78-1.232c-.212-.144-.487-.12-.67.06L8.21%2013.928c-.18.178-.205.46-.06.667l1.313%201.9c-.42.687-.736%201.438-.93%202.24l-2.186.415c-.25.042-.347.26-.347.514v1.783c0%20.253.098.47.348.516l2.23.413c.19.803.485%201.555.906%202.24l-1.324%201.9c-.146.208-.124.49.054.668l1.26%201.26c.182.18.456.207.667.063l1.9-1.316c.686.422%201.435.74%202.237.933l.414%202.36c.045.247.263.517.516.517h1.784c.256%200%20.472-.27.517-.518l.41-2.314c.806-.192%201.557-.533%202.242-.955l1.898%201.305c.21.144.49.11.666-.067l.994-.99-2.347-5.7z%22%2F%3E%3C%2Fsvg%3E"></div>';
          document.querySelector("body").UAQfCJeO(html);
          document.querySelector("#UAKDcFOe").addEventListener("click", function() {
            if (confirm(document.querySelector("html").getAttr("lang") == "he" ? "\u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05d1\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d1\u05d5\u05d8\u05dc\u05d4 \u05e2\u05dc \u05d9\u05d3\u05da. \u05d4\u05d0\u05dd \u05ea\u05e8\u05e6\u05d4 \u05dc\u05d4\u05e4\u05e2\u05d9\u05dc\u05d4 \u05e9\u05d5\u05d1 ?" : "The accessibility in this site has been canceled by you. Would you like to enable it again?")) {
              localStorage.removeItem("dontruninthissite");
              location.reload();
            }
          });
        } else {
          UALEebRH = function(d, c) {
            var a = (d & 65535) + (c & 65535);
            return (d >> 16) + (c >> 16) + (a >> 16) << 16 | a & 65535;
          };
          UANnPflaj = function(d, c) {
            return d << c | d >>> 32 - c;
          };
          UApoASW = function(d, c, a, b, e, f) {
            return UALEebRH(UANnPflaj(UALEebRH(UALEebRH(c, d), UALEebRH(b, f)), e), a);
          };
          UAXVvqLjz = function(d, c, a, b, e, f, g) {
            return UApoASW(c & a | ~c & b, d, c, e, f, g);
          };
          UAeFsZZ = function(d, c, a, b, e, f, g) {
            return UApoASW(c & b | a & ~b, d, c, e, f, g);
          };
          UAoZgvEqrz = function(d, c, a, b, e, f, g) {
            return UApoASW(c ^ a ^ b, d, c, e, f, g);
          };
          UAwFLQRS = function(d, c, a, b, e, f, g) {
            return UApoASW(a ^ (c | ~b), d, c, e, f, g);
          };
          UAnMvrWW = function(d) {
            var c = 1732584193, a = -271733879, b = -1732584194, e = 271733878;
            for (UALhajEH = 0; UALhajEH < d.length; UALhajEH += 16) {
              var f = c, g = a, h = b, k = e;
              c = UAXVvqLjz(c, a, b, e, d[UALhajEH + 0], 7, -680876936);
              e = UAXVvqLjz(e, c, a, b, d[UALhajEH + 1], 12, -389564586);
              b = UAXVvqLjz(b, e, c, a, d[UALhajEH + 2], 17, 606105819);
              a = UAXVvqLjz(a, b, e, c, d[UALhajEH + 3], 22, -1044525330);
              c = UAXVvqLjz(c, a, b, e, d[UALhajEH + 4], 7, -176418897);
              e = UAXVvqLjz(e, c, a, b, d[UALhajEH + 5], 12, 1200080426);
              b = UAXVvqLjz(b, e, c, a, d[UALhajEH + 6], 17, -1473231341);
              a = UAXVvqLjz(a, b, e, c, d[UALhajEH + 7], 22, -45705983);
              c = UAXVvqLjz(c, a, b, e, d[UALhajEH + 8], 7, 1770035416);
              e = UAXVvqLjz(e, c, a, b, d[UALhajEH + 9], 12, -1958414417);
              b = UAXVvqLjz(b, e, c, a, d[UALhajEH + 10], 17, -42063);
              a = UAXVvqLjz(a, b, e, c, d[UALhajEH + 11], 22, -1990404162);
              c = UAXVvqLjz(c, a, b, e, d[UALhajEH + 12], 7, 1804603682);
              e = UAXVvqLjz(e, c, a, b, d[UALhajEH + 13], 12, -40341101);
              b = UAXVvqLjz(b, e, c, a, d[UALhajEH + 14], 17, -1502002290);
              a = UAXVvqLjz(a, b, e, c, d[UALhajEH + 15], 22, 1236535329);
              c = UAeFsZZ(c, a, b, e, d[UALhajEH + 1], 5, -165796510);
              e = UAeFsZZ(e, c, a, b, d[UALhajEH + 6], 9, -1069501632);
              b = UAeFsZZ(b, e, c, a, d[UALhajEH + 11], 14, 643717713);
              a = UAeFsZZ(a, b, e, c, d[UALhajEH + 0], 20, -373897302);
              c = UAeFsZZ(c, a, b, e, d[UALhajEH + 5], 5, -701558691);
              e = UAeFsZZ(e, c, a, b, d[UALhajEH + 10], 9, 38016083);
              b = UAeFsZZ(b, e, c, a, d[UALhajEH + 15], 14, -660478335);
              a = UAeFsZZ(a, b, e, c, d[UALhajEH + 4], 20, -405537848);
              c = UAeFsZZ(c, a, b, e, d[UALhajEH + 9], 5, 568446438);
              e = UAeFsZZ(e, c, a, b, d[UALhajEH + 14], 9, -1019803690);
              b = UAeFsZZ(b, e, c, a, d[UALhajEH + 3], 14, -187363961);
              a = UAeFsZZ(a, b, e, c, d[UALhajEH + 8], 20, 1163531501);
              c = UAeFsZZ(c, a, b, e, d[UALhajEH + 13], 5, -1444681467);
              e = UAeFsZZ(e, c, a, b, d[UALhajEH + 2], 9, -51403784);
              b = UAeFsZZ(b, e, c, a, d[UALhajEH + 7], 14, 1735328473);
              a = UAeFsZZ(a, b, e, c, d[UALhajEH + 12], 20, -1926607734);
              c = UAoZgvEqrz(c, a, b, e, d[UALhajEH + 5], 4, -378558);
              e = UAoZgvEqrz(e, c, a, b, d[UALhajEH + 8], 11, -2022574463);
              b = UAoZgvEqrz(b, e, c, a, d[UALhajEH + 11], 16, 1839030562);
              a = UAoZgvEqrz(a, b, e, c, d[UALhajEH + 14], 23, -35309556);
              c = UAoZgvEqrz(c, a, b, e, d[UALhajEH + 1], 4, -1530992060);
              e = UAoZgvEqrz(e, c, a, b, d[UALhajEH + 4], 11, 1272893353);
              b = UAoZgvEqrz(b, e, c, a, d[UALhajEH + 7], 16, -155497632);
              a = UAoZgvEqrz(a, b, e, c, d[UALhajEH + 10], 23, -1094730640);
              c = UAoZgvEqrz(c, a, b, e, d[UALhajEH + 13], 4, 681279174);
              e = UAoZgvEqrz(e, c, a, b, d[UALhajEH + 0], 11, -358537222);
              b = UAoZgvEqrz(b, e, c, a, d[UALhajEH + 3], 16, -722521979);
              a = UAoZgvEqrz(a, b, e, c, d[UALhajEH + 6], 23, 76029189);
              c = UAoZgvEqrz(c, a, b, e, d[UALhajEH + 9], 4, -640364487);
              e = UAoZgvEqrz(e, c, a, b, d[UALhajEH + 12], 11, -421815835);
              b = UAoZgvEqrz(b, e, c, a, d[UALhajEH + 15], 16, 530742520);
              a = UAoZgvEqrz(a, b, e, c, d[UALhajEH + 2], 23, -995338651);
              c = UAwFLQRS(c, a, b, e, d[UALhajEH + 0], 6, -198630844);
              e = UAwFLQRS(e, c, a, b, d[UALhajEH + 7], 10, 1126891415);
              b = UAwFLQRS(b, e, c, a, d[UALhajEH + 14], 15, -1416354905);
              a = UAwFLQRS(a, b, e, c, d[UALhajEH + 5], 21, -57434055);
              c = UAwFLQRS(c, a, b, e, d[UALhajEH + 12], 6, 1700485571);
              e = UAwFLQRS(e, c, a, b, d[UALhajEH + 3], 10, -1894986606);
              b = UAwFLQRS(b, e, c, a, d[UALhajEH + 10], 15, -1051523);
              a = UAwFLQRS(a, b, e, c, d[UALhajEH + 1], 21, -2054922799);
              c = UAwFLQRS(c, a, b, e, d[UALhajEH + 8], 6, 1873313359);
              e = UAwFLQRS(e, c, a, b, d[UALhajEH + 15], 10, -30611744);
              b = UAwFLQRS(b, e, c, a, d[UALhajEH + 6], 15, -1560198380);
              a = UAwFLQRS(a, b, e, c, d[UALhajEH + 13], 21, 1309151649);
              c = UAwFLQRS(c, a, b, e, d[UALhajEH + 4], 6, -145523070);
              e = UAwFLQRS(e, c, a, b, d[UALhajEH + 11], 10, -1120210379);
              b = UAwFLQRS(b, e, c, a, d[UALhajEH + 2], 15, 718787259);
              a = UAwFLQRS(a, b, e, c, d[UALhajEH + 9], 21, -343485551);
              c = UALEebRH(c, f);
              a = UALEebRH(a, g);
              b = UALEebRH(b, h);
              e = UALEebRH(e, k);
            }
            return [c, a, b, e];
          };
          UAflFZI = function(d, c) {
            var a = !1;
            andizxc(d).each(function(b) {
              d[b] == c && (a = !0);
            });
            return a;
          };
          UAmZgQHSzC = function(d) {
            for (var c = "", a = 0; a < 4 * d.length; a++) {
              c += "0123456789abcdef".charAt(d[a >> 2] >> a % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(d[a >> 2] >> a % 4 * 8 & 15);
            }
            return c;
          };
          UALljEYOle = function(d) {
            for (var c = "", a = 0; a < 32 * d.length; a += 6) {
              c += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d[a >> 5] << a % 32 & 63 | d[a >> 6] >> 32 - a % 32 & 63);
            }
            return c;
          };
          UARxwCCX = function(d) {
            for (var c = (d.length + 8 >> 6) + 1, a = Array(16 * c), b = 0; b < 16 * c; b++) {
              a[b] = 0;
            }
            for (b = 0; b < d.length; b++) {
              a[b >> 2] |= (d.charCodeAt(b) & 255) << b % 4 * 8;
            }
            a[b >> 2] |= 128 << b % 4 * 8;
            a[16 * c - 2] = 8 * d.length;
            return a;
          };
          UAJROFS = function(d) {
            for (var c = (d.length + 4 >> 5) + 1, a = Array(16 * c), b = 0; b < 16 * c; b++) {
              a[b] = 0;
            }
            for (b = 0; b < d.length; b++) {
              a[b >> 1] |= d.charCodeAt(b) << b % 2 * 16;
            }
            a[b >> 1] |= 128 << b % 2 * 16;
            a[16 * c - 2] = 16 * d.length;
            return a;
          };
          UAWxOYi = {};
          UAPNCkPLI = function(d) {
            return UAmZgQHSzC(UAnMvrWW(UARxwCCX(d)));
          };
          andiUA.UAObssvXQ = function() {
            for (var d = 0, c = document.domain, a = c.split("."), b = "_gd" + (new Date).getTime(); d < a.length - 1 && -1 == document.cookie.indexOf(b + "=" + b);) {
              c = a.slice(-1 - ++d).join("."), document.cookie = b + "=" + b + ";domain=" + c + ";";
            }
            document.cookie = b + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + c + ";";
            return "";
          }();
          UAbzrHkATF = function() {
            UAOAIGcWRR = new Date;
            var d = (UAOAIGcWRR.getDate() + UAOAIGcWRR.getFullYear() + UAOAIGcWRR.getMonth()).toString();
            return UAPNCkPLI(d);
          };
          UAdPksLnJ = {UAnAGpB:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", UApmcCv:function(d) {
            var c = "", a = 0;
            for (d = UAdPksLnJ.UAmugXXh(d); a < d.length;) {
              var b = d.charCodeAt(a++);
              var e = d.charCodeAt(a++);
              var f = d.charCodeAt(a++);
              var g = b >> 2;
              b = (b & 3) << 4 | e >> 4;
              var h = (e & 15) << 2 | f >> 6;
              var k = f & 63;
              isNaN(e) ? h = k = 64 : isNaN(f) && (k = 64);
              c = c + this.UAnAGpB.charAt(g) + this.UAnAGpB.charAt(b) + this.UAnAGpB.charAt(h) + this.UAnAGpB.charAt(k);
            }
            return c;
          }, UASEQryzSd:function(d) {
            var c = "", a = 0;
            for (d = d.replace(/[^A-Za-z0-9\+\/=]/g, ""); a < d.length;) {
              var b = this.UAnAGpB.indexOf(d.charAt(a++));
              var e = this.UAnAGpB.indexOf(d.charAt(a++));
              var f = this.UAnAGpB.indexOf(d.charAt(a++));
              var g = this.UAnAGpB.indexOf(d.charAt(a++));
              b = b << 2 | e >> 4;
              e = (e & 15) << 4 | f >> 2;
              var h = (f & 3) << 6 | g;
              c += String.fromCharCode(b);
              64 != f && (c += String.fromCharCode(e));
              64 != g && (c += String.fromCharCode(h));
            }
            return c = UAdPksLnJ.UAvuzDaBE(c);
          }, UAmugXXh:function(d) {
            d = d.replace(/\r\n/g, "\n");
            for (var c = "", a = 0; a < d.length; a++) {
              var b = d.charCodeAt(a);
              128 > b ? c += String.fromCharCode(b) : (127 < b && 2048 > b ? c += String.fromCharCode(b >> 6 | 192) : (c += String.fromCharCode(b >> 12 | 224), c += String.fromCharCode(b >> 6 & 63 | 128)), c += String.fromCharCode(b & 63 | 128));
            }
            return c;
          }, UAvuzDaBE:function(d) {
            var c = "", a = 0;
            for (UAwbCyF = UArTVmk = 0; a < d.length;) {
              var b = d.charCodeAt(a);
              128 > b ? (c += String.fromCharCode(b), a++) : 191 < b && 224 > b ? (UArTVmk = d.charCodeAt(a + 1), c += String.fromCharCode((b & 31) << 6 | UArTVmk & 63), a += 2) : (UArTVmk = d.charCodeAt(a + 1), UAjcfrA = d.charCodeAt(a + 2), c += String.fromCharCode((b & 15) << 12 | (UArTVmk & 63) << 6 | UAjcfrA & 63), a += 3);
            }
            return c;
          }};
          andiUA.UACRNKt = function(UAYebVD) {
            document.querySelector("body").UAPzpbtvf('<span class="UArXnqfpzk" role="alert" aria-label="' + UAYebVD + '"></span>');
            setTimeout(function() {
              document.querySelectorAll(".UArXnqfpzk").forEach(function(el) {
                el.UAaudtCNG();
              });
            }, 1500);
          };
          var UADTvCig = document.querySelector("html").getAttr("lang");
          if (UADTvCig == "en") {
            var UAmTpBD = "Starts loading accessibility";
            var UAUQzcH = "Loading data from server";
            var UAzFzBUnWV = "Starts Making your request";
            var UAZJSfn = "The accessibility add-on could not be loaded for this site because the publisher blocked this option. You can contact the site owner and request UARjBTbqt the accessibility add-on be enabled on their site. UA will be happy to assist the site owner in this matter.";
          } else {
            if (document.querySelector("html").getAttr("lang") == "he") {
              var UAmTpBD = "\u05de\u05ea\u05d7\u05d9\u05dc \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05d4\u05e0\u05e0\u05d2\u05e9\u05d4 \u05dc\u05d0\u05ea\u05e8";
              var UAUQzcH = "\u05d8\u05d5\u05e2\u05df \u05de\u05d9\u05d3\u05e2 \u05de\u05d4\u05e9\u05e8\u05ea";
              var UAzFzBUnWV = "\u05de\u05d1\u05e6\u05e2 \u05d0\u05ea \u05d1\u05e7\u05e9\u05ea\u05da";
              var UAZJSfn = "\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05e8\u05db\u05d9\u05d1 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05de\u05d0\u05d7\u05ea \u05d4\u05e1\u05d9\u05d1\u05d5\u05ea \u05d4\u05d1\u05d0\u05d5\u05ea <br/>" + "1. \u05d1\u05e2\u05d9\u05d4 \u05d1\u05d8\u05e2\u05d9\u05e0\u05ea \u05d4\u05e8\u05db\u05d9\u05d1 - \u05e0\u05e1\u05d4 \u05dc\u05d8\u05e2\u05d5\u05df \u05de\u05d7\u05d3\u05e9 \u05d0\u05ea \u05d4\u05d3\u05e3.<br/>" + "2. \u05d1\u05e2\u05dc \u05d4\u05d0\u05ea\u05e8 \u05d7\u05e1\u05dd \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5 \u05d1\u05e9\u05dc \u05e9\u05d9\u05e7\u05d5\u05dc\u05d9 \u05d0\u05d1\u05d8\u05d7\u05d4.<br/>" + 
              "<br/>" + "\u05d1\u05de\u05d9\u05d3\u05d4 \u05d5\u05d4\u05d1\u05e2\u05d9\u05d4 \u05d7\u05d5\u05d6\u05e8\u05ea, \u05d1\u05d1\u05e7\u05e9\u05d4 \u05e6\u05d5\u05e8 \u05d0\u05d9\u05ea\u05e0\u05d5 \u05e7\u05e9\u05e8 \u05d1\u05de\u05d9\u05d9\u05dc: info@user-a.co.il" + "\u05e2\u05dd \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd:<br/> \u05db\u05ea\u05d5\u05d1\u05ea \u05d4\u05d0\u05ea\u05e8, \u05e9\u05de\u05da \u05d5\u05db\u05d9\u05e6\u05d3 \u05e0\u05d9\u05ea\u05df \u05dc\u05e6\u05d5\u05e8 \u05e2\u05de\u05da \u05e7\u05e9\u05e8 \u05db\u05d3\u05d9 \u05dc\u05e2\u05d3\u05db\u05e0\u05da \u05d1\u05d4\u05de\u05e9\u05da \u05d4\u05d8\u05d9\u05e4\u05d5\u05dc." + 
              "\u05ea\u05d5\u05d3\u05d4 \u05e8\u05d1\u05d4 \u05de\u05e8\u05d0\u05e9.<br/>" + "\u05e6\u05d5\u05d5\u05ea UA.<br/>";
            } else {
              var UAmTpBD = "Starts loading accessibility";
              var UAUQzcH = "Loading data from server";
              var UAzFzBUnWV = "Starts Making your request";
              var UAZJSfn = "The accessibility add-on could not be loaded for this site because the publisher blocked this option. You can contact the site owner and request UARjBTbqt the accessibility add-on be enabled on their site. UA will be happy to assist the site owner in this matter.";
            }
          }
          var UAZgYbD = document.querySelector("html").getAttr("lang");
          var UAfMWUspfJ = document.querySelector("body").UAXfpcme("direction");
          var UAbgQUT = "<style>\t\t\t\t#UADBvwtIu {\t\t\t\t-webkit-box-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.75); \t\t\t\t-moz-box-shadow:0px 0px 2px 0px rgba(50, 50, 50, 0.75); \t\t\t\tbox-shadow: 0px 0px 2px 0px rgba(50, 50, 50, 0.75);\t\t\t\tbackground-color:#fff;\t\t\t\tposition:fixed;\t\t\t\twidth:50px;\t\t\t\theight:auto;\t\t\t\ttop:50%;\t\t\t\tleft:" + (UAfMWUspfJ == "rtl" ? "100%" : "0") + ';\t\t\t\tz-index:999999999999999;\t\t\t\ttext-align:center;\t\t\t\tbackground-color:#fff;\t\t\t\t}\t\t\t\t</style>\t\t\t\t<div style="" firsttime="true" id="UADBvwtIu"  tabindex="0" aria-label="' + 
          UAmTpBD + '" role="dialog">\t\t\t\t<img src="' + andiUA.UAthKNVO + '/images/load2.gif" alt="" style="width:60px;height:60px;"/><br/>\t\t\t\t</div>';
          document.querySelector("body").UAQfCJeO(UAbgQUT);
          setTimeout(function() {
            if (document.querySelector("#UADBvwtIu[firsttime]") != null) {
              andiUA.UACRNKt(UAZJSfn);
              document.querySelector("#UADBvwtIu[firsttime]").UAUCfWNtdf({"font-size":"14px", "height":"auto", "width":"100%", "padding":"5px"});
              document.querySelector("#UADBvwtIu[firsttime]").textContent = UAZJSfn;
              var andiH = document.querySelector("#UADBvwtIu[firsttime]").UAXfpcme("height");
              document.querySelector("#UADBvwtIu[firsttime]").UAUCfWNtdf({"top":"calc(100% - " + (andiH + 10) + "px)"});
              setTimeout(function() {
                document.querySelector("#UADBvwtIu[firsttime]").UAaudtCNG();
              }, 7000);
            }
          }, 60000);
          andiUA.UADBvwtIu = function() {
            document.querySelector("#UAqKHuDh").UAQfCJeO('<div id="UAWgLiGL" ></div>\t\t\t\t\t\t<div id="UANRdvZuR" tabindex="0" role="dialog" style="z-index=999999999999;text-align:center;" aria-label="' + UAUQzcH + '" >\t\t\t\t\t\t<div style="" id="UADBvwtIu">\t\t\t\t\t\t<img src="' + andiUA.UAthKNVO + '/images/load2.gif" alt="" style="margin: 0 auto; width:150;height:150px;"/><br/>\t\t\t\t\t\t<span aria-hidden="true">' + UAUQzcH + "</span>\t\t\t\t\t\t</div></div>");
            andiUA.UACRNKt(UAUQzcH);
          };
          andiUA.UACRNKt(UAmTpBD);
          clearInterval(andiUA.UAFyQIorC);
          UATlFmXxKk = ["421aa90e079fa326b6494f812ad13e79", "", "23bb78384e79e45b2d85ff1107e06fb5"];
          UAFQySwll = UAbzrHkATF();
          UA2ab = andiUA.UAObssvXQ;
          if (UAflFZI(UATlFmXxKk, UA2ab)) {
            var UAQvRrC = setInterval(function(UAOEcUOC) {
              if (andiUA.UAQvRrC != undefined) {
                clearInterval(UAQvRrC);
                andiUA.UAnDeomFx = function() {
                  var UAXKBlpQ = UAXKBlpQ || "";
                  UAXOXkNt = localStorage.getItem("UAxCNwtMM");
                  var UAVSFkhvzd = undefined;
                  andiUA.UAtzTcR = 0, andiUA.UALkdsvES = 0, andiUA.UAfxwzGT = 0, andiUA.UAEtcpCuT = 0;
                  andiUA.UAFFZlp = [], andiUA.UAoAcHIoe = [], andiUA.UAuZvSfcc = [], andiUA.UAquXpdpBW = [];
                  andiUA.UAegcxSMa = [];
                  andiUA.UAdKJna = [];
                  UAgPwLzW = 0, UAlrnaXvjF = 0;
                  var n, a = [], walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
                  while (n = walk.nextNode()) {
                    var UAKqkRP = n.parentNode;
                    var UANnjRGUg = n.data.trim();
                    if (UANnjRGUg !== "" && UAKqkRP.tagName !== "NOSCRIPT" && UAKqkRP.tagName !== "SCRIPT" && UAKqkRP.tagName !== "STYLE" && UAKqkRP.tagName !== "HEAD" && UAKqkRP.tagName !== "META" && UAKqkRP.tagName !== "LINK") {
                      UAKqkRP.setAttribute("UAJZkUqw", "true");
                      var UARqsWtIRo = parseInt(window.getComputedStyle(UAKqkRP, null).getPropertyValue("font-size"));
                      var UAuRhxeWhiteSpace = window.getComputedStyle(UAKqkRP, null).getPropertyValue("white-space");
                      var UAuRhxelineHeight = window.getComputedStyle(UAKqkRP, null).getPropertyValue("line-height");
                      UAKqkRP.setAttribute("UAQUByuWWd", UARqsWtIRo);
                      UAKqkRP.setAttribute("UADKHqtOIhiteSpace", UAuRhxeWhiteSpace);
                      UAKqkRP.setAttribute("UARlAcVMineHeight", UAuRhxelineHeight);
                      if (UAKqkRP.hasAttribute("style")) {
                        UAKqkRP.setAttribute("UAknrDdx", UAKqkRP.style.cssText);
                      }
                      UAlrnaXvjF += UARqsWtIRo;
                      UAgPwLzW++;
                      var UAoLzzipGV = UAKqkRP;
                      var UAluHyDJwM = UANnjRGUg.split(" ");
                      for (var a = 0; a < UAluHyDJwM.length; a++) {
                        var word = UAluHyDJwM[a];
                        if (andiUA.UADQeePd(word)) {
                          andiUA.UAoAcHIoe.push(word);
                          andiUA.UALkdsvES++;
                        } else {
                          if (andiUA.UAucNlZpH(word)) {
                            andiUA.UAFFZlp.push(word);
                            if (word.indexOf('"') > 0 && word.indexOf('"') < word.length - 1 || word.indexOf("'") > -1) {
                              andiUA.UAegcxSMa.push(word);
                            }
                            andiUA.UAtzTcR++;
                          } else {
                            if (andiUA.UAiDkjjck(word)) {
                              andiUA.UAuZvSfcc.push(word);
                              if (andiUA.UAcAnxs(word) && word.length > 2) {
                                andiUA.UAdKJna.push(word);
                                UAKqkRP.setAttribute("andiUpper", "true");
                              }
                              andiUA.UAfxwzGT++;
                            } else {
                              if (andiUA.UAhdxKhuTW(word)) {
                                andiUA.UAquXpdpBW.push(word);
                                andiUA.UAEtcpCuT++;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  localStorage.setItem("UAaRxCtm", UAlrnaXvjF / UAgPwLzW);
                  var UAArPirRI = andiUA.UAtzTcR + andiUA.UALkdsvES + andiUA.UAfxwzGT + andiUA.UAEtcpCuT;
                  var UACoTOIlR = andiUA.UAtzTcR / UAArPirRI * 100;
                  var UADXZio = andiUA.UALkdsvES / UAArPirRI * 100;
                  var UAQiyjYw = andiUA.UAfxwzGT / UAArPirRI * 100;
                  var UACyjixjz = andiUA.UAEtcpCuT / UAArPirRI * 100;
                  var UAMiQSyXt = [UACoTOIlR, UADXZio, UAQiyjYw, UACyjixjz];
                  var UAuxrVpr = ["he", "ar", "en", "ru"];
                  UAoXmAKy = UAuxrVpr[UAMiQSyXt.indexOf(andiUA.UAzyYaAQ(UAMiQSyXt))];
                  if (UAVSFkhvzd != undefined && UAVSFkhvzd.indexOf(UAoXmAKy) > -1) {
                    UAVSFkhvzd = UAoXmAKy;
                  }
                  if (UAVSFkhvzd == undefined || UAVSFkhvzd == "") {
                    if (UAoXmAKy == undefined || UAoXmAKy == "") {
                      UAVSFkhvzd = "en";
                    } else {
                      UAVSFkhvzd = UAoXmAKy;
                    }
                  }
                  UAXOXkNt = localStorage.getItem("UAxCNwtMM");
                  if (UAXOXkNt !== null) {
                    UAVSFkhvzd = UAXOXkNt;
                    UAoXmAKy = UAXOXkNt;
                  }
                  var UAVRMXrWXK = document.querySelector("html");
                  if (UAVSFkhvzd.toLowerCase().indexOf("he") >= 0) {
                    UAVSFkhvzd = "he";
                    UAVRMXrWXK.setAttribute("UAMrUykSMI", "rtl");
                    UAVRMXrWXK.setAttribute("UATiDVkO", "he");
                    if (!UAVRMXrWXK.hasAttribute("lang")) {
                      UAVRMXrWXK.setAttribute("lang", "he");
                    }
                  }
                  if (UAVSFkhvzd.toLowerCase().indexOf("ar") >= 0) {
                    UAVSFkhvzd = "ar";
                    UAVRMXrWXK.setAttribute("UAMrUykSMI", "rtl");
                    UAVRMXrWXK.setAttribute("UATiDVkO", "ar");
                    if (!UAVRMXrWXK.hasAttribute("lang")) {
                      UAVRMXrWXK.setAttribute("lang", "ar");
                    }
                  }
                  if (UAVSFkhvzd.toLowerCase().indexOf("en") >= 0) {
                    UAVSFkhvzd = "en";
                    UAVRMXrWXK.setAttribute("UAMrUykSMI", "ltr");
                    UAVRMXrWXK.setAttribute("UATiDVkO", "en");
                    if (!UAVRMXrWXK.hasAttribute("lang")) {
                      UAVRMXrWXK.setAttribute("lang", "en");
                    }
                  }
                  andiUA.UAVSFkhvzd = UAVSFkhvzd;
                };
                andiUA.UAnDeomFx();
                UAUshbXJv = function() {
                  if (andiUA.UAVSFkhvzd == "en") {
                    andiUA.UAMrUykSMI = "ltr";
                    andiUA.UAWWMLJNVT(function() {
                    }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2enSetting.js");
                    andiUA.UAWWMLJNVT(function() {
                    }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2en.js");
                    andiUA.UAEqXWiUpx(andiUA.UAthKNVO + "/css/andiUA2StyleSheetLTR.css", "css");
                  } /*else if (andiUA.UAVSFkhvzd == "ar") {
                      andiUA.UAMrUykSMI = "rtl";
                      andiUA.UAWWMLJNVT(function() {
                      }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2arabSetting.js");
                      andiUA.UAWWMLJNVT(function() {
                      }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2arab.js");
                      andiUA.UAEqXWiUpx(andiUA.UAthKNVO + "/css/andiUA2StyleSheetRTL.css", "css");
                    }*/ else {
                      andiUA.UAMrUykSMI = "rtl";
                      andiUA.UAWWMLJNVT(function() {
                      }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2hebSetting.js");
                      andiUA.UAWWMLJNVT(function() {
                      }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2heb.js");
                      andiUA.UAEqXWiUpx(andiUA.UAthKNVO + "/css/andiUA2StyleSheetRTL.css", "css");
                    }
                  
                };
                UAUshbXJv();
                document.querySelectorAll("[style]:not(#UAqKHuDh)").forEach(function(el) {
                  el.setAttribute("UAknrDdx", el.getAttribute("Style"));
                });
                var UAABjJOrX = setInterval(function(UAOEcUOC) {
                  if (typeof andiUA.UAeeQBQlu == "function" && typeof andiUA.UAbUCbcZ == "object") {
                    clearInterval(UAABjJOrX);
                    andiUA.UAWWMLJNVT(function() {
                    }, UAOEcUOC = andiUA.UAthKNVO + "/js/andi2Funcions.js");
                  }
                }, 200);
              }
            }, 200);
          }
        }
      }
    }, andiUA.UAibBnm);
  }
})();