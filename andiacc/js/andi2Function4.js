andiUA.UAUaAkjmF = function() {
  (function() {
    if (andiUA.UAbUCbcZ.UAqLlvA) {
      var UAslkBsL = function(str) {
        UAokuaZtPG = str.UABJBbKac(":not()", "").UABJBbKac(":active", "").UABJBbKac(":focus", "").UABJBbKac("::before", "").UABJBbKac(":before", "").UABJBbKac("::after", "").UABJBbKac(":after", "").UABJBbKac(":visited", "").UABJBbKac(":link", "").UABJBbKac(":focus", "").trim();
        return UAokuaZtPG;
      };
      (function(window, document) {
        var slice = [].slice;
        var removeClass = function(elem) {
          elem.classList.remove("focus-within");
        };
        var update = function() {
          var running, last;
          var action = function() {
            var element = document.activeElement;
            running = false;
            if (last !== element) {
              last = element;
              slice.call(document.getElementsByClassName("focus-within")).forEach(removeClass);
              while (element && element.classList) {
                element.classList.add("focus-within");
                element = element.parentNode;
              }
            }
          };
          return function() {
            if (!running) {
              requestAnimationFrame(action);
              running = true;
            }
          };
        }();
        document.addEventListener("focus", update, true);
        document.addEventListener("blur", update, true);
        update();
      })(window, document);
      var UAChxjcd = "", UAQcEcnykl = "", selectors;
      UAeNotSeC = andiUA.UAcABxxXSG;
      for (var j = 0; j < UAeNotSeC.length; j++) {
        if (UAeNotSeC[j].indexOf(":hover") > -1) {
          var UAEqxJHeHC = UAeNotSeC[j];
          UAeNotSeC[j] = UAeNotSeC[j].UABJBbKac(":hover", ":focus-within");
          UAChxjcd += UAeNotSeC[j];
          if (UAEqxJHeHC.indexOf(",") > -1) {
            var UAjGrbcKOj = UAEqxJHeHC.split(",");
            for (var q = 0; q < UAjGrbcKOj.length; q++) {
              if (UAjGrbcKOj[q].indexOf(":hover") > -1) {
                UAjBygJn = UAjGrbcKOj[q].split(":hover");
                UAvNKZk = UAslkBsL(UAjBygJn[0]);
                if (UAokuaZtPG.length > 1 && UAokuaZtPG.indexOf("@") == -1) {
                  try {
                    andizxc(UAvNKZk).attr({"tabindex":"0", "UAxHbbaPZz":"true"});
                  } catch (e) {
                  }
                }
              }
            }
          } else {
            if (UAEqxJHeHC.indexOf(":hover") > -1) {
              UAjBygJn = UAEqxJHeHC.split(":hover");
              UAvNKZk = UAslkBsL(UAjBygJn[0]);
              if (UAokuaZtPG.length > 1 && UAokuaZtPG.indexOf("@") == -1) {
                try {
                  andizxc(UAvNKZk).attr({"tabindex":"0", "UAxHbbaPZz":"true"});
                } catch (e$0) {
                }
              }
            }
          }
        }
      }
      if (UAChxjcd.length > 10) {
        UAQcEcnykl += UAChxjcd.UABJBbKac(":focus-within", '[UATBfZsIkq="true"]');
        document.querySelector("head").UAPzpbtvf('<style class="UAxHbbaPZz">' + UAChxjcd + "</style>");
        document.querySelector("head").UAPzpbtvf('<style class="UAOkayz">' + UAQcEcnykl + "</style>");
      }
      var UAdTrsd = document.querySelectorAll("link");
      for (var i = 0; i < UAdTrsd.length; i++) {
        var source = UAdTrsd[i].href;
        try {
          andizxc.ajax({type:"GET", url:source, dataType:"text", data:{}, success:function(data) {
            var UAeNotSeC = data.split("}");
            var UAChxjcd = "", UAQcEcnykl = "", selectors;
            for (var j = UAeNotSeC.length - 1; j--;) {
              if (UAeNotSeC[j].indexOf(":hover") == -1) {
                UAeNotSeC.splice(j, 1);
              } else {
                UAeNotSeC[j] += "}";
                var UAEqxJHeHC = UAeNotSeC[j];
                UAzvNgFu = UAeNotSeC[j].trim();
                if (UAzvNgFu.indexOf("/*") > -1) {
                  if (UAzvNgFu.indexOf("/*") == 0) {
                    UAzvNgFu = UAzvNgFu.split("*/");
                  }
                  UAeNotSeC[j] = UAzvNgFu[1];
                }
                if (UAeNotSeC[j] != undefined) {
                  UAeNotSeC[j] = UAeNotSeC[j].UABJBbKac(":hover", ":focus-within");
                  UAChxjcd += UAeNotSeC[j];
                  var UAjGrbcKOj = [];
                  if (UAEqxJHeHC.indexOf(",") > -1) {
                    var UAjGrbcKOj = UAEqxJHeHC.split(",");
                    for (var q = 0; q < UAjGrbcKOj.length; q++) {
                      if (UAjGrbcKOj[q].indexOf(":hover") > -1) {
                        UAjBygJn = UAjGrbcKOj[q].split(":hover");
                        UAvNKZk = UAslkBsL(UAjBygJn[0]);
                        if (UAokuaZtPG.length > 1 && UAokuaZtPG.indexOf("@") == -1) {
                          try {
                            andizxc(UAvNKZk).attr({"tabindex":"0", "UAxHbbaPZz":"true"});
                          } catch (e$1) {
                          }
                        }
                      }
                    }
                  } else {
                    if (UAEqxJHeHC.indexOf(":hover") > -1) {
                      UAjBygJn = UAEqxJHeHC.split(":hover");
                      UAvNKZk = UAslkBsL(UAjBygJn[0]);
                      if (UAokuaZtPG.length > 1 && UAokuaZtPG.indexOf("@") == -1) {
                        try {
                          andizxc(UAvNKZk).attr({"tabindex":"0", "UAxHbbaPZz":"true"});
                        } catch (e$2) {
                        }
                      }
                    }
                  }
                }
              }
            }
            if (UAChxjcd.length > 10) {
              UAQcEcnykl += UAChxjcd.UABJBbKac(":focus-within", '[UATBfZsIkq="true"]');
              document.querySelector("head").UAPzpbtvf('<style class="UAxHbbaPZz">' + UAChxjcd + "</style>");
              document.querySelector("head").UAPzpbtvf('<style class="UAOkayz">' + UAQcEcnykl + "</style>");
            }
          }});
        } catch (e$3) {
        }
      }
      if (andiUA.UAacvnt()) {
        andizxc(document).on("keydown", "*", function() {
          setTimeout(function() {
            var UAKSoJhLSK = document.activeElement;
            andizxc("[UATBfZsIkq]").each(function() {
              andizxc(this).removeAttr("UATBfZsIkq");
            });
            var UAeGTdbpWithUATBfZsIkq = document.querySelectorAll("[UATBfZsIkq]");
            for (var q = 0; q < UAeGTdbpWithUATBfZsIkq.length; q++) {
              UAeGTdbpWithUATBfZsIkq[q].attributes.removeNamedItem("UATBfZsIkq");
            }
            andizxc(UAKSoJhLSK).attr("UATBfZsIkq", "true");
            UAGAayG = andizxc(UAKSoJhLSK).parents();
            andizxc(UAGAayG).each(function() {
              andizxc(this).attr("UATBfZsIkq", "true");
            });
          }, 20);
        });
      }
    }
  })();
};
andiUA.UArLmOP = function() {
  (function() {
    if (andiUA.UAbUCbcZ.UArLmOP) {
      try {
        var UAZGWqXsh = function(UAUkKwtcQ) {
          UAERpMJ = UAUkKwtcQ.src;
          if (UAERpMJ != "" && UAERpMJ != undefined) {
            if (UAERpMJ.indexOf("andi") == -1 && UAERpMJ.toLowerCase().indexOf("angular") == -1 && UAERpMJ.toLowerCase().indexOf("jquery") == -1) {
              jQuery.ajax({type:"POST", url:andiUA.url + "andigetfile/getscript.php", dataType:"text", data:{dataurl:UAERpMJ}, success:function(data) {
                var UADdSVQ = data.match(/[^\r\n]+/g);
                if (UADdSVQ != null) {
                  for (var UAnPZVZM = 0; UAnPZVZM < UADdSVQ.length; UAnPZVZM++) {
                    if (UADdSVQ[UAnPZVZM].length > 0 && UADdSVQ[UAnPZVZM].length < 150 && UADdSVQ[UAnPZVZM].indexOf("click") > -1) {
                      var UAENIWAtjCMatch = UADdSVQ[UAnPZVZM].match(/\(([^)]+)\)/);
                      if (UAENIWAtjCMatch != null) {
                        var UAslbCxf = UAENIWAtjCMatch[1];
                        if (UAENIWAtjCMatch != null && UAslbCxf.indexOf("#") > -1 || UACVuEhjfB.indexOf(UAslbCxf) > -1 || UAslbCxf.indexOf(".") == 0) {
                          UAdLgKK(UAslbCxf, UAENIWAtjCMatch[0]);
                        }
                      }
                    }
                  }
                }
              }, error:function(UAIPQSHFX) {
                if (andiUA.UAbUCbcZ.UAdcyZzol) {
                  console.log(UAIPQSHFX);
                }
              }});
            }
          } else {
            var UAEyXOK = UAUkKwtcQ.text;
            var UADdSVQ = UAEyXOK.match(/[^\r\n]+/g);
            for (var UAnPZVZM = 0; UAnPZVZM < UADdSVQ.length; UAnPZVZM++) {
              if (UADdSVQ[UAnPZVZM].length > 0 && UADdSVQ[UAnPZVZM].length < 150 && UADdSVQ[UAnPZVZM].indexOf("click") > -1) {
                var UAENIWAtjCMatch = UADdSVQ[UAnPZVZM].match(/\(([^)]+)\)/);
                if (UAENIWAtjCMatch != null) {
                  var UAslbCxf = UAENIWAtjCMatch[1];
                  if (UAENIWAtjCMatch != null && UAslbCxf.indexOf("#") > -1 || UACVuEhjfB.indexOf(UAslbCxf) > -1 || UAslbCxf.indexOf(".") == 0) {
                    UAdLgKK(UAslbCxf, UAENIWAtjCMatch[0]);
                  }
                }
              }
            }
          }
        };
        var UAkipWGgX = function(UAKqkRP) {
          var ANDIthat = UAKqkRP;
          jQuery(UAKqkRP).each(function() {
            if (jQuery(this).attr("UAySkahRl") == undefined) {
              jQuery(this).attr({"tabindex":"0"});
              jQuery(this)[0].setAttribute("UAySkahRl", "true");
            }
          });
        };
        var UAvxJdxIWZ = function(UAKqkRP) {
          var ANDIthat = UAKqkRP;
          try {
            jQuery(UAKqkRP).each(function() {
              if (!jQuery(this).is("body") && jQuery(this).attr("UAXCyKOQTQ") == undefined) {
                jQuery(this).attr({"role":jQuery(this).is("a") ? "link" : "button", "tabindex":"0"});
                jQuery(this)[0].setAttribute("UAXCyKOQTQ", "true");
              }
            });
          } catch (err) {
            console.log(err);
          }
        };
        var UAdLgKK = function(UAodncoa, ANDIdata2) {
          UAodncoa = UAodncoa.replace('"', "");
          UAodncoa = UAodncoa.replace('"', "");
          UAodncoa = UAodncoa.replace("'", "");
          UAodncoa = UAodncoa.replace("'", "");
          avoidThis = false;
          for (var UAnPZVZM = 0; UAnPZVZM < UAHcaiXF.length; UAnPZVZM++) {
            if (UAodncoa.indexOf(UAHcaiXF[UAnPZVZM]) > -1) {
              avoidThis = true;
            }
          }
          if (!avoidThis && UAbKpVhtG.indexOf(UAodncoa) == -1) {
            UAvxJdxIWZ(UAodncoa);
            UAbKpVhtG.push(UAodncoa);
          }
        };
        var UAywxcgW = ["touchcancel", "touchend", "touchenter", "touchleave", "touchmove", "touchstart", "mouseenter", "mouseover", "mousemove", "mousedown", "mouseup", "auxclick", "click", "dblclick", "contextmenu", "wheel", "mouseleave", "mouseout", "select", "pointerlockchange", "pointerlockerror", "keydown", "keypress", "keyup", "focus", "blur", "hover", "focusin", "focusout", "mouseout", "mouseleave"];
        var UACVuEhjfB = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", 
        "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", 
        "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"];
        var UAHcaiXF = [".attr", "#+", "'id'"];
        var UAbKpVhtG = [];
        var UAwnINiK = [];
        var UADTYKjFOClickEventANDIthatFind = [];
        var UADTYKjFOTextClickEventANDIthatFind = [];
        var UAXcNGQF = jQuery("script").length;
        var UAqreHK = 0;
        eventOn("keydown", '[UAXCyKOQTQ="true"]', function(UAAWhUz) {
          if (UAAWhUz.keyCode == 13) {
            this.click();
          }
        });
        eventOn("focus", '[UAySkahRl="true"]', function(UAAWhUz) {
          try {
            jQuery(this).trigger("mouseenter");
            jQuery(this).trigger("mouseover");
          } catch (err) {
            console.log(err);
          }
        });
        UAIWhOD = function(UAnIWBU) {
          var UAFgSRyEh = jQuery(UAnIWBU).attr("class");
          if (UAFgSRyEh != undefined && UAFgSRyEh.length > 0) {
            UAFgSRyEh = UAFgSRyEh.trim();
            UAFgSRyEh = UAFgSRyEh.replace(/   /g, ".");
            UAFgSRyEh = UAFgSRyEh.replace(/  /g, ".");
            UAFgSRyEh = UAFgSRyEh.replace(/ /g, ".");
            UAFgSRyEh = "." + UAFgSRyEh;
          } else {
            UAFgSRyEh = "";
          }
          var UALCrhA = jQuery(UAnIWBU).attr("id");
          if (UALCrhA != undefined && UALCrhA.length > 0) {
            UALCrhA = UALCrhA.trim();
            UALCrhA = UALCrhA.replace(/ /g, "#");
            UALCrhA = "#" + UALCrhA;
          } else {
            UALCrhA = "";
          }
          var UAKqkRP = jQuery(UAnIWBU)[0].tagName.toLowerCase() + UALCrhA + UAFgSRyEh;
          return UAKqkRP;
        };
        UAyQPjoTn = function() {
          jQuery("[ng-click]").each(function(UAnPZVZM) {
            UAIWhOD(this);
          });
          jQuery("html *").each(function(UAnPZVZM) {
            if (jQuery(this)[0].tagName.toLowerCase() != "script") {
              try {
                var UAUUdgmiDx = jQuery._data(jQuery(this)[0], "events");
                if (UAUUdgmiDx != undefined) {
                  var UApCeJfRO = UAUUdgmiDx.hasOwnProperty("click");
                  if (UApCeJfRO) {
                    var UAKqkRP = UAIWhOD(this);
                    if (UADTYKjFOClickEventANDIthatFind.indexOf(UAKqkRP) == -1) {
                      if (UAbKpVhtG.indexOf("a") == -1) {
                        UAbKpVhtG.push(UAKqkRP);
                        UAvxJdxIWZ(UAKqkRP);
                      } else {
                        if (UAKqkRP.indexOf("a") > 0) {
                          UAvxJdxIWZ(UAKqkRP);
                          UAbKpVhtG.push(UAKqkRP);
                        }
                      }
                    }
                  }
                  var UACnLfabtX = UAUUdgmiDx.hasOwnProperty("mouseenter");
                  if (UACnLfabtX) {
                    var UAKqkRP = UAIWhOD(this);
                    if (UAwnINiK.indexOf(UAKqkRP) == -1) {
                      UAwnINiK.push(UAKqkRP);
                      UAkipWGgX(UAKqkRP);
                    }
                  }
                  var UAnPZVZMsHaveHoverEvent = UAUUdgmiDx.hasOwnProperty("hover");
                  if (UAnPZVZMsHaveHoverEvent) {
                    var UAKqkRP = UAIWhOD(this);
                    if (UAwnINiK.indexOf(UAKqkRP) == -1) {
                      UAwnINiK.push(UAKqkRP);
                      UAkipWGgX(UAKqkRP);
                    }
                  }
                  var UAnPZVZMsHaveMouseOverEvent = UAUUdgmiDx.hasOwnProperty("mouseover");
                  if (UAnPZVZMsHaveMouseOverEvent) {
                    var UAKqkRP = UAIWhOD(this);
                    if (UAwnINiK.indexOf(UAKqkRP) == -1) {
                      UAwnINiK.push(UAKqkRP);
                      UAkipWGgX(UAKqkRP);
                    }
                  }
                }
              } catch (err) {
                if (andiUA.UAbUCbcZ.UAdcyZzol) {
                  console.log(err);
                }
              }
            } else {
              UAZGWqXsh(jQuery(this)[0]);
            }
          });
        };
        UAyQPjoTn();
      } catch (err) {
        console.log(err);
      }
    }
  })();
};
andiUA.UArwxNxlkC = function() {
  (function() {
    function UAhPJaNsQ(UARRrcg, UABSRzW) {
      UADTYKjFO = document.querySelectorAll(UARRrcg);
      for (var UAnPZVZM = 0; UAnPZVZM < UADTYKjFO.length; UAnPZVZM++) {
        var UAwqmnLT = UADTYKjFO[UAnPZVZM];
        var UAEzzCWUgl = "";
        while (UAwqmnLT.tagName.toLowerCase() != "body" && UAwqmnLT.tagName.toLowerCase() != "html") {
          UAEzzCWUgl = UAwqmnLT.tagName.toLowerCase() + " > " + UAEzzCWUgl;
          UAwqmnLT = UAwqmnLT.parentElement;
        }
        UAEzzCWUgl = "body > " + UAEzzCWUgl.substring(0, UAEzzCWUgl.lastIndexOf(">")) + "";
        if (UAEzzCWUgl != "body > ") {
          document.querySelectorAll(UAEzzCWUgl).forEach(function(el) {
            el.setAttribute("UARRrcg", UABSRzW);
          });
        }
      }
    }
    var UAVmHPLy = localStorage.getItem("UAnewAreaInThisSite");
    var UAAUCEne = "a,button";
    if (false) {
      var UAzvNgFu = localStorage.getItem("UAnewAreaInThisSite");
      UAVcPQTLUD = UAzvNgFu.split(",");
      for (var UAnPZVZM = 0; UAnPZVZM < UAVcPQTLUD.length; UAnPZVZM++) {
        var str = UAVcPQTLUD[UAnPZVZM];
        if (str != undefined) {
          var lastIndex = str.lastIndexOf(" > ");
          str = str.substring(0, lastIndex);
          while (str.length > 7) {
            lastIndex = str.lastIndexOf(" > ");
            str = str.substring(0, lastIndex);
            if (str.indexOf(":") == -1 && str != "" && str.UAQepLHY()) {
              document.querySelectorAll(str).forEach(function(UAwqmnLT) {
                var UAZprDJbek = UAwqmnLT.querySelectorAll(UAAUCEne).length;
                if (UAZprDJbek > 0 && UAZprDJbek <= 5) {
                  UAwqmnLT.setAttribute("UARRrcg", "1");
                } else {
                  if (UAZprDJbek > 5 && UAZprDJbek <= 15) {
                    UAwqmnLT.setAttribute("UARRrcg", "2");
                    UAwqmnLT.setAttribute("UAjxGggPJl", "2");
                  } else {
                    if (UAZprDJbek > 15 && UAZprDJbek <= 30) {
                      UAwqmnLT.setAttribute("UARRrcg", "3");
                      UAwqmnLT.setAttribute("UAjxGggPJl", "3");
                    } else {
                      if (UAZprDJbek > 30 && UAZprDJbek <= 50) {
                        UAwqmnLT.setAttribute("UAjxGggPJl", "4");
                        UAwqmnLT.setAttribute("UARRrcg", "4");
                      } else {
                        if (UAZprDJbek > 50) {
                          UAwqmnLT.setAttribute("UARRrcg", "5");
                        }
                      }
                    }
                  }
                }
              });
            }
          }
        }
      }
      UAhPJaNsQ('[UARRrcg="2"]', 2);
    } else {
      var UAyudaR = function(UAUgQEtgUelector, UAAUCEne) {
        if (UAUgQEtgUelector != "") {
          document.querySelectorAll(UAUgQEtgUelector).forEach(function(UAwqmnLT) {
            if (UAwqmnLT != null) {
              if (UAwqmnLT.querySelectorAll(UAAUCEne).length > 0 && UAwqmnLT.querySelectorAll(UAAUCEne).length <= 5) {
                UAwqmnLT.setAttribute("UARRrcg", "1");
              } else {
                if (UAwqmnLT.querySelectorAll(UAAUCEne).length > 5 && UAwqmnLT.querySelectorAll(UAAUCEne).length <= 15) {
                  UAwqmnLT.setAttribute("UARRrcg", "2");
                } else {
                  if (UAwqmnLT.querySelectorAll(UAAUCEne).length > 15 && UAwqmnLT.querySelectorAll(UAAUCEne).length <= 30) {
                    UAwqmnLT.setAttribute("UARRrcg", "3");
                  } else {
                    if (UAwqmnLT.querySelectorAll(UAAUCEne).length > 30 && UAwqmnLT.querySelectorAll(UAAUCEne).length <= 50) {
                      UAwqmnLT.setAttribute("UARRrcg", "4");
                    } else {
                      if (UAwqmnLT.querySelectorAll(UAAUCEne).length > 50) {
                        UAwqmnLT.setAttribute("UARRrcg", "5");
                      }
                    }
                  }
                }
              }
            }
          });
        }
      };
      var UAAItOWuK = [];
      var UAZtWOCStk = [];
      var UAVcPQTLUD = [];
      var UAZpeoQLo = function(el) {
        function UAErFsW(UAlbCpq) {
          function UAdxWJL(UAlbCpq) {
            if (UAlbCpq.indexOf("> >") > -1 || UAlbCpq.indexOf("..") > -1 || UAlbCpq.indexOf(". ") > -1 || UAlbCpq.indexOf(".[") > -1 || UAlbCpq.indexOf(".>") > -1) {
              return true;
            }
            return false;
          }
          UAlbCpq = UAlbCpq.replace(". ", "").replace("> >", " > ").replace("..", ".").replace(".[", "[").replace(".>", " >").replace(".#", "#");
          if (UAdxWJL(UAlbCpq)) {
            UAErFsW(UAlbCpq);
          } else {
            if (UAlbCpq.slice(-1) == ".") {
              UAlbCpq = UAlbCpq.substring(0, UAlbCpq.length - 1);
            }
            return UAlbCpq;
          }
        }
        var path = [];
        path.push(el.nodeName.toLowerCase());
        while (el.nodeName.toLowerCase() != "html" && (el = el.parentNode)) {
          var aaa = el.nodeName.toLowerCase();
          var bbb = el.id ? el.getAttribute("id").indexOf("/") == -1 ? "#" + el.id : "" : "";
          var UAwgmOsu = bbb.match(/\d+/g);
          if (UAwgmOsu != null || bbb.indexOf(":") > -1) {
            bbb = "";
          }
          var ccc = el.className ? "." + el.className.replace(/\s+/g, ".") : "";
          var UAmLIqqaZ = "";
          ccc = ccc.replace('"', "");
          ccc = ccc.replace('"', "");
          var UAwgmOsu = ccc.match(/\d+/g);
          if (UAwgmOsu != null) {
            var UAcHanjMlz = el.className.split(" ");
            for (var UAnPZVZM = 0; UAnPZVZM < UAcHanjMlz.length; UAnPZVZM++) {
              var textUAzvNgFu = UAcHanjMlz[UAnPZVZM].match(/\d+/g);
              if (textUAzvNgFu == null) {
                UAmLIqqaZ += "." + UAcHanjMlz[UAnPZVZM];
              }
            }
          }
          if (UAmLIqqaZ != "") {
            path.unshift(aaa + UAmLIqqaZ + bbb);
          } else {
            path.unshift(aaa + ccc + bbb);
          }
          if (el.nodeName.toLowerCase() == "body") {
            var UAlbCpq = path.join(" > ");
            return UAErFsW(UAlbCpq);
          }
        }
        var UAlbCpq = path.join(" > ");
        return UAErFsW(UAlbCpq);
      };
      var UADTYKjFO = document.querySelectorAll(UAAUCEne);
      for (var UAnPZVZM = 0; UAnPZVZM < UADTYKjFO.length; UAnPZVZM++) {
        if (!UADTYKjFO[UAnPZVZM].hasAttribute("AutomaticAreas")) {
          var UAwqmnLT = UADTYKjFO[UAnPZVZM];
          var UAEzzCWUgl = UAZpeoQLo(UADTYKjFO[UAnPZVZM]);
          if (UAEzzCWUgl != undefined && UAEzzCWUgl.indexOf("/") == -1 && UAEzzCWUgl.indexOf(":") == -1) {
            if (UAVcPQTLUD.indexOf(UAEzzCWUgl) == -1) {
              UAVcPQTLUD.push(UAEzzCWUgl);
            }
            document.querySelectorAll(UAEzzCWUgl).forEach(function(el) {
              el.setAttribute("AutomaticAreas", "true");
            });
          }
        }
      }
      UAVcPQTLUD.sort(function(a, b) {
        return b.length - a.length;
      });
      var UAzvNgFuArr = [];
      var UAwIjVPmUs = UAVcPQTLUD[0];
      UAzvNgFuArr.push(UAwIjVPmUs);
      for (var UAnPZVZM = UAVcPQTLUD.length - 1; UAnPZVZM >= 0; UAnPZVZM--) {
        if (UAVcPQTLUD[UAnPZVZM] != undefined) {
          lastIndex = UAVcPQTLUD[UAnPZVZM].lastIndexOf(" > ");
          str = UAVcPQTLUD[UAnPZVZM].substring(0, lastIndex);
          if (UAwIjVPmUs.indexOf(str) == -1) {
            UAzvNgFuArr.push(str);
          }
        }
      }
      var UAIfrDwrA = "";
      for (var UAnPZVZM = 0; UAnPZVZM < UAVcPQTLUD.length; UAnPZVZM++) {
        var str = UAVcPQTLUD[UAnPZVZM];
        str = str.substring(0, str.lastIndexOf(" > "));
        while (str.length > 7) {
          document.querySelectorAll(str).forEach(function(UAwqmnLT) {
            var UAZprDJbek = UAwqmnLT.querySelectorAll(UAAUCEne).length;
            if (UAZprDJbek > 0 && UAZprDJbek <= 5) {
              UAwqmnLT.setAttribute("UARRrcg", "1");
            } else {
              if (UAZprDJbek > 5 && UAZprDJbek <= 15) {
                UAwqmnLT.setAttribute("UARRrcg", "2");
              } else {
                if (UAZprDJbek > 15 && UAZprDJbek <= 30) {
                  UAwqmnLT.setAttribute("UARRrcg", "3");
                } else {
                  if (UAZprDJbek > 30 && UAZprDJbek <= 50) {
                    UAwqmnLT.setAttribute("UARRrcg", "4");
                  } else {
                    if (UAZprDJbek > 50) {
                      UAwqmnLT.setAttribute("UARRrcg", "5");
                    }
                  }
                }
              }
            }
          });
          str = str.substring(0, str.lastIndexOf(" > "));
        }
      }
      UAyudaR("section,nav,aside, footer,header", UAAUCEne);
      UAhPJaNsQ('[UARRrcg="2"]', 2);
      if (parseInt(andiUA.UAhmgdyoq(UAIfrDwrA)) < parseInt(localStorage.getItem("UAsizeLocalStorage"))) {
        localStorage.setItem("UAnewAreaInThisSite", UAIfrDwrA);
      }
    }
    if (andiUA.UAbUCbcZ.UAnhxMCUZL) {
      document.querySelectorAll('[UARRrcg="3"]').forEach(function(el) {
        if (el.querySelectorAll('[UARRrcg="3"]').length > 0) {
          el.querySelectorAll('[UARRrcg="3"]').forEach(function(el2) {
            el2.removeAttribute("UARRrcg");
          });
        }
      });
      document.querySelectorAll('[UARRrcg="2"]').forEach(function(el) {
        if (el.querySelectorAll('[UARRrcg="2"]').length > 0) {
          el.querySelectorAll('[UARRrcg="2"]').forEach(function(el2) {
            el2.removeAttribute("UARRrcg");
          });
        }
      });
      var UAwNySS = andizxc("[UARRrcg]");
      if (UAwNySS.length > 1) {
        andizxc(UAwNySS).each(function() {
          if (andizxc(this).closest("#UAqKHuDh").length == 0 && (andizxc(this).attr("UARRrcg") == 4 || andizxc(this).attr("UARRrcg") == 3 || andizxc(this).attr("UARRrcg") == 2) && andizxc(this)[0].UArgdDgcHN()) {
            var allSkipLInks = andizxc(".UAnhxMCUZL").length;
            andizxc(this).prepend('<a class="UAnhxMCUZL" href="#" name="UA2skipAutomate' + (allSkipLInks + 0) + '"  tabindex="0" aria-hidden="true"><span class="UAQVwTwj">\u05d4\u05d0\u05dd \u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05d3\u05dc\u05d2 \u05de\u05e2\u05dc \u05d0\u05d6\u05d5\u05e8 \u05d6\u05d4 ?</span>,<br />"' + andiUA.UAufVra.UAultLFP + "</a>");
          }
        });
      }
      var UAwRTguxK = andizxc("title").text();
      andizxc("body").append('<a id="UAAcIRattW" style="position: absolute; bottom: 0;" class="UAawJhZ" name="UAAcIRattW" href="#UADrwBV" tabindex="0" >' + andiUA.UAufVra.UALYzyJ + UAwRTguxK + " " + andiUA.UAufVra.UAXspWxX + " </a>");
    }
  })();
};
andiUA.UAxbYHAY = function() {
  (function() {
    andizxc('input:not([type="radio"],[type="checkbox"]), textarea ').focus(function() {
      andizxc(this).keydown(function() {
        var UAuRhxe = this;
        andizxc(this).css({"cursor":"none"});
        setTimeout(function() {
          andizxc(UAuRhxe).css({"cursor":""});
        }, 1500);
      });
    });
  })();
};
andiUA.UACSjzePOu = function(UANvMllTo, UAQcNhw) {
  (function() {
    andizxc(UANvMllTo).each(function() {
      if (andizxc(this).attr("UADwFOO") == undefined || andizxc(this).attr("UADwFOO") == null || andizxc(this).attr("UADwFOO") == "") {
        andizxc(this).UAEmCmX();
      }
    });
    andizxc(UAQcNhw).each(function() {
      if (andizxc(this).attr("UADwFOO") == undefined || andizxc(this).attr("UADwFOO") == null || andizxc(this).attr("UADwFOO") == "") {
        andizxc(this).UAaWherS();
      }
    });
    andiUA.UAjHTML(document);
    andizxc("iframe").each(function() {
      try {
        andizxc(this).contents().find(UANvMllTo).each(function() {
          if (andizxc(this).attr("UADwFOO") == undefined || andizxc(this).attr("UADwFOO") == null || andizxc(this).attr("UADwFOO") == "") {
            andizxc(this).UAEmCmX();
          }
        });
        andizxc(this).contents().find(UAQcNhw).each(function() {
          if (andizxc(this).attr("UADwFOO") == undefined || andizxc(this).attr("UADwFOO") == null || andizxc(this).attr("UADwFOO") == "") {
            andizxc(this).UAaWherS();
          }
        });
        andiUA.UAjHTML(andizxc(this));
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    });
  })();
};
andiUA.UAjHTML = function(doc) {
  (function() {
    andizxc(doc).contents().find("input").each(function() {
      var UAhTlyQUOu = andizxc(this).attr("type");
      if (UAhTlyQUOu === undefined) {
        andizxc(this).attr("type", "text");
      }
    });
    andizxc(doc).contents().find("input[type=range]").each(function() {
      var UALNBmLDd = andizxc(this).attr("id"), UAGysFnnKf = andizxc(this).attr("UAGysFnnKf"), UADbjDD = andizxc(this).attr("UADbjDD"), addition = " (UAGysFnnKf is: " + UAGysFnnKf + ", UADbjDD is: " + UADbjDD + ")";
      andizxc("label[for= ' " + UALNBmLDd + " ' ]").append(addition);
      andizxc(this).attr("aria-valuemin", UAGysFnnKf);
      andizxc(this).attr("aria-valuemax", UADbjDD);
      andizxc(this).attr("role", "slider");
    });
    andizxc(doc).contents().find("select.chosen-select").each(function(UALhajEH) {
      var w = andizxc(this).next().find("a").width();
      var h = andizxc(this).next().find("a").height();
      var pL = 0;
      var pT = 0;
      andizxc("head").append('<style id="UAlnhpCJk' + UALhajEH + '">select.chosen-select,select.select2-offscreen{clip: rect(0 0 0 0) !important;\twidth: 1px !important;z-index: 9999 !important;height: 1px !important;\tborder: 0 !important;margin: 0 !important; padding: 0 !important;display: inline-block !important;overflow: hidden !important;position: absolute !important;outline: 0 !important;left: 0px !important;top: 0px !important;}select.chosen-select:focus ,select.select2-offscreen:focus { clip: auto !important;width: ' + 
      w + "px !important;  height: " + h + "px !important;border: 0 !important; margin: 0 !important;padding: 0 !important; overflow: hidden !important;\tposition: absolute !important; outline: 0 !important; left: " + pL + "px !important; top: " + pT + "px !important;}</style>");
      andizxc(this).change(function() {
        var UAdNQlyA = andizxc(this).val();
        andizxc(this).next().find("a > span").text(andizxc(this).find('option[value="' + UAdNQlyA + '"]').text());
      });
    });
  })();
};
andiUA.UAqGnwp = function() {
  (function() {
    andizxc("[title]:not(img)").each(function(UALhajEH) {
      if (andizxc.trim(andizxc(this).text()) == andizxc.trim(andizxc(this).attr("title"))) {
        andizxc(this).removeAttr("title");
      }
    });
  })();
};
andiUA.UAEKUQG = function() {
  (function() {
    andizxc("br").each(function(UALhajEH) {
      andizxc(this).attr({"role":"presentation"});
    });
    andizxc("iframe").each(function() {
      try {
        andizxc(this).contents().find("br").each(function(UALhajEH) {
          andizxc(this).attr({"role":"presentation"});
        });
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    });
  })();
};
andiUA.UAQJBTlFBp = function() {
  (function() {
    andiUA.UAPSVRLwzy(document);
    andizxc("iframe").each(function() {
      try {
        andiUA.UAPSVRLwzy(andizxc(this));
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    });
  })();
};


andiUA.UAPSVRLwzy = function(doc) {
        (function() {
            var UACnVXaHbg = andiUA.UAufVra;
            var UAWLibv = ['a[href$=".amr"],a[href$=".mp2"],a[href$=".ram"],a[href$=".aiff"],a[href$=".aif"],a[href$=".wma"],a[href$=".wav"],a[href$=".m4v"]', 'a[href$=".ogg"],a[href$=".m4v"],a[href$=".divx"],a[href$=".mpeg"],a[href$=".m4a"],a[href$=".mp4"],a[href$=".mov"],a[href$=".mpg"],a[href$=".avi"],a[href$=".wmv"]', 'a[href$=".exe"]', 'a[href$=".vcd"]', 'a[href$=".cab"]', 'a[href$=".ace"]', 'a[href$=".gz"]', 'a[href$=".dmg"]', 'a[href$=".iso"]', 'a[href$=".jar"]', 'a[href$=".rar"]', 'a[href$=".zip"],a[href$=".7z"]',
                'a[href$=".psd"]', 'a[href$=".ai"]', 'a[href$=".indd"]', 'a[href$=".ppt"],a[href$=".pptx"],a[href$=".pptm"],a[href$=".pps"],a[href$=".ppsx"]', 'a[href$=".xlsx"],a[href$=".ods"],a[href$=".xls"]', 'a[href$=".doc"],a[href$=".docx"],a[href$=".odt"],a[href$=".wps"]', 'a[href$=".txt"]', '[href$=".pdf"]', '[target="_blank"],[target="_new"]'
            ];
            var UAjDjonv = ["andiAccLiknssound", "andiAccLiknsmovie", "andiAccLiknsexe", "andiAccLiknsvcd", "andiAccLiknscab", "andiAccLiknsace", "andiAccLiknsgz", "andiAccLiknsdmg", "andiAccLiknsiso", "andiAccLiknsjar", "andiAccLiknsrar", "andiAccLiknszip", "andiAccLiknspsd", "andiAccLiknsai", "andiAccLiknsindd", "andiAccLiknspowerpoint", "andiAccLiknsexcel", "andiAccLiknsdoc", "andiAccLiknstxt", "andiAccLiknspdf", "andiAccLiknsnewwindow"];
            var UAqEOqEDzz = ["sound", "movie", "exe", "vcd", "cab", "ace", "gz", "dmg", "iso", "jar", "rar", "zip", "psd", "ai", "indd", "powerpoint", "excel", "doc", "txt", "pdf", "newwindow"];
            var UAjQNDuQqA = [UACnVXaHbg.UAXqBlWxxP, UACnVXaHbg.UAwDynreCo, UACnVXaHbg.UAnDREvw, UACnVXaHbg.UAjrkXM, UACnVXaHbg.UAUqzRZeUL, UACnVXaHbg.UACNWfSwq, UACnVXaHbg.UAwmRsObxi, UACnVXaHbg.UAmupcNI, UACnVXaHbg.UAhaqNx, UACnVXaHbg.UAVaNZGp, UACnVXaHbg.UAKWbHJx, UACnVXaHbg.UAqYMXH, UACnVXaHbg.UAxabSCDZP, UACnVXaHbg.ANDI2UAUmyTKsJ, UACnVXaHbg.ANDI2UAMJVIFx, UACnVXaHbg.ANDI2UAYDJNNMe,
                UACnVXaHbg.ANDI2UAkLainmQ, UACnVXaHbg.UAakUWFgY, UACnVXaHbg.UAmMcJFN, UACnVXaHbg.UAMAlfLN, UACnVXaHbg.UABRfSutY
            ];
            for (var i = 0; i < UAWLibv.length; ++i) {
                var UAzEssioW = i;

                andizxc(doc).contents().find(UAWLibv[UAzEssioW]).each(function() {
                    if (andizxc(this).attr(UAjDjonv[UAzEssioW]) != UAqEOqEDzz[UAzEssioW]) {
                        var UAOeRYkZFd = "";
                        var UAorqGmZeN = andizxc(this).text();
                        if (UAorqGmZeN == "" && andizxc(this).find("img")) {
                            var UANSOvfvLW = andizxc(this).find("img").first();
                            if (UANSOvfvLW && andizxc(UANSOvfvLW).attr("alt") != null) {
                                UAorqGmZeN = andizxc(UANSOvfvLW).attr("alt");
                            } else {
                                if (UANSOvfvLW && andizxc(UANSOvfvLW).attr("aria-label") != null) {
                                    UAorqGmZeN = andizxc(UANSOvfvLW).attr("aria-label");
                                }
                            }
                        }
                        var UAdNQlyAriaLabelLink = andizxc(this).attr("aria-label");
                        if (UAdNQlyAriaLabelLink != undefined) {
                            UAdNQlyAriaLabelLink.indexOf(UAorqGmZeN) == -1 ? UAOeRYkZFd = UAorqGmZeN + " " + UAdNQlyAriaLabelLink : UAOeRYkZFd = UAdNQlyAriaLabelLink;
                        } else if (andizxc(this).attr("title") != undefined && andizxc(this).attr("title") != '') {
                            var UATKPvAILink = andizxc(this).attr("title");
                            UATKPvAILink.indexOf(UAorqGmZeN) == -1 ? UAOeRYkZFd = UAorqGmZeN + " " + UATKPvAILink : UAOeRYkZFd = UATKPvAILink;
                        }
                        if (UAOeRYkZFd == '') andizxc(this).attr({
                            "aria-label": UAorqGmZeN + ", " + UAjQNDuQqA[UAzEssioW]
                        });
                        UAOeRYkZFd != undefined && UAOeRYkZFd != '' && UAOeRYkZFd.length >= 1 ?
                            andizxc(this).attr({
                                "aria-label": UAOeRYkZFd + ", " + UAjQNDuQqA[UAzEssioW]
                            }) : '';
                        var UACnpgjn = UAjDjonv[UAzEssioW];
                        var UAvWyVk = UAqEOqEDzz[UAzEssioW];
                        andizxc(this).attr(UACnpgjn, UAvWyVk);
                    }
                });
            }
        })();
    };
	
	
andiUA.UAriymzd = function() {
  (function() {
    var UAjhtegj = document.querySelectorAll("a:not(.UAnhxMCUZL)");
    andiUA.UAzvftOuK(UAjhtegj);
    var ANDI2allIframes = document.querySelectorAll("iframe");
    for (var UALhajEH = 0; UALhajEH < ANDI2allIframes.length; UALhajEH++) {
      try {
        andiUA.UAzvftOuK(ANDI2allIframes[UALhajEH].contentWindow.document.querySelectorAll("a"));
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    }
  })();
};
andiUA.UAzvftOuK = function(UAjhtegj) {
  (function() {
    if (UAjhtegj.length > 0) {
      for (var UAdNQlyA = 0; UAdNQlyA < UAjhtegj.length; UAdNQlyA++) {
        if (!UAjhtegj[UAdNQlyA].hasAttribute("UAILKJOso")) {
          UAjhtegj[UAdNQlyA].setAttribute("UAILKJOso", "true");
          UAjhtegj[UAdNQlyA].addEventListener("click", function(UAAWhUz) {
            if (andizxc(this).attr("href").indexOf("#") > -1 && andizxc(this).attr("href").indexOf("#/") == -1) {
              try {
                var hashSrt = this.hash.substr(1);
                if (document.querySelector("#" + hashSrt) != null) {
                  document.querySelector("#" + hashSrt).setAttribute("tabindex", "0").focus();
                } else {
                  document.querySelector('[name="' + hashSrt + '"]').setAttribute("tabindex", "0").focus();
                }
              } catch (ANDIerr) {
                if (andiUA.UAbUCbcZ.UAdcyZzol) {
                  console.log("Error: " + ANDIerr);
                }
              }
            }
          });
          if (UAjhtegj[UAdNQlyA].hasAttribute("title")) {
            if (UAjhtegj[UAdNQlyA].text.trim() == UAjhtegj[UAdNQlyA].getAttribute("title").trim()) {
              UAjhtegj[UAdNQlyA].removeAttribute("title");
            }
          }
          if (!UAjhtegj[UAdNQlyA].hasAttribute("href")) {
            UAjhtegj[UAdNQlyA].setAttribute("href", "#");
            UAjhtegj[UAdNQlyA].addEventListener("click", function(UAAWhUz) {
              UAAWhUz.preventDefault();
            });
          }
        }
      }
    }
  })();
};
andiUA.UAqwDOGUs = function() {
  (function() {
    andiUA.UAsEtlrUc(andiUA.UAbUCbcZ.UAvKGhUiCX);
    andizxc("iframe").each(function() {
      try {
        var UAnPZVZMmages = andizxc(this).contents().find(andiUA.UAbUCbcZ.UAvKGhUiCX);
        andiUA.UAsEtlrUc(UAnPZVZMmages);
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    });
  })();
};
andiUA.UAsEtlrUc = function(UAnPZVZMmages) {
  (function() {
    andizxc(UAnPZVZMmages).each(function() {
      if (!andizxc(this).is("[UAJVUzsHW]")) {
        if (andizxc(this).attr("src") != undefined) {
          var alt1 = andizxc(this).attr("src").UAGpWlmr();
          var alt2 = andizxc(this).attr("src").UAogyVcgwn();
        }
        if (andizxc(this).attr("alt") == undefined || andizxc(this).attr("alt") == alt1 || andizxc(this).attr("alt") == alt2) {
          andizxc(this).attr("alt", "");
          this.setAttribute("UAJVUzsHW", "true");
        }
      }
    });
  })();
};
andiUA.UAarmjqqQD = function(UAsoxnSt) {
  (function() {
    andiUA.UAFOgCGo = function(UAFojEJgzAujjs) {
      for (var UALhajEH = 0; UALhajEH < UAFojEJgzAujjs.length; UALhajEH++) {
        var UAlfcIROR = UAFojEJgzAujjs[UALhajEH].getAttribute("href");
        if (UAlfcIROR != "" && UAlfcIROR != null) {
          if (UAlfcIROR.indexOf("facebook.com/") > -1 && window.location.host.indexOf("facebook.com/") == -1) {
            UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UAzgQTb);
            UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
          } else {
            if (UAlfcIROR.indexOf("twitter.com/") > -1 && window.location.host.indexOf("twitter.com/") == -1) {
              UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UAWDVKILFT);
              UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
            } else {
              if (UAlfcIROR.indexOf("youtube.com/") > -1 && window.location.host.indexOf("youtube.com/") == -1) {
                UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UAAylbeIHd);
                UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
              } else {
                if (UAlfcIROR.indexOf("waze://?q") > -1 && window.location.host.indexOf("waze://?q") == -1) {
                  UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UAZMezwdFv);
                  UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
                } else {
                  if (UAlfcIROR.indexOf("instagram.com/") > -1 && window.location.host.indexOf("instagram.com/") == -1) {
                    UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UAIbhCMnw);
                    UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
                  } else {
                    if (UAlfcIROR.indexOf("linkedin.com/") > -1 && window.location.host.indexOf("linkedin.com/") == -1) {
                      UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UAjWkwAJ);
                      UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
                    } else {
                      if (UAlfcIROR.indexOf("plus.google.com/") > -1 && window.location.host.indexOf("plus.google.com/") == -1) {
                        UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label", andiUA.UAufVra.UARiondqvO);
                        UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
                      } else {
                        if (UAlfcIROR.indexOf("mailto:") > -1) {
                          UAFojEJgzAujjs[UALhajEH].setAttribute("aria-label",UAFojEJgzAujjs[UALhajEH].innerText + ' ' + andiUA.UAufVra.UAYMnUG);
                          UAFojEJgzAujjs[UALhajEH].setAttribute("UAarynMy", "true");
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    if (UAsoxnSt) {
      var UAFojEJgzAujjs = document.querySelectorAll("a");
      if (UAFojEJgzAujjs != undefined && UAFojEJgzAujjs.length > 0) {
        andiUA.UAFOgCGo(document.querySelectorAll("a"));
      }
      var ANDI2allIframes = document.querySelectorAll("iframe");
      for (var UALhajEH = 0; UALhajEH < ANDI2allIframes.length; UALhajEH++) {
        try {
          var UAFojEJgzAujjs = ANDI2allIframes[UALhajEH].contentWindow.document.querySelectorAll("a");
          if (UAFojEJgzAujjs != undefined && UAFojEJgzAujjs.length > 0) {
            andiUA.UAFOgCGo(UAFojEJgzAujjs);
          }
        } catch (ANDIerr) {
          if (andiUA.UAbUCbcZ.UAdcyZzol) {
            console.log("Error: " + ANDIerr);
          }
        }
      }
    }
  })();
};
andiUA.UAJLShchcd = function(UAmZMZapvO) {
  (function() {
    if (UAmZMZapvO != undefined && UAmZMZapvO) {
      andizxc("table").each(function() {
        if (!andizxc(this).is(andiUA.UAbUCbcZ.UAhdmvEMyW)) {
          andizxc(this)[0].addAttr({"role":"presentation"});
        }
      });
    }
  })();
};
andiUA.UArTvoHB = function(UAUgQEtgU) {
  (function() {
    try {
      var UABfzbtJV = function(UAveNXl) {
        for (var UAdNQlyA = 0; UAdNQlyA < UAveNXl.length; UAdNQlyA++) {
          var UAmAQtpKh = UAveNXl[UAdNQlyA].attributes;
          for (var TUAj = 0; TUAj < UAmAQtpKh.length; TUAj++) {
            var UAFFoGZKD = UAmAQtpKh[TUAj].nodeValue.toLowerCase();
            var UAtbYbaPEQ = UAmAQtpKh[TUAj].nodeName.toLowerCase();
            for (var ii in andiUA.keys.UAfcQrhZob) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAfcQrhZob[ii]) > -1) {
                UAveNXl[UAdNQlyA].setAttribute("tabindex", "0");
                UAveNXl[UAdNQlyA].setAttribute("role", "link");
                UAveNXl[UAdNQlyA].setAttribute("aria-label", andiUA.UAufVra.UANyVsh);
              }
            }
            for (var ii in andiUA.keys.UANwyxpd) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UANwyxpd[ii]) > -1) {
                UAveNXl[UAdNQlyA].setAttribute("tabindex", "0");
                UAveNXl[UAdNQlyA].setAttribute("role", "button");
              }
            }
            for (var ii in andiUA.keys.UAgIeoaJM) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAgIeoaJM[ii]) > -1) {
                UAveNXl[UAdNQlyA].setAttribute("tabindex", "0");
                UAveNXl[UAdNQlyA].setAttribute("role", "button");
              }
            }
          }
        }
      };
      var UAveNXl = document.querySelectorAll(UAUgQEtgU);
      UABfzbtJV(UAveNXl);
      for (var UALhajEH = 0; UALhajEH < andiUA.ANDI2allIframes.length; UALhajEH++) {
        try {
          var UAveNXl = andiUA.ANDI2allIframes[UALhajEH].contentWindow.document.querySelectorAll(UAUgQEtgU);
          UABfzbtJV(UAveNXl);
        } catch (ANDIerr) {
          if (andiUA.UAbUCbcZ.UAdcyZzol) {
            console.log("Error: " + ANDIerr);
          }
        }
      }
    } catch (ANDIerr$4) {
      if (andiUA.UAbUCbcZ.UAdcyZzol) {
        console.log("Error: " + ANDIerr$4);
      }
    }
  })();
};
andiUA.UALIxOu = function(UAaomEfH) {
  (function() {
    if (UAaomEfH != undefined && UAaomEfH.length > 0) {
      for (var TUAj = 0; TUAj < UAaomEfH.length; TUAj++) {
        if (andiUA.UAWMehkWJR(UAaomEfH[TUAj].UAXWZMKi, UAaomEfH[TUAj].UAGaCuPxZ)) {
          if (UAaomEfH[TUAj].UAuRhxe != "") {
            var UAuRhxe = UAaomEfH[TUAj].UAuRhxe;
            var UArAYeUsus = UAaomEfH[TUAj].UArAYeUsus;
            var UAGHSUwc = UAaomEfH[TUAj].UAGHSUwc;
            var UAveNXl = document.querySelectorAll(UAuRhxe);
            for (var UALhajEH = 0; UALhajEH < UAveNXl.length; UALhajEH++) {
              UAveNXl[UALhajEH].setAttribute("role", "checkbox");
              UAveNXl[UALhajEH].setAttribute("tabindex", "0");
              UAveNXl[UALhajEH].setAttribute("aria-label", UAveNXl[UALhajEH].text);
              UAveNXl[UALhajEH].addEventListener("click", function(UAAWhUz) {
                andiUA.UADSRQXvu(UArAYeUsus, UAGHSUwc);
                setTimeout(function() {
					
                  if (andizxc(UAveNXl[UALhajEH]).hasClass(UArAYeUsus)) {
                    andizxc("body").append('<span class="UArXnqfpzk" role="alert" aria-label="' + andiUA.UAufVra.UAaomEfHMark + '"></span>');
                    setTimeout(function() {
                      andizxc(".UArXnqfpzk").remove();
                    }, 500);
                  } else {
                    andizxc("body").append('<span class="UArXnqfpzk" role="alert" aria-label="' + andiUA.UAufVra.UASziYzS + '"></span>');
                    setTimeout(function() {
                      andizxc(".UArXnqfpzk").remove();
                    }, 500);
                  }
                }, 500);
                UAAWhUz.preventDefault();
              });
            }
          }
          andiUA.UADSRQXvu(UArAYeUsus, UAGHSUwc);
        }
      }
    }
  })();
};
andiUA.UAlMJcq = function() {
  (function() {
    var UAzhZFNHT = '[role="heading"],h1,h2,h3,h4,h5,h6';
    andiUA.UAVftpByTb(UAzhZFNHT);
    andizxc("iframe").each(function() {
      try {
        andiUA.UAVftpByTb(andizxc(this).contents().find(UAzhZFNHT));
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    });
    if (andizxc("h1").length > 1) {
      andizxc("h1").each(function(i) {
        if (i > 0) {
          andizxc(this).attr({"aria-level":"2", "role":"heading"});
        }
      });
    }
  })();
};
andiUA.UAVftpByTb = function(UAzhZFNHT) {
  (function() {
    andizxc(UAzhZFNHT).each(function() {
      var UAMmRNtH = false;
      if (andizxc(this).text().trim() == "") {
        andizxc(this)[0].addAttr({"role":"presentation", "UATNVFy":"true"});
      }
    });
  })();
};
andiUA.UANlwHJb = function(UACiIBZ) {
  (function() {
    if (UACiIBZ != undefined && UACiIBZ.length > 0) {
      UACiIBZ = andizxc(UACiIBZ);
      var UARPyHaPr = UACiIBZ.length, UACRQhIc = new Array(UARPyHaPr), UAfscKUyf = new Array(UARPyHaPr), UAkxQER = new Array(UARPyHaPr), UAofWShEzI = new Array(UARPyHaPr), UADNaEi = new Array(UARPyHaPr), UADUkgDv = new Array(UARPyHaPr), UANKeRYT = new Array(UARPyHaPr), UAPFFzI = new Array(UARPyHaPr), UAUUmskPF = new Array(UARPyHaPr), UADjHoL = new Array(UARPyHaPr), UAcPIbLeG = 
      new Array(UARPyHaPr), UAEhckKrQz = new Array(UARPyHaPr), UAXBbkgWV = new Array(UARPyHaPr), UAGGEXboUB = new Array(UARPyHaPr), UABnMYZKJ = new Array(UARPyHaPr), UAWIwoAK = new Array(UARPyHaPr), UASQigUcPk = new Array(UARPyHaPr), UABytQc = new Array(UARPyHaPr), UAKrGEbwj = new Array(UARPyHaPr), UARcTSO = new Array(UARPyHaPr), UAItTrfO = new Array(UARPyHaPr), UAsENQxPo = new Array(UARPyHaPr), 
      UADbrMLVv = new Array(UARPyHaPr), UAydRpJkI = new Array(UARPyHaPr), UAwVMBK = new Array(UARPyHaPr), UArczoZTQV = new Array(UARPyHaPr), UAlbdLriIk = new Array(UARPyHaPr), UAxyuvweJA = new Array(UARPyHaPr), UAcmXoQq = new Array(UARPyHaPr), UAcrWGU = new Array(UARPyHaPr), UArAUsZmF = new Array(UARPyHaPr), UAHDtww = new Array(UARPyHaPr), UAkzKpohDe = new Array(UARPyHaPr), UAxiKxBGfj = 
      new Array(UARPyHaPr), UADqaqw = new Array(UARPyHaPr), UAHlfES = new Array(UARPyHaPr), UALRtdApp = new Array(UARPyHaPr);
      andizxc(UACiIBZ).each(function(UALhajEH) {
        if (!andizxc(this).UAfJJMKAeA2()) {
          var UAXKGaFIcx = UALhajEH;
          var UARjBTbqt = andizxc(this);
          andizxc(this)[0].addAttr({"UAdryaDG":"true"});
          var UAmAQtpKh = andizxc(this)[0].attributes;
          for (var TUAj = 0; TUAj < UAmAQtpKh.length; TUAj++) {
            var UAFFoGZKD = UAmAQtpKh[TUAj].nodeValue.toLowerCase();
            var UAtbYbaPEQ = UAmAQtpKh[TUAj].nodeName.toLowerCase();
            if (UAtbYbaPEQ == "required") {
              andizxc(UARjBTbqt)[0].addAttr({"aria-required":"true"});
              UAkzKpohDe[UALhajEH] = true;
              UAWxOYi.UAkzKpohDe++;
            }
            for (var ii in andiUA.keys.UAzSICnau) {
              if (UAtbYbaPEQ.indexOf(andiUA.keys.UAzSICnau[ii]) > -1 || UAFFoGZKD.indexOf(andiUA.keys.UAzSICnau[ii]) > -1) {
                andizxc(UARjBTbqt)[0].addAttr({"aria-required":"true"});
                UAkzKpohDe[UALhajEH] = true;
                UAWxOYi.UAkzKpohDe++;
              }
            }
            for (var ii in andiUA.keys.UAAKsSwR) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAAKsSwR[ii]) > -1) {
                UAkxQER[UALhajEH] = true;
                UAWxOYi.UAkxQER++;
              }
            }
            for (var ii in andiUA.keys.UAmWKOPr) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAmWKOPr[ii]) > -1) {
                UACRQhIc[UALhajEH] = true;
                UAxiKxBGfj[UALhajEH] = parseInt(UAFFoGZKD);
                UAWxOYi.UACRQhIc++;
              }
              if (UAtbYbaPEQ.indexOf(andiUA.keys.UAmWKOPr[ii]) > -1) {
                UACRQhIc[UALhajEH] = true;
                UAxiKxBGfj[UALhajEH] = parseInt(UAFFoGZKD);
                UAWxOYi.UACRQhIc++;
              }
            }
            for (var ii in andiUA.keys.UAMqihuGbl) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAMqihuGbl[ii]) > -1) {
                UAfscKUyf[UALhajEH] = true;
                UADqaqw[UALhajEH] = parseInt(UAFFoGZKD);
                UAWxOYi.UAfscKUyf++;
              }
              if (UAtbYbaPEQ.indexOf(andiUA.keys.UAMqihuGbl[ii]) > -1) {
                UAfscKUyf[UALhajEH] = true;
                UAWxOYi.UAfscKUyf++;
                UADqaqw[UALhajEH] = parseInt(UAFFoGZKD);
              }
            }
            for (var ii in andiUA.keys.UAeTpVeDVC) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAeTpVeDVC[ii]) > -1) {
                UAofWShEzI[UALhajEH] = true;
                UAWxOYi.UAofWShEzI++;
              }
            }
            for (var ii in andiUA.keys.UAyMCII) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAyMCII[ii]) > -1) {
                UANKeRYT[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UANKeRYT++;
                UAWxOYi.UALRtdApp++;
              }
            }
            for (var ii in andiUA.keys.UAiYgXKui) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAiYgXKui[ii]) > -1) {
                UAPFFzI[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UAPFFzI++;
              }
            }
            for (var ii in andiUA.keys.UAgyXuXRKl) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAgyXuXRKl[ii]) > -1) {
                UAWIwoAK[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UAWIwoAK++;
              }
            }
            for (var ii in andiUA.keys.UAPtnVlgrR) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAPtnVlgrR[ii]) > -1) {
                UASQigUcPk[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
              }
            }
            for (var ii in andiUA.keys.UAQjhZlL) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAQjhZlL[ii]) > -1) {
                UABytQc[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UABytQc++;
              }
            }
            for (var ii in andiUA.keys.UArvgMv) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UArvgMv[ii]) > -1) {
                UAKrGEbwj[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UAKrGEbwj++;
              }
            }
            for (var ii in andiUA.keys.UAIEkvjkDW) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAIEkvjkDW[ii]) > -1) {
                UARcTSO[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UARcTSO++;
              }
            }
            for (var ii in andiUA.keys.UARjqDdZr) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UARjqDdZr[ii]) > -1) {
                UAItTrfO[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UAItTrfO++;
              }
            }
            for (var ii in andiUA.keys.UAOlmEdR) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UAOlmEdR[ii]) > -1) {
                UAsENQxPo[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UAsENQxPo++;
              }
            }
            for (var ii in andiUA.keys.UASELVg) {
              if (UAFFoGZKD.indexOf(andiUA.keys.UASELVg[ii]) > -1) {
                UADbrMLVv[UALhajEH] = true;
                UALRtdApp[UALhajEH] = true;
                UAWxOYi.UALRtdApp++;
                UAWxOYi.UADbrMLVv++;
              }
            }
          }
          andizxc(UARjBTbqt).bind("blur keydown", function(UAAWhUz) {
            var keyCode = UAAWhUz.keyCode || UAAWhUz.which;
            if (keyCode == 9 && !andizxc(UARjBTbqt).is("[andidontcheckvalid]")) {
              if (!UAAWhUz.shiftKey) {
                UAqAEfGt = andizxc(UARjBTbqt).val();
                if (UAkzKpohDe[UALhajEH]) {
                  andizxc(UARjBTbqt).UARLOQsFME();
                }
                if (UAkxQER[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                }
                if (UACRQhIc[UALhajEH]) {
                  andizxc(UARjBTbqt).UAqvlIrD(UAxiKxBGfj[UALhajEH]);
                }
                if (UAfscKUyf[UALhajEH]) {
                  andizxc(UARjBTbqt).UAsUfDQkv(UADqaqw[UALhajEH]);
                }
                if (UAofWShEzI[UALhajEH] && !andizxc(UARjBTbqt).is('[role="radio"],[role="checkbox"],[type="radio"],[type="checkbox"]')) {
                  andizxc(UARjBTbqt).andiFormEmailValidation();
                }
                if (UANKeRYT[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAHlbSTD();
                }
                if (UAPFFzI[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAHlbSTD();
                }
                if (UAWIwoAK[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                }
                if (UASQigUcPk[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                }
                if (UABytQc[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                  andizxc(UARjBTbqt).UAqvlIrD(7);
                }
                if (UAKrGEbwj[UALhajEH] && UALRtdApp[UALhajEH] && !andizxc(UARjBTbqt).is('[role="radio"],[role="checkbox"],[type="radio"],[type="checkbox"]')) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                  andizxc(UARjBTbqt).UAqvlIrD(3);
                }
                if (UARcTSO[UALhajEH] && UALRtdApp[UALhajEH]) {
                }
                if (UAItTrfO[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                  andizxc(UARjBTbqt).UAqvlIrD(2);
                }
                if (UAsENQxPo[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                  andizxc(UARjBTbqt).UAqvlIrD(2);
                }
                if (UADbrMLVv[UALhajEH] && UALRtdApp[UALhajEH]) {
                  andizxc(UARjBTbqt).UAYlsiGSE();
                  andizxc(UARjBTbqt).UAqvlIrD(2);
                }
              }
            }
          });
        }
      });
    }
  })();
};
andiUA.keys = {UAAlzdtvtE:["search", "srch"], UAzSICnau:["required", "*"], UAAKsSwR:["\u05de\u05e1\u05e4\u05e8", "num", "number"], UAmWKOPr:["minlength"], UAMqihuGbl:["maxlength"], UAeTpVeDVC:["mail", "\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9", "\u05de\u05d9\u05d9\u05dc"], UAyMCII:["name", "firstname", "fname", "\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9", "\u05e9\u05dd \u05de\u05dc\u05d0", "first name"], 
UAiYgXKui:["lastname", "lname", "\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4", "last name"], UAirQTF:["UserName", "User Name", "\u05e9\u05dd \u05de\u05ea\u05e9\u05de\u05e9"], UAYNWRtlgF:["password", "pass", "\u05e1\u05d9\u05e1\u05de\u05d4"], UAkbtyNw:["password confirm", "passwordconfirm", "password_confirm", "confirm password", "confirmpassword", "confirm_password", "\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d4"], UAQdAHk:["address"], 
UADRkrCjx:["country"], UAxQmLXxtd:["city"], UAFiZUJNJc:["street"], UAgyXuXRKl:["zip", "postcode"], UAPtnVlgrR:["POBox"], UAQjhZlL:["phone", "telephone", "tel", "mobile", "fax", "\u05e4\u05e7\u05e1", "\u05e0\u05d9\u05d9\u05d3", "\u05de\u05d5\u05d1\u05d9\u05d9\u05dc", "\u05e1\u05dc\u05d5\u05dc\u05e8\u05d9"], UArvgMv:["prefix", "pref"], UAIEkvjkDW:["date"], UARjqDdZr:["yy", "yyyy", "\u05e9\u05e0\u05d4", "\u05e9\u05e0\u05ea \u05dc\u05d9\u05d3\u05d4", 
"\u05e9\u05e0\u05ea", "year"], UAOlmEdR:["mm", "month", "\u05d7\u05d5\u05d3\u05e9"], UASELVg:["\u05d9\u05d5\u05dd", "day"], UASbPydD:["cardmonth", "expdate_month", "expdatemonth"], UAkyfoeWI:["cardyear"], UAaxLIH:["cc", "creditcard", "\u05d0\u05e9\u05e8\u05d0\u05d9", "\u05db\u05e8\u05d8\u05d9\u05e1", "cardno", "cardnumb", "card_Id"], UAgKPSoMj:["payments"], UAAdIHJ:["cvv", "\u05e7\u05d5\u05d3 \u05d0\u05d1\u05d8\u05d7\u05ea \u05db\u05e8\u05d8\u05d9\u05e1", 
"3 \u05e1\u05e4\u05e8\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d5\u05ea \u05d1\u05d2\u05d1 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"], UAFywSlVdX:["captcha", "accesscode"], UAuTpNJteg:["units", "amount", "quantity", "item"], UAuhxEkLj:["UAGQzBO", "msg", "textarea", "comments", "content", "description", "dscrpt"], UAPSNhSWxL:["subject", "\u05d4\u05d5\u05d3\u05e2\u05d4"], UANwyxpd:["next", "leftarrow"], UAgIeoaJM:["prev", "rightarrow"], UAfcQrhZob:["scroll-top", 
"to the top", "to-the-top", "scrollUp", "to-top", "totop", "#top"], UAnCachb:["rubric", "title", "heading", "caption"]};
andiUA.UAGKVkuN = function() {
  (function() {
    var UAMUguui = 0, UAHAbpqAVk = 0;
    window.onmousemove = function(UAAWhUz) {
      UAMUguui = UAAWhUz.PageX;
      UAHAbpqAVk = UAAWhUz.PageY;
    };
    andizxc(document).keydown(function(UAAWhUz) {
      if (UAAWhUz.keyCode == 17) {
        if (UAMUguui == undefined) {
          UAMUguui = 0;
        }
        if (UAHAbpqAVk == undefined) {
          UAHAbpqAVk = 0;
        }
        UAWxOYi.ANDI2controlKeyDown++;
        var UAdNQlyANDI2BGcolor;
        UAdNQlyANDI2BGcolor = localStorage.UAJAtcwQ;
        andizxc("body").append('<div class="UAdNQlyAndiCssReser UAGffOU" id="UAGffOU"></div>');
        andizxc(".UAGffOU").css({"position":"absolute", "z-index":"10000", "background-color":UAdNQlyANDI2BGcolor, "top":UAHAbpqAVk - 15 + "px", "left":UAMUguui - 15 + "px"}).fadeOut(1000).fadeIn(100).fadeOut(1000).fadeIn(100).fadeOut(1000);
        setTimeout(function() {
          andizxc(".UAGffOU").remove();
        }, 3000);
      }
    });
  })();
};
andiUA.UAOBDqFqG = function(UAZcjOqKiL) {
  (function() {
    if (UAZcjOqKiL != undefined && UAZcjOqKiL.length > 0) {
      andizxc(UAZcjOqKiL).each(function(UALhajEH) {
        andiUA.UAwOrrBAW(andizxc(this), UALhajEH);
      });
      andizxc("iframe").each(function(TUAj) {
        try {
          var UAuRhxeIframe = andizxc(this);
          andizxc(this).contents().find(UAZcjOqKiL).each(function(UALhajEH) {
            andiUA.UAwOrrBAW(andizxc(this), TUAj);
          });
        } catch (ANDIerr) {
          if (andiUA.UAbUCbcZ.UAdcyZzol) {
            console.log("Error: " + ANDIerr);
          }
        }
      });
    }
  })();
};
andiUA.UAwOrrBAW = function(UAnJPydzh, UAMRRPOvd) {
  (function() {
    var UAezYVEAa = andizxc(UAnJPydzh).parent();
    var UAboXiWcmIopP = parseInt(andizxc(UAnJPydzh).position().top);
    var UARlAcVMeftP = parseInt(andizxc(UAnJPydzh).position().left);
    andizxc("form").on("click", ".UAdNQlyAndiPaushButton" + UAMRRPOvd, function(evt) {
      evt.preventDefault();
    });
    andizxc(UAnJPydzh).closest("body").find(UAezYVEAa).attr({"data-id":"andiButtonHere"});
    if (andizxc(UAezYVEAa).find(".UAdNQlyAndiPaushButton" + UAMRRPOvd).length == 0) {
      andizxc(UAezYVEAa).prepend('<input type="image" style="top: ' + UAboXiWcmIopP + "px; left: " + UARlAcVMeftP + 'px;z-index:99999999999;position: absolute;" class="UAdNQlyAndiPaushButton' + UAMRRPOvd + '" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23424242%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.69%205.604v13c0%20.16-.06.3-.175.417-.117.117-.256.176-.416.176H5.37c-.16%200-.3-.06-.415-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.177-.416.116-.118.255-.177.415-.177H10.1c.16%200%20.3.06.416.176.116.117.174.254.174.414zm8.274%200v13c0%20.16-.06.3-.175.417-.118.117-.257.176-.417.176h-4.728c-.16%200-.3-.06-.416-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.175-.416.116-.118.255-.177.415-.177h4.728c.16%200%20.3.06.416.176.115.117.174.254.174.414z%22%2F%3E%3C%2Fsvg%3E " id="KeXR0" alt="' + 
      andiUA.UAufVra.UAJlUxRiu + '" >');
    }
    if (andizxc(UAnJPydzh).closest("html").find("#UAdNQlyAndiFlash" + UAMRRPOvd).length == 0) {
      andizxc(UAnJPydzh).closest("html").find("head").append('<style id="UAdNQlyAndiFlash' + UAMRRPOvd + '"> #TUAUAnPZVZMmg' + UAMRRPOvd + "{top: " + UAboXiWcmIopP + "px; left: " + UARlAcVMeftP + "px;position:absolute;visibility:visible;z-index:999999;}.UAdNQlyAndiPaushButton" + UAMRRPOvd + "{width:18px;height:18px;border:none;}<style>");
    }
    andizxc(UAezYVEAa).find(".UAdNQlyAndiPaushButton" + UAMRRPOvd).click(function() {
      if (andizxc(UAnJPydzh).closest("body").find("#TUAUAnPZVZMmg" + UAMRRPOvd).length == 0) {
        andizxc(UAnJPydzh).closest("body").find(this).after('<div id="TUAUAnPZVZMmg' + UAMRRPOvd + '" style="width:' + andizxc(UAnJPydzh).width() + "px;height:" + andizxc(UAnJPydzh).height() + "px;background-color:" + andiUA.UAbUCbcZ.UAoisGYOcT.backgroundColor + ';">' + andiUA.UAufVra.UAJlUxRiu2 + "</div>");
      } else {
        andizxc(UAnJPydzh).closest("body").find("#TUAUAnPZVZMmg" + UAMRRPOvd).remove();
      }
    });
  })();
};
andiUA.UASaYoyyD = function() {
  (function() {
    andizxc('body').append('<style>:focus{box-shadow : none !important}.onFocusKeyDown{box-shadow : 0px 0px 15px #000!important;}</style>');
	andizxc(document).on('keydown','*',function(e){
		if(e.keyCode == 9){
			setTimeout(function(){
				andizxc('.onFocusKeyDown').removeClass('onFocusKeyDown');
				if(andizxc(document.activeElement).is(andiUA.UAbUCbcZ.UAAUCEne)){
					andizxc(document.activeElement).addClass('onFocusKeyDown');
				}
			},0);
		}
	});
	  
	  
    andizxc(".UAKfzbJ").remove();
    //andizxc("head").append('<style class="UAKfzbJ"> :focus{box-shadow: 0px 0px 10px DimGray !important;}</style>');
    andizxc("iframe").each(function() {
      try {
        andizxc(this).contents().find(".UAKfzbJ").remove();
        //andizxc(this).contents().find("head").append('<style class="UAKfzbJ"> :focus{box-shadow: 0px 0px 10px DeepSkyBlue !important;} [tabindex]:not([tabindex="-1"]):focus,[role="button"]:focus,button:focus,select:focus,textarea:focus,input:focus{box-shadow: 0px 0px 10px DimGray !important;}</style>');
      } catch (ANDIerr) {
        if (andiUA.UAbUCbcZ.UAdcyZzol) {
          console.log("Error: " + ANDIerr);
        }
      }
    });
  })();
};
andiUA.UAilVgHC = function(UAilVgHCsetting) {
  (function() {
    if (UAilVgHCsetting != undefined && UAilVgHCsetting.length > 0) {
      andizxc(UAilVgHCsetting).each(function(UALhajEH) {
        andizxc(UAilVgHCsetting[UALhajEH].UAuRhxe).each(function(TUAj) {
          andizxc(this)[0].addAttr({"aria-label":UAilVgHCsetting[UALhajEH].UALQDGWTJa, "UADwFOO":UAilVgHCsetting[UALhajEH].UALQDGWTJa});
        });
      });
      andizxc("iframe").each(function(x) {
        try {
          andizxc(UAilVgHCsetting).each(function(ANDIb) {
            andizxc(this).contents().find(UAilVgHCsetting[ANDIb].UAuRhxe).each(function(TUAj) {
              andizxc(this)[0].addAttr({"aria-label":UAilVgHCsetting[ANDIb].UALQDGWTJa, "UADwFOO":UAilVgHCsetting[ANDIb].UALQDGWTJa});
            });
          });
        } catch (ANDIerr) {
          if (andiUA.UAbUCbcZ.UAdcyZzol) {
            console.log("Error: " + ANDIerr);
          }
        }
      });
    }
  })();
};
andiUA.UARYmufz = function() {
  (function() {
    function UAEfjNj() {
      andizxc("#UAcccSq").css("display", "none");
      andizxc('#UAcccSq [role="button"]').attr({"tabindex":"-1"});
      andizxc("#UAKDcFOe")[0].addAttr({"UAcccSq":"false"});
    }
    UAjpFGgM = function() {
      if (andizxc("#UApbMzEStyle").length == 0) {
        andiUA.UASaYoyyD();
        andiUA.UAriymzd();
      } else {
        andiUA.UAOQlQoihangehighLightFocus();
      }
    };
    UAhgKQO = function() {
      if (localStorage.getItem("UARYmufz") != "true") {
        andizxc("#UAKDcFOe")[0].addAttr({"UAcccSq":"false"});
        UAEfjNj();
        UAjpFGgM();
        localStorage.removeItem("noUARYmufz");
        localStorage.setItem("UARYmufz", "true");
      }
    };
    if (andiUA.UAaznvf) {
      andiUA.UASaYoyyD();
      andiUA.UAriymzd();
      return false;
    }
    if (window.innerWidth > 700) {
      var UADhvVLFEu = document.querySelector("head").innerHTML.indexOf("UA2StyleSheetLTR") > -1 ? false : true;
      var UACMqZl = false;
      var UAqrhXCsvv = "z-index:99999999999;\tdisplay:none; border-radius:5px; margin:10px;background-color: rgba(0, 0, 0, 0.65);height:75px;box-sizing:border-box;text-align:" + (UADhvVLFEu ? "right" : "left") + " ; width:360px;padding: 23px 20px 10px;;position:fixed;color:#fff !important ;bottom:0";
      var UAGvdvcQuF = "";
      var UAzSZcaCO = "z-index:99999999999;\twidth: 25px;   position: absolute; top: 8px; " + (UADhvVLFEu ? "left" : "right") + ": 7px;";
      andizxc("#UAKlXFwlpP").append('<div aria-hidden="true" id="UAcccSq" style="' + UAqrhXCsvv + '"><div style="' + UAGvdvcQuF + '"></div>' + andiUA.UAufVra.UAjBhsJJp2158 + '<div  style="' + UAzSZcaCO + '" aria-label="' + andiUA.UAufVra.UAjBhsJJp2159 + '" id="UAAtptz" role="button" tabindex="0">X</div></div>');
      if (parseInt(andizxc("#UAcccSq").css("right")) != "NaN" && parseInt(andizxc("#UAcccSq").css("right")) < 40) {
        andizxc("#UAcccSq").css("right", "40px");
      }
      if (parseInt(andizxc("#UAcccSq").css("left")) != "NaN" && parseInt(andizxc("#UAcccSq").css("left")) < 40) {
        andizxc("#UAcccSq").css("left", "40px");
      }
      eventOn("click", "#UAbNOvFF", function(e) {
        if (localStorage.getItem("UARYmufz") != "true") {
          UAEfjNj();
          UAhgKQO();
        }
      });
      eventOn("keydown", "#UAKDcFOe", function(e) {
        if (e.keyCode == 89) {
          andizxc("#UAbNOvFF").click();
        }
      });
      eventOn("click", "#UAAtptz", function(e) {
        andizxc("#UAcccSq").css("display", "none");
        localStorage.removeItem("UARYmufz");
        localStorage.setItem("noUARYmufz", "true");
        setTimeout(function() {
          andizxc("#UAKDcFOe")[0].addAttr({"UAcccSq":"false"});
        }, 100);
      });
      eventOn("keydown", "#UAAtptz", function(e) {
        if (e.keyCode == 13) {
          this.click();
        }
      });
      if (localStorage.getItem("UARYmufz") == "true") {
        UAjpFGgM();
      } else {
        if (localStorage.getItem("noUARYmufz") == "true") {
          localStorage.removeItem("UARYmufz");
        } else {
          UAdBfON = [];
          var myVar, UAkXRjE;
          andizxc(document).on("keydown", function toovya(e) {
            if (localStorage.getItem("noUARYmufz") != "true" && localStorage.getItem("UARYmufz") != "true") {
              if (e.target.tagName != "INPUT" && e.target.tagName != "TEXTAREA" && e.target.tagName != "SELECT") {
                if (myVar != undefined) {
                  clearTimeout(myVar);
                }
                if (e.keyCode == 89 && localStorage.getItem("UARYmufz") != "true") {
                  if (UAkXRjE != undefined) {
                    clearTimeout(UAkXRjE);
                  }
                  UAEfjNj();
                  UAhgKQO();
                }
                if (e.keyCode == 9 && localStorage.getItem("UARYmufz") != "true") {
                  andizxc("#UAcccSq").css("display", "inline-block");
                  andizxc('#UAcccSq [role="button"]').attr({"tabindex":"0"});
                  UAdBfON.push("tab");
                  if (UAdBfON.length >= 3) {
                    if (localStorage.getItem("UARYmufz") != "true") {
                      UAhgKQO();
                    }
                  }
                  myVar = setTimeout(function() {
                    UAdBfON.length = 0;
                  }, 1000);
                } else {
                  UAdBfON.length = 0;
                }
              }
            }
          });
        }
      }
    }
  })();
};
andiUA.UALZeGoS = function() {
  return function() {
    var UAZKmbAA = [];
    var UAaRxCtm = localStorage.getItem("UAaRxCtm");
    UAeGTdbp = document.querySelectorAll("[UAJZkUqw]");
    for (var i = 0; i < UAeGTdbp.length; i++) {
      var UAmhpgZTU = UAeGTdbp[i].getAttribute("UAQUByuWWd");
      if (UAmhpgZTU != "null" && parseInt(UAmhpgZTU) > parseInt(UAaRxCtm) + 2) {
        if (!andiUA.UAWMMUMfyS(UAZKmbAA, UAmhpgZTU)) {
          UAZKmbAA.push(parseInt(UAmhpgZTU));
        }
      }
    }
    UAZKmbAA.sort(function(a, b) {
      return b - a;
    });
    var UARPyHaPr = UAZKmbAA.length;
    var didntMarkAsHeading = 0;
    var UAvbbqgGW = 0;
    function UALmdwWq(elm) {
      elm.setAttribute("role", "heading");
      elm.setAttribute("aria-level", i + 2 < 7 ? i + 2 : "6");
    }
    var UAfDGsnpxJ = function(tagName) {
      if (tagName == "a") {
        return true;
      }
      if (tagName == "input") {
        return true;
      }
      if (tagName == "button") {
        return true;
      }
      if (tagName == "h1") {
        return true;
      }
      if (tagName == "h2") {
        return true;
      }
      if (tagName == "h3") {
        return true;
      }
      if (tagName == "h4") {
        return true;
      }
      if (tagName == "h5") {
        return true;
      }
      if (tagName == "h6") {
        return true;
      }
      if (tagName == "li") {
        return true;
      }
      return false;
    };
    for (var i = 0; i < UARPyHaPr; i++) {
      UAeGTdbp = document.querySelectorAll('[UAQUByuWWd="' + UAZKmbAA[i] + '"]');
      for (var j = 0; j < UAeGTdbp.length; j++) {
        var UARNHcJ = UAeGTdbp[j].tagName.toLowerCase();
        var UAUwIqFz = false;
        var that = UAeGTdbp[j];
        UAwqmnLT = andizxc(that);
        while (andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "body" && andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "html") {
          UAwqmnLT = andizxc(UAwqmnLT).parent();
          if (UAfDGsnpxJ(andizxc(UAwqmnLT)[0].tagName.toLowerCase())) {
            UAUwIqFz = true;
          }
        }
        UAvbbqgGW++;
        var UAOuCbib = (UAeGTdbp[j].innerText || UAeGTdbp[j].textContent).trim();
        var numOfSpace = UAOuCbib.match(/([\s]+)/g);
        if (!UAfDGsnpxJ(UARNHcJ) && !UAUwIqFz) {
          if (!UAeGTdbp[j].hasAttribute("role")) {
            UALmdwWq(UAeGTdbp[j]);
          } else {
            var parentElm = UAeGTdbp[j].parentElement;
            var UAdsUmYMqF = (parentElm.innerText || parentElm.textContent).trim();
            if (UAdsUmYMqF == UAOuCbib && UAfDGsnpxJ(parentElm.tagName.toLowerCase()) == -1 && !UAeGTdbp[j].hasAttribute("role")) {
              UALmdwWq(UAeGTdbp[j]);
            } else {
              if (numOfSpace != null && UAdsUmYMqF.match(/([\s]+)/g) != null && numOfSpace.length + 1 == UAdsUmYMqF.match(/([\s]+)/g).length) {
                UALmdwWq(UAeGTdbp[j]);
              } else {
              }
            }
          }
        }
      }
    }
  }();
};

