UAmyyikilG = function() {
	UA.UArwTgDML = function(UAqvweC) {
		andizxc('.UAXiatk, .UAoaJOvcb').remove();
		if (UAqvweC !== undefined && UAqvweC.length > 0) {
		for (var UADRVTPQV = 0; UADRVTPQV < UAqvweC.length; UADRVTPQV++) {
        var UALXgfe = UAqvweC[UADRVTPQV].UAUBVWv;
        if (andizxc(UALXgfe).children().length > 0 && UALXgfe.length > 0 && andizxc(UALXgfe).css("display") != "none" && andizxc(UALXgfe).css("visibility") != "hidden" && andizxc(UALXgfe).css("opacity") != "0" && andizxc.trim(andizxc(UAqvweC[UADRVTPQV].UAUBVWv).text()) != "") {
          andizxc(UAqvweC[UADRVTPQV].UAUBVWv).prepend('<a class="UAlylatskipArea" name="UAUlJjRiNA' + UADRVTPQV + '"  tabindex="0" >' + UAqvweC[UADRVTPQV].UALvzKs + ",<br />" + UA.UAvtiQvcR.UAmrcdlM + "</a>");
        }
        if (UAqvweC[UADRVTPQV].UAZLLuhwn && UAqvweC[UADRVTPQV].UAUBVWv != "undefined" && UAqvweC[UADRVTPQV].UAUBVWv != undefined && andizxc.trim(andizxc(UAqvweC[UADRVTPQV].UAUBVWv).text() != "")) {
          andizxc("body").prepend('<a id="UAjPgjWg" class="UATPaGxR" name="UAjPgjWg" href="#UAMainContent" tabindex="0" > ' + UA.UAvtiQvcR.UAjaumOUw + "</a>");
          andizxc(UAqvweC[UADRVTPQV].UAUBVWv).attr({"role":"main"});
        }
      }
      var UAcoHop = andizxc("title").text();
      andizxc("body").append('<a id="UAZUoTZ" class="UAlylatskipArea" name="UAZUoTZ" href="#UAjPgjWg" tabindex="0" >' + UA.UAvtiQvcR.UAVyKjGkf + UAcoHop + " " + UA.UAvtiQvcR.UAxlgiZFjU + " </a>");
      andizxc(".UATPaGxR").click(function(event) {
        event.preventDefault();
        var UAVuNtJboP = andizxc('[role="main"]');
        if (UAVuNtJboP != undefined && UAVuNtJboP.length == 1) {
          andizxc(UAVuNtJboP).attr("tabindex", "0").focus();
        }
      });
	  
	    andizxc(document).on("click", "#UAZUoTZ", function(ANDIevent) {
    andizxc("body").attr("tabindex", "0").focus().scrollTop(0);
    andizxc("body").attr("tabindex", "");
  });
  andizxc(document).on("focus", ".UA2skipAreaAutomate", function(ANDIevent) {
    //andizxc(this).parent().css({"outline":"5px solid #49C0EB"});
    andizxc(this).parent().css({"box-shadow":"0px 0px 3px 5px rgba(73,192,235,1)"});
	

	
  });
  andizxc(document).on("blur", ".UA2skipAreaAutomate", function(ANDIevent) {
    andizxc(this).parent().css({"outline":""});
    andizxc(this).parent().css({"box-shadow":""});
  });
  
			var UAcoHop = andizxc("title").text();
			andizxc(".UAlylatskipArea").each(function(UADRVTPQV) {
				 var UAdZnyMY = andizxc(".UAlylatskipArea");
				 if ((UAdZnyMY.length - 1) == UADRVTPQV) {
					 andizxc(this).attr({
						 "href": "#UAjPgjWg",
						 "name": "UAUlJjRiNA" + UADRVTPQV
					 });
				 } else {
					 andizxc(this).attr({
						 "href": "#UAUlJjRiNA" + (UADRVTPQV + 1),
						 "name": "UAUlJjRiNA" + UADRVTPQV,
						 "id": "UAUlJjRiNA" + UADRVTPQV
					 });
				 }
			});
			andizxc(".UAlylatskipArea").click(function(ANDIevent) {
				 ANDIevent.preventDefault();
				 var UAdZnyMYUAskipArea = andizxc(".UAlylatskipArea");
				 var UAoxXnXBkC = andizxc.inArray(this, UAdZnyMYUAskipArea);
				 var offSetTop = andizxc(UAdZnyMYUAskipArea[UAoxXnXBkC + 1]).scrollTop();
				 if ((UAoxXnXBkC + 1) == UAdZnyMYUAskipArea.length) {
					 andizxc('#UAjPgjWg').attr('tabindex', '0').focus().scrollTop(0);
				 } else {
					 andizxc(UAdZnyMYUAskipArea[UAoxXnXBkC + 1]).attr('tabindex', '0').focus().scrollTop(offSetTop + 50);
				 }
			});
			andizxc(".UAlylatskipArea").focus(function() {
				 andizxc(this).parent().css({
					 'font-size': '16px'
				 });
				 }).blur(function() {
					 andizxc(this).parent().css({
						 'font-size': ''
					 });
				 });
				 andizxc(".UAoaJOvcb, .UAXiatk").keydown(function(ANDIevent) {
					 if (ANDIevent.keyCode == 13) {
						 andizxc(this).find('a').first().click();
				}
			});
		}
	};


	 UA.markTextLagn = function(){
		 if(false){
			 if(UA.UAKlgHjtPe != 'he'){
				 for(var UADRVTPQV = 0; UADRVTPQV < UA.UAldFrFLU.length; UADRVTPQV++){
					UANVFVrpJ(document.body,UA.UAldFrFLU[UADRVTPQV],'','he');
				 }
			 }
			 if(UA.UAKlgHjtPe != 'ar'){
				 for(var UADRVTPQV = 0; UADRVTPQV < UA.UAxhJPW.length; UADRVTPQV++){
					UANVFVrpJ(document.body,UA.UAxhJPW[UADRVTPQV],'','ar');
				 }
			 }
			 if(UA.UAKlgHjtPe != 'en'){
				 for(var UADRVTPQV = 0; UADRVTPQV < UA.UAJFejEk.length; UADRVTPQV++){
					UANVFVrpJ(document.body,UA.UAJFejEk[UADRVTPQV],'','en');
				 }
			 }
			 if(UA.UAKlgHjtPe != 'ru'){
				 for(var UADRVTPQV = 0; UADRVTPQV < UA.UAtTycpDK.length; UADRVTPQV++){
					UANVFVrpJ(document.body,UA.UAtTycpDK[UADRVTPQV],'','ru');
				 }
			 }
		 }
	 }


	 UA.UAhrwTyS = function (UApgVQG) {
        if (UApgVQG !=undefined &&  UApgVQG) {
			if(andizxc('#UAKBYshndiInputdiscrp').length == 0){
				andizxc('head').append('<style id="UAKBYshndiInputdiscrp">body [andiAllElmWithText][title]{display: inline-block;}body [andiAllElmWithText][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px;z-index: 98;background-color:#000;color:#fff;min-width:50px;display: block;}body [andiAllElmWithText][title]:focus:before{content: "";z-index: 99;}</style>');
			}
			andizxc('[andiAllElmWithText][title]').attr('tabIndex','0');
			andizxc('iframe').each(function(){
				try{
					if(andizxc(this).contents().find('#UAKBYshndiInputdiscrp').length == 0){
						andizxc(this).contents().find('head').append('<style id="UAKBYshndiInputdiscrp">body [andiAllElmWithText][title]{display: inline-block;}body [andiAllElmWithText][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px;z-index: 98;background-color:#000;color:#fff;min-width:50px;display: block;}body [andiAllElmWithText][title]:focus:before{content: "";z-index: 99;}</style>');
					}
					andizxc(this).contents().find('[andiAllElmWithText][title]').attr('tabIndex','0');
				} catch(ANDIerr) {
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
				}
			});
			
		}
	 }
	 
	 
    UA.UAjoigHdG = function (UAqlJMoz) {
		if(UAqlJMoz != undefined ){
            var UAnSbZQ = UA.UAoGxOQIUq();
            if (UAqlJMoz !== undefined && UAqlJMoz.length > 0) {
				andizxc(UAqlJMoz).each(function (UADRVTPQV) {
					if(UA.UADEOJEu(UAqlJMoz[UADRVTPQV].UApZrfLUUh,UAqlJMoz[UADRVTPQV].UAYytLpAy)){
                    if ((UAqlJMoz[UADRVTPQV].UApgnCzY).length > 0) {
                        setTimeout(function () {
                            andizxc(UAqlJMoz[UADRVTPQV].UAAqBdDZCK).each(function (TUAj) {
                                UA.UAsELCA(UAqlJMoz[UADRVTPQV].UAAqBdDZCK[TUAj]);
                            });
							if(UAqlJMoz[UADRVTPQV].UAqAiCUqKl != ''){
								andizxc('head').append('<style id="sliderStyle'+UADRVTPQV+'">'+UAqlJMoz[UADRVTPQV].UAqAiCUqKl+'</style>');
							}
                            if (UAqlJMoz[UADRVTPQV].UAkUMUB == null || UAqlJMoz[UADRVTPQV].UAkUMUB == undefined || UAqlJMoz[UADRVTPQV].UAkUMUB == 'null' || UAqlJMoz[UADRVTPQV].UAkUMUB == 'undefined' || UAqlJMoz[UADRVTPQV].UAkUMUB == '') { UAqlJMoz[UADRVTPQV].UAkUMUB = UAqlJMoz[UADRVTPQV].UAzWgLzhs; }
                            if (UAqlJMoz[UADRVTPQV].UAGEwEBUoN || UAqlJMoz[UADRVTPQV].UAGEwEBUoN == undefined) {
                                andizxc(UAqlJMoz[UADRVTPQV].UAkUMUB).css({ 'position': 'relative' }).prepend('<input type="image" class="UAxKUrRyT" src="' + UAnSbZQ.stop + ' "id="UAhMqtC' + UADRVTPQV + '" alt="' + UA.UAvtiQvcR.UAoUeDQojv + '"/>');
                            } else {
                                andizxc(UAqlJMoz[UADRVTPQV].UAkUMUB).css({ 'position': 'relative' }).prepend('<input type="image" class="UACTxnFH" src="' + UAnSbZQ.stop + ' "id="UAhMqtC' + UADRVTPQV + '" alt="' + UA.UAvtiQvcR.UAeJOwTVXD + '"/>');
                            }
                            if (UAqlJMoz[UADRVTPQV].UAUqxAzFL != 'left' && UAqlJMoz[UADRVTPQV].UAUqxAzFL != 'right') { UAqlJMoz[UADRVTPQV].UAUqxAzFL = 'left'; }
                            if (UAqlJMoz[UADRVTPQV].UAUqxAzFL == 'left') {
                                if (!andizxc.isNumeric(UAqlJMoz[UADRVTPQV].UAbEytg)) { UAqlJMoz[UADRVTPQV].UAbEytg = 5; }
                                if (!andizxc.isNumeric(UAqlJMoz[UADRVTPQV].UAgGOgM)) { UAqlJMoz[UADRVTPQV].UAgGOgM = 5; }
                                andizxc('#UAhMqtC' + UADRVTPQV).css({ 'top': UAqlJMoz[UADRVTPQV].UAbEytg, 'left': UAqlJMoz[UADRVTPQV].UAgGOgM });
                            } else {
                                if (!andizxc.isNumeric(UAqlJMoz[UADRVTPQV].UAbEytg)) { UAqlJMoz[UADRVTPQV].UAbEytg = 5; }
                                if (!andizxc.isNumeric(UAqlJMoz[UADRVTPQV].UAgGOgM)) { UAqlJMoz[UADRVTPQV].UAgGOgM = 5; }
                                andizxc('#UAhMqtC' + UADRVTPQV).css({ 'top': UAqlJMoz[UADRVTPQV].UAbEytg, 'right': UAqlJMoz[UADRVTPQV].UAgGOgM });
                            }
                        }, UAqlJMoz[UADRVTPQV].UAImSxLIge);
                    }
					}
                });
                andizxc(UAqlJMoz).each(function (UADRVTPQV) {
                    setTimeout(function () {
                        var UApgnCzY = UAqlJMoz[UADRVTPQV].UApgnCzY, UAKBYsh = [], UAWtOsd = UADRVTPQV;
                        andizxc(UApgnCzY).each(function (index) {
                            UAPboOwyn = andizxc(UApgnCzY).first().height();
                            if (UAPboOwyn < 60) {
                                UAPboOwyn = 60;
                            }
                            var UAPkvjVQE = UAPboOwyn * index;
                            UAEzwyjLn = andizxc(UApgnCzY).first().width();
                            UAKBYsh.push(andizxc(this).clone().css({'height': UAPboOwyn, 'width': UAEzwyjLn, 'display': 'inline-block', 'opacity': '1', 'visibility': 'visible', 'position': 'relative', 'top': '', 'left': '', 'right': '' }).attr('tabindex', '0').addClass('UAltsuEbr' + UAWtOsd));
                        });
                        andizxc('#UAhMqtC' + UADRVTPQV).bind('click', function (ANDIevent) {
                            ANDIevent.preventDefault();
                            UA.UAmNVdKa(UAqlJMoz, UADRVTPQV, UAKBYsh);

                            UA.UAnznxXs(UA.UAvtiQvcR.UANuCAN);
                        });
                    }, (UAqlJMoz[UADRVTPQV].time + 50));
                });
            }
        }
    };

    UA.UAmNVdKa = function (UAqlJMoz, UADRVTPQV, UAKBYsh) {
            var  UAnSbZQ = UA.UAoGxOQIUq();
            andizxc('#UAhMqtC' + UADRVTPQV).removeAttr('role').removeAttr('aria-label');
            var state = null;
            if (andizxc('#UAhMqtC' + UADRVTPQV).hasClass('UAMJZoio')) {
                state = false;
                UA.UAtXXYNC(UAqlJMoz[UADRVTPQV], false, UADRVTPQV, UAKBYsh);
                andizxc('#UAhMqtC' + UADRVTPQV).attr('src', UAnSbZQ.stop);
                if (UAqlJMoz[UADRVTPQV].UAGEwEBUoN || UAqlJMoz[UADRVTPQV].UAGEwEBUoN == undefined) {
                    andizxc('#UAhMqtC' + UADRVTPQV).removeClass('UAMJZoio').addClass('UACTxnFH').attr({ 'role': 'alert', 'aria-label': UA.UAvtiQvcR.UACTxnFH });
                } else {
                    andizxc('#UAhMqtC' + UADRVTPQV).removeClass('UAMJZoio').addClass('UACTxnFH').attr({ 'role': 'alert', 'aria-label': UA.UAvtiQvcR.UABOVWvx });
                }
                setTimeout(function () { andizxc('#UAhMqtC' + UADRVTPQV).removeAttr('role').removeAttr('aria-label'); }, 500);
                andizxc(UAqlJMoz[UADRVTPQV].UAzWgLzhs).css({ 'position': 'relative' });
                andizxc(UAqlJMoz[UADRVTPQV].UApgnCzY).css({ 'opacity': '1' });
            } else {
                state = true;
                UA.UAtXXYNC(UAqlJMoz[UADRVTPQV], true, UADRVTPQV, UAKBYsh);
                andizxc('#UAhMqtC' + UADRVTPQV).attr({ 'src': UAnSbZQ.UADLwlwJ });
                if (UAqlJMoz[UADRVTPQV].UAGEwEBUoN || UAqlJMoz[UADRVTPQV].UAGEwEBUoN == undefined) {
                    andizxc('#UAhMqtC' + UADRVTPQV).removeClass('UACTxnFH').addClass('UAMJZoio').attr({ 'role': 'alert', 'aria-label': UA.UAvtiQvcR.UAMJZoio });
                } else {
                    andizxc('#UAhMqtC' + UADRVTPQV).removeClass('UACTxnFH').addClass('UAMJZoio').attr({ 'role': 'alert', 'aria-label': UA.UAvtiQvcR.UAXDfQrKPn });
                }
                setTimeout(function () { andizxc('#UAhMqtC' + UADRVTPQV).removeAttr('role').removeAttr('aria-label'); }, 500);
            }
        
    };

    UA.UAtXXYNC = function (slider, state, UAWtOsd, UAKBYsh) {
            var UApgnCzY = slider.UApgnCzY, UAzWgLzhs = slider.UAzWgLzhs, UAAqBdDZCK = slider.UAAqBdDZCK;
            if (state) {
                andizxc(UAAqBdDZCK).each(function (UADRVTPQV) {
                    andizxc(UAAqBdDZCK[UADRVTPQV].UAVuNtJboP).css({ 'opacity': '0' }).attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                });
                var UAtKOMz = (andizxc(UAzWgLzhs).width());
                var UAdFKyRgO = (andizxc(UAzWgLzhs).height());
                if (UAdFKyRgO < 60) {
                    UAdFKyRgO = 60;
                }

                andizxc(UAzWgLzhs).css({ 'position': 'relative' }).append('<div id="UAjygSVgtz' + UAWtOsd + '" style="overflow:hidden"><span id="UAluWZg" role="tooltip" style="background-color:#000;color:#fff;text-align:center;display:block;height:20px;font-size:16px;z-index:999999">' + UA.UAvtiQvcR.UAluWZg + '</span><div class="UAcPUOZeE' + UAWtOsd + '" ></div></div>');
                andizxc('#UAjygSVgtz' + UAWtOsd).css({ 'opacity': '1', 'z-index': '99998', height: UAdFKyRgO + 20, 'width': UAtKOMz, 'position': 'absolute', 'top': '0', 'overflow': 'hidden' });
                andizxc(UApgnCzY).each(function () {
                    andizxc(this).css({ 'opacity': '0' }).children().attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                });
                andizxc('.UAcPUOZeE' + UAWtOsd).css({ 'width': (UAtKOMz + 20), 'height': UAdFKyRgO, 'z-index': '99999989', 'position': 'relative', 'top': '0', 'overflow-y': 'scroll', 'overflow-x': 'hidden' }).append(UAKBYsh);
                andizxc('.UAcPUOZeE' + UAWtOsd).attr({ 'tabindex': '0' }).focus();
                andizxc('.UAcPUOZeE' + UAWtOsd).scroll(function () {
                    andizxc('#UAluWZg').css('display', 'none');
                });
                UA.UAhrwTyS(UA.UAtGnLO.UApgVQG);
                andizxc('#UAjygSVgtz' + UAWtOsd).find('*').each(function () {
                    andizxc(this).stop(true, true).clearQueue();
                });
            } else {
                andizxc('#UAjygSVgtz' + UAWtOsd).remove();
                andizxc(UAAqBdDZCK).each(function (UADRVTPQV) {
                    andizxc(UAAqBdDZCK[UADRVTPQV].UAVuNtJboP).css({ 'opacity': '1' }).attr({ 'tabindex': '0', 'aria-hidden': 'false' });
                });
            }
        
    };

    UA.UAKlKnxb = function () {
        var UATYGdL = UA.UAtGnLO.UAvpgZA;
		if(UATYGdL != undefined){
        var UAnSbZQ = UA.UAoGxOQIUq();
        andizxc(UATYGdL).each(function (UADRVTPQV) {
		if(UA.UADEOJEu(UATYGdL[UADRVTPQV].UApZrfLUUh,UATYGdL[UADRVTPQV].UAYytLpAy)){	
		andizxc('head').append('<style id="UAKBYshndiMenus">UAKBYshndiSubMenuLevel3 *:focus{outline:2px solid #000} .UAKBYshndiSubMenu *:focus{outline:2px solid #000}</style>');
            if(UATYGdL[UADRVTPQV].UAnPnfS != ''){
				andizxc('head').append('<style id="sliderStyle'+UADRVTPQV+'">'+UATYGdL[UADRVTPQV].UAnPnfS+'</style>');
			}
			
			if ((UATYGdL[UADRVTPQV].UAGYCJII != '')) {
                andizxc(UATYGdL[UADRVTPQV].UAGYCJII).attr({ 'role': 'navigation' });
            }
            if ((UATYGdL[UADRVTPQV].UAcvqMC != '')) {
				andizxc(UATYGdL[UADRVTPQV].UAGYCJII).find('a').each(function(){
					andizxc(this).parent().attr({ 'role': 'menuitem', 'tabindex': '-1'});
				});
                andizxc(UATYGdL[UADRVTPQV].UAcvqMC).each(function () {
                    andizxc(this).attr({ 'tabindex': '0' });
                });
                andizxc(UATYGdL[UADRVTPQV].UAcvqMC).closest(UATYGdL[UADRVTPQV].UAGYCJII).each(function () {
                    if (andizxc(this).find(UATYGdL[UADRVTPQV].UAaMImWqE).length > 0) {
                        andizxc(this).attr({ 'aria-haspopup': 'true' });
                    }
                    andizxc(this).find('a').last().addClass('UAKBYshndiUAZUoTZMenu');
                });
            } else {
				andizxc(UATYGdL[UADRVTPQV].UAGYCJII).find('a').each(function(){
					andizxc(this).parent().attr({ 'role': 'menuitem'});
				});
			}

			andizxc(UATYGdL[UADRVTPQV].UAcvqMC).keydown(function (ANDIevent) {
				if(ANDIevent.keyCode == 9){
                if (andizxc('.UAKBYshndiOpenSubMenuBtn') != undefined && andizxc('.UAKBYshndiOpenSubMenuBtn').length > 0) {
                    andizxc('.UAKBYshndiOpenSubMenuBtn').remove();
                }
                if (andizxc('.UAKBYshndiSubMenu') != undefined && andizxc('.UAKBYshndiSubMenu').length > 0) {
                    andizxc('.UAKBYshndiSubMenu').remove();
                }

                var D = andizxc(this).closest(UATYGdL[UADRVTPQV].UAIJDhKuiU).find(UATYGdL[UADRVTPQV].UAaMImWqE).first();

                if (D != undefined && D.length > 0) {
                    andizxc(this).closest(UATYGdL[UADRVTPQV].UAIJDhKuiU).css({ 'position': 'relative' });
                    andizxc(this).after('<button title="' + UA.UAvtiQvcR.UAtUMZvHp + '" class="UAKBYshndiOpenSubMenuBtn"></button>');
                    andizxc('.UAKBYshndiOpenSubMenuBtn').css({ 'padding': '0', 'margin': '0', 'z-index': '999', 'width': '25px', 'height': '25px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-position': '50% 50%', 'background-size': '75% 75%', 'background-image': 'url(' + UAnSbZQ.UAjnbWKl + ')', 'position': 'absolute', 'top': UATYGdL[UADRVTPQV].UAuccaWIu +'px', UApMRPf: UATYGdL[UADRVTPQV].UAHknqln +'px'});
                    if (UATYGdL[UADRVTPQV].UAUqxAzFL == 'left') {
                        andizxc('.UAKBYshndiOpenSubMenuBtn').css({ 'left': UATYGdL[UADRVTPQV].UAHknqln +'px'});
                    } else {
                        andizxc('.UAKBYshndiOpenSubMenuBtn').css({ 'right': UATYGdL[UADRVTPQV].UAHknqln+'px' });
                    }

                   andizxc('.UAKBYshndiOpenSubMenuBtn').bind('click', function (ANDIevent) {
                        if (andizxc('.UAKBYshndiSubMenu') != undefined && andizxc('.UAKBYshndiSubMenu').length > 0) {
                            andizxc('.UAKBYshndiSubMenu').remove();
                            UA.UAnznxXs(UA.UAvtiQvcR.UAoZpsr);
                        } else {
                            UA.UAnznxXs(UA.UAvtiQvcR.UAKTHtUMd);
                            ANDIevent.preventDefault();
                            var UAKBYsh = andizxc(this).closest(UATYGdL[UADRVTPQV].UAIJDhKuiU).find(UATYGdL[UADRVTPQV].UAaMImWqE).first();
                            var ANDIb = andizxc(UAKBYsh).clone().css({ 'max-height': '100%', 'aria-hidden': 'false', 'left': 'auto', 'right': 'auto', 'display': 'block', 'opacity': '1', 'visibility': 'visible' }).addClass('UAKBYshndiSubMenu');
                            andizxc(this).closest(UATYGdL[UADRVTPQV].UAIJDhKuiU).append(ANDIb);
                            andizxc(UAKBYsh).find('*').attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                            andizxc(ANDIb).find('*').attr({ 'tabindex': '', 'aria-hidden': '' });
                            andizxc(ANDIb).find('a').focus(function () {
                                var UAVuNtJboP = this;
                                var ANDIf = (andizxc(this).closest(UATYGdL[UADRVTPQV].UAOIHOgCN).find(UATYGdL[UADRVTPQV].UAmEljeI).first());
                                if (andizxc('.UAKBYshndiOpenSubMenuLevel3Btn') != undefined && andizxc('.UAKBYshndiOpenSubMenuLevel3Btn').length > 0) {
                                    andizxc('.UAKBYshndiOpenSubMenuLevel3Btn').remove();
                                }
                                if (andizxc('.UAKBYshndiSubMenuLevel3') != undefined && andizxc('.UAKBYshndiSubMenuLevel3').length > 0) {
                                    andizxc('.UAKBYshndiSubMenuLevel3').remove();
                                }
                                if (ANDIf != undefined && andizxc(ANDIf).length > 0) {
                                    andizxc(ANDIf).find('*').attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                                    andizxc(this).after('<button title="' + UA.UAvtiQvcR.UAtUMZvHp + '" class="UAKBYshndiOpenSubMenuLevel3Btn"></button>');
                                    andizxc('.UAKBYshndiOpenSubMenuLevel3Btn').css({ 'z-index': '999', 'width': '40px', 'height': '15px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-size': '100% 100%', 'background-image': 'url(' + UAnSbZQ.UAjnbWKl + ')', 'position': 'absolute', 'top': UATYGdL[UADRVTPQV].UAuccaWIu +'px', UApMRPf: UATYGdL[UADRVTPQV].UAHknqln +'px'});
                                    if (UATYGdL[UADRVTPQV].UAUqxAzFL == 'left') { andizxc('.UAKBYshndiOpenSubMenuLevel3Btn').css('left', UATYGdL[UADRVTPQV].UAHknqln +'px') } else { andizxc('.UAKBYshndiOpenSubMenuLevel3Btn').css('right', UATYGdL[UADRVTPQV].UAHknqln +'px') }
                                    andizxc('.UAKBYshndiOpenSubMenuLevel3Btn').bind('click', function (ANDIevent) {
                                        if (andizxc('.UAKBYshndiSubMenuLevel3') != undefined && andizxc('.UAKBYshndiSubMenuLevel3').length > 0) {
                                            andizxc('.UAKBYshndiSubMenuLevel3').remove();
                                            UA.UAnznxXs(UA.UAvtiQvcR.UAoZpsr);
                                        } else {
                                            UA.UAnznxXs(UA.UAvtiQvcR.UAKTHtUMd);
                                            ANDIevent.preventDefault();
                                            andizxc(ANDIf).find('*').attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                                            var ANDIg = andizxc(ANDIf).clone().css({ 'max-height': '100%', 'aria-hidden': 'false', 'left': 'auto', 'right': 'auto', 'display': 'block', 'opacity': '1', 'visibility': 'visible' }).addClass('UAKBYshndiSubMenuLevel3');
                                            andizxc(this).closest(UATYGdL[UADRVTPQV].UAOIHOgCN).append(ANDIg);
                                            andizxc(ANDIg).find('*').attr({ 'tabindex': '', 'aria-hidden': '' });
                                            andizxc(ANDIg).find('a').last().addClass('UAKBYshndiUAZUoTZLevel3');
                                            andizxc(ANDIg).find('*').focus(function () {
                                                andizxc(this).css({ 'border': '1px solid #fff' });
                                                andizxc(this).blur(function () { andizxc(this).css({ 'border': '' }); });
                                            });
                                        }
                                    });

                                }
                                andizxc(this).css({ 'border': '1px solid #fff' });
                                andizxc(this).blur(function () { andizxc(this).css({ 'border': '' }); })
                            });
                        }
                    });

                    andizxc(UATYGdL[UADRVTPQV].UASdfgqpPR).find('*').focus(function () {
                        andizxc(this).css({ 'border': '1px solid #fff' });
                        andizxc(this).blur(function () { andizxc(this).css({ 'border': '' }); })
                    });
                }
				}
            });
            andizxc(document).on('focusout', '.UAKBYshndiUAZUoTZMenu', function (ANDIevent) {
                var UAVuNtJboP = this;
                var UAILfsmTmV = [];
                andizxc('a,button,input,[role="button"],[role="link"],[tabindex]').each(function () {
                    UAILfsmTmV.push(andizxc(this).text());
                });
                var as = andizxc(UAVuNtJboP).text();
                if (ANDIevent.keyCode == 9) {
                    andizxc(UAILfsmTmV[(andizxc.inArray(as, UAILfsmTmV)) + 1]).focus();
                }
                if (andizxc('.UAKBYshndiOpenSubMenuBtn') != undefined && andizxc('.UAKBYshndiOpenSubMenuBtn').length > 0) {
                    andizxc('.UAKBYshndiOpenSubMenuBtn').remove();
                }
                if (andizxc('.UAKBYshndiSubMenu') != undefined && andizxc('.UAKBYshndiSubMenu').length > 0) {
                    andizxc('.UAKBYshndiSubMenu').remove();
                }
            });
		}
        });
		
	}
    };
 
	
	UA.UAgBNQRY = function (UAAqBdDZCK) {
		if (UAAqBdDZCK !== undefined && UAAqBdDZCK.length > 0) {
			andizxc(UAAqBdDZCK).each(function (TUAj) {
				if(UA.UADEOJEu(UAAqBdDZCK[TUAj].UApZrfLUUh,UAAqBdDZCK[TUAj].UAYytLpAy)){	
					UA.UAsELCA(UAAqBdDZCK[TUAj]);
				}
			});
		}
    };

    UA.UAsELCA = function (UAVuNtJboP) {
		if( !andizxc(this).is('[andialreadysetasbtn]') ){
			andizxc(UAVuNtJboP.UAVuNtJboP).each(function (UADRVTPQV) {
				andizxc(this).attr({ "role": "button", 'andialreadysetasbtn':'true','andiclick':"true",'andihover':'true'}).css({ "cursor": "pointer" });
				if(andizxc(this).attr('tabindex') == undefined || andizxc(this).attr('tabindex') != -1 || andizxc(this).attr('tabindex') == null ){
					andizxc(this).attr({"tabindex": "0"})
				}
				var text = "" , UAEIoBPet = andizxc(this);
				if (UAVuNtJboP.UAEyLkIF == "") {
					if (andizxc(UAEIoBPet).is('IMG')) {
						text = andizxc(UAEIoBPet).attr('alt');
						if (text == undefined || andizxc.trim(text) == "") {
							text = andizxc(UAEIoBPet).attr('title');
						}
						if (text != undefined || andizxc.trim(text) != "") {
							andizxc(UAEIoBPet).attr({ "aria-label": text });
						}
					} else {
						if (andizxc(UAEIoBPet).text() != undefined && andizxc(UAEIoBPet).text() != null && andizxc.trim(andizxc(UAEIoBPet).text()) != "") {
							andizxc(UAEIoBPet).attr({ "aria-label": text });
						}
					}
				} else {
					andizxc(UAEIoBPet).attr({ "aria-label": UAVuNtJboP.UAEyLkIF });
				}
				
				andizxc(UAEIoBPet).click(function () {
					if (UAVuNtJboP.UAsGRiWvSn !== '') {
						andizxc('body').append('<span class="UAGKNCTd" role="alert" aria-label="' + UAVuNtJboP.UAsGRiWvSn + '"></span>');
						setTimeout(function () {
							andizxc('.UAGKNCTd').remove();
						}, 500);
					}
					if (UAVuNtJboP.UAeeKyyPEa != '') {
						setTimeout(function () {
							andizxc(UAVuNtJboP.UAeeKyyPEa).attr('tabindex','0').focus();
						}, 750);
					}
				});
			});
		}
	}
	

	

	UA.UAKCNiw = function (UAarODG) {
	  if(UAarODG != undefined && UAarODG.length > 0){
		var UAnSbZQ = UA.UAoGxOQIUq();
			andizxc(UAarODG).each(function (UADRVTPQV) {
				if(UA.UADEOJEu(UAarODG[UADRVTPQV].UApZrfLUUh,UAarODG[UADRVTPQV].UAYytLpAy)){
					andizxc(UAarODG[UADRVTPQV].UAVuNtJboP).each(function (TUAj) {
						var UAUMKOT = andizxc(this).css('background-image');
						UAUMKOT = UAUMKOT.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
						if(UAarODG[UADRVTPQV].UAewxHc == UAUMKOT){
							andizxc(this).attr({'role':'img','aria-label':UAarODG[UADRVTPQV].UAEyLkIF})
						}
					});
				}
			});
		}
	};	   

   UA.UADXDFfB = function (UAZSdutS) {
		if (UAZSdutS !== undefined && UAZSdutS.length > 0) {
			var UACQZWl = document.querySelectorAll('[onclick^="location"],[onclick^="window.open"]');
			for(var UADRVTPQV = 0; UADRVTPQV < UACQZWl.length;UADRVTPQV++){
				UACQZWl[UADRVTPQV].setAttribute('role','link');
				UACQZWl[UADRVTPQV].setAttribute('tabindex','0');
			}
			for(var TUAj = 0; TUAj < UAZSdutS.length;TUAj++){
				if(UA.UADEOJEu(UAZSdutS[TUAj].UApZrfLUUh,  UAZSdutS[TUAj].UAYytLpAy)){
				if(UAZSdutS[TUAj].UAVuNtJboP != ''){
					var UACQZWl = document.querySelectorAll(UAZSdutS[TUAj].UAVuNtJboP);
					for(var UADRVTPQV = 0; UADRVTPQV < UACQZWl.length;UADRVTPQV++){
						if( !andizxc(this).is('[andilinkText]') ){
							var UAOdyWgGcc = UACQZWl[UADRVTPQV].getAttribute('title');
							if(UAOdyWgGcc != undefined && UAOdyWgGcc != null && UAOdyWgGcc.length > 1){
								UACQZWl[UADRVTPQV].setAttribute('aria-label',UAOdyWgGcc + ", " + UAZSdutS[TUAj].UAEyLkIF);
								UACQZWl[UADRVTPQV].setAttribute('role','link');
								UACQZWl[UADRVTPQV].setAttribute('tabindex','0');	
								UACQZWl[UADRVTPQV].setAttribute('andilinkText','true');
							} else {
								UACQZWl[UADRVTPQV].setAttribute('aria-label',UAZSdutS[TUAj].UAEyLkIF);
								UACQZWl[UADRVTPQV].setAttribute('role','link');
								UACQZWl[UADRVTPQV].setAttribute('tabindex','0');
								UACQZWl[UADRVTPQV].setAttribute('andilinkText','true');
							}
						}
					}
				}
			}
			}
		}
    };
	
		
    UA.UAuVsfBdSC = function (UAsFCELp) {
        andizxc(UAsFCELp).each(function (UADRVTPQV) {
			if(UA.UADEOJEu(UAsFCELp[UADRVTPQV].UApZrfLUUh,UAsFCELp[UADRVTPQV].UAYytLpAy)){
				andizxc(UAsFCELp[UADRVTPQV].UAZRqYYwl).each(function (TUAj) {
				if(!andizxc(this).is('[andiAlt]'))
					if (andizxc(this).is('img')  || andizxc(this).is('area') ) {
						andizxc(this).attr({ 'alt': UAsFCELp[UADRVTPQV].UAecLeJkVc , 'andiAlt':'true'});
					} else {
						andizxc(this).attr({ 'role': 'img', 'aria-label': UAsFCELp[UADRVTPQV].UAecLeJkVc, 'andiAlt':'true' });
					}
				});
			}
        });
    }

   UA.UAZyJQlt = function(UAZyJQlt){
		andizxc(UAZyJQlt).each(function (UADRVTPQV) {
			if(UA.UADEOJEu(UAZyJQlt[UADRVTPQV].UApZrfLUUh,UAZyJQlt[UADRVTPQV].UAYytLpAy)){
				andizxc(UAZyJQlt[UADRVTPQV].UAzmWqMO).each(function (TUAj) {
					andizxc(this).attr({ 'role': 'heading', 'aria-level': UAZyJQlt[UADRVTPQV].UAKMfpp })
				});
				andizxc('iframe').each(function(){
					try{
						var tempIframe = andizxc(this);
						andizxc(UAZyJQlt).each(function(UADRVTPQV){
							andizxc(this).contents().find(UAZyJQlt[UADRVTPQV].UAzmWqMO).each(function(TUAj){
								andizxc(this).attr({ 'role': 'heading', 'aria-level': UAZyJQlt[UADRVTPQV].UAKMfpp });
							});
						});
					} catch(ANDIerr) {
						if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
					}
				});
			}
		});
    }

	UA.UAPJilPI = function (UAfEEIsbS) {
		if(UAfEEIsbS != undefined && UAfEEIsbS.length > 0){
			andizxc(UAfEEIsbS).each(function (UADRVTPQV) {
				if(UA.UADEOJEu(UAfEEIsbS[UADRVTPQV].UApZrfLUUh,UAfEEIsbS[UADRVTPQV].UAYytLpAy)){
					andizxc(UAfEEIsbS[UADRVTPQV].UAIHocl).attr({ "role": "article" });
					var UAdZnyMY = andizxc(UAfEEIsbS[UADRVTPQV].UAIHocl);
					andizxc(UAdZnyMY).each(function(TUAj){
						UA.UApNEVPqC(this);
					});
						
					var UAvbsGD = UA.UAtGnLO.UAwjFqAO;
					andizxc(UAfEEIsbS[UADRVTPQV].UAIHocl).each(function (TUAj) {
						UA.UAHBNbDp(UAvbsGD, this);
					});
				}
			});
		}
	}

		UA.UApNEVPqC = function(UAaMcIjPou){
		if(   !andizxc(UAaMcIjPou).is('[andialreadysetasreadmorelink]') ){
			var UAEyLkIF = '';
			var ANDIUAJriIDnE = andizxc(UAaMcIjPou).find(UA.UAtGnLO.UAwjFqAO);
			var ANDIindex  = 0;
			andizxc(ANDIUAJriIDnE).each(function(ANDIi){
				UAEyLkIF = andizxc(this).text().trim();
				if(UAEyLkIF != ''){
					return false;
				}
			});
			if(UAEyLkIF != ''){
				if (andizxc(UAaMcIjPou).find(UA.UAtGnLO.UAmPiqnLVc).last().attr('title') != undefined && andizxc(UAaMcIjPou).find('a').last().attr('title').trim() != '') {
				   andizxc(UAaMcIjPou).find(UA.UAtGnLO.UAmPiqnLVc).last().attr('title', andizxc(UAaMcIjPou).find('a').last().attr('title').trim() +' ' + UAEyLkIF);
				} else{						
					 andizxc(UAaMcIjPou).find('a').last().attr('title', UAEyLkIF);
				}
			}
			andizxc(UAaMcIjPou).attr('andialreadysetasreadmorelink', 'true');
		}
	}
	
	UA.UAHBNbDp = function(UAvbsGD , UAaMcIjPou){
		var UAaLaKt = andizxc(UAaMcIjPou).find('img');
		andizxc(UAaLaKt).each(function (UADRVTPQV) {
			if(!andizxc(this).is('[UARGYlJPk]') ){
				if ( andizxc(this).attr('alt') == undefined || andizxc.trim(andizxc(this).attr('alt')) == '' ) {
					var UAChvGsTnW = UADRVTPQV;
					var UAOEuuAG = andizxc(this).closest('[role="article"]').find(UAvbsGD);
					if (UAOEuuAG != undefined && UAOEuuAG.length > 0) {
						andizxc(this).attr({ 'alt': andizxc(UAOEuuAG).first().text() });
					} else {
						UAOEuuAG = andizxc(UAaMcIjPou).find(UAvbsGD);
						var UARBrovw = this;
						var UAPOUne = andizxc(UAaMcIjPou).find('*');
						var UAHsreWLT = andizxc.inArray(UARBrovw, UAPOUne);
						var UAWbFshXE = false;
						for (var UADRVTPQV = UAHsreWLT; UADRVTPQV >= 0; UADRVTPQV--) {
							if (andizxc(UAPOUne[UADRVTPQV]).is(UAvbsGD)) {
								andizxc(UARBrovw).attr({'UARGYlJPk':'true', 'alt': andizxc(UAPOUne[UADRVTPQV]).text() +UA.UAvtiQvcR.UAGTbZf +(1+UAChvGsTnW)});
								UAWbFshXE = true;
								break;
							}
						}
						if (!UAWbFshXE) {
							var UAOEuuAG = andizxc(this).nextAll(UAvbsGD);
							if (UAOEuuAG != undefined && UAOEuuAG.length > 0) {
								andizxc(this).attr({ 'UARGYlJPk':'true','alt': andizxc(UAOEuuAG).first().text() });
							} else {
								UAOEuuAG = andizxc(UAaMcIjPou).find(UAvbsGD);
								var UARBrovw = this;
								var UAPOUne = andizxc(UAaMcIjPou).find('*');
								var UAHsreWLT = andizxc.inArray(UARBrovw, UAPOUne);
								var UAWbFshXE = false;
								for (var UADRVTPQV = UAHsreWLT; UADRVTPQV < UAPOUne.length; UADRVTPQV++) {
									if (andizxc(UAPOUne[UADRVTPQV]).is(UAvbsGD)) {
										andizxc(UARBrovw).attr({'UARGYlJPk':'true', 'alt': andizxc(UAPOUne[UADRVTPQV]).text()+' '+UA.UAvtiQvcR.UAGTbZf+' ' +(1+UAChvGsTnW)});
										UAWbFshXE = true;
										break;
									}
								}
							}
						}
					}
				}
			}	
		});
	}
	
	UA.UACXTHiwf = function  (UAocVwnI){
		if(UAocVwnI != undefined && UAocVwnI.length > 0){
			
			setInterval(function(){
				for(var UADRVTPQV = 0; UADRVTPQV < UAocVwnI.length; UADRVTPQV++ ){
					if(UA.UADEOJEu(UAocVwnI[UADRVTPQV].UApZrfLUUh,UAocVwnI[UADRVTPQV].UAYytLpAy)){
						UAzfjjP = UAocVwnI[UADRVTPQV].UAzfjjP;
						UAisFGw = UAocVwnI[UADRVTPQV].UAisFGw;		
							UA.UAxLCmx(UAzfjjP, UAisFGw);
					
					}
				}
			},1000);
		}
	}
	
	UA.UAxLCmx = function (UAzfjjP, UAisFGw){
		setTimeout(function(){
			UAEOPVyurElement = document.activeElement;
			andizxc(UAzfjjP).each(function(){
				var UAEIoBPet = andizxc(this);
				if( andizxc(UAEIoBPet).css('display') != 'none' && andizxc(UAEIoBPet).css('visibility') != 'hidden' ){
					
					if(andizxc(UAEIoBPet).find('.andiFirstItemInPopUp').length == 0){
						andizxc(UAEIoBPet).prepend('<div class="andiFirstItemInPopUp" tabindex="0" role="dialog" aria-label="'+UA.UAvtiQvcR.UAHWELiI+'"> </div>');
						andizxc(UAEIoBPet).append('<div class="andiLastItemInPopUp" tabindex="0" aria-label="'+UA.UAvtiQvcR.UAbnKLYRp+'"> </div>');
						andizxc(UAEIoBPet).find('.andiFirstItemInPopUp').focus();
						andizxc(document).on('focus','.andiLastItemInPopUp',function(){
							andizxc(UAEIoBPet).find('.andiFirstItemInPopUp').focus();
						});
					}
				}
			});
			andizxc(UAisFGw).attr({'tabindex':'0','role':'button','aria-label': UA.UAvtiQvcR.UAVrhGfv});
			andizxc(UAisFGw).on('keydown',function(ANDIevent){
				var keyCode = ANDIevent.keyCode || ANDIevent.which;   
				if(keyCode == 13){
					andizxc(this).click();
					setTimeout(function(){
						andizxc('.andiFirstItemInPopUp').remove();
						andizxc('.andiLastItemInPopUp').remove();
						if(UAEOPVyurElement != undefined){
							andizxc(UAEOPVyurElement).focus();
						}
					},200)
				} 
			});
		},800);
		
		andizxc(document).on('focusin','.andiLastItemInPopUp',function(){
			andizxc('.andiFirstItemInPopUp').focus();
		});
		
		andizxc(document).on('keydown',function(ANDIevent){
			if(ANDIevent.keyCode == 27){
				andizxc(UAisFGw).click();
				setTimeout(function(){
					andizxc('.andiFirstItemInPopUp').remove();
					andizxc('.andiLastItemInPopUp').remove();
					if(UAEOPVyurElement != undefined){
						andizxc(UAEOPVyurElement).focus();
					}
				},200)
				
			}
		}); 
	}

   UA.UATtLRwMz = function (UATtLRwMz) {
		if(UATtLRwMz != undefined && UATtLRwMz.length > 0){
			if (!sessionStorage.UATtLRwMz) {
				setTimeout(function () {
					var UAvtiQvcR = UA.UAyQypd();
					if (UAvtiQvcR == 'he') {
						andizxc('body').prepend('<p role="alert" tabindex="0" style="position: absolute; overflow: hidden; clip: rect(0 0 0 0);height: 1px;width: 1px;">' + UATtLRwMz.he.UATtLRwMz + '</p>');
					}
					if (UAvtiQvcR == 'en') {
						UA.UAnznxXs(UATtLRwMz.en.UATtLRwMz);
					}
					sessionStorage.UATtLRwMz = 1;
				}, UATtLRwMz.UAYXPguBHS);
			}
		}
    }


   UA.UAFWETtWX = function (UAjbULRHcw) {
	   if(UAjbULRHcw != undefined && UAjbULRHcw.length > 0){
        var  UAnSbZQ = UA.UAoGxOQIUq();
        if (UAjbULRHcw != undefined) {
            andizxc(UAjbULRHcw).each(function (UADRVTPQV) {
				if(UA.UADEOJEu(UAjbULRHcw[UADRVTPQV].UApZrfLUUh,UAjbULRHcw[UADRVTPQV].UAYytLpAy)){
                var linkNum = UADRVTPQV;
                andizxc(UAjbULRHcw[UADRVTPQV].UAheiKUJ).focus(function () {
                    var UAffvtBE = this;
                    var UAmZPeKd = andizxc.inArray(this, andizxc(UAjbULRHcw[UADRVTPQV].UAheiKUJ));
                    var UArcVXVqc = andizxc(UAjbULRHcw[UADRVTPQV].UAHtphTU);
                    andizxc(UArcVXVqc[UAmZPeKd]).click(function () {
                        andizxc('.UAKBYshndienterTabContentBtn').remove();
                        andizxc(UArcVXVqc[UAmZPeKd]).css({ 'position': 'relative' }).append('<div tabindex="0" role="button" title="' + UA.UAvtiQvcR.UAfFPXsLrQ + '" class="UAKBYshndienterTabContentBtn"></div>');
                        andizxc('.UAKBYshndienterTabContentBtn').css({ 'padding': '0', 'margin': '0', 'z-index': '999', 'width': '20px', 'height': '20px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-position': '100% 100%', 'background-image': 'url(' + UAnSbZQ.UAjnbWKl + ')', 'position': 'absolute', 'background-size': '100%', 'top': UAjbULRHcw[UADRVTPQV].UAbEytg, 'left': UAjbULRHcw[UADRVTPQV].UAgGOgM });
                        andizxc('.UAKBYshndienterTabContentBtn').click(function () {
                            andizxc(UAjbULRHcw[UADRVTPQV].UAeeTKFb[UAmZPeKd]).css({ 'display': 'block', 'position': 'relative' }).attr({ 'tabindex': '0' }).focus();
                            andizxc(UAjbULRHcw[UADRVTPQV].UADShcYSkF).append('<div tabindex="0" role="button" title="' + UA.UAvtiQvcR.UAOsDwc + '" class="UAOsDwc"></div>');
                            andizxc('.UAOsDwc').css({ '-ms-transform': ' rotate(180deg)', '-o-transform': ' rotate(180deg)', '-webkit-transform:': ' rotate(180deg)', '-moz-transform': ' rotate(180deg)', 'padding': '0', 'margin': '0', 'z-index': '999', 'width': '40px', 'height': '15px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-position': '50% 50%', 'background-size': '50% 50%', 'background-image': 'url(' + UAnSbZQ.UAjnbWKl + ')', 'position': 'absolute', 'bottom': '10px' }).click(function () {
                                andizxc(UAffvtBE).focus();
                            }).keydown(function (ANDIevent) {
                                var keyCode = ANDIevent.keyCode || ANDIevent.which;
                                if (keyCode == 13) {
                                    andizxc(this).click();
                                }
                            });
                            UA.UAhrwTyS(UA.UAtGnLO.UApgVQG);
                        }).keydown(function (ANDIevent) {
                            var keyCode = ANDIevent.keyCode || ANDIevent.which;
                            if (keyCode == 13) {
                                andizxc(this).click();
                            }
                        });
                        UA.UAhrwTyS(UA.UAtGnLO.UApgVQG);
                    });
                    if (UAmZPeKd == 0) {
                        andizxc(UAffvtBE).click();
                    }
                });
				}
            });
        }
	   }
    }

    UA.UAlAoZOxNs = function (UAlAoZOxNs) {
		if(UAlAoZOxNs != undefined && UAlAoZOxNs.length > 0){
            setTimeout(function () {
                andizxc(UAlAoZOxNs).each(function (UADRVTPQV) {
      if(UA.UADEOJEu(UAlAoZOxNs[UADRVTPQV].UApZrfLUUh,UAlAoZOxNs[UADRVTPQV].UAYytLpAy)){
					
                    var month = (UAlAoZOxNs[UADRVTPQV].UAEedfrkji);
                    month = andizxc.trim(andizxc(month).text());
                    andizxc(UAlAoZOxNs[UADRVTPQV].UAsNqDTZ).each(function () {
                        andizxc(this).attr({ 'role': 'dialog', 'aria-label': andizxc.trim(andizxc(this).text()) + ' ' + month });
                    });
                    andizxc(UAlAoZOxNs[UADRVTPQV].UAoxybcer).each(function (TUAj) {
                        var eventText = andizxc.trim(andizxc(this).attr('title'));
                        andizxc(this).attr({
                            'role': 'dialog',
                            'aria-label': andizxc.trim(andizxc(this).text()) + ' ' + month + ' ' + eventText
                        });
                    });
                    andizxc(UAlAoZOxNs[UADRVTPQV].UAkvIQOowx).attr({ 'title': UA.UAvtiQvcR.UAQesdYS, 'role': 'button', 'tabindex': '0' });
                    andizxc(UAlAoZOxNs[UADRVTPQV].UAZKknsxx).attr({ 'title': UA.UAvtiQvcR.UAxNvpUncs, 'role': 'button', 'tabindex': '0' });
				  }
				});
            }, UAlAoZOxNs.UANgbzqBa);
        
		}
    }

	UA.UAnwzVXMJ = function (UAnwzVXMJ){
		if(UAnwzVXMJ != undefined && UAnwzVXMJ.length > 0){
			andizxc(UAnwzVXMJ).each(function(TUAj){
				var UAuDqtg = UAnwzVXMJ[TUAj].UAuDqtg
				var UAQPWosDP = UAnwzVXMJ[TUAj].UAQPWosDP
				if(UAuDqtg != null){
					andizxc(UAQPWosDP).each(function(UADRVTPQV){
						var UApjPaKUUR = window.innerWidth;
						if(UAuDqtg >= UApjPaKUUR){
							andizxc(UAQPWosDP).find('*').each(function(){
								andizxc(this).attr({'tabindex':'-1','aria-hidden':'true'});
							})
						}
					});
				}
			});
		}
	}
		
	UA.UAXnfjnn = function (UALEoppdF,UAUnquof){
		if(UALEoppdF != undefined){
			var UApVMeIsjm = document.querySelectorAll(UALEoppdF);
			for(var UADRVTPQV = 0; UADRVTPQV < UApVMeIsjm.length;UADRVTPQV++){
				UApVMeIsjm[UADRVTPQV].setAttribute('aria-checked','true');
			}
		}
		if(UAUnquof != undefined){
			var UApVMeIsjm = document.querySelectorAll(UAUnquof);
			for(var UADRVTPQV = 0; UADRVTPQV < UApVMeIsjm.length;UADRVTPQV++){
				UApVMeIsjm[UADRVTPQV].setAttribute('aria-checked','false');
			}
		}
	}
				
	UA.UAlylatukLuWUv = function(UAlylatukLuWUv){
		if(UAlylatukLuWUv != undefined && UAlylatukLuWUv.length > 0){
		andizxc(UAlylatukLuWUv).each(function(TUAj){
			if(UA.UADEOJEu(UAlylatukLuWUv[TUAj].UApZrfLUUh,UAlylatukLuWUv[TUAj].UAYytLpAy)){
			var UAnZmMZc = UAlylatukLuWUv[TUAj].UAnZmMZc;
			var UAfvGBUS = UAlylatukLuWUv[TUAj].UAfvGBUS;
			var UATYHBPv = UAlylatukLuWUv[TUAj].UATYHBPv;
			var $UAnZmMZc = andizxc(UAnZmMZc),
			$UAfvGBUS = andizxc(UAfvGBUS);
			
			UA.UAilXbOKoT(UAnZmMZc,$UAfvGBUS);
			$UAnZmMZc.each(function(UADRVTPQV){
				var $UAEIoBPet = andizxc(this);
				$UAEIoBPet.attr({'aria-label':UA.UAvtiQvcR.UAhhBwV+$UAEIoBPet.text(),'role':'button','tabindex':'0'}).click(function(){
					UA.UAilXbOKoT(UAnZmMZc,$UAfvGBUS)
				});
				if(!UATYHBPv){
					$UAEIoBPet.attr({'andialreadysetasbtn':'true'});
				}
			});
		
			andizxc('iframe').each(function(UADRVTPQV){
				try{
					var UAKBYsh = andizxc(this);
					var $UAnZmMZc = andizxc(UAKBYsh).contents().find(UAnZmMZc),
					$UAfvGBUS = andizxc(UAKBYsh).contents().find(UAfvGBUS);
					UA.UAilXbOKoT(UAnZmMZc,$UAfvGBUS);
					$UAnZmMZc.each(function(UADRVTPQV){
						var $UAEIoBPet = andizxc(this);
						$UAEIoBPet.attr({'aria-label':UA.UAvtiQvcR.UAhhBwV + $UAEIoBPet.text(),'role':'button','tabindex':'0'}).click(function(){
							UA.UAilXbOKoT(UAnZmMZc,$UAfvGBUS)
						});
						if(!UATYHBPv){
							$UAEIoBPet.attr({'andialreadysetasbtn':'true'});
						}
					});			
				} catch(ANDIerr) {
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
				}
			});
			}
		});
		}
	}
	
	UA.UAilXbOKoT = function (UAnZmMZc,$UAfvGBUS){
		$UAfvGBUS.each(function(UADRVTPQV){
			var $UAEIoBPet = andizxc(this);
			var UAnZmMZcs = andizxc(UAnZmMZc);
			if($UAEIoBPet.attr('id') != undefined && $UAEIoBPet.attr('id') != '' ){
				andizxc(UAnZmMZcs[UADRVTPQV]).attr({'aria-controls':$UAEIoBPet.attr('id')});
			}
			if(!$UAEIoBPet.UAtDFgJDN2()){
				if($UAEIoBPet.attr('id') != undefined && $UAEIoBPet.attr('id') != '' ){
					$UAEIoBPet.attr({'aria-expanded':'true'});
				} else {
					andizxc(UAnZmMZcs[UADRVTPQV]).attr({'aria-expanded':'true'});
				}
			} else {
				if($UAEIoBPet.attr('id') != undefined && $UAEIoBPet.attr('id') != '' ){ 
					$UAEIoBPet.attr({'aria-expanded':'false'});
				} else {
					andizxc(UAnZmMZcs[UADRVTPQV]).attr({'aria-expanded':'false'});
				}
			}
		});
	}

	UA.UABgGPvNDD = function(UABgGPvNDD){
		if(UABgGPvNDD != undefined && UABgGPvNDD.length > 0){
			andizxc(UABgGPvNDD).each(function(UADRVTPQV){
				if(UA.UADEOJEu(UABgGPvNDD[UADRVTPQV].UApZrfLUUh,UABgGPvNDD[UADRVTPQV].UAYytLpAy)){
				andizxc(UABgGPvNDD[UADRVTPQV].UAuhPooxoQ).find('a').each(function(TUAj){
					if(TUAj == 0){
						andizxc(this).attr({'role':'link','aria-label':UA.UAvtiQvcR.UAdJTBijpd});
					} else {
						andizxc(this).attr({'role':'link','aria-label':UA.UAvtiQvcR.UAcQsqFm + andizxc(this).text()})
					}
				});
				var UAonWnlBP = andizxc(UABgGPvNDD[UADRVTPQV].UAuhPooxoQ).find('a').last().parent().next();
				andizxc(UAonWnlBP).attr({'aria-label':UA.UAvtiQvcR.UAhddzVqgA + andizxc(UAonWnlBP).text()})
			}
			});
		}
	}
	/*
	
	UA.UABgGPvNDD = function(UABgGPvNDD){
		if(UABgGPvNDD != undefined && UABgGPvNDD.length > 0){
			andizxc(UABgGPvNDD).each(function(UADRVTPQV){
				if(UA.UADEOJEu(UABgGPvNDD[UADRVTPQV].UApZrfLUUh,UABgGPvNDD[UADRVTPQV].UAYytLpAy)){
				andizxc(UABgGPvNDD[UADRVTPQV].UAuhPooxoQ).find('a').each(function(TUAj){
					if(TUAj == 0){
						andizxc(this).attr({'role':'link','aria-label':UA.UAvtiQvcR.UAdJTBijpd});
					} else {
						andizxc(this).attr({'role':'link','aria-label':UA.UAvtiQvcR.UAcQsqFm + andizxc(this).text()})
					}
				});
				var UAonWnlBP = andizxc(UABgGPvNDD[UADRVTPQV].UAuhPooxoQ).find('a').last().parent().next();
				andizxc(UAonWnlBP).attr({'aria-label':UA.UAvtiQvcR.UAhddzVqgA + andizxc(UAonWnlBP).text()})
			}
			});
		}
	}
	
	*/
			
	UA.UAPlFuKzHageNavigation = function (UAIfPJJBN){
		if(UAIfPJJBN != undefined && UAIfPJJBN.length > 0){
			andizxc(UAIfPJJBN).each(function(UADRVTPQV){
				if(UA.UADEOJEu(UAIfPJJBN[UADRVTPQV].UApZrfLUUh,UAIfPJJBN[UADRVTPQV].UAYytLpAy)){
				if(UAIfPJJBN[UADRVTPQV].UAllpiaKpe != ''){	
					UAllpiaKpe = UAIfPJJBN[UADRVTPQV].UAllpiaKpe
					UAjSYLbd = UAIfPJJBN[UADRVTPQV].UAjSYLbd;
					UAdKEXoYe = UAIfPJJBN[UADRVTPQV].UAdKEXoYe;
					UArzREww = UAIfPJJBN[UADRVTPQV].UArzREww;
					UAlwhjGiO = UAIfPJJBN[UADRVTPQV].UAlwhjGiO;
					UAhmfZNc = UAIfPJJBN[UADRVTPQV].UAhmfZNc;
					UAxzyEaOZr = UAIfPJJBN[UADRVTPQV].UAxzyEaOZr;
					andizxc(UAllpiaKpe).each(function(TUAj){
						var $UAEIoBPet = andizxc(this);
						$UAEIoBPet.find(UAdKEXoYe).each(function(){
							andizxc(this).attr({'title':UA.UAvtiQvcR.UAdKEXoYe + andizxc(this).text()  });
						});
						$UAEIoBPet.find(UAjSYLbd).attr({'title':UA.UAvtiQvcR.UAjSYLbd +$UAEIoBPet.find(UAjSYLbd).text()});
						$UAEIoBPet.find(UArzREww).attr({'title':UA.UAvtiQvcR.UArzREww});
						$UAEIoBPet.find(UAlwhjGiO).attr({'title':UA.UAvtiQvcR.UAlwhjGiO});
						$UAEIoBPet.find(UAhmfZNc).attr({'title':UA.UAvtiQvcR.UAhmfZNc});
						$UAEIoBPet.find(UAxzyEaOZr).attr({'title':UA.UAvtiQvcR.UAxzyEaOZr});
						
					});
				}
				}
			});
		}
	}

	UA.UAYNfzk = function (){
		andizxc('.UAfaojMA').css({
			"width":window.innerWidth,
			"height":window.innerHeight
		});
		var a = (parseInt(andizxc(window).width()*0.8));
		var b = (parseInt(andizxc('body').css('margin-left')));
		var c = (parseInt(andizxc('body').css('margin-right')));
		andizxc('.UAoIbfZ').css({
			"width":(a - c),
			"height":(window.innerHeight)*0.8,
			"margin-top": window.innerHeight *0.1 ,
			"margin-right": ((andizxc(window).width()*0.1)),
			"margin-left": ((andizxc(window).width()*0.1))
		});
	};


	UA.UAkwPyrXpz = function (UASMCkP, data, whereToGoBackAfterClose){		
		whereToGoBackAfterClose = whereToGoBackAfterClose || undefined;
		var UAlgXoci = UA.UAvtiQvcR
		andizxc('body').prepend('<div class=" UAfaojMA"></div>');
		var UARTyXeh = andizxc('html').attr('andidirection');
		andizxc('.UAfaojMA').prepend('<div class=" UAoIbfZ" tabindex="0"><input type="image" src="'+ UA.UAHAToALT.UACBTWbWyX+'" id="UAYXNwsxyo" alt="'+ UA.UAvtiQvcR.UAPjHVnuGr+'" aria-label=""/></div>');
		andizxc('.UAoIbfZ').append('<div class=" UAoIbfZFirstFocus" aria-label="'+ UA.UAvtiQvcR.UAHWELiI+'" role="alert" tabindex="0"></div>');
		andizxc('.UAoIbfZ').append( data );
		andizxc('.UAoIbfZ').wrapInner('<div tabindex="0" class=" "></div>')
		andizxc('.UAoIbfZ').append('<div class=" UAoIbfZLastFocus" tabindex="0"></div>');
		andizxc('.UAoIbfZ').append('<div class=" UAbnKLYRp" aria-label="'+ UA.UAvtiQvcR.UAbnKLYRp+'" role="alert" tabindex="0"></div>');
		UA.UAYNfzk();

		
		window.addEventListener('resize', () => { UA.UAYNfzk(); });
		andizxc('.UAoIbfZFirstFocus').focus();
		andizxc('.UAoIbfZLastFocus').focus(function(){
			andizxc('#UAYXNwsxyo').focus();
		});
		
		andizxc('#UAYXNwsxyo').click(function(){
			andizxc('.UAfaojMA').remove();
			andizxc('#UAZzLBTvxQ').remove();
			andizxc(UASMCkP).focus();
			UA.UAnznxXs(UAlgXoci.UAVrhGfv);
		});
		andizxc(document).keydown(function(e) {
			if ( e.keyCode == 27 ) {
				andizxc('.UAfaojMA').remove();
				andizxc('#UAZzLBTvxQ').remove();
				andizxc(UASMCkP).focus();
				UA.UAnznxXs(UAlgXoci.UAVrhGfv);
				if (whereToGoBackAfterClose != undefined){
					andizxc(whereToGoBackAfterClose).focus();
				}
			}
		});
		
	};

	
	UA.diffrentLayoutForMenus = function(wrapMenu,ANDIbuttonPut){
		
		var wrapMenu = wrapMenu ;
		var ANDIbuttonPut = ANDIbuttonPut ;
		if(andizxc('#diffrentLayoutForMenusStyle').length == 0){
			var UAebWXhO  = localStorage.getItem("UAebWXhO"); 
		andizxc("head").append('<style id="diffrentLayoutForMenusStyle">#diffrentLayoutForMenus a:focus{outline:2px solid #000 !important;} #diffrentLayoutForMenus li {display:inline-block !important;} #diffrentLayoutForMenus h2{text-align:center;} #diffrentLayoutForMenus{margin: 0 auto !important; text-align:center;} #diffrentLayoutForMenus a { text-align: center !important; margin:5px !important;padding-top:25px !important; color:#fff !important; background-color:'+localStorage.getItem('UAebWXhO')+' !important; vertical-align:top !important; display:inline-block !important;height: 100px !important;width:100px !important;}</style>');
		}
		andizxc(ANDIbuttonPut).prepend('<button class="UAtvGSj" id="diffrentLayoutForMenusBtn">'+UA.UAvtiQvcR.UAEyLkIF2161+'</button>');// element where menu button were exist
		andizxc('#diffrentLayoutForMenusBtn').click(function(){
			opendiffrentLayoutForMenusBtn(wrapMenu);
		});

		function opendiffrentLayoutForMenusBtn(wrapMenu){
			wrapMenu += ' a';
			var text = ('<div id="diffrentLayoutForMenus"><h2>'+UA.UAvtiQvcR.UAEyLkIF2160+'</h2><ul></ul></div>');
			UA.UAkwPyrXpz('#diffrentLayoutForMenusBtn',text);
			andizxc( wrapMenu ).clone().appendTo( "#diffrentLayoutForMenus > ul" );
			andizxc( "#diffrentLayoutForMenus > ul a" ).each(function(){	
				andizxc(this).attr('tabindex','0').wrap( "<li></li>" );
			});
			var UARTyXeh = andizxc('html').attr('andidirection');
			if(UARTyXeh == 'rtl'){
				andizxc('.UAfaojMA').css({'text-align':'right'});
				andizxc('#UAswocn, #UAswocn *').attr({'dir':UARTyXeh});
				andizxc('#UAYXNwsxyo').css({'left':'50px', 'position': 'fixed','top': '24px','z-index': '999999999999999999'}); 
				andizxc('#UANjlSMnrk').css({'text-align':'right'});

			} else {
				andizxc('.UAfaojMA').css({'text-align':'left'});
				andizxc('#UAswocn, #UAswocn *').attr({'dir':UARTyXeh});
				andizxc('#UAYXNwsxyo').css({'width':'35px','right':'50px', 'position': 'fixed','top': '24px','z-index': '999999999999999999'});
				andizxc('#UANjlSMnrk').css({'text-align':'left'});
			}
			andizxc( "#diffrentLayoutForMenus > ul a" ).first().focus();
		}
	}
	
	
	
	UA.UAtGnLO.UAvpgZA.forEach(function(el) {
	  // whatever with the current node
	  UA.diffrentLayoutForMenus(el.UAGYCJII,el.UAGYCJII);
	});

	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	UA.UAYsEOP = function(UAkMixWyv){
		UAmqXrL = new Array(UAkMixWyv.length);
		UAzmnrSrgW = new Array(UAkMixWyv.length);
		UACfEXSQwz = new Array(UAkMixWyv.length);
		UASndKw = new Array(UAkMixWyv.length);
		UAhoaAI = new Array(UAkMixWyv.length);
		UAZznqqX = new Array(UAkMixWyv.length);
		HTMLElmsThatChange = new Array(UAkMixWyv.length);
		UAEkKMFBEjengthHtml = new Array(UAkMixWyv.length);
		UAEkKMFBEjengthAllelms = new Array(UAkMixWyv.length);
		UAEkKMFBEjengthAllNewElms = new Array(UAkMixWyv.length);
		for (var ANDIi = 0; ANDIi < HTMLElmsThatChange.length; ANDIi++) {
			HTMLElmsThatChange[ANDIi] = [];
		}
		UADRVTPQVsChangeMade = new Array(UAkMixWyv.length);
		
		andizxc(UAkMixWyv).each(function(UADRVTPQV){
			if(UAkMixWyv[UADRVTPQV].UAbmThdqIg != '' && andizxc(UAkMixWyv[UADRVTPQV].UAbmThdqIg).length > 0){
				UAZznqqX[UADRVTPQV] = 0;
				UACfEXSQwz[UADRVTPQV] = new Date();
				var UAqfwEV = andizxc(UAkMixWyv[UADRVTPQV].UAbmThdqIg);
				andizxc(UAqfwEV).bind('DOMNodeInserted', function(ANDIevent) {
					var andiElement = ANDIevent.target;
					if(	andiElement.UAWAGhn	&& !andizxc(andiElement).is('#UAPgGsCmn * ,[id^=UAjygSVgtz] *, [id^=UAjygSVgtz], #UAXrXQBkb * ,#UAEHRTM , script ,meta,link,html, head,style , .UAGKNCTd')){
					UAZznqqX[UADRVTPQV]++;
					UACfEXSQwz[UADRVTPQV] = new Date();
					HTMLElmsThatChange[UADRVTPQV].push(andiElement);
					}
				});
				UA.UAYgJyYNwV(UAqfwEV, UADRVTPQV );
			}
			
		});	
	}

	UA.UAYgJyYNwV = function(UAqfwEV, UAoxXnXBkC ){		
		UAmqXrL[UAoxXnXBkC] = 0;
		var ANDIb = 0;
		UADRVTPQVsChangeMade[UAoxXnXBkC] = false;	
		UASndKw[UAoxXnXBkC] = setInterval(function(){
			if( UAZznqqX[UAoxXnXBkC] > 1000){
				UAZznqqX[UAoxXnXBkC] = 0;
			}
			UAhoaAI[UAoxXnXBkC] = new Date();
			if (UAmqXrL[UAoxXnXBkC] != UAZznqqX[UAoxXnXBkC] ){
				var UAtGKZxY = UAoQaOKyTX(UACfEXSQwz[UAoxXnXBkC],UAhoaAI[UAoxXnXBkC] ); //חישוב הפער בזמנים : הזמן כרגע מול הזמן שגילינו את השינוי
				if(UAtGKZxY < 3050){
					UADRVTPQVsChangeMade[UAoxXnXBkC] = true;
				} else {
					UADRVTPQVsChangeMade[UAoxXnXBkC] = false;
				}
				
				if( (UAtGKZxY > 2000 && UAtGKZxY < 3030) && (UADRVTPQVsChangeMade[UAoxXnXBkC] == true )){
					UA.UAzxdxUzhi(HTMLElmsThatChange[UAoxXnXBkC]); // מריצים את כל הבדיקות של הנגישות מפעילים בהתאם
					UAmqXrL[UAoxXnXBkC] = UAZznqqX[UAoxXnXBkC]; // מעדכנים את השינוי בתוך UAmqXrL[UAoxXnXBkC]  כך בריצה הבאה של הבדיקות נוכל לדעת האם בוצע שינוי נוסף.
					HTMLElmsThatChange[UAoxXnXBkC].length = 0;
				}
			} else {
				UADRVTPQVsChangeMade[UAoxXnXBkC] = false;
			}
			
			
		},1000);
		
		function UAoQaOKyTX(UAPbkSTqdfBdateNow, UAPbkSTqdfBdateWhenChangehappend ) {
			UAPbkSTqdfBdateNow = UAPbkSTqdfBdateNow.getTime(); // המרה של מילישניות    //UAPbkSTqdfBdateNow = הזמן שבו גילינו שקרה שינוי
			UAPbkSTqdfBdateWhenChangehappend = UAPbkSTqdfBdateWhenChangehappend.getTime();// המרה של מילישניות     //UAPbkSTqdfBdateWhenChangehappend = הזמן העכשיווי
			var UADfBRraiimeDeff = UAPbkSTqdfBdateWhenChangehappend - UAPbkSTqdfBdateNow;
			return parseInt(UADfBRraiimeDeff);
		}

		
	}

	
	UA.UAzxdxUzhi = function(newElems){
		UA.newElemsToMakeAccessible = newElems;
		UA.ReloadtimesNumber++;
		document.querySelectorAll('*:not([andiruns])').forEach(function(el) {
			andiMarksElms(el);
		});
		function andiMarksElms(currentElm){
			var currentElm = currentElm;
			if (currentElm.tabIndex > -1) {
				andizxc(currentElm).attr('andiElementTabindexNumber', currentElm.tabIndex);
			}
			var ANDIa = false;
			document.querySelectorAll('#UAXrXQBkb *').forEach(function(el) {
				if(ANDIa) return false;
				ANDIa = (el == currentElm)? true: false;
			});
			if ( 
				currentElm.tagName.toLowerCase() != 'link' && 
				currentElm.tagName.toLowerCase() != 'noscript' && 
				currentElm.tagName.toLowerCase() != 'script' && 
				currentElm.tagName.toLowerCase() != 'style' && 
				currentElm.tagName.toLowerCase() != 'meta' && 
				currentElm.tagName.toLowerCase() != 'html' && 
				currentElm.tagName.toLowerCase() != 'head' && 
				currentElm.id != 'UAXrXQBkb' &&  
				currentElm.id != 'UAScBZXnI' &&  
				!ANDIa
			){
			currentElm.addAttr({'andiruns':UA.ReloadtimesNumber});  
			if(currentElm != undefined && !currentElm.hasAttribute('andiAllElmWithText')){
				andizxc(currentElm).attr('andiAllElmWithText', 'true');
				var UAnfNvcU = parseInt(andizxc(currentElm).css('font-size'));
				andizxc(currentElm).attr({ 'UAfHyCrS': UAnfNvcU, 'UAJmGBAbFhiteSpace': andizxc(currentElm).css('white-space'), 'UAEkKMFBEjineHeight': andizxc(currentElm).css('line-height') });
				}
			}
		}
		/*andizxc('.UA2skipAreaAutomate').remove();
			UA.createAutomaticAreas();
		*/
		setTimeout(function(){
			if (localStorage.getItem("UARDAtztZ") == "yes") {
				setTimeout(function(){
					if(!UA.UATzcls){
						var UAtCdlHiXX = setInterval(function(){
							if(UA.UATzcls == true){
								clearInterval(UAtCdlHiXX);
								UA.UAsWymwr('aaa');
							}
						},350);
					} else {
						UA.UAsWymwr('aaa');
					}
				},250);
			}
		},50);
		setTimeout(function(){
			if (localStorage.getItem("UAgXrpjfX") == "yes") {
				if(!UA.UATzcls){
					var UAtCdlHiXX = setInterval(function(){
						if(UA.UATzcls == true){
							clearInterval(UAtCdlHiXX);
							var tepmPlusNum = localStorage.getItem("UAfHyCrSPlusClick");
							var tepmMinusNum = localStorage.getItem("UAfHyCrSMinusClick");
							var UAakuGXVo = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
							UA.UANWztix(UAakuGXVo, 'aaa');
						}
					},350);
				} else {
					var tepmPlusNum = localStorage.getItem("UAfHyCrSPlusClick");
					var tepmMinusNum = localStorage.getItem("UAfHyCrSMinusClick");
					var UAakuGXVo = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
					UA.UANWztix(UAakuGXVo, 'aaa');
				}
			}
		},100);
		setTimeout(function(){
			if (localStorage.getItem("UAEeAPSsWF") == "yes") {
				if(!UA.UATzcls){
					var UAtCdlHiXX = setInterval(function(){
						if(UA.UATzcls == true){
							clearInterval(UAtCdlHiXX);
							var tepmPlusNum = localStorage.getItem("UAfHyCrSPlusClick");
							var tepmMinusNum = localStorage.getItem("UAfHyCrSMinusClick");
							var UAakuGXVo = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
							UA.UANWztix(UAakuGXVo, 'aaa');
						}
					},350);
				} else {
					var tepmPlusNum = localStorage.getItem("UAfHyCrSPlusClick");
					var tepmMinusNum = localStorage.getItem("UAfHyCrSMinusClick");
					var UAakuGXVo = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
					UA.UANWztix(UAakuGXVo, 'aaa');
				}
			}
		},150);
		
/*
		if (localStorage.getItem("UAKBYshndiFocusAreaBtn") == "yes") {
			if(!UA.UArcwDbxD){
					var UAHXtdIbYN = setInterval(function(){
					if(UA.UArcwDbxD == true){
						clearInterval(UAHXtdIbYN);
						var UAGSVLaFC = UA.UAtGnLO.UAqvweC;
						UA.UASAqjyyi(UAGSVLaFC);
						UA.UAqMCmurfl(UAGSVLaFC);
					}
				},350);
			} else {
				var UAGSVLaFC = UA.UAtGnLO.UAqvweC;
                UA.UASAqjyyi(UAGSVLaFC);
                UA.UAqMCmurfl(UAGSVLaFC);
			}
        }
		},50);
		setTimeout(function(){
		if (localStorage.getItem('UAKBYshndirasheTevot') == "yes") {
			if(!UA.UAzRLAoyK){
				var UAzlykLHu = setInterval(function(){
					if(UA.UAzRLAoyK == true){
						clearInterval(UAzlykLHu);
						UA.findAndReplaceDOMText2('[andiAllElmWithText]');
					}
				},350);
			} else {
				UA.findAndReplaceDOMText2('[andiAllElmWithText]');
			}
        }
		
		*/	
		
		setTimeout(function(){
			if (localStorage.getItem("UAwGvyfaeviledHiddingInfo") == "yes") {		
				if(!UA.UAzRLAoyK){
					var UAzlykLHu = setInterval(function(){
						if(UA.UAzRLAoyK == true){
							clearInterval(UAzlykLHu);
							UA.UAeWaHSEReviledHiddingInfo();
							UA.UAZmjbhJVKetActiveReviledHiddingInfo('aaa')
						}
					},350);
				} else {
					UA.UAeWaHSEReviledHiddingInfo();
				}
			}
		},200);
		setTimeout(function(){
			var UAehBFWIgY = localStorage.getItem("UAFqeFK1");
			if (UAehBFWIgY != null && UAehBFWIgY != '') {
				UA.UAtQUWt(localStorage.getItem("UAFqeFK1Color"),localStorage.getItem("UAFqeFK1"),'aaa');
			}
		},250);
		setTimeout(function(){
			var UAehBFWIgY = localStorage.getItem("UAFqeFK2");
			if (UAehBFWIgY != null && UAehBFWIgY != '') {
				UA.UAtQUWt(localStorage.getItem("UAFqeFK2Color"),localStorage.getItem("UAFqeFK2"),'aaa');
			}
		},300);
		setTimeout(function(){
			var UAehBFWIgY = localStorage.getItem("UAFqeFK3");
			if (UAehBFWIgY != null && UAehBFWIgY != '') {
				UA.UAtQUWt(localStorage.getItem("UAFqeFK3Color"),localStorage.getItem("UAFqeFK3"),'aaa');
			}
		},330);
		setTimeout(function(){
			if (localStorage.getItem("UAmUvJygQW") == "yes") {
				UA.UACONBnyD('black', 'aaa');
			}
		},360);
		setTimeout(function(){
			if (localStorage.getItem("UAJmGBAbFhiteContrast") == "yes") {
				UA.UACONBnyD('white', 'aaa');
			}
		},390);
		setTimeout(function(){
			UA.UAvOSibc();
		},410);
		setTimeout(function(){
			UA.UAIMPphCu();
		},440);
};


	UA.UAvOSibc = function() {
		setTimeout(function(){
			UA.UAuVsfBdSC(UA.UAtGnLO.UAsFCELp);
			UA.UAZyJQlt(UA.UAtGnLO.UAZyJQlt);
			UA.UADXDFfB(UA.UAtGnLO.UAZSdutS); 	
		},0);
		setTimeout(function(){
			UA.UAhrwTyS(UA.UAtGnLO.UApgVQG);
		},30);
		setTimeout(function(){
			UA.UACXTHiwf(UA.UAtGnLO.UAocVwnI);
			UA.UAPJilPI(UA.UAtGnLO.UAjYCVrc);
		},60);
		setTimeout(function(){
			UA.UAgBNQRY(UA.UAtGnLO.UAAqBdDZCK);
		},95);
	}
	
	UA.UAWyqMiV = function() {
		setTimeout(function(){
			UA.markTextLagn();
			UA.UATtLRwMz(UA.UAtGnLO.UATtLRwMz);
			UA.UArwTgDML(UA.UAtGnLO.UAqvweC);
		},15);
		setTimeout(function(){
			UA.UAnwzVXMJ(UA.UAtGnLO.UAnwzVXMJ );
			UA.UABgGPvNDD(UA.UAtGnLO.UABgGPvNDD);
		},35);
		setTimeout(function(){
			UA.UAKlKnxb();
			UA.UAjoigHdG(UA.UAtGnLO.UAqlJMoz);
			UA.UAFWETtWX(UA.UAtGnLO.UAjbULRHcw);
			UA.UAlAoZOxNs(UA.UAtGnLO.UAlAoZOxNs);
		},70);
		setTimeout(function(){
			UA.UAKCNiw(UA.UAtGnLO.UAarODG);
			UA.UAlylatukLuWUv(UA.UAtGnLO.UAlylatukLuWUv);
			UA.UAPlFuKzHageNavigation (UA.UAtGnLO.UAIfPJJBN);
			UA.UAjmfwD();
		},100);
		setTimeout(function(){
			UA.UAIMPphCu();
		},120);
		setTimeout(function(){
			UA.UAAaCKN();
			UA.UAgBNQRY(UA.UAtGnLO.UAAqBdDZCK);
		},135);
		//UA.UAgpaCwJxl();
    }
	
    UALKKCFqP = false;
	setTimeout(function(){
		UA.UAvOSibc();
	},0);
	setTimeout(function(){
		UA.UAWyqMiV();
	},50);
	setTimeout(function(){
			UA.UAYsEOP(UA.UAtGnLO.UAkMixWyv);
	},1500);
	
	
 } 
