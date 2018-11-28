UAiDsseAw = function() {
	andiUA.UACXEaTl = function(UANOMOF) {
		andizxc('.UABRquzd, .UAoCLPPx').remove();
		if (UANOMOF !== undefined && UANOMOF.length > 0) {
		for (var UALhajEH = 0; UALhajEH < UANOMOF.length; UALhajEH++) {
        var UALmDkvi = UANOMOF[UALhajEH].UAxnzVI;
        if (andizxc(UALmDkvi).children().length > 0 && UALmDkvi.length > 0 && andizxc(UALmDkvi).css("display") != "none" && andizxc(UALmDkvi).css("visibility") != "hidden" && andizxc(UALmDkvi).css("opacity") != "0" && andizxc.trim(andizxc(UANOMOF[UALhajEH].UAxnzVI).text()) != "") {
          andizxc(UANOMOF[UALhajEH].UAxnzVI).prepend('<a class="UAFojEJskipArea" name="UANMmDG' + UALhajEH + '"  tabindex="0" >' + UANOMOF[UALhajEH].UAkZsqY + ",<br />" + andiUA.UAufVra.UAultLFP + "</a>");
        }
        if (UANOMOF[UALhajEH].UAZNNzjFUd && UANOMOF[UALhajEH].UAxnzVI != "undefined" && UANOMOF[UALhajEH].UAxnzVI != undefined && andizxc.trim(andizxc(UANOMOF[UALhajEH].UAxnzVI).text() != "")) {
      //    andizxc("body").prepend('<a id="UADrwBV" class="UAOMaWINwd" name="UADrwBV" href="#UAMainContent" tabindex="0" > ' + andiUA.UAufVra.UAGOGSZ + "</a>");
          andizxc(UANOMOF[UALhajEH].UAxnzVI).attr({"role":"main"});
        }
      }
      var UAwRTguxK = andizxc("title").text();
      andizxc("body").append('<a id="UAAcIRattW" class="UAFojEJskipArea" name="UAAcIRattW" href="#UADrwBV" tabindex="0" >' + andiUA.UAufVra.UALYzyJ + UAwRTguxK + " " + andiUA.UAufVra.UAXspWxX + " </a>");
      andizxc(".UAOMaWINwd").click(function(event) {
        event.preventDefault();
        var UAuRhxe = andizxc('[role="main"]');
        if (UAuRhxe != undefined && UAuRhxe.length == 1) {
          andizxc(UAuRhxe).attr("tabindex", "0").focus();
        }
      });
	  
	    andizxc(document).on("click", "#UAAcIRattW", function(UAAWhUz) {
    andizxc(".UAFojEJskipArea").first().attr("tabindex", "0").focus().scrollTop(0);
    //andizxc("body").attr("tabindex", "");
  });
  andizxc(document).on("focus", ".UAnhxMCUZL", function(UAAWhUz) {
    //andizxc(this).parent().css({"outline":"5px solid #49C0EB"});
    andizxc(this).parent().css({"box-shadow":"0px 0px 3px 5px rgba(73,192,235,1)"});
	

	
  });
  andizxc(document).on("blur", ".UAnhxMCUZL", function(UAAWhUz) {
    andizxc(this).parent().css({"outline":""});
    andizxc(this).parent().css({"box-shadow":""});
  });
  
			var UAwRTguxK = andizxc("title").text();
			andizxc(".UAFojEJskipArea").each(function(UALhajEH) {
				 var UAEJJZQ = andizxc(".UAFojEJskipArea");
				 if ((UAEJJZQ.length - 1) == UALhajEH) {
					 andizxc(this).attr({
						 "href": "#UADrwBV",
						 "name": "UANMmDG" + UALhajEH
					 });
				 } else {
					 andizxc(this).attr({
						 "href": "#UANMmDG" + (UALhajEH + 1),
						 "name": "UANMmDG" + UALhajEH,
						 "id": "UANMmDG" + UALhajEH
					 });
				 }
			});
			andizxc(".UAFojEJskipArea").click(function(UAAWhUz) {
				 UAAWhUz.preventDefault();
				 var UAEJJZQUAskipArea = andizxc(".UAFojEJskipArea");
				 var UAjEMRik = andizxc.inArray(this, UAEJJZQUAskipArea);
				 var offSetTop = andizxc(UAEJJZQUAskipArea[UAjEMRik + 1]).scrollTop();
				 if ((UAjEMRik + 1) == UAEJJZQUAskipArea.length) {
					 andizxc('#UADrwBV').attr('tabindex', '0').focus().scrollTop(0);
				 } else {
					 andizxc(UAEJJZQUAskipArea[UAjEMRik + 1]).attr('tabindex', '0').focus().scrollTop(offSetTop + 50);
				 }
			});
			andizxc(".UAFojEJskipArea").focus(function() {
				 andizxc(this).parent().css({
					 'font-size': '16px'
				 });
				 }).blur(function() {
					 andizxc(this).parent().css({
						 'font-size': ''
					 });
				 });
				 andizxc(".UAoCLPPx, .UABRquzd").keydown(function(UAAWhUz) {
					 if (UAAWhUz.keyCode == 13) {
						 andizxc(this).find('a').first().click();
				}
			});
		}
	};


	 andiUA.markTextLagn = function(){
		 if(false){
			 if(andiUA.UAVSFkhvzd != 'he'){
				 for(var UALhajEH = 0; UALhajEH < andiUA.UAudPKfT.length; UALhajEH++){
					andiUA.UAXUgkVgCz(document.body,andiUA.UAudPKfT[UALhajEH],'','he');
				 }
			 }
			 if(andiUA.UAVSFkhvzd != 'ar'){
				 for(var UALhajEH = 0; UALhajEH < andiUA.UAaUeLv.length; UALhajEH++){
					andiUA.UAXUgkVgCz(document.body,andiUA.UAaUeLv[UALhajEH],'','ar');
				 }
			 }
			 if(andiUA.UAVSFkhvzd != 'en'){
				 for(var UALhajEH = 0; UALhajEH < andiUA.UAYqmOcuLz.length; UALhajEH++){
					andiUA.UAXUgkVgCz(document.body,andiUA.UAYqmOcuLz[UALhajEH],'','en');
				 }
			 }
			 if(andiUA.UAVSFkhvzd != 'ru'){
				 for(var UALhajEH = 0; UALhajEH < andiUA.UAhPhYTjS.length; UALhajEH++){
					andiUA.UAXUgkVgCz(document.body,andiUA.UAhPhYTjS[UALhajEH],'','ru');
				 }
			 }
		 }
	 }


	 andiUA.UAcJCMY = function (UAsVELvJP) {
        if (UAsVELvJP !=undefined &&  UAsVELvJP) {
			if(andizxc('#UADwFOO').length == 0){
				andizxc('head').append('<style id="UADwFOO">body [UAJZkUqw][title]:not(.andimenucode){display: inline-block;}body [UAJZkUqw][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px;z-index: 98;background-color:#000;color:#fff;min-width:50px;display: block;}body [UAJZkUqw][title]:focus:before{content: "";z-index: 99;}</style>');
			}
			andizxc('[UAJZkUqw][title]').attr('tabIndex','0');
			andizxc('iframe').each(function(){
				try{
					if(andizxc(this).contents().find('#UADwFOO').length == 0){
						andizxc(this).contents().find('head').append('<style id="UADwFOO">body [UAJZkUqw][title]:not(.andimenucode){display: inline-block;}body [UAJZkUqw][title]:focus:after{content: "  ("  attr(title) ") ";padding: 5px;z-index: 98;background-color:#000;color:#fff;min-width:50px;display: block;}body [UAJZkUqw][title]:focus:before{content: "";z-index: 99;}</style>');
					}
					andizxc(this).contents().find('[UAJZkUqw][title]').attr('tabIndex','0');
				} catch(ANDIerr) {
					if(andiUA.UAbUCbcZ.UAdcyZzol)console.log("Error: "+ANDIerr);
				}
			});
			
		}
	 }
	 
	 
    andiUA.UApfGnd = function (UAWsebF) {
		if(UAWsebF != undefined ){
            var UApYKjK = andiUA.UAfHeapXA;
            if (UAWsebF !== undefined && UAWsebF.length > 0) {
				andizxc(UAWsebF).each(function (UALhajEH) {
					if(andiUA.UAWMehkWJR(UAWsebF[UALhajEH].UAXWZMKi,UAWsebF[UALhajEH].UAGaCuPxZ)){
                    if ((UAWsebF[UALhajEH].UAXDWeeaX).length > 0) {
                        setTimeout(function () {
                            andizxc(UAWsebF[UALhajEH].UAgGLGO).each(function (TUAj) {
                                andiUA.UAntYknKX(UAWsebF[UALhajEH].UAgGLGO[TUAj]);
                            });
							if(UAWsebF[UALhajEH].UAhLTLHoiG != ''){
								andizxc('head').append('<style id="sliderStyle'+UALhajEH+'">'+UAWsebF[UALhajEH].UAhLTLHoiG+'</style>');
							}
                            if (UAWsebF[UALhajEH].UACaPadJ == null || UAWsebF[UALhajEH].UACaPadJ == undefined || UAWsebF[UALhajEH].UACaPadJ == 'null' || UAWsebF[UALhajEH].UACaPadJ == 'undefined' || UAWsebF[UALhajEH].UACaPadJ == '') { UAWsebF[UALhajEH].UACaPadJ = UAWsebF[UALhajEH].UAhUZjpY; }
                            if (UAWsebF[UALhajEH].UAvkHOM || UAWsebF[UALhajEH].UAvkHOM == undefined) {
                                andizxc(UAWsebF[UALhajEH].UACaPadJ).css({ 'position': 'relative' }).prepend('<input type="image" class="UAcuYCU" src="' + UApYKjK.stop + ' "id="UATrnXLq' + UALhajEH + '" alt="' + andiUA.UAufVra.UAmKDEwwF + '"/>');
                            } else {
                                andizxc(UAWsebF[UALhajEH].UACaPadJ).css({ 'position': 'relative' }).prepend('<input type="image" class="UAkBRvS" src="' + UApYKjK.stop + ' "id="UATrnXLq' + UALhajEH + '" alt="' + andiUA.UAufVra.UAWqzEjTt + '"/>');
                            }
                            if (UAWsebF[UALhajEH].UAqGbuXWR != 'left' && UAWsebF[UALhajEH].UAqGbuXWR != 'right') { UAWsebF[UALhajEH].UAqGbuXWR = 'left'; }
                            if (UAWsebF[UALhajEH].UAqGbuXWR == 'left') {
                                if (!andizxc.isNumeric(UAWsebF[UALhajEH].UAhQQpVE)) { UAWsebF[UALhajEH].UAhQQpVE = 5; }
                                if (!andizxc.isNumeric(UAWsebF[UALhajEH].UAChUmiFI)) { UAWsebF[UALhajEH].UAChUmiFI = 5; }
                                andizxc('#UATrnXLq' + UALhajEH).css({ 'top': UAWsebF[UALhajEH].UAhQQpVE, 'left': UAWsebF[UALhajEH].UAChUmiFI });
                            } else {
                                if (!andizxc.isNumeric(UAWsebF[UALhajEH].UAhQQpVE)) { UAWsebF[UALhajEH].UAhQQpVE = 5; }
                                if (!andizxc.isNumeric(UAWsebF[UALhajEH].UAChUmiFI)) { UAWsebF[UALhajEH].UAChUmiFI = 5; }
                                andizxc('#UATrnXLq' + UALhajEH).css({ 'top': UAWsebF[UALhajEH].UAhQQpVE, 'right': UAWsebF[UALhajEH].UAChUmiFI });
                            }
                        }, UAWsebF[UALhajEH].UAUhSHBJ);
                    }
					}
                });
                andizxc(UAWsebF).each(function (UALhajEH) {
                    setTimeout(function () {
                        var UAXDWeeaX = UAWsebF[UALhajEH].UAXDWeeaX, UAdNQlyA = [], UAuXEWuzNb = UALhajEH;
                        andizxc(UAXDWeeaX).each(function (index) {
                            UAyjmhmXo = andizxc(UAXDWeeaX).first().height();
                            if (UAyjmhmXo < 60) {
                                UAyjmhmXo = 60;
                            }
                            var UAvrivx = UAyjmhmXo * index;
                            UAwMboKJHs = andizxc(UAXDWeeaX).first().width();
                            UAdNQlyA.push(andizxc(this).clone().css({'height': UAyjmhmXo, 'width': UAwMboKJHs, 'display': 'inline-block', 'opacity': '1', 'visibility': 'visible', 'position': 'relative', 'top': '', 'left': '', 'right': '' }).attr('tabindex', '0').addClass('UAogbuusI' + UAuXEWuzNb));
                        });
                        andizxc('#UATrnXLq' + UALhajEH).bind('click', function (UAAWhUz) {
                            UAAWhUz.preventDefault();
                            andiUA.UAeHwSBG(UAWsebF, UALhajEH, UAdNQlyA);

                            andiUA.UACRNKt(andiUA.UAufVra.UApDTtoxiN);
                        });
                    }, (UAWsebF[UALhajEH].time + 50));
                });
            }
        }
    };

    andiUA.UAeHwSBG = function (UAWsebF, UALhajEH, UAdNQlyA) {
            var  UApYKjK = andiUA.UAfHeapXA;
            andizxc('#UATrnXLq' + UALhajEH).removeAttr('role').removeAttr('aria-label');
            var state = null;
            if (andizxc('#UATrnXLq' + UALhajEH).hasClass('UAjTaHg')) {
                state = false;
                andiUA.UAIOlQA(UAWsebF[UALhajEH], false, UALhajEH, UAdNQlyA);
                andizxc('#UATrnXLq' + UALhajEH).attr('src', UApYKjK.stop);
                if (UAWsebF[UALhajEH].UAvkHOM || UAWsebF[UALhajEH].UAvkHOM == undefined) {
                    andizxc('#UATrnXLq' + UALhajEH).removeClass('UAjTaHg').addClass('UAkBRvS').attr({ 'role': 'alert', 'aria-label': andiUA.UAufVra.UAkBRvS });
                } else {
                    andizxc('#UATrnXLq' + UALhajEH).removeClass('UAjTaHg').addClass('UAkBRvS').attr({ 'role': 'alert', 'aria-label': andiUA.UAufVra.UADrTpo });
                }
                setTimeout(function () { andizxc('#UATrnXLq' + UALhajEH).removeAttr('role').removeAttr('aria-label'); }, 500);
                andizxc(UAWsebF[UALhajEH].UAhUZjpY).css({ 'position': 'relative' });
                andizxc(UAWsebF[UALhajEH].UAXDWeeaX).css({ 'opacity': '1' });
            } else {
                state = true;
                andiUA.UAIOlQA(UAWsebF[UALhajEH], true, UALhajEH, UAdNQlyA);
                andizxc('#UATrnXLq' + UALhajEH).attr({ 'src': UApYKjK.UAXgSCRDk });
                if (UAWsebF[UALhajEH].UAvkHOM || UAWsebF[UALhajEH].UAvkHOM == undefined) {
                    andizxc('#UATrnXLq' + UALhajEH).removeClass('UAkBRvS').addClass('UAjTaHg').attr({ 'role': 'alert', 'aria-label': andiUA.UAufVra.UAjTaHg });
                } else {
                    andizxc('#UATrnXLq' + UALhajEH).removeClass('UAkBRvS').addClass('UAjTaHg').attr({ 'role': 'alert', 'aria-label': andiUA.UAufVra.UAHatjiUB });
                }
                setTimeout(function () { andizxc('#UATrnXLq' + UALhajEH).removeAttr('role').removeAttr('aria-label'); }, 500);
            }
        
    };

    andiUA.UAIOlQA = function (slider, state, UAuXEWuzNb, UAdNQlyA) {
            var UAXDWeeaX = slider.UAXDWeeaX, UAhUZjpY = slider.UAhUZjpY, UAgGLGO = slider.UAgGLGO;
            if (state) {
                andizxc(UAgGLGO).each(function (UALhajEH) {
                    andizxc(UAgGLGO[UALhajEH].UAuRhxe).css({ 'opacity': '0' }).attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                });
                var UAYRoehkR = (andizxc(UAhUZjpY).width());
                var UABpEHk = (andizxc(UAhUZjpY).height());
                if (UABpEHk < 60) {
                    UABpEHk = 60;
                }

                andizxc(UAhUZjpY).css({ 'position': 'relative' }).append('<div id="UABLUta' + UAuXEWuzNb + '" style="overflow:hidden"><span id="UAuaCGNh" role="tooltip" style="background-color:#000;color:#fff;text-align:center;display:block;height:20px;font-size:16px;z-index:999999">' + andiUA.UAufVra.UAuaCGNh + '</span><div class="UACYfiUOs' + UAuXEWuzNb + '" ></div></div>');
                andizxc('#UABLUta' + UAuXEWuzNb).css({ 'opacity': '1', 'z-index': '99998', height: UABpEHk + 20, 'width': UAYRoehkR, 'position': 'absolute', 'top': '0', 'overflow': 'hidden' });
                andizxc(UAXDWeeaX).each(function () {
                    andizxc(this).css({ 'opacity': '0' }).children().attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                });
                andizxc('.UACYfiUOs' + UAuXEWuzNb).css({ 'width': (UAYRoehkR + 20), 'height': UABpEHk, 'z-index': '99999989', 'position': 'relative', 'top': '0', 'overflow-y': 'scroll', 'overflow-x': 'hidden' }).append(UAdNQlyA);
                andizxc('.UACYfiUOs' + UAuXEWuzNb).attr({ 'tabindex': '0' }).focus();
                andizxc('.UACYfiUOs' + UAuXEWuzNb).scroll(function () {
                    andizxc('#UAuaCGNh').css('display', 'none');
                });
                andiUA.UAcJCMY(andiUA.UAbUCbcZ.UAsVELvJP);
                andizxc('#UABLUta' + UAuXEWuzNb).find('*').each(function () {
                    andizxc(this).stop(true, true).clearQueue();
                });
            } else {
                andizxc('#UABLUta' + UAuXEWuzNb).remove();
                andizxc(UAgGLGO).each(function (UALhajEH) {
                    andizxc(UAgGLGO[UALhajEH].UAuRhxe).css({ 'opacity': '1' }).attr({ 'tabindex': '0', 'aria-hidden': 'false' });
                });
            }
        
    };

    andiUA.UAMnDBRN = function () {
        var UAaWHPESx = andiUA.UAbUCbcZ.UAfdbTH;
		if(UAaWHPESx != undefined){
        var UApYKjK = andiUA.UAfHeapXA;
        andizxc(UAaWHPESx).each(function (UALhajEH) {
		if(andiUA.UAWMehkWJR(UAaWHPESx[UALhajEH].UAXWZMKi,UAaWHPESx[UALhajEH].UAGaCuPxZ)){	
		andizxc('head').append('<style id="UAdNQlyAndiMenus">UAdNQlyAndiSubMenuLevel3 *:focus{outline:2px solid #000} .UAdNQlyAndiSubMenu *:focus{outline:2px solid #000}</style>');
            if(UAaWHPESx[UALhajEH].UAsEdhuuyU != ''){
				andizxc('head').append('<style id="sliderStyle'+UALhajEH+'">'+UAaWHPESx[UALhajEH].UAsEdhuuyU+'</style>');
			}
			
			if ((UAaWHPESx[UALhajEH].UAXuHNpD != '')) {
                andizxc(UAaWHPESx[UALhajEH].UAXuHNpD).attr({ 'role': 'navigation' });
            }
            if ((UAaWHPESx[UALhajEH].UAwbMQuSz != '')) {
				andizxc(UAaWHPESx[UALhajEH].UAXuHNpD).find('a').each(function(){
					andizxc(this).parent().attr({ 'role': 'menuitem', 'tabindex': '-1'});
				});
                andizxc(UAaWHPESx[UALhajEH].UAwbMQuSz).each(function () {
                    andizxc(this).attr({ 'tabindex': '0' });
                });
                andizxc(UAaWHPESx[UALhajEH].UAwbMQuSz).closest(UAaWHPESx[UALhajEH].UAXuHNpD).each(function () {
                    if (andizxc(this).find(UAaWHPESx[UALhajEH].UAEEIOWJJg).length > 0) {
                        andizxc(this).attr({ 'aria-haspopup': 'true' });
                    }
                    andizxc(this).find('a').last().addClass('UAdNQlyAndiUAAcIRattWMenu');
                });
            } else {
				andizxc(UAaWHPESx[UALhajEH].UAXuHNpD).find('a').each(function(){
					andizxc(this).parent().attr({ 'role': 'menuitem'});
				});
			}

			andizxc(UAaWHPESx[UALhajEH].UAwbMQuSz).keydown(function (UAAWhUz) {
				if(UAAWhUz.keyCode == 9){
                if (andizxc('.UAdNQlyAndiOpenSubMenuBtn') != undefined && andizxc('.UAdNQlyAndiOpenSubMenuBtn').length > 0) {
                    andizxc('.UAdNQlyAndiOpenSubMenuBtn').remove();
                }
                if (andizxc('.UAdNQlyAndiSubMenu') != undefined && andizxc('.UAdNQlyAndiSubMenu').length > 0) {
                    andizxc('.UAdNQlyAndiSubMenu').remove();
                }

                var D = andizxc(this).closest(UAaWHPESx[UALhajEH].UAccSYN).find(UAaWHPESx[UALhajEH].UAEEIOWJJg).first();

                if (D != undefined && D.length > 0) {
                    andizxc(this).closest(UAaWHPESx[UALhajEH].UAccSYN).css({ 'position': 'relative' });
                    andizxc(this).after('<button title="' + andiUA.UAufVra.UAuDTPt + '" class="UAdNQlyAndiOpenSubMenuBtn"></button>');
                    andizxc('.UAdNQlyAndiOpenSubMenuBtn').css({ 'padding': '0', 'margin': '0', 'z-index': '999', 'width': '25px', 'height': '25px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-position': '50% 50%', 'background-size': '75% 75%', 'background-image': 'url(' + UApYKjK.UASEZhp + ')', 'position': 'absolute', 'top': UAaWHPESx[UALhajEH].UAmorEgqlo +'px', UArKktuod: UAaWHPESx[UALhajEH].UAYZwyfA +'px'});
                    if (UAaWHPESx[UALhajEH].UAqGbuXWR == 'left') {
                        andizxc('.UAdNQlyAndiOpenSubMenuBtn').css({ 'left': UAaWHPESx[UALhajEH].UAYZwyfA +'px'});
                    } else {
                        andizxc('.UAdNQlyAndiOpenSubMenuBtn').css({ 'right': UAaWHPESx[UALhajEH].UAYZwyfA+'px' });
                    }

                   andizxc('.UAdNQlyAndiOpenSubMenuBtn').bind('click', function (UAAWhUz) {
                        if (andizxc('.UAdNQlyAndiSubMenu') != undefined && andizxc('.UAdNQlyAndiSubMenu').length > 0) {
                            andizxc('.UAdNQlyAndiSubMenu').remove();
                            andiUA.UACRNKt(andiUA.UAufVra.UAjaWeodRj);
                        } else {
                            andiUA.UACRNKt(andiUA.UAufVra.UAvXFpnXI);
                            UAAWhUz.preventDefault();
                            var UAdNQlyA = andizxc(this).closest(UAaWHPESx[UALhajEH].UAccSYN).find(UAaWHPESx[UALhajEH].UAEEIOWJJg).first();
                            var ANDIb = andizxc(UAdNQlyA).clone().css({ 'max-height': '100%', 'aria-hidden': 'false', 'left': 'auto', 'right': 'auto', 'display': 'block', 'opacity': '1', 'visibility': 'visible' }).addClass('UAdNQlyAndiSubMenu');
                            andizxc(this).closest(UAaWHPESx[UALhajEH].UAccSYN).append(ANDIb);
                            andizxc(UAdNQlyA).find('*').attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                            andizxc(ANDIb).find('*').attr({ 'tabindex': '', 'aria-hidden': '' });
                            andizxc(ANDIb).find('a').focus(function () {
                                var UAuRhxe = this;
                                var ANDIf = (andizxc(this).closest(UAaWHPESx[UALhajEH].UALAIOXdKw).find(UAaWHPESx[UALhajEH].UAKSkzK).first());
                                if (andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn') != undefined && andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn').length > 0) {
                                    andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn').remove();
                                }
                                if (andizxc('.UAdNQlyAndiSubMenuLevel3') != undefined && andizxc('.UAdNQlyAndiSubMenuLevel3').length > 0) {
                                    andizxc('.UAdNQlyAndiSubMenuLevel3').remove();
                                }
                                if (ANDIf != undefined && andizxc(ANDIf).length > 0) {
                                    andizxc(ANDIf).find('*').attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                                    andizxc(this).after('<button title="' + andiUA.UAufVra.UAuDTPt + '" class="UAdNQlyAndiOpenSubMenuLevel3Btn"></button>');
                                    andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn').css({ 'z-index': '999', 'width': '40px', 'height': '15px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-size': '100% 100%', 'background-image': 'url(' + UApYKjK.UASEZhp + ')', 'position': 'absolute', 'top': UAaWHPESx[UALhajEH].UAmorEgqlo +'px', UArKktuod: UAaWHPESx[UALhajEH].UAYZwyfA +'px'});
                                    if (UAaWHPESx[UALhajEH].UAqGbuXWR == 'left') { andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn').css('left', UAaWHPESx[UALhajEH].UAYZwyfA +'px') } else { andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn').css('right', UAaWHPESx[UALhajEH].UAYZwyfA +'px') }
                                    andizxc('.UAdNQlyAndiOpenSubMenuLevel3Btn').bind('click', function (UAAWhUz) {
                                        if (andizxc('.UAdNQlyAndiSubMenuLevel3') != undefined && andizxc('.UAdNQlyAndiSubMenuLevel3').length > 0) {
                                            andizxc('.UAdNQlyAndiSubMenuLevel3').remove();
                                            andiUA.UACRNKt(andiUA.UAufVra.UAjaWeodRj);
                                        } else {
                                            andiUA.UACRNKt(andiUA.UAufVra.UAvXFpnXI);
                                            UAAWhUz.preventDefault();
                                            andizxc(ANDIf).find('*').attr({ 'tabindex': '-1', 'aria-hidden': 'true' });
                                            var ANDIg = andizxc(ANDIf).clone().css({ 'max-height': '100%', 'aria-hidden': 'false', 'left': 'auto', 'right': 'auto', 'display': 'block', 'opacity': '1', 'visibility': 'visible' }).addClass('UAdNQlyAndiSubMenuLevel3');
                                            andizxc(this).closest(UAaWHPESx[UALhajEH].UALAIOXdKw).append(ANDIg);
                                            andizxc(ANDIg).find('*').attr({ 'tabindex': '', 'aria-hidden': '' });
                                            andizxc(ANDIg).find('a').last().addClass('UAdNQlyAndiUAAcIRattWLevel3');
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

                    andizxc(UAaWHPESx[UALhajEH].UAnwpBRH).find('*').focus(function () {
                        andizxc(this).css({ 'border': '1px solid #fff' });
                        andizxc(this).blur(function () { andizxc(this).css({ 'border': '' }); })
                    });
                }
				}
            });
            andizxc(document).on('focusout', '.UAdNQlyAndiUAAcIRattWMenu', function (UAAWhUz) {
                var UAuRhxe = this;
                var UAHTrBHwf = [];
                andizxc('a,button,input,[role="button"],[role="link"],[tabindex]').each(function () {
                    UAHTrBHwf.push(andizxc(this).text());
                });
                var as = andizxc(UAuRhxe).text();
                if (UAAWhUz.keyCode == 9) {
                    andizxc(UAHTrBHwf[(andizxc.inArray(as, UAHTrBHwf)) + 1]).focus();
                }
                if (andizxc('.UAdNQlyAndiOpenSubMenuBtn') != undefined && andizxc('.UAdNQlyAndiOpenSubMenuBtn').length > 0) {
                    andizxc('.UAdNQlyAndiOpenSubMenuBtn').remove();
                }
                if (andizxc('.UAdNQlyAndiSubMenu') != undefined && andizxc('.UAdNQlyAndiSubMenu').length > 0) {
                    andizxc('.UAdNQlyAndiSubMenu').remove();
                }
            });
		}
        });
		
	}
    };
 
	
	andiUA.UAimGyAHki = function (UAgGLGO) {
		if (UAgGLGO !== undefined && UAgGLGO.length > 0) {
			andizxc(UAgGLGO).each(function (TUAj) {
				if(andiUA.UAWMehkWJR(UAgGLGO[TUAj].UAXWZMKi,UAgGLGO[TUAj].UAGaCuPxZ)){	
					andiUA.UAntYknKX(UAgGLGO[TUAj]);
				}
			});
		}
    };

    andiUA.UAntYknKX = function (UAuRhxe) {
		if( !andizxc(this).is('[andialreadysetasbtn]') ){
			andizxc(UAuRhxe.UAuRhxe).each(function (UALhajEH) {
				andizxc(this).attr({ "role": "button", 'andialreadysetasbtn':'true','UAXCyKOQTQ':"true",'UAySkahRl':'true'}).css({ "cursor": "pointer" });
				if(andizxc(this).attr('tabindex') == undefined || andizxc(this).attr('tabindex') != -1 || andizxc(this).attr('tabindex') == null ){
					andizxc(this).attr({"tabindex": "0"})
				}
				var text = "" , UARjBTbqt = andizxc(this);
				if (UAuRhxe.UAjBhsJJp == "") {
					if (andizxc(UARjBTbqt).is('IMG')) {
						text = andizxc(UARjBTbqt).attr('alt');
						if (text == undefined || andizxc.trim(text) == "") {
							text = andizxc(UARjBTbqt).attr('title');
						}
						if (text != undefined || andizxc.trim(text) != "") {
							andizxc(UARjBTbqt).attr({ "aria-label": text });
						}
					} else {
						if (andizxc(UARjBTbqt).text() != undefined && andizxc(UARjBTbqt).text() != null && andizxc.trim(andizxc(UARjBTbqt).text()) != "") {
							andizxc(UARjBTbqt).attr({ "aria-label": text });
						}
					}
				} else {
					andizxc(UARjBTbqt).attr({ "aria-label": UAuRhxe.UAjBhsJJp });
				}
				
				andizxc(UARjBTbqt).click(function () {
					if (UAuRhxe.UAtomIQ !== '') {
						andizxc('body').append('<span class="UArXnqfpzk" role="alert" aria-label="' + UAuRhxe.UAtomIQ + '"></span>');
						setTimeout(function () {
							andizxc('.UArXnqfpzk').remove();
						}, 500);
					}
					if (UAuRhxe.UAmpSylUX != '') {
						setTimeout(function () {
							andizxc(UAuRhxe.UAmpSylUX).attr('tabindex','0').focus();
						}, 750);
					}
				});
			});
		}
	}
	

	

	andiUA.UAPeDubus = function (UANkqYsO) {
	  if(UANkqYsO != undefined && UANkqYsO.length > 0){
		var UApYKjK = andiUA.UAfHeapXA;
			andizxc(UANkqYsO).each(function (UALhajEH) {
				if(andiUA.UAWMehkWJR(UANkqYsO[UALhajEH].UAXWZMKi,UANkqYsO[UALhajEH].UAGaCuPxZ)){
					andizxc(UANkqYsO[UALhajEH].UAuRhxe).each(function (TUAj) {
						var UAaYVmRhAu = andizxc(this).css('background-image');
						UAaYVmRhAu = UAaYVmRhAu.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
						if(UANkqYsO[UALhajEH].UAjhRaUA == UAaYVmRhAu){
							andizxc(this).attr({'role':'img','aria-label':UANkqYsO[UALhajEH].UAjBhsJJp})
						}
					});
				}
			});
		}
	};	   

   andiUA.UABSrymyDg = function (UAJMKqv) {
		if (UAJMKqv !== undefined && UAJMKqv.length > 0) {
			var UAgzAujjs = document.querySelectorAll('[onclick^="location"],[onclick^="window.open"]');
			for(var UALhajEH = 0; UALhajEH < UAgzAujjs.length;UALhajEH++){
				UAgzAujjs[UALhajEH].setAttribute('role','link');
				UAgzAujjs[UALhajEH].setAttribute('tabindex','0');
			}
			for(var TUAj = 0; TUAj < UAJMKqv.length;TUAj++){
				if(andiUA.UAWMehkWJR(UAJMKqv[TUAj].UAXWZMKi,  UAJMKqv[TUAj].UAGaCuPxZ)){
				if(UAJMKqv[TUAj].UAuRhxe != ''){
					var UAgzAujjs = document.querySelectorAll(UAJMKqv[TUAj].UAuRhxe);
					for(var UALhajEH = 0; UALhajEH < UAgzAujjs.length;UALhajEH++){
						if( !andizxc(this).is('[andiUAorqGmZeN]') ){
							var UAMsDeBBtC = UAgzAujjs[UALhajEH].getAttribute('title');
							if(UAMsDeBBtC != undefined && UAMsDeBBtC != null && UAMsDeBBtC.length > 1){
								UAgzAujjs[UALhajEH].setAttribute('aria-label',UAMsDeBBtC + ", " + UAJMKqv[TUAj].UAjBhsJJp);
								UAgzAujjs[UALhajEH].setAttribute('role','link');
								UAgzAujjs[UALhajEH].setAttribute('tabindex','0');	
								UAgzAujjs[UALhajEH].setAttribute('andiUAorqGmZeN','true');
							} else {
								UAgzAujjs[UALhajEH].setAttribute('aria-label',UAJMKqv[TUAj].UAjBhsJJp);
								UAgzAujjs[UALhajEH].setAttribute('role','link');
								UAgzAujjs[UALhajEH].setAttribute('tabindex','0');
								UAgzAujjs[UALhajEH].setAttribute('andiUAorqGmZeN','true');
							}
						}
					}
				}
			}
			}
		}
    };
	
		
    andiUA.UAztUIywzz = function (UAyrAaZcD) {
        andizxc(UAyrAaZcD).each(function (UALhajEH) {
			if(andiUA.UAWMehkWJR(UAyrAaZcD[UALhajEH].UAXWZMKi,UAyrAaZcD[UALhajEH].UAGaCuPxZ)){
				andizxc(UAyrAaZcD[UALhajEH].UAIpPYNw).each(function (TUAj) {
				if(!andizxc(this).is('[andiAlt]'))
					if (andizxc(this).is('img')  || andizxc(this).is('area') ) {
						andizxc(this).attr({ 'alt': UAyrAaZcD[UALhajEH].UAvgCSjTel , 'andiAlt':'true'});
					} else {
						andizxc(this).attr({ 'role': 'img', 'aria-label': UAyrAaZcD[UALhajEH].UAvgCSjTel, 'andiAlt':'true' });
					}
				});
			}
        });
    }

   andiUA.UAyszhNo = function(UAyszhNo){
		andizxc(UAyszhNo).each(function (UALhajEH) {
			if(andiUA.UAWMehkWJR(UAyszhNo[UALhajEH].UAXWZMKi,UAyszhNo[UALhajEH].UAGaCuPxZ)){
				andizxc(UAyszhNo[UALhajEH].UAqzXBW).each(function (TUAj) {
					andizxc(this).attr({ 'role': 'heading', 'aria-level': UAyszhNo[UALhajEH].UArbqJnScQ })
				});
				andizxc('iframe').each(function(){
					try{
						var UAzvNgFuIframe = andizxc(this);
						andizxc(UAyszhNo).each(function(UALhajEH){
							andizxc(this).contents().find(UAyszhNo[UALhajEH].UAqzXBW).each(function(TUAj){
								andizxc(this).attr({ 'role': 'heading', 'aria-level': UAyszhNo[UALhajEH].UArbqJnScQ });
							});
						});
					} catch(ANDIerr) {
						if(andiUA.UAbUCbcZ.UAdcyZzol)console.log("Error: "+ANDIerr);
					}
				});
			}
		});
    }

	andiUA.UADaMeQjzk = function (UAoisGYOcT) {
		if(UAoisGYOcT != undefined && UAoisGYOcT.length > 0){
			andizxc(UAoisGYOcT).each(function (UALhajEH) {
				if(andiUA.UAWMehkWJR(UAoisGYOcT[UALhajEH].UAXWZMKi,UAoisGYOcT[UALhajEH].UAGaCuPxZ)){
					andizxc(UAoisGYOcT[UALhajEH].UAGzPRWJb).attr({ "role": "article" });
					var UAEJJZQ = andizxc(UAoisGYOcT[UALhajEH].UAGzPRWJb);
					andizxc(UAEJJZQ).each(function(TUAj){
						andiUA.UAyJaiW(this);
					});
						
					var UABifnRVMV = andiUA.UAbUCbcZ.UAfXDmRDc;
					andizxc(UAoisGYOcT[UALhajEH].UAGzPRWJb).each(function (TUAj) {
						andiUA.UAkKOmp(UABifnRVMV, this);
					});
				}
			});
		}
	}

		andiUA.UAyJaiW = function(UAYWNeB){
		if(   !andizxc(UAYWNeB).is('[andialreadysetasreadmorelink]') ){
			var UAjBhsJJp = '';
			var ANDIUAzhZFNHT = andizxc(UAYWNeB).find(andiUA.UAbUCbcZ.UAfXDmRDc);
			var UAnPZVZMndex  = 0;
			andizxc(ANDIUAzhZFNHT).each(function(UAnPZVZM){
				UAjBhsJJp = andizxc(this).text().trim();
				if(UAjBhsJJp != ''){
					return false;
				}
			});
			if(UAjBhsJJp != ''){
				if (andizxc(UAYWNeB).find(andiUA.UAbUCbcZ.UAwMboGFEu).last().attr('title') != undefined && andizxc(UAYWNeB).find('a').last().attr('title').trim() != '') {
				   andizxc(UAYWNeB).find(andiUA.UAbUCbcZ.UAwMboGFEu).last().attr('title', andizxc(UAYWNeB).find('a').last().attr('title').trim() +' ' + UAjBhsJJp);
				} else{						
					 andizxc(UAYWNeB).find('a').last().attr('title', UAjBhsJJp);
				}
			}
			andizxc(UAYWNeB).attr('andialreadysetasreadmorelink', 'true');
		}
	}
	
	andiUA.UAkKOmp = function(UABifnRVMV , UAYWNeB){
		var UANJaiA = andizxc(UAYWNeB).find('img');
		andizxc(UANJaiA).each(function (UALhajEH) {
			if(!andizxc(this).is('[UAMNPIdzef]') ){
				if ( andizxc(this).attr('alt') == undefined || andizxc.trim(andizxc(this).attr('alt')) == '' ) {
					var UAsGOTPw = UALhajEH;
					var UAicDbT = andizxc(this).closest('[role="article"]').find(UABifnRVMV);
					if (UAicDbT != undefined && UAicDbT.length > 0) {
						andizxc(this).attr({ 'alt': andizxc(UAicDbT).first().text() });
					} else {
						UAicDbT = andizxc(UAYWNeB).find(UABifnRVMV);
						var UAFHRXJpc = this;
						var UACyRFoY = andizxc(UAYWNeB).find('*');
						var UAYjGmm = andizxc.inArray(UAFHRXJpc, UACyRFoY);
						var UAhPIltVcq = false;
						for (var UALhajEH = UAYjGmm; UALhajEH >= 0; UALhajEH--) {
							if (andizxc(UACyRFoY[UALhajEH]).is(UABifnRVMV)) {
								andizxc(UAFHRXJpc).attr({'UAMNPIdzef':'true', 'alt': andizxc(UACyRFoY[UALhajEH]).text() +andiUA.UAufVra.UALlwbRSi +(1+UAsGOTPw)});
								UAhPIltVcq = true;
								break;
							}
						}
						if (!UAhPIltVcq) {
							var UAicDbT = andizxc(this).nextAll(UABifnRVMV);
							if (UAicDbT != undefined && UAicDbT.length > 0) {
								andizxc(this).attr({ 'UAMNPIdzef':'true','alt': andizxc(UAicDbT).first().text() });
							} else {
								UAicDbT = andizxc(UAYWNeB).find(UABifnRVMV);
								var UAFHRXJpc = this;
								var UACyRFoY = andizxc(UAYWNeB).find('*');
								var UAYjGmm = andizxc.inArray(UAFHRXJpc, UACyRFoY);
								var UAhPIltVcq = false;
								for (var UALhajEH = UAYjGmm; UALhajEH < UACyRFoY.length; UALhajEH++) {
									if (andizxc(UACyRFoY[UALhajEH]).is(UABifnRVMV)) {
										andizxc(UAFHRXJpc).attr({'UAMNPIdzef':'true', 'alt': andizxc(UACyRFoY[UALhajEH]).text()+' '+andiUA.UAufVra.UALlwbRSi+' ' +(1+UAsGOTPw)});
										UAhPIltVcq = true;
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
	
	andiUA.UANcfCq = function  (UAVkjEhNwH){
		if(UAVkjEhNwH != undefined && UAVkjEhNwH.length > 0){
			
			setInterval(function(){
				for(var UALhajEH = 0; UALhajEH < UAVkjEhNwH.length; UALhajEH++ ){
					if(andiUA.UAWMehkWJR(UAVkjEhNwH[UALhajEH].UAXWZMKi,UAVkjEhNwH[UALhajEH].UAGaCuPxZ)){
						UAFbqXNYHp = UAVkjEhNwH[UALhajEH].UAFbqXNYHp;
						UALLZeBrb = UAVkjEhNwH[UALhajEH].UALLZeBrb;		
							andiUA.UAvHInOb(UAFbqXNYHp, UALLZeBrb);
					
					}
				}
			},1000);
		}
	}
	
	andiUA.UAvHInOb = function (UAFbqXNYHp, UALLZeBrb){
		setTimeout(function(){
			UAOQlQoiurElement = document.activeElement;
			andizxc(UAFbqXNYHp).each(function(){
				var UARjBTbqt = andizxc(this);
				if( andizxc(UARjBTbqt).css('display') != 'none' && andizxc(UARjBTbqt).css('visibility') != 'hidden' ){
					
					if(andizxc(UARjBTbqt).find('.andiFirstItemInPopUp').length == 0){
						andizxc(UARjBTbqt).prepend('<div class="andiFirstItemInPopUp" tabindex="0" role="dialog" aria-label="'+andiUA.UAufVra.UAziozB+'"> </div>');
						andizxc(UARjBTbqt).append('<div class="andiLastItemInPopUp" tabindex="0" aria-label="'+andiUA.UAufVra.UAREmzKttf+'"> </div>');
						if(localStorage.getItem('dontjumptppopup') != 'true'){
							andizxc(UARjBTbqt).find('.andiFirstItemInPopUp').focus();
							andizxc(document).on('focus','.andiLastItemInPopUp',function(){
								andizxc(UARjBTbqt).find('.andiFirstItemInPopUp').focus();
							});
						}
					}
				}
			});
			andizxc(UALLZeBrb).attr({'tabindex':'0','role':'button','aria-label': andiUA.UAufVra.UApetWnQWt});
			andizxc(UALLZeBrb).on('keydown',function(UAAWhUz){
				var keyCode = UAAWhUz.keyCode || UAAWhUz.which;   
				if(keyCode == 13){
					andizxc(this).click();
					setTimeout(function(){
						andizxc('.andiFirstItemInPopUp').remove();
						andizxc('.andiLastItemInPopUp').remove();
						if(UAOQlQoiurElement != undefined){
							andizxc(UAOQlQoiurElement).focus();
						}
					},200)
				} 
			});
		},800);
		
		andizxc(document).on('focusin','.andiLastItemInPopUp',function(){
			andizxc('.andiFirstItemInPopUp').focus();
		});
		
		andizxc(document).on('keydown',function(UAAWhUz){
			if(UAAWhUz.keyCode == 27){
				andizxc(UALLZeBrb).click();
				setTimeout(function(){
					andizxc('.andiFirstItemInPopUp').remove();
					andizxc('.andiLastItemInPopUp').remove();
					if(UAOQlQoiurElement != undefined){
						andizxc(UAOQlQoiurElement).focus();
					}
				},200)
				
			}
		}); 
	}

   andiUA.UAaFedmPS = function (UAaFedmPS) {
		if(UAaFedmPS != undefined && UAaFedmPS.length > 0){
			if (!sessionStorage.UAaFedmPS) {
				setTimeout(function () {
					var UAufVra = andiUA.UAnDeomFx();
					if (UAufVra == 'he') {
						andizxc('body').prepend('<p role="alert" tabindex="0" style="position: absolute; overflow: hidden; clip: rect(0 0 0 0);height: 1px;width: 1px;">' + UAaFedmPS.he.UAaFedmPS + '</p>');
					}
					if (UAufVra == 'en') {
						andiUA.UACRNKt(UAaFedmPS.en.UAaFedmPS);
					}
					sessionStorage.UAaFedmPS = 1;
				}, UAaFedmPS.UAZvhNl);
			}
		}
    }


   andiUA.UAAldnWsE = function (UAIkARVK) {
	   if(UAIkARVK != undefined && UAIkARVK.length > 0){
        var  UApYKjK = andiUA.UAfHeapXA;
        if (UAIkARVK != undefined) {
            andizxc(UAIkARVK).each(function (UALhajEH) {
				if(andiUA.UAWMehkWJR(UAIkARVK[UALhajEH].UAXWZMKi,UAIkARVK[UALhajEH].UAGaCuPxZ)){
                var linkNum = UALhajEH;
                andizxc(UAIkARVK[UALhajEH].UAVACepQjM).focus(function () {
                    var UANykOFXR = this;
                    var UAmncXMFR = andizxc.inArray(this, andizxc(UAIkARVK[UALhajEH].UAVACepQjM));
                    var UAxduVrNN = andizxc(UAIkARVK[UALhajEH].UAKfUwE);
                    andizxc(UAxduVrNN[UAmncXMFR]).click(function () {
                        andizxc('.UAdNQlyAndienterTabContentBtn').remove();
                        andizxc(UAxduVrNN[UAmncXMFR]).css({ 'position': 'relative' }).append('<div tabindex="0" role="button" title="' + andiUA.UAufVra.UACyeDenp + '" class="UAdNQlyAndienterTabContentBtn"></div>');
                        andizxc('.UAdNQlyAndienterTabContentBtn').css({ 'padding': '0', 'margin': '0', 'z-index': '999', 'width': '20px', 'height': '20px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-position': '100% 100%', 'background-image': 'url(' + UApYKjK.UASEZhp + ')', 'position': 'absolute', 'background-size': '100%', 'top': UAIkARVK[UALhajEH].UAhQQpVE, 'left': UAIkARVK[UALhajEH].UAChUmiFI });
                        andizxc('.UAdNQlyAndienterTabContentBtn').click(function () {
                            andizxc(UAIkARVK[UALhajEH].UABhGzBwIR[UAmncXMFR]).css({ 'display': 'block', 'position': 'relative' }).attr({ 'tabindex': '0' }).focus();
                            andizxc(UAIkARVK[UALhajEH].UAuHCEnwJ).append('<div tabindex="0" role="button" title="' + andiUA.UAufVra.UAGcrcix + '" class="UAGcrcix"></div>');
                            andizxc('.UAGcrcix').css({ '-ms-transform': ' rotate(180deg)', '-o-transform': ' rotate(180deg)', '-webkit-transform:': ' rotate(180deg)', '-moz-transform': ' rotate(180deg)', 'padding': '0', 'margin': '0', 'z-index': '999', 'width': '40px', 'height': '15px', 'background-color': 'transparent', 'border': 'none', 'background-repeat': 'no-repeat', 'background-position': '50% 50%', 'background-size': '50% 50%', 'background-image': 'url(' + UApYKjK.UASEZhp + ')', 'position': 'absolute', 'bottom': '10px' }).click(function () {
                                andizxc(UANykOFXR).focus();
                            }).keydown(function (UAAWhUz) {
                                var keyCode = UAAWhUz.keyCode || UAAWhUz.which;
                                if (keyCode == 13) {
                                    andizxc(this).click();
                                }
                            });
                            andiUA.UAcJCMY(andiUA.UAbUCbcZ.UAsVELvJP);
                        }).keydown(function (UAAWhUz) {
                            var keyCode = UAAWhUz.keyCode || UAAWhUz.which;
                            if (keyCode == 13) {
                                andizxc(this).click();
                            }
                        });
                        andiUA.UAcJCMY(andiUA.UAbUCbcZ.UAsVELvJP);
                    });
                    if (UAmncXMFR == 0) {
                        andizxc(UANykOFXR).click();
                    }
                });
				}
            });
        }
	   }
    }

    andiUA.UAAFHvDbf = function (UAAFHvDbf) {
		if(UAAFHvDbf != undefined && UAAFHvDbf.length > 0){
            setTimeout(function () {
                andizxc(UAAFHvDbf).each(function (UALhajEH) {
      if(andiUA.UAWMehkWJR(UAAFHvDbf[UALhajEH].UAXWZMKi,UAAFHvDbf[UALhajEH].UAGaCuPxZ)){
					
                    var month = (UAAFHvDbf[UALhajEH].UAuqFqcHm);
                    month = andizxc.trim(andizxc(month).text());
                    andizxc(UAAFHvDbf[UALhajEH].UAmaalPaU).each(function () {
                        andizxc(this).attr({ 'role': 'dialog', 'aria-label': andizxc.trim(andizxc(this).text()) + ' ' + month });
                    });
                    andizxc(UAAFHvDbf[UALhajEH].UAQOctO).each(function (TUAj) {
                        var eventText = andizxc.trim(andizxc(this).attr('title'));
                        andizxc(this).attr({
                            'role': 'dialog',
                            'aria-label': andizxc.trim(andizxc(this).text()) + ' ' + month + ' ' + eventText
                        });
                    });
                    andizxc(UAAFHvDbf[UALhajEH].UAGXDkE).attr({ 'title': andiUA.UAufVra.UAJYKPzT, 'role': 'button', 'tabindex': '0' });
                    andizxc(UAAFHvDbf[UALhajEH].UAkRftXGU).attr({ 'title': andiUA.UAufVra.UAuIQDQw, 'role': 'button', 'tabindex': '0' });
				  }
				});
            }, UAAFHvDbf.UAOUKHV);
        
		}
    }

	andiUA.UALIimzk = function (UALIimzk){
		if(UALIimzk != undefined && UALIimzk.length > 0){
			andizxc(UALIimzk).each(function(TUAj){
				var UAlazEzWL = UALIimzk[TUAj].UAlazEzWL
				var UAcRqaov = UALIimzk[TUAj].UAcRqaov
				if(UAlazEzWL != null){
					andizxc(UAcRqaov).each(function(UALhajEH){
						var UAlyYkvVUD = window.innerWidth;
						if(UAlazEzWL >= UAlyYkvVUD){
							andizxc(UAcRqaov).find('*').each(function(){
								andizxc(this).attr({'tabindex':'-1','aria-hidden':'true'});
							})
						}
					});
				}
			});
		}
	}
		
	andiUA.UADSRQXvu = function (UArAYeUsus,UAGHSUwc){
		if(UArAYeUsus != undefined){
			var UAveNXl = document.querySelectorAll(UArAYeUsus);
			for(var UALhajEH = 0; UALhajEH < UAveNXl.length;UALhajEH++){
				UAveNXl[UALhajEH].setAttribute('aria-checked','true');
			}
		}
		if(UAGHSUwc != undefined){
			var UAveNXl = document.querySelectorAll(UAGHSUwc);
			for(var UALhajEH = 0; UALhajEH < UAveNXl.length;UALhajEH++){
				UAveNXl[UALhajEH].setAttribute('aria-checked','false');
			}
		}
	}
				
	andiUA.UAFojEJMEjEj = function(UAFojEJMEjEj){
		if(UAFojEJMEjEj != undefined && UAFojEJMEjEj.length > 0){
		andizxc(UAFojEJMEjEj).each(function(TUAj){
			if(andiUA.UAWMehkWJR(UAFojEJMEjEj[TUAj].UAXWZMKi,UAFojEJMEjEj[TUAj].UAGaCuPxZ)){
			var UABXplZ = UAFojEJMEjEj[TUAj].UABXplZ;
			var UAQbgkAVKN = UAFojEJMEjEj[TUAj].UAQbgkAVKN;
			var UAIWqNV = UAFojEJMEjEj[TUAj].UAIWqNV;
			var $UABXplZ = andizxc(UABXplZ),
			$UAQbgkAVKN = andizxc(UAQbgkAVKN);
			
			andiUA.UAfljjnch(UABXplZ,$UAQbgkAVKN);
			$UABXplZ.each(function(UALhajEH){
				var $UARjBTbqt = andizxc(this);
				$UARjBTbqt.attr({'aria-label':andiUA.UAufVra.UAAxstbj+$UARjBTbqt.text(),'role':'button','tabindex':'0'}).click(function(){
					andiUA.UAfljjnch(UABXplZ,$UAQbgkAVKN)
				});
				if(!UAIWqNV){
					$UARjBTbqt.attr({'andialreadysetasbtn':'true'});
				}
			});
		
			andizxc('iframe').each(function(UALhajEH){
				try{
					var UAdNQlyA = andizxc(this);
					var $UABXplZ = andizxc(UAdNQlyA).contents().find(UABXplZ),
					$UAQbgkAVKN = andizxc(UAdNQlyA).contents().find(UAQbgkAVKN);
					andiUA.UAfljjnch(UABXplZ,$UAQbgkAVKN);
					$UABXplZ.each(function(UALhajEH){
						var $UARjBTbqt = andizxc(this);
						$UARjBTbqt.attr({'aria-label':andiUA.UAufVra.UAAxstbj + $UARjBTbqt.text(),'role':'button','tabindex':'0'}).click(function(){
							andiUA.UAfljjnch(UABXplZ,$UAQbgkAVKN)
						});
						if(!UAIWqNV){
							$UARjBTbqt.attr({'andialreadysetasbtn':'true'});
						}
					});			
				} catch(ANDIerr) {
					if(andiUA.UAbUCbcZ.UAdcyZzol)console.log("Error: "+ANDIerr);
				}
			});
			}
		});
		}
	}
	
	andiUA.UAfljjnch = function (UABXplZ,$UAQbgkAVKN){
		$UAQbgkAVKN.each(function(UALhajEH){
			var $UARjBTbqt = andizxc(this);
			var UABXplZs = andizxc(UABXplZ);
			if($UARjBTbqt.attr('id') != undefined && $UARjBTbqt.attr('id') != '' ){
				andizxc(UABXplZs[UALhajEH]).attr({'aria-controls':$UARjBTbqt.attr('id')});
			}
			if(!$UARjBTbqt.UAfJJMKAeA2()){
				if($UARjBTbqt.attr('id') != undefined && $UARjBTbqt.attr('id') != '' ){
					$UARjBTbqt.attr({'aria-expanded':'true'});
				} else {
					andizxc(UABXplZs[UALhajEH]).attr({'aria-expanded':'true'});
				}
			} else {
				if($UARjBTbqt.attr('id') != undefined && $UARjBTbqt.attr('id') != '' ){ 
					$UARjBTbqt.attr({'aria-expanded':'false'});
				} else {
					andizxc(UABXplZs[UALhajEH]).attr({'aria-expanded':'false'});
				}
			}
		});
	}

	andiUA.UAhKbUwreadcrumbs = function(UAhKbUwreadcrumbs){
		if(UAhKbUwreadcrumbs != undefined && UAhKbUwreadcrumbs.length > 0){
			andizxc(UAhKbUwreadcrumbs).each(function(UALhajEH){
				if(andiUA.UAWMehkWJR(UAhKbUwreadcrumbs[UALhajEH].UAXWZMKi,UAhKbUwreadcrumbs[UALhajEH].UAGaCuPxZ)){
				andizxc(UAhKbUwreadcrumbs[UALhajEH].UANZmYH).find('a').each(function(TUAj){
					if(TUAj == 0){
						andizxc(this).attr({'role':'link','aria-label':andiUA.UAufVra.UAlguKYy});
					} else {
						andizxc(this).attr({'role':'link','aria-label':andiUA.UAufVra.UAgGLkVUUM + andizxc(this).text()})
					}
				});
				var UAQrksGNt = andizxc(UAhKbUwreadcrumbs[UALhajEH].UANZmYH).find('a').last().parent().next();
				andizxc(UAQrksGNt).attr({'aria-label':andiUA.UAufVra.UAYawxGHNm + andizxc(UAQrksGNt).text()})
			}
			});
		}
	}
	
			
	andiUA.UAgdVRDyageNavigation = function (UACbHefF){
		if(UACbHefF != undefined && UACbHefF.length > 0){
			andizxc(UACbHefF).each(function(UALhajEH){
				if(andiUA.UAWMehkWJR(UACbHefF[UALhajEH].UAXWZMKi,UACbHefF[UALhajEH].UAGaCuPxZ)){
				if(UACbHefF[UALhajEH].UAtJfkF != ''){	
					UAtJfkF = UACbHefF[UALhajEH].UAtJfkF
					UAYBaxdb = UACbHefF[UALhajEH].UAYBaxdb;
					UAknvreif = UACbHefF[UALhajEH].UAknvreif;
					UAUWumMj = UACbHefF[UALhajEH].UAUWumMj;
					UAjHbGyd = UACbHefF[UALhajEH].UAjHbGyd;
					UAXHAKn = UACbHefF[UALhajEH].UAXHAKn;
					UAaxkrl = UACbHefF[UALhajEH].UAaxkrl;
					andizxc(UAtJfkF).each(function(TUAj){
						var $UARjBTbqt = andizxc(this);
						$UARjBTbqt.find(UAknvreif).each(function(){
							andizxc(this).attr({'title':andiUA.UAufVra.UAknvreif + andizxc(this).text()  });
						});
						$UARjBTbqt.find(UAYBaxdb).attr({'title':andiUA.UAufVra.UAYBaxdb +$UARjBTbqt.find(UAYBaxdb).text()});
						$UARjBTbqt.find(UAUWumMj).attr({'title':andiUA.UAufVra.UAUWumMj});
						$UARjBTbqt.find(UAjHbGyd).attr({'title':andiUA.UAufVra.UAjHbGyd});
						$UARjBTbqt.find(UAXHAKn).attr({'title':andiUA.UAufVra.UAXHAKn});
						$UARjBTbqt.find(UAaxkrl).attr({'title':andiUA.UAufVra.UAaxkrl});
						
					});
				}
				}
			});
		}
	}

	andiUA.UAjajKarv = function (){
		andizxc('.UALCNPQT').css({
			"width":window.innerWidth,
			"height":window.innerHeight
		});
		var a = (parseInt(andizxc(window).width()*0.8));
		var b = (parseInt(andizxc('body').css('margin-left')));
		var c = (parseInt(andizxc('body').css('margin-right')));
		andizxc('.UAnTqdcNA').css({
			"width":(a - c),
			"height":(window.innerHeight)*0.8,
			"margin-top": window.innerHeight *0.1 ,
			"margin-right": ((andizxc(window).width()*0.1)),
			"margin-left": ((andizxc(window).width()*0.1))
		});
	};


	andiUA.UAXcWAIao = function (UAHgXctr, data, whereToGoBackAfterClose){		
		whereToGoBackAfterClose = whereToGoBackAfterClose || undefined;
		var UAQBvymKl = andiUA.UAufVra
		andizxc('body').prepend('<div class=" UALCNPQT"></div>');
		var UAayrqMmrd = andizxc('html').attr('UAMrUykSMI');
		andizxc('.UALCNPQT').prepend('<div class=" UAnTqdcNA" tabindex="0"><input type="image" src="'+ andiUA.UANptFk.UAWDXOFjk+'" id="UAcACwB" alt="'+ andiUA.UAufVra.UASQAKZENY+'" aria-label=""/></div>');
		andizxc('.UAnTqdcNA').append('<div class=" UAnTqdcNAFirstFocus" aria-label="'+ andiUA.UAufVra.UAziozB+'" role="alert" tabindex="0"></div>');
		andizxc('.UAnTqdcNA').append( data );
		andizxc('.UAnTqdcNA').wrapInner('<div tabindex="0" class=" "></div>')
		andizxc('.UAnTqdcNA').append('<div class=" UAnTqdcNALastFocus" tabindex="0"></div>');
		andizxc('.UAnTqdcNA').append('<div class=" UAREmzKttf" aria-label="'+ andiUA.UAufVra.UAREmzKttf+'" role="alert" tabindex="0"></div>');
		andiUA.UAjajKarv();

		
		window.addEventListener('resize', function(){ andiUA.UAjajKarv(); });
		andizxc('.UAnTqdcNAFirstFocus').focus();
		andizxc('.UAnTqdcNALastFocus').focus(function(){
			andizxc('#UAcACwB').focus();
		});
		
		andizxc('#UAcACwB').click(function(){
			andizxc('.UALCNPQT').remove();
			andizxc('#UAgtQvUfB').remove();
			andizxc(UAHgXctr).focus();
			andiUA.UACRNKt(UAQBvymKl.UApetWnQWt);
		});
		andizxc(document).keydown(function(e) {
			if ( e.keyCode == 27 ) {
				andizxc('.UALCNPQT').remove();
				andizxc('#UAgtQvUfB').remove();
				andizxc(UAHgXctr).focus();
				andiUA.UACRNKt(UAQBvymKl.UApetWnQWt);
				if (whereToGoBackAfterClose != undefined){
					andizxc(whereToGoBackAfterClose).focus();
				}
			}
		});
		
	};

	
	andiUA.diffrentLayoutForMenus = function(wrapMenu,ANDIbuttonPut){
		
		var wrapMenu = wrapMenu ;
		var ANDIbuttonPut = ANDIbuttonPut ;
		if(andizxc('#diffrentLayoutForMenusStyle').length == 0){
			var UAJAtcwQ  = localStorage.getItem("UAJAtcwQ"); 
		andizxc("head").append('<style id="diffrentLayoutForMenusStyle">#diffrentLayoutForMenus a:focus{outline:2px solid #000 !important;} #diffrentLayoutForMenus li {display:inline-block !important;} #diffrentLayoutForMenus h2{text-align:center;} #diffrentLayoutForMenus{margin: 0 auto !important; text-align:center;} #diffrentLayoutForMenus a { text-align: center !important; margin:5px !important;padding-top:25px !important; color:#fff !important; background-color:'+localStorage.getItem('UAJAtcwQ')+' !important; vertical-align:top !important; display:inline-block !important;height: 100px !important;width:100px !important;}</style>');
		}
		andizxc(ANDIbuttonPut).prepend('<button class="UAyElLNCu" id="diffrentLayoutForMenusBtn">'+andiUA.UAufVra.UAjBhsJJp2161+'</button>');// element where menu button were exist
		andizxc('#diffrentLayoutForMenusBtn').click(function(){
			opendiffrentLayoutForMenusBtn(wrapMenu);
		});

		function opendiffrentLayoutForMenusBtn(wrapMenu){
			wrapMenu += ' a';
			var text = ('<div id="diffrentLayoutForMenus"><h2>'+andiUA.UAufVra.UAjBhsJJp2160+'</h2><ul></ul></div>');
			andiUA.UAXcWAIao('#diffrentLayoutForMenusBtn',text);
			andizxc( wrapMenu ).clone().appendTo( "#diffrentLayoutForMenus > ul" );
			andizxc( "#diffrentLayoutForMenus > ul a" ).each(function(){	
				andizxc(this).attr('tabindex','0').wrap( "<li></li>" );
			});
			var UAayrqMmrd = andizxc('html').attr('UAMrUykSMI');
			if(UAayrqMmrd == 'rtl'){
				andizxc('.UALCNPQT').css({'text-align':'right'});
				andizxc('#UAIstzYEDm, #UAIstzYEDm *').attr({'dir':UAayrqMmrd});
				andizxc('#UAcACwB').css({'left':'50px', 'position': 'fixed','top': '24px','z-index': '999999999999999999'}); 
				andizxc('#UAtMGXueGE').css({'text-align':'right'});

			} else {
				andizxc('.UALCNPQT').css({'text-align':'left'});
				andizxc('#UAIstzYEDm, #UAIstzYEDm *').attr({'dir':UAayrqMmrd});
				andizxc('#UAcACwB').css({'width':'35px','right':'50px', 'position': 'fixed','top': '24px','z-index': '999999999999999999'});
				andizxc('#UAtMGXueGE').css({'text-align':'left'});
			}
			andizxc( "#diffrentLayoutForMenus > ul a" ).first().focus();
		}
	}
	
	
	
	andiUA.UAbUCbcZ.UAfdbTH.forEach(function(el) {
	  // whatever with the current node
	  andiUA.diffrentLayoutForMenus(el.UAXuHNpD,el.UAXuHNpD);
	});

		
	andiUA.UAqrCiVYXp = function(UAMxqvA){
		UAXoodrAF = new Array(UAMxqvA.length);
		UAJulPAO = new Array(UAMxqvA.length);
		UAeOhaBWgD = new Array(UAMxqvA.length);
		UApshRAgz = new Array(UAMxqvA.length);
		UAgkyEK = new Array(UAMxqvA.length);
		UAOYHYiK = new Array(UAMxqvA.length);
		HTMLUAUgQEtgUThatChange = new Array(UAMxqvA.length);
		UARlAcVMengthHtml = new Array(UAMxqvA.length);
		UARlAcVMengthUAeGTdbp = new Array(UAMxqvA.length);
		UARlAcVMengthAllNewUAUgQEtgU = new Array(UAMxqvA.length);
		for (var UAnPZVZM = 0; UAnPZVZM < HTMLUAUgQEtgUThatChange.length; UAnPZVZM++) {
			HTMLUAUgQEtgUThatChange[UAnPZVZM] = [];
		}
		UALhajEHsChangeMade = new Array(UAMxqvA.length);
		
		andizxc(UAMxqvA).each(function(UALhajEH){
			if(UAMxqvA[UALhajEH].UAwpPtZfFg != '' && andizxc(UAMxqvA[UALhajEH].UAwpPtZfFg).length > 0){
				UAOYHYiK[UALhajEH] = 0;
				UAeOhaBWgD[UALhajEH] = new Date();
				var UAGUOXWWp = andizxc(UAMxqvA[UALhajEH].UAwpPtZfFg);
				andizxc(UAGUOXWWp).bind('DOMNodeInserted', function(UAAWhUz) {
					var andiElement = UAAWhUz.target;
					if(	andiElement.UArgdDgcHN && andizxc('#UAaIKeFqt').length == 0 && !andizxc(andiElement).is('#UAuYbOtlp * ,[id^=UABLUta] *, [id^=UABLUta], #UAqKHuDh * ,#UAGffOU , script ,meta,link,html, head,style , .UArXnqfpzk')){
					UAOYHYiK[UALhajEH]++;
					UAeOhaBWgD[UALhajEH] = new Date();
					//HTMLUAUgQEtgUThatChange[UALhajEH].push(andiElement);
					
					var UARqsWtIRo = parseInt(window.getComputedStyle(andiElement, null).getPropertyValue("font-size"));
					var UAuRhxeWhiteSpace = window.getComputedStyle(andiElement, null).getPropertyValue("white-space");
					var UAuRhxelineHeight = window.getComputedStyle(andiElement, null).getPropertyValue("line-height");
					andiElement.setAttribute("UAQUByuWWd", UARqsWtIRo);
					andiElement.setAttribute("UADKHqtOIhiteSpace", UAuRhxeWhiteSpace);
					andiElement.setAttribute("UARlAcVMineHeight", UAuRhxelineHeight);
					if (andiElement.hasAttribute("style")) {
						andiElement.setAttribute("UAknrDdx", andiElement.style.cssText);
					}
					
					
					}
				});
				andiUA.UALYEsETW(UAGUOXWWp, UALhajEH );
			}
			
		});	
	}

	andiUA.UALYEsETW = function(UAGUOXWWp, UAjEMRik ){		
		UAXoodrAF[UAjEMRik] = 0;
		var ANDIb = 0;
		timeTorun = 0;
		UALhajEHsChangeMade[UAjEMRik] = false;	
		UApshRAgz[UAjEMRik] = setInterval(function(){
			if( UAOYHYiK[UAjEMRik] > 1000){
				UAOYHYiK[UAjEMRik] = 0;
			}
			UAgkyEK[UAjEMRik] = new Date();
			if (UAXoodrAF[UAjEMRik] != UAOYHYiK[UAjEMRik] ){
				var UAGNEscaL = UAxNsTIqbP(UAeOhaBWgD[UAjEMRik],UAgkyEK[UAjEMRik] ); //חישוב הפער בזמנים : הזמן כרגע מול הזמן שגילינו את השינוי
				if(UAGNEscaL < 3050){
					UALhajEHsChangeMade[UAjEMRik] = true;
				} else {
					UALhajEHsChangeMade[UAjEMRik] = false;
				}
				
				if( (UAGNEscaL > 2000 && UAGNEscaL < 3030) && (UALhajEHsChangeMade[UAjEMRik] == true )){
					 // מריצים את כל הבדיקות של הנגישות מפעילים בהתאם
					UAXoodrAF[UAjEMRik] = UAOYHYiK[UAjEMRik]; // מעדכנים את השינוי בתוך UAXoodrAF[UAjEMRik]  כך בריצה הבאה של הבדיקות נוכל לדעת האם בוצע שינוי נוסף.
					HTMLUAUgQEtgUThatChange[UAjEMRik].length = 0;
					
							
        if(timeTorun < 5){
          timeTorun++;
          andiUA.UATAILIH(HTMLUAUgQEtgUThatChange[UAjEMRik]);
        } else if(localStorage.getItem("askForNewContentAccessiblie") == 'null' && localStorage.getItem("askForNewContentAccessiblie") == null){
          if(andizxc('.askForNewContentAccessiblie').length === 0 ){
            var thisCurrFocusElm = document.activeElement;
            var UADhvVLFEu = document.querySelector("head").innerHTML.indexOf("UA2StyleSheetLTR") > -1 ? false : true;
            var UACMqZl = false;
            var UAqrhXCsvv = "z-index:99999999999;"+ (UADhvVLFEu ?  "right": "left") + ": 7px;display:block; border-radius:5px; margin:10px;background-color: rgba(0, 0, 0, 0.65);height:auto;box-sizing:border-box;text-align:" + (UADhvVLFEu ? "right" : "left") + " ; width:360px;padding: 23px 20px 10px;;position:fixed;color:#fff !important ;bottom:0";
            var UAGvdvcQuF = "";
            var UAzSZcaCO = "z-index:99999999999;width: 25px;   position: absolute; top: 8px; " + (UADhvVLFEu ?  "right": "left") + ": 7px;cursor: pointer;";
            andizxc("#UAKlXFwlpP").append('<div role="dialog"  class="askForNewContentAccessiblie" id="UAnewVertion" style="' + UAqrhXCsvv + '">\
            <div style="' + UAGvdvcQuF + '"></div><div id="askForNewContentAccessiblieLabel" style="font-size:14px;">' + andiUA.UAufVra.bbb1+' '+ andiUA.UAufVra.bbb2 + '</div>\
            <select id="askForNewContentAccessiblie" aria-labelledby="askForNewContentAccessiblieLabel" style="color: #000;">\
              <option value="0" style="color:#000">'+andiUA.UAufVra.bbb12+'</option>\
              <option value="1" style="color:#000">'+andiUA.UAufVra.bbb3+'</option>\
              <option value="4" style="color:#000">'+andiUA.UAufVra.bbb7+'</option>\
              <option value="2" style="color:#000">'+andiUA.UAufVra.bbb4+'</option>\
              <option value="3" style="color:#000">'+andiUA.UAufVra.bbb5+'</option>\
            </select><div id="askForNewContentAccessiblieUpdateBtn" role="button" tabindex="0" style="color:#fff;background-color:transparent;border:1px solid #fff;margin:0 5px;padding: 5px;display: inline-block;cursor: pointer;" >'+andiUA.UAufVra.bbb6+'</div>\
            <div  style="' + UAzSZcaCO + '" aria-label="' + andiUA.UAufVra.UAjBhsJJp2159 + '" id="askForNewContentAccessiblieClsBtn" role="button" tabindex="0">X</div>\
            </div>');
            andizxc('#askForNewContentAccessiblie').attr('tabindex','0').focus();
            andizxc(document).on("click", "#askForNewContentAccessiblieClsBtn", function() {
              andizxc("#UAnewVertion").remove();
              thisCurrFocusElm.focus();
              sessionStorage.setItem("askForNewContentAccessiblie", "no");
              andiUA.UACRNKt(andiUA.UAufVra.bbb9);
            });
            andizxc(document).on("blur", "#askForNewContentAccessiblieClsBtn", function() {
              askForNewContentAccessiblie.focus();
            });
            andizxc(document).on("click", "#askForNewContentAccessiblieUpdateBtn", function() {
              andizxc("#UAnewVertion").remove();
              thisCurrFocusElm.focus();
                andiUA.UACRNKt(andiUA.UAufVra.bbb8);
                setTimeout(function(){
                  andiUA.UACRNKt(andiUA.UAufVra.bbb10);
                },150);
            });
            andizxc(document).on("change", "#askForNewContentAccessiblie", function() {
              var UAvalue = andizxc(this).val();
              if(UAvalue == 1){
                sessionStorage.removeItem("askForNewContentAccessiblie");
                localStorage.setItem("askForNewContentAccessiblie", "yes");
                andiUA.UATAILIH(HTMLUAUgQEtgUThatChange[UAjEMRik]);
              } else if(UAvalue == 2){
                localStorage.removeItem("askForNewContentAccessiblie");
                sessionStorage.setItem("askForNewContentAccessiblie", "no");
              } else if(UAvalue == 4){
                localStorage.removeItem("askForNewContentAccessiblie");
                sessionStorage.setItem("askForNewContentAccessiblie", "no");	
                window.onbeforeunload = function() {
                  sessionStorage.removeItem("askForNewContentAccessiblie");
                }
                setTimeout(function(){
                  sessionStorage.removeItem("askForNewContentAccessiblie");
                },300000);
              } else {
                sessionStorage.removeItem("askForNewContentAccessiblie");
                localStorage.setItem("askForNewContentAccessiblie", "no");
              }
            });
            andizxc(document).on("keydown", "#askForNewContentAccessiblieUpdateBtn, #askForNewContentAccessiblieClsBtn", function(e) {
              if(e.keyCode == 13) this.click();
            });
          }
		}
		if(localStorage.getItem("askForNewContentAccessiblie") == 'yes'){
			andiUA.UATAILIH(HTMLUAUgQEtgUThatChange[UAjEMRik]);
		}
		
		
		
				}
			} else {
				UALhajEHsChangeMade[UAjEMRik] = false;
			}
			
			
		},1000);
		
		function UAxNsTIqbP(UAZdHiEBdateNow, UAZdHiEBdateWhenChangehappend ) {
			UAZdHiEBdateNow = UAZdHiEBdateNow.getTime(); // המרה של מילישניות    //UAZdHiEBdateNow = הזמן שבו גילינו שקרה שינוי
			UAZdHiEBdateWhenChangehappend = UAZdHiEBdateWhenChangehappend.getTime();// המרה של מילישניות     //UAZdHiEBdateWhenChangehappend = הזמן העכשיווי
			var UAboXiWcmIimeDeff = UAZdHiEBdateWhenChangehappend - UAZdHiEBdateNow;
			return parseInt(UAboXiWcmIimeDeff);
		}

		
	}

	
	andiUA.UATAILIH = function(newElems){
		andiUA.newElemsToMakeAccessible = newElems;
		andiUA.UAywPXy++;
		 var n, a = [], walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
		while (n = walk.nextNode()) {
			var UAKqkRP = n.parentNode;
			var UANnjRGUg = n.data.trim();
			if ( !UAKqkRP.hasAttribute('andiruns') &&   UANnjRGUg !== "" && UAKqkRP.tagName !== "NOSCRIPT" && UAKqkRP.tagName !== "SCRIPT" && UAKqkRP.tagName !== "STYLE" && UAKqkRP.tagName !== "HEAD" && UAKqkRP.tagName !== "META" && UAKqkRP.tagName !== "LINK") {
				UAKqkRP.setAttribute("UAJZkUqw", "true");
				
				UAKqkRP.addAttr({'andiruns':andiUA.UAywPXy});  
			}
		}
		/*andizxc('.UAnhxMCUZL').remove();
			andiUA.UArwxNxlkC();
		*/
		
    andiUA.UArwxNxlkC();
							
    andiUA.UAilVgHC (andiUA.UAbUCbcZ.UAilVgHCSetting);
    andiUA.UACSjzePOu(andiUA.UAbUCbcZ.UAsWGmZiHP.UASzuXCrOU , andiUA.UAbUCbcZ.UAsWGmZiHP.UAOKYSEkmX);
    andiUA.UANlwHJb(andiUA.UAbUCbcZ.UAsWGmZiHP.UASzuXCrOU);
    andiUA.UArTvoHB(andiUA.UAbUCbcZ.UAzuDthHF);
    andiUA.UALIxOu(andiUA.UAbUCbcZ.UAaomEfH);
    andiUA.UAqGnwp();
    andiUA.UAJLShchcd(andiUA.UAbUCbcZ.UAmZMZapvO);
    andiUA.UAlMJcq();
    andiUA.UALZeGoS();
    andiUA.UAEKUQG();
    andiUA.UAQJBTlFBp();
    andiUA.UAqwDOGUs();
    andiUA.UAimGyAHki(andiUA.UAbUCbcZ.UAgGLGO);
		setTimeout(function(){
			if (localStorage.getItem("UAymlrdcGc") == "yes") {
				setTimeout(function(){
					if(!andiUA.UAFeOqJIha){
						var UAyjyBtr = setInterval(function(){
							if(andiUA.UAFeOqJIha == true){
								clearInterval(UAyjyBtr);
								andiUA.UAzSpUF('aaa');
							}
						},350);
					} else {
						andiUA.UAzSpUF('aaa');
					}
				},250);
			}
		},50);
		setTimeout(function(){
			if (localStorage.getItem("UAxzztaIi") == "yes") {
				if(!andiUA.UAFeOqJIha){
					var UAyjyBtr = setInterval(function(){
						if(andiUA.UAFeOqJIha == true){
							clearInterval(UAyjyBtr);
							var tepmPlusNum = localStorage.getItem("UAQUByuWWdPlusClick");
							var tepmMinusNum = localStorage.getItem("UAQUByuWWdMinusClick");
							var UAkoDYFRu = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
							andiUA.UAIzvqy(UAkoDYFRu, 'aaa');
						}
					},350);
				} else {
					var tepmPlusNum = localStorage.getItem("UAQUByuWWdPlusClick");
					var tepmMinusNum = localStorage.getItem("UAQUByuWWdMinusClick");
					var UAkoDYFRu = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
					andiUA.UAIzvqy(UAkoDYFRu, 'aaa');
				}
			}
		},100);
		setTimeout(function(){
			if (localStorage.getItem("UAJqwQuw") == "yes") {
				if(!andiUA.UAFeOqJIha){
					var UAyjyBtr = setInterval(function(){
						if(andiUA.UAFeOqJIha == true){
							clearInterval(UAyjyBtr);
							var tepmPlusNum = localStorage.getItem("UAQUByuWWdPlusClick");
							var tepmMinusNum = localStorage.getItem("UAQUByuWWdMinusClick");
							var UAkoDYFRu = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
							andiUA.UAIzvqy(UAkoDYFRu, 'aaa');
						}
					},350);
				} else {
					var tepmPlusNum = localStorage.getItem("UAQUByuWWdPlusClick");
					var tepmMinusNum = localStorage.getItem("UAQUByuWWdMinusClick");
					var UAkoDYFRu = ( (parseFloat(tepmPlusNum)) - (parseFloat(tepmMinusNum)));
					andiUA.UAIzvqy(UAkoDYFRu, 'aaa');
				}
			}
		},150);
		
/*
		if (localStorage.getItem("UAdNQlyAndiFocusAreaBtn") == "yes") {
			if(!andiUA.UAGVtdpENu){
					var UAKpkQonJ = setInterval(function(){
					if(andiUA.UAGVtdpENu == true){
						clearInterval(UAKpkQonJ);
						var UApSQWeCVB = andiUA.UAbUCbcZ.UANOMOF;
						andiUA.UAlJCXe(UApSQWeCVB);
						andiUA.UAFHtSAm(UApSQWeCVB);
					}
				},350);
			} else {
				var UApSQWeCVB = andiUA.UAbUCbcZ.UANOMOF;
                andiUA.UAlJCXe(UApSQWeCVB);
                andiUA.UAFHtSAm(UApSQWeCVB);
			}
        }
		},50);
		setTimeout(function(){
		if (localStorage.getItem('UAdNQlyAndirasheTevot') == "yes") {
			if(!andiUA.UApRfVXHci){
				var UAdMySFPu = setInterval(function(){
					if(andiUA.UApRfVXHci == true){
						clearInterval(UAdMySFPu);
						andiUA.findAndReplaceDOMText2('[UAJZkUqw]');
					}
				},350);
			} else {
				andiUA.findAndReplaceDOMText2('[UAJZkUqw]');
			}
        }
		
		*/	
		
		setTimeout(function(){
			if (localStorage.getItem("UAaAYVbeviledHiddingInfo") == "yes") {		
				if(!andiUA.UApRfVXHci){
					var UAdMySFPu = setInterval(function(){
						if(andiUA.UApRfVXHci == true){
							clearInterval(UAdMySFPu);
							andiUA.UAMYgPOReviledHiddingInfo();
							andiUA.UAEfHmBetActiveReviledHiddingInfo('aaa')
						}
					},350);
				} else {
					andiUA.UAMYgPOReviledHiddingInfo();
				}
			}
		},200);
		setTimeout(function(){
			var UAUhKzwhAo = localStorage.getItem("UACHPoKx1");
			if (UAUhKzwhAo != null && UAUhKzwhAo != '') {
				andiUA.UAjGbZl(localStorage.getItem("UACHPoKx1Color"),localStorage.getItem("UACHPoKx1"),'aaa');
			}
		},250);
		setTimeout(function(){
			var UAUhKzwhAo = localStorage.getItem("UACHPoKx2");
			if (UAUhKzwhAo != null && UAUhKzwhAo != '') {
				andiUA.UAjGbZl(localStorage.getItem("UACHPoKx2Color"),localStorage.getItem("UACHPoKx2"),'aaa');
			}
		},300);
		setTimeout(function(){
			var UAUhKzwhAo = localStorage.getItem("UACHPoKx3");
			if (UAUhKzwhAo != null && UAUhKzwhAo != '') {
				andiUA.UAjGbZl(localStorage.getItem("UACHPoKx3Color"),localStorage.getItem("UACHPoKx3"),'aaa');
			}
		},330);
		setTimeout(function(){
			if (localStorage.getItem("UALqixIOol") == "yes") {
				andiUA.UAAiIjiu('black', 'aaa');
			}
		},360);
		setTimeout(function(){
			if (localStorage.getItem("UADKHqtOIhiteContrast") == "yes") {
				andiUA.UAAiIjiu('white', 'aaa');
			}
		},390);
		
		setTimeout(function(){
			andiUA.UAieKvro();
		},410);
		setTimeout(function(){
			andiUA.UARwnETZM();
		},440);
};


	andiUA.UAieKvro = function() {
		setTimeout(function(){
			andiUA.UAztUIywzz(andiUA.UAbUCbcZ.UAyrAaZcD);
			andiUA.UAyszhNo(andiUA.UAbUCbcZ.UAyszhNo);
			andiUA.UABSrymyDg(andiUA.UAbUCbcZ.UAJMKqv); 	
		},0);
		setTimeout(function(){
			andiUA.UAcJCMY(andiUA.UAbUCbcZ.UAsVELvJP);
		},30);
		setTimeout(function(){
			andiUA.UANcfCq(andiUA.UAbUCbcZ.UAVkjEhNwH);
			andiUA.UADaMeQjzk(andiUA.UAbUCbcZ.UAuTIsftxR);
		},60);
		setTimeout(function(){
			andiUA.UAimGyAHki(andiUA.UAbUCbcZ.UAgGLGO);
		},95);
	}
	
	andiUA.UAUmjvhPio = function() {
		setTimeout(function(){
			andiUA.markTextLagn();
			andiUA.UAaFedmPS(andiUA.UAbUCbcZ.UAaFedmPS);
			andiUA.UACXEaTl(andiUA.UAbUCbcZ.UANOMOF);
		},15);
		setTimeout(function(){
			andiUA.UALIimzk(andiUA.UAbUCbcZ.UALIimzk );
			andiUA.UAhKbUwreadcrumbs(andiUA.UAbUCbcZ.UAhKbUwreadcrumbs);
		},35);
		setTimeout(function(){
			andiUA.UAMnDBRN();
			andiUA.UApfGnd(andiUA.UAbUCbcZ.UAWsebF);
			andiUA.UAAldnWsE(andiUA.UAbUCbcZ.UAIkARVK);
			andiUA.UAAFHvDbf(andiUA.UAbUCbcZ.UAAFHvDbf);
		},70);
		setTimeout(function(){
			andiUA.UAPeDubus(andiUA.UAbUCbcZ.UANkqYsO);
			andiUA.UAFojEJMEjEj(andiUA.UAbUCbcZ.UAFojEJMEjEj);
			andiUA.UAgdVRDyageNavigation (andiUA.UAbUCbcZ.UACbHefF);
			andiUA.UAeYlQyG();
		},100);
		setTimeout(function(){
			andiUA.UARwnETZM();
		},120);
		setTimeout(function(){
			andiUA.UAoVqPk();
			andiUA.UAimGyAHki(andiUA.UAbUCbcZ.UAgGLGO);
		},135);
		//andiUA.UAtuqaloQF();
    }
	
    UAsPgZlS = false;
	setTimeout(function(){
		andiUA.UAieKvro();
	},0);
	setTimeout(function(){
		andiUA.UAUmjvhPio();
	},50);
	setTimeout(function(){
			andiUA.UAqrCiVYXp(andiUA.UAbUCbcZ.UAMxqvA);
	},1500);
	
	
 } 