andiUA.fixBreadcrumb = function() {
  (function() {
    var wrapBreadCrumbArr = [];
    andizxc('.breadcrams, #breadcrams .breadcrumb, #breadcrumb ,.crumbs, #crumbs, [class*="breadcrumb"],[id*="breadcrumb"]').each(function() {
      var that = this;
      UAwqmnLT = andizxc(this);
      var isWrapAll = true;
      while (andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "body" && andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "html") {
        UAwqmnLT = andizxc(UAwqmnLT).parent();
        if (andizxc(UAwqmnLT).attr("class") != undefined && andizxc(UAwqmnLT).attr("class").indexOf("breadcrumb") > -1 || andizxc(UAwqmnLT).attr("id") != undefined && andizxc(UAwqmnLT).attr("id").indexOf("breadcrumb") > -1) {
          isWrapAll = false;
        }
      }
      if (isWrapAll) {
        wrapBreadCrumbArr.push(that);
      }
    });
    var createText = function(arrOfUAUgQEtgU) {
      var UAzvNgFuText = "";
      for (var i = arrOfUAUgQEtgU.length - 1; i >= 0; i--) {
        if (andizxc(arrOfUAUgQEtgU[i]).text().trim().length > 2) {
          var UANnjRGUg = andizxc(arrOfUAUgQEtgU[i]).text().trim();
          if (UAzvNgFuText.indexOf(andiUA.UAufVra.UAhKbUwreadcrumb1) == -1) {
            andizxc(arrOfUAUgQEtgU[i]).attr("aria-current", "page");
            UAzvNgFuText = andiUA.UAufVra.UAhKbUwreadcrumb1 + UANnjRGUg + " ";
          } else {
            if (andizxc(arrOfUAUgQEtgU[i]).is("a").length > 0) {
              andizxc(arrOfUAUgQEtgU[i]).attr("aria-label", andiUA.UAufVra.UAhKbUwreadcrumb2 + UANnjRGUg);
            } else {
              if (andizxc(arrOfUAUgQEtgU[i]).find("a").length > 0) {
                andizxc(arrOfUAUgQEtgU[i]).find("a").attr("aria-label", andiUA.UAufVra.UAhKbUwreadcrumb2 + UANnjRGUg);
              }
            }
            UAzvNgFuText = UAzvNgFuText + andiUA.UAufVra.UAhKbUwreadcrumb3 + UANnjRGUg + " ";
          }
        }
      }
      return UAzvNgFuText;
    };
    andizxc(wrapBreadCrumbArr).each(function(i) {
      var that = this;
      if (andizxc(that)[0].children.length == 1) {
        var wraptext = andizxc(that)[0].children;
        if (wraptext.length == 1) {
          var UAeGTdbp = andizxc(wraptext)[0].children;
          var allSentence = createText(UAeGTdbp);
          andizxc(that).attr({"aria-label":allSentence, "tabindex":"0", "role":"dialog"});
        }
      } else {
        var UAeGTdbp = andizxc(that)[0].children;
        var allSentence = createText(UAeGTdbp);
        andizxc(that).attr({"aria-label":allSentence, "tabindex":"0", "role":"dialog"});
      }
    });
  })();
};



andiUA.fixMenu = function() {

        var wrapBreadCrumbArr = [];
        andizxc('nav, [class*="menu"],[id*="menu"], [class*="nav"],[id*="nav"]').each(function() {
            var that = this;
            UAwqmnLT = andizxc(this);
            var isWrapAll = true;
            while (andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "body" && andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "html") {
                UAwqmnLT = andizxc(UAwqmnLT).parent();
                if (!andizxc(UAwqmnLT).is('body') && (andizxc(UAwqmnLT).attr("class") != undefined && (andizxc(UAwqmnLT).attr("class").indexOf("nav") > -1 || andizxc(UAwqmnLT).attr("class").indexOf("menu") > -1)) || (andizxc(UAwqmnLT).attr("id") != undefined && (andizxc(UAwqmnLT).attr("id").indexOf("nav") > -1 || andizxc(UAwqmnLT).attr("id").indexOf("menu") > -1))) {
                    isWrapAll = false;
                }
                if (andizxc(UAwqmnLT)[0].tagName.toLowerCase() == "nav") {
                    isWrapAll = true;
                }
            }
            if (isWrapAll) {
                wrapBreadCrumbArr.push(that);
            }
        });

        andizxc(wrapBreadCrumbArr).each(function(i) {
            if (!andizxc(this).is('body ,#UAqKHuDh, #UAqKHuDh *')) {
                var that = this;
                andizxc(this).attr({
                    'role': 'menubar'
                });
                var parentOfFirstLink = andizxc(that).find('a:not(.UAnhxMCUZL)').first().parent();
                var isTheSame = false;
                andizxc(that).find('a').first().siblings().each(function() {
                    if (andizxc(this).parent().is(parentOfFirstLink))
                        isTheSame = true;
                        
                });

                if (!isTheSame) {
                    andizxc(that).find('a').each(function() {
                        andizxc(this).attr({
                            'role': 'link',
                            'tabindex':'0'
                        });
                        andizxc(this).parent().attr({
                            'role': 'menuitem'
                        });
                        if (andizxc(this).siblings().length > 0) {
                            andizxc(this).parent().attr({
                                'haspopup': 'true'
                            });
                        }
                    });
                }
            }
        });

    };


    andiUA.shopSR = function() {
        (function() {
            var wrapBreadCrumbArr = [];
            var UACnpgjnToLookFor = 'cart';
            andizxc('[class*="' + UACnpgjnToLookFor + '"],[id*="' + UACnpgjnToLookFor + '"]').each(function() {
                var that = this;
                UAwqmnLT = andizxc(this);
                var isWrapAll = true;
                while (andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "body" && andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "html") {
                    UAwqmnLT = andizxc(UAwqmnLT).parent();
                    if ((andizxc(UAwqmnLT).attr("class") != undefined && (andizxc(UAwqmnLT).attr("class").indexOf(UACnpgjnToLookFor)) > -1) || (andizxc(UAwqmnLT).attr("id") != undefined && (andizxc(UAwqmnLT).attr("id").indexOf(UACnpgjnToLookFor) > -1))) {
                        isWrapAll = false;
                    }
                }
                if (isWrapAll) {
                    wrapBreadCrumbArr.push(that);
                }
            });
            andizxc(wrapBreadCrumbArr).each(function(i) {
                if (!andizxc(this).is('#UAqKHuDh, #UAqKHuDh *')) {
                    var that = this;
                    andizxc(this).attr({
                        'role': 'region',
                        'aria-live': 'polite',
                        'aria-label': andiUA.UAufVra.bbb15
                    });
                }
            });


            var buttonToPush = '[role="button"][class*="' + UACnpgjnToLookFor + '"],[role="link"][class*="' + UACnpgjnToLookFor + '"],button[class*="' + UACnpgjnToLookFor + '"],a[class*="' + UACnpgjnToLookFor + '"],[type="button"][class*="' + UACnpgjnToLookFor + '"],[type="image"][class*="' + UACnpgjnToLookFor + '"],[type="submit"][class*="' + UACnpgjnToLookFor + '"],[role="button"][id*="' + UACnpgjnToLookFor + '"],[role="link"][id*="' + UACnpgjnToLookFor + '"],button[id*="' + UACnpgjnToLookFor + '"],a[id*="' + UACnpgjnToLookFor + '"],[type="button"][id*="' + UACnpgjnToLookFor + '"],[type="image"][id*="' + UACnpgjnToLookFor + '"],[type="submit"][id*="' + UACnpgjnToLookFor + '"]';
            andizxc(buttonToPush).click(function() {
                localStorage.setItem('updateAddtoCart', andizxc('[aria-label="' + andiUA.UAufVra.bbb15 + '"]').first().text().trim());
            });
            var text1 = localStorage.getItem('updateAddtoCart');
            var text2 = andizxc('[aria-label="' + andiUA.UAufVra.bbb15 + '"]').first().text().trim();
            if (text1 != text2 && andizxc(buttonToPush).length > 0) {
                setTimeout(function() {
                    andiUA.UACRNKt(andiUA.UAufVra.bbb16 + ' ' + text2);
                    localStorage.removeItem('updateAddtoCart');
                }, 1200);
            } else {
                localStorage.removeItem('updateAddtoCart');
            }



        })();
    }


    andiUA.paginationFix = function() {
        (function() {
            var wrapBreadCrumbArr = [];
            andizxc('[class*="pagination"],[id*="pagination"], [class*="pagenav"],[id*="pagenav"]').each(function() {
                var that = this;
                UAwqmnLT = andizxc(this);
                var isWrapAll = true;
                while (andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "body" && andizxc(UAwqmnLT)[0].tagName.toLowerCase() != "html") {
                    UAwqmnLT = andizxc(UAwqmnLT).parent();
                    if ((andizxc(UAwqmnLT).attr("class") != undefined && (andizxc(UAwqmnLT).attr("class").toLowerCase().indexOf("pagenav") > -1 || andizxc(UAwqmnLT).attr("class").toLowerCase().indexOf("pagination") > -1)) || (andizxc(UAwqmnLT).attr("id") != undefined && (andizxc(UAwqmnLT).attr("id").toLowerCase().indexOf("pagenav") > -1 || andizxc(UAwqmnLT).attr("id").toLowerCase().indexOf("pagination") > -1))) {
                        isWrapAll = false;
                    }
                }
                if (isWrapAll) {
                    wrapBreadCrumbArr.push(that);
                }
            });
            andizxc(wrapBreadCrumbArr).each(function(i) {
                if (!andizxc(this).is('#UAqKHuDh, #UAqKHuDh *')) {
                    var that = this;
                    andizxc(that).attr({
                        'role': 'menubar',
                        'aria-label': andiUA.UAufVra.bbb18
                    });
                    andizxc(that).each(function() {
                        andizxc(this).find('a').each(function() {
                            andizxc(this).attr({
                                'role': 'link',
                                'aria-label': andiUA.UAufVra.bbb17 + andizxc(this).text()
                            });
                        });
                    });
                    andizxc(that).find('[class*="active"], [class*="current"]').attr({
                        'aria-current': 'true'
                    });
                    andizxc(that).find('[aria-label="' + andiUA.UAufVra.bbb18 + '"]').removeAttr('role aria-label');
                }
            });



        })();
    }

 andiUA.findAltMeaning = function() {
        var UABifnRVMV = 'h1,h2,h3,h4,h5.h6,[role="heading"]';
        var areas = 'article:not(.andimenucode), [UARRrcg="2"]:not([dontfindAltMeaning]):not(.andimenucode)';
        andizxc('article').each(function(i) {
            andizxc(this).find('[UARRrcg]').attr('dontfindAltMeaning', 'true');
        });
        andizxc(areas).each(function(i) {
            var UAYWNeB = this;
            if (andizxc(UAYWNeB).find('img').length > 0 && andizxc(UAYWNeB).find(UABifnRVMV).length > 0) {
                andizxc(UAYWNeB).find('img').each(function(j) {
                    var UAsGOTPw = j;
                    var UAFHRXJpc = this;
                    if (andizxc(UAFHRXJpc).attr('alt') == undefined || andizxc(UAFHRXJpc).attr('alt').trim() == '') {
                        var UAicDbT = andizxc(UAYWNeB).find(UABifnRVMV);
                        var UACyRFoY = andizxc(UAYWNeB).find("*");
                        var UAYjGmm = andizxc.inArray(UAFHRXJpc, UACyRFoY);
                        var UAhPIltVcq = false;
                        for (var UALhajEH = UAYjGmm; UALhajEH >= 0; UALhajEH--) {
                            if (andizxc(UACyRFoY[UALhajEH]).is(UABifnRVMV)) {
                                andizxc(UAFHRXJpc).attr({
                                    "UAMNPIdzef": "true",
                                    "alt": andizxc(UACyRFoY[UALhajEH]).text() +
                                        andiUA.UAufVra.UALlwbRSi + (1 + UAsGOTPw)
                                });
                                UAhPIltVcq = true;
                                break;
                            }
                        }
                        if (!UAhPIltVcq) {
                            var UAicDbT = andizxc(this).nextAll(UABifnRVMV);
                            if (UAicDbT != undefined && UAicDbT.length > 0) {
                                andizxc(this).attr({
                                    "UAMNPIdzef": "true",
                                    "alt": andizxc(UAicDbT).first().text()
                                });
                            } else {
                                UAicDbT = andizxc(UAYWNeB).find(UABifnRVMV);
                                var UAFHRXJpc = this;
                                var UACyRFoY = andizxc(UAYWNeB).find("*");
                                var UAYjGmm = andizxc.inArray(UAFHRXJpc, UACyRFoY);
                                var UAhPIltVcq = false;
                                for (var UALhajEH = UAYjGmm; UALhajEH < UACyRFoY.length; UALhajEH++) {
                                    if (andizxc(UACyRFoY[UALhajEH]).is(UABifnRVMV)) {
                                        andizxc(UAFHRXJpc).attr({
                                            "UAMNPIdzef": "true",
                                            "alt": andizxc(UACyRFoY[UALhajEH]).text() + " " +
                                                andiUA.UAufVra.UALlwbRSi + " " + (1 + UAsGOTPw)
                                        });
                                        UAhPIltVcq = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }

                });
            }
        });
    }







andiRunAll = function() {
  (function() {
    setTimeout(function() {
    //  andiUA.UArwxNxlkC();
    //  andiUA.UArLmOP();
		andiUA.fixBreadcrumb();
		andiUA.paginationFix();
		andiUA.shopSR();
		andiUA.UALZeGoS();
		andiUA.fixMenu();
		andiUA.findAltMeaning();
    }, 30);
    setTimeout(function() {
      //andiUA.UAUaAkjmF();
      andiUA.UAxbYHAY();
    }, 45);
    setTimeout(function() {
      andiUA.UAilVgHC(andiUA.UAbUCbcZ.UAilVgHCSetting);
      andiUA.UACSjzePOu(andiUA.UAbUCbcZ.UAsWGmZiHP.UASzuXCrOU, andiUA.UAbUCbcZ.UAsWGmZiHP.UAOKYSEkmX);
    }, 60);
    setTimeout(function() {
      andizxc("iframe").each(function() {
        try {
          if (andizxc(this).attr("src")) {
            UAxYhgoDSU = andizxc(this).contents().find(andiUA.UAbUCbcZ.UAsWGmZiHP.UASzuXCrOU);
            andiUA.UANlwHJb(UAxYhgoDSU);
          }
        } catch (ANDIerr) {
          if (andiUA.UAbUCbcZ.UAdcyZzol) {
            console.log("Error: " + ANDIerr);
          }
        }
      });
      andiUA.UANlwHJb(andiUA.UAbUCbcZ.UAsWGmZiHP.UASzuXCrOU);
    }, 80);
    setTimeout(function() {
      andiUA.UArTvoHB(andiUA.UAbUCbcZ.UAzuDthHF);
      andiUA.UALIxOu(andiUA.UAbUCbcZ.UAaomEfH);
      andiUA.UAqGnwp();
      //andiUA.UALZeGoS();
    }, 100);
    setTimeout(function() {
      andiUA.UAEKUQG();
      andiUA.UAQJBTlFBp();
      andiUA.UAqwDOGUs();
      andiUA.UAarmjqqQD(true);
    }, 120);
    setTimeout(function() {
      andiUA.UAJLShchcd(andiUA.UAbUCbcZ.UAmZMZapvO);
      andiUA.UAlMJcq();
      andiUA.UAGKVkuN();
    }, 145);
    setTimeout(function() {
      andiUA.UAtuqaloQF();
      andiUA.UAaznvf = false;
      andiUA.UARYmufz();
    }, 170);
  })();
};