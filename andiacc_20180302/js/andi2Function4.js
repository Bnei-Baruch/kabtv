
	UA.addCssFocusFromHOver = function(){
		if(UA.UAtGnLO.UADayhTD){
			ANDIg = UA.UAYPVaB(), UAnvoykE = [], UAsbDkMy = [],UAKBYshndiNewCssClassName = [],UAKBYshndiNewCssClass = ''; UAYJJvS=[], UAUdIPrN=[], UAvsutz = '', UAQJnpKUq = [], UAJNhVT = [], UAQHBMIMX = [], UARuLMDU = [], UAuSSjBF = [];
			var andiFocusCssOnContainer = '';
			for(var ANDIi = 0; ANDIi < ANDIg.length; ANDIi++){
				if( ANDIg[ANDIi].indexOf(':hover') > -1 ){
					var UAEOPVylassNumber = ANDIi;
					UAnvoykE.push(ANDIg[ANDIi]);
					var UAHQlrsv = ANDIg[ANDIi].replace(/hover/g, 'focus');
					UAsbDkMy.push(UAHQlrsv);
					UAvsutz += ('   ' + UAHQlrsv);
					var UApOuaOQW = UAHQlrsv.split("{");
					UAKBYshndiNewCssClass += ( ' .UAKBYshndifocsunewclass'+ANDIi+' { '+UApOuaOQW[1]);
					UAKBYshndiNewCssClassName.push( 'UAKBYshndifocsunewclass'+ANDIi );
					UAiSYiYfO = UApOuaOQW[1].lastIndexOf('}');
					if (UAiSYiYfO >= 0 && UAiSYiYfO + UApOuaOQW[1].length >= UApOuaOQW[1].length) {
						UApOuaOQW[1] = UApOuaOQW[1].substring(0, UAiSYiYfO) + "";
					}
					UAYJJvS.push(UApOuaOQW[0]);
					UAUdIPrN.push(UApOuaOQW[1]);		
					andiFocusCssOnContainer += '{' + UApOuaOQW[1];
					if(  UApOuaOQW[0].indexOf('@media') == -1) {
						UAQJnpKUq.push(UApOuaOQW[0]);
						UAJNhVT.push('{'+UApOuaOQW[1]);
					}	
				}
			}
			UAKBYshndiNewCssClass = UAKBYshndiNewCssClass.replace(/;/g, ' !important; ');
			andizxc('head').append('<style id="UAvsutz">'+UAvsutz+'</style>');
			andizxc('head').append('<style id="andiFocusCssOnContainer">'+andiFocusCssOnContainer+'</style>');
			andizxc('head').append('<style id="UAKBYshndiNewCssClass">'+UAKBYshndiNewCssClass+'</style>');

			for(ANDIa = 0; ANDIa < UAYJJvS.length;ANDIa++){
				var UAHQlrsv = UAYJJvS[ANDIa].split(",");
				for(ANDIb = 0; ANDIb < UAHQlrsv.length;ANDIb++){
					if(UAHQlrsv[ANDIb].indexOf(':focus') > -1 && UAHQlrsv[ANDIb].indexOf(':not(:focus)') == -1){
						UABhxPf = UAHQlrsv[ANDIb].split(':focus');
							andizxc(UABhxPf[0]).each(function(){
							andizxc(this).attr({'andiParent':'true', 'tabindex':'0','UAKBYshnditrigger':'true'});
						});
						if(UABhxPf.length > 1){
							for(ANDIc = 1; ANDIc < UABhxPf.length;ANDIc++){
								if(UABhxPf[ANDIc].trim() != '' && UABhxPf[ANDIc].trim() != '::after' && UABhxPf[ANDIc].trim() != '::before'){
									try{	
										andizxc(UABhxPf[0]).find(UABhxPf[ANDIc]).each(function(){
											var UAhhjNPtH = andizxc(this).attr('UAKBYshndifocsunewclass');
											if(UAhhjNPtH != undefined && UAhhjNPtH != null  && UAhhjNPtH != '' ){
												andizxc(this).attr('UAKBYshndifocsunewclass',UAhhjNPtH + ' ' + ANDIa);
												andizxc(andizxc(UABhxPf[0])).attr('UAKBYshndifocsunewclass',UAhhjNPtH + ' ' + ANDIa);
											} else {
												andizxc(this).attr('UAKBYshndifocsunewclass', ANDIa);
												andizxc(andizxc(UABhxPf[0])).attr('UAKBYshndifocsunewclass', ANDIa);
											}
										});
									} catch(err){console.log(err)}
								}
							}
						}
					}
				}
			}
		}

		andizxc('[andiParent]').focus(function(){
			var that = this;
			andizxc('[andiParent]').each(function(ANDIf){
				if(!andizxc(this).is(that)){
					andizxc(this).removeClass(UAKBYshndiNewCssClassName[ANDIb[ANDIf]]);
				}
			});
			
			var ANDIfocusElms = [];
			var ANDIa = andizxc(this).find('*');	
			andizxc(ANDIa).each(function(){
				if( !andizxc(this).is('[andiParent] [andiParent],[andiParent] [andiParent] *') &&  andizxc(this).attr('UAKBYshndifocsunewclass') != undefined){
					var ANDIb = andizxc(this).attr('UAKBYshndifocsunewclass');
					ANDIb = ANDIb.split(" ");
					for(ANDIf = 0; ANDIf < ANDIb.length; ANDIf++){
						andizxc(this).addClass(UAKBYshndiNewCssClassName[ANDIb[ANDIf]]);
					}
				}
			});
			andizxc(ANDIa).find(UA.UAtGnLO.UAsofYCWsD).last().blur(function(){
				andizxc(ANDIa).each(function(){
					var ANDIb = andizxc(this).attr('UAKBYshndifocsunewclass');
					if(ANDIb != undefined){
						ANDIb = ANDIb.split(" ");
						for(ANDIf = 0; ANDIf < ANDIb.length; ANDIf++){
							andizxc(this).removeClass(UAKBYshndiNewCssClassName[ANDIb[ANDIf]]);
						}
					}
				});
			});
			
		});	
		
		andizxc('[andiParent] [andiParent]').focus(function(){
			andizxc('[andiParent]').each(function(){
				//andizxc(this).removeClass(UAKBYshndiNewCssClassName[ANDIb[ANDIf]]);
			});
			var ANDIa = andizxc(this).find('*');
			andizxc(ANDIa).each(function(){
				if( !andizxc(this).is('gggg') &&  andizxc(this).attr('UAKBYshndifocsunewclass') != undefined){
					var ANDIb = andizxc(this).attr('UAKBYshndifocsunewclass');
					ANDIb = ANDIb.split(" ");
					for(ANDIf = 0; ANDIf < ANDIb.length; ANDIf++){
						andizxc(this).addClass(UAKBYshndiNewCssClassName[ANDIb[ANDIf]]);
					}
				}
			});
			andizxc(ANDIa).find(UA.UAtGnLO.UAsofYCWsD).last().blur(function(){
				andizxc(ANDIa).each(function(){
					var ANDIb = andizxc(this).attr('UAKBYshndifocsunewclass');
					if(ANDIb != undefined){
						ANDIb = ANDIb.split(" ");
						for(ANDIf = 0; ANDIf < ANDIb.length; ANDIf++){
							andizxc(this).removeClass(UAKBYshndiNewCssClassName[ANDIb[ANDIf]]);
						}
					}
				});
			});
		});	
	}
	
	UA.andi2findjsevents = function(){
		if(UA.UAtGnLO.andi2findjsevents){
			try{
				var eventLists = ['touchcancel','touchend','touchenter','touchleave','touchmove','touchstart','mouseenter','mouseover','mousemove','mousedown','mouseup','auxclick','click','dblclick','contextmenu','wheel','mouseleave','mouseout','select','pointerlockchange','pointerlockerror','keydown','keypress','keyup','focus','blur','hover','focusin','focusout','mouseout','mouseleave'];
				var ANDIallTags = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr"];
				var ANDIunwantedElms = ['.attr', '#+', "'id'"];
				var ANDIlistOfElmsToSupportClick = [];
				var ANDIlistOfElmsToSupportHover= [];
				var ANDIallElmsClickEventANDIthatFind = [];
				var ANDIallElmsTextClickEventANDIthatFind = [];
				var ANDInumberOfScript = jQuery('script').length;
				var ANDIfinishCheckAllScripts = 0;
				function ANDIpushToArr(ANDIdata1,ANDIdata2){
					ANDIdata1 = ANDIdata1.replace('"','');
					ANDIdata1 = ANDIdata1.replace('"','');
					ANDIdata1 = ANDIdata1.replace("'",'');
					ANDIdata1 = ANDIdata1.replace("'",'');
					avoidThis = false;
					for(var ANDIi = 0;ANDIi < ANDIunwantedElms.length;ANDIi++){
						if(ANDIdata1.indexOf(ANDIunwantedElms[ANDIi]) > -1){
							avoidThis = true;
						}
					}
					if(!avoidThis && ANDIlistOfElmsToSupportClick.indexOf(ANDIdata1) == -1 ){
						ANDIdefindeAsBtn(ANDIdata1);
						ANDIlistOfElmsToSupportClick.push(ANDIdata1);
					}
				}
				eventOn('keydown','[andiclick="true"]',function(ANDIevent){
					if(ANDIevent.keyCode ==13){
						this.click();
					}
				});
				
				eventOn('focus','[andihover="true"]',function(ANDIevent){
					try{
					jQuery(this).trigger('mouseenter');
					jQuery(this).trigger('mouseover');
					} catch(err){console.log(err)}
				});				
				
				function ANDIdefindeAsBtn(ANDIelm){
					var ANDIthat = ANDIelm;
						try{
							jQuery(ANDIelm).each(function(){
								if(!jQuery(this).is('body') && jQuery(this).attr('andiclick') == undefined){
								jQuery(this).attr({'role':(jQuery(this).is('a'))?'link':'button','tabindex':'0'});
								jQuery(this)[0].setAttribute("andiclick",'true');
							}
						});
					} catch (err){
						console.log(err);
					}
				}
				
				function ANDItriigerHover(ANDIelm){
					var ANDIthat = ANDIelm;
					jQuery(ANDIelm).each(function(){
						if(jQuery(this).attr('andihover') == undefined){
							jQuery(this).attr({'tabindex':'0'});
							jQuery(this)[0].setAttribute("andihover",'true');
							
						}
					});
				}
				
				ANDIgetElmNameWithClassAndID = function(ANDIelmToRunOn){
					var ANDIallClassElms = jQuery(ANDIelmToRunOn).attr("class");
					if(ANDIallClassElms != undefined && ANDIallClassElms.length > 0){
						ANDIallClassElms = ANDIallClassElms.trim();
						ANDIallClassElms = ANDIallClassElms.replace(/   /g, ".");
						ANDIallClassElms = ANDIallClassElms.replace(/  /g, ".");
						ANDIallClassElms = ANDIallClassElms.replace(/ /g, ".");
						ANDIallClassElms = '.'+ANDIallClassElms;
					} else {
						ANDIallClassElms = '';
					}
					var ANDIallIDElms = jQuery(ANDIelmToRunOn).attr("id");
					if(ANDIallIDElms != undefined && ANDIallIDElms.length > 0){
						ANDIallIDElms = ANDIallIDElms.trim();
						ANDIallIDElms = ANDIallIDElms.replace(/ /g, "#");
						ANDIallIDElms = '#'+ANDIallIDElms;
					} else {
						ANDIallIDElms = '';
					}
					var ANDIelm = jQuery(ANDIelmToRunOn)[0].tagName.toLowerCase() + ANDIallIDElms + ANDIallClassElms;
					return ANDIelm;
				}
				
				ANDIlookForandizxcEvents = function(){
					jQuery('[ng-click]').each(function(ANDIi){
						ANDIgetElmNameWithClassAndID(this);
					});
					jQuery('html *').each(function(ANDIi){
						if(jQuery(this)[0].tagName.toLowerCase() != 'script'){
							try{
								var $ANDIevents = jQuery._data(jQuery(this)[0], "events" );
								if($ANDIevents != undefined){
									var ANDIisHaveClickEvent = $ANDIevents.hasOwnProperty('click');
									if(ANDIisHaveClickEvent){
										var ANDIelm = ANDIgetElmNameWithClassAndID(this);
										if( ANDIallElmsClickEventANDIthatFind.indexOf(ANDIelm) == -1){
											if(ANDIlistOfElmsToSupportClick.indexOf('a') == -1){
												ANDIlistOfElmsToSupportClick.push(ANDIelm);
												ANDIdefindeAsBtn(ANDIelm);
											} else {
												if(ANDIelm.indexOf('a') > 0){
													ANDIdefindeAsBtn(ANDIelm);
													ANDIlistOfElmsToSupportClick.push(ANDIelm);
												}
											}
										}
									}
									
									var ANDIisHaveMouseenterEvent = $ANDIevents.hasOwnProperty('mouseenter');
									if(ANDIisHaveMouseenterEvent){
										var ANDIelm = ANDIgetElmNameWithClassAndID(this);
										if( ANDIlistOfElmsToSupportHover.indexOf(ANDIelm) == -1){
											ANDIlistOfElmsToSupportHover.push(ANDIelm);
											ANDItriigerHover(ANDIelm);
										}
									}
									var ANDIisHaveHoverEvent = $ANDIevents.hasOwnProperty('hover');
									if(ANDIisHaveHoverEvent){
										var ANDIelm = ANDIgetElmNameWithClassAndID(this);
										if( ANDIlistOfElmsToSupportHover.indexOf(ANDIelm) == -1){
											ANDIlistOfElmsToSupportHover.push(ANDIelm);
											ANDItriigerHover(ANDIelm);
										}
									}
									var ANDIisHaveMouseOverEvent = $ANDIevents.hasOwnProperty('mouseover');
									if(ANDIisHaveMouseOverEvent){
										var ANDIelm = ANDIgetElmNameWithClassAndID(this);
										if( ANDIlistOfElmsToSupportHover.indexOf(ANDIelm) == -1){
											ANDIlistOfElmsToSupportHover.push(ANDIelm);
											ANDItriigerHover(ANDIelm);
										}
									}
								}
							}  catch (err){
								if(UA.UAtGnLO.UAKPDJhbW)console.log(err);
							}
						} else {
							ANDIlookForEventInScript(jQuery(this)[0])
						}
						
					});

				}
				function ANDIlookForEventInScript(ANDIScriptTag){
					ANDIscriptSrc = ANDIScriptTag.src;
					if(ANDIscriptSrc != '' && ANDIscriptSrc != undefined){				
						if(ANDIscriptSrc.indexOf('andi') == -1 && ANDIscriptSrc.toLowerCase().indexOf('angular') == -1 && ANDIscriptSrc.toLowerCase().indexOf('jquery') == -1 ){
							jQuery.ajax({
								type: "POST",
								url:  UA.url+ 'andigetfile/getscript.php',
								dataType: 'text',
								data:{
									dataurl: ANDIscriptSrc
								},
								success: function(data) {
									var ANDIdataArr = data.match(/[^\r\n]+/g);
									if(ANDIdataArr != null){
										for(var ANDIi = 0;ANDIi < ANDIdataArr.length;ANDIi++){
											if( ANDIdataArr[ANDIi].length > 0 &&ANDIdataArr[ANDIi].length < 150 && ANDIdataArr[ANDIi].indexOf('click') > -1  ){
												var UArhHWkMatch = ANDIdataArr[ANDIi].match(/\(([^)]+)\)/);
												if(UArhHWkMatch != null ){
													var UArhHWkMatchText = UArhHWkMatch[1];
													if(UArhHWkMatch != null && UArhHWkMatchText.indexOf('#') > -1 || ANDIallTags.indexOf(UArhHWkMatchText) > -1 || UArhHWkMatchText.indexOf('.') == 0 ){
														ANDIpushToArr(UArhHWkMatchText,UArhHWkMatch[0]);
													}
												}
											}
										}
									}
								},
								error: function (errorMessage) {
									if(UA.UAtGnLO.UAKPDJhbW)console.log(errorMessage);
								},
							});
						}
					} else {
						var ANDItextScript = ANDIScriptTag.text;
						var ANDIdataArr = ANDItextScript.match(/[^\r\n]+/g);
						for(var ANDIi = 0;ANDIi < ANDIdataArr.length;ANDIi++){
							if( ANDIdataArr[ANDIi].length > 0 &&ANDIdataArr[ANDIi].length < 150 && ANDIdataArr[ANDIi].indexOf('click') > -1  ){
								var UArhHWkMatch = ANDIdataArr[ANDIi].match(/\(([^)]+)\)/);
								if(UArhHWkMatch != null ){
									var UArhHWkMatchText = UArhHWkMatch[1];
									if(UArhHWkMatch != null && UArhHWkMatchText.indexOf('#') > -1 || ANDIallTags.indexOf(UArhHWkMatchText) > -1 || UArhHWkMatchText.indexOf('.') == 0 ){
										ANDIpushToArr(UArhHWkMatchText,UArhHWkMatch[0]);
									}
								}
							}
						}
					}
				}
				ANDIlookForandizxcEvents();
			} catch (err){
				console.log(err)
			}
			
		}
	}

	UA.createAutomaticAreas = function(){
		
		function dbCheckAria(andiArea, numberArea){
			ANDIallElms = document.querySelectorAll(andiArea);
			for(var ANDIi = 0; ANDIi< ANDIallElms.length; ANDIi++){
				var ANDIparentElm = ANDIallElms[ANDIi];
				var pathToLink = '';
				while (ANDIparentElm.tagName.toLowerCase() != 'body' && ANDIparentElm.tagName.toLowerCase() != 'html'){
					pathToLink = ANDIparentElm.tagName.toLowerCase() + ' > ' +  pathToLink;
					ANDIparentElm = ANDIparentElm.parentElement;
				}
				pathToLink = 'body > ' + pathToLink.substring(0,pathToLink.lastIndexOf(">")) + '';
				if(pathToLink != 'body > '){
					document.querySelectorAll(pathToLink).forEach(function(el) {
						el.setAttribute('andiarea',numberArea);
					});
				}
			}
		}
		
		var isOldPath = (localStorage.getItem('UAnewAreaInThisSite'))
		var UAsofYCWsD = 'a,button';
		// isOldPath != '' && isOldPath != null && isOldPath != 'null'  
		if( false ){
			var temp = localStorage.getItem('UAnewAreaInThisSite');
			unieqPathArr = temp.split(',');
			for(var ANDIi = 0; ANDIi< unieqPathArr.length; ANDIi++){
				var str = unieqPathArr[ANDIi];
				if(str != undefined){
					var lastIndex = str.lastIndexOf(" > ");
					str = str.substring(0, lastIndex);
					while(str.length > 7){				
						lastIndex = str.lastIndexOf(" > ");
						str = str.substring(0, lastIndex);
						if( str.indexOf(':') == -1 && str != '' && str.isSelectorValid()  ){
							document.querySelectorAll(str).forEach(function(ANDIparentElm) {
								var numAllLinks =  ANDIparentElm.querySelectorAll(UAsofYCWsD).length;
								if(numAllLinks > 0 && numAllLinks <= 5){
									ANDIparentElm.setAttribute('andiarea','1');
								} else if(numAllLinks > 5 && numAllLinks <= 15){
									ANDIparentElm.setAttribute('andiarea','2');
									ANDIparentElm.setAttribute('ANDImarkArea','2');
								} else if(numAllLinks > 15 && numAllLinks <= 30 ){
									ANDIparentElm.setAttribute('andiarea','3');
									ANDIparentElm.setAttribute('ANDImarkArea','3');
								} else if(numAllLinks > 30 && numAllLinks <= 50){
									ANDIparentElm.setAttribute('ANDImarkArea','4');
									ANDIparentElm.setAttribute('andiarea','4');
								} else if(numAllLinks > 50){
									ANDIparentElm.setAttribute('andiarea','5');
								}
							});
						}
					}
				}
			};
			dbCheckAria('[andiarea="2"]', 2);
		} else {
			var ANDIallPath = [];
			var ANDIallPathUnique = [];
			var unieqPathArr = [];
			var cssPath = function (el) {
				function fixPathStr(tempPath){
					function isHaveErrs(tempPath){
						if(tempPath.indexOf('/') > -1 || tempPath.indexOf('> >') > -1 || tempPath.indexOf('..') > -1 || tempPath.indexOf('. ') > -1 || tempPath.indexOf('.[') > -1 || tempPath.indexOf('.>') > -1 ){
						   return true;
						} 
						return false;
					}
					tempPath = tempPath.replace('. ','').replace('> >',' > ').replace('..','.').replace('.[','[').replace('.>',' >').replace('.#','#');			
					if(isHaveErrs(tempPath)){
						fixPathStr(tempPath);
					} else {
						if(tempPath.slice(-1) == '.')tempPath = tempPath.substring(0, tempPath.length - 1);
						return tempPath;
					}
				}
				var path = [];
				path.push(el.nodeName.toLowerCase())
				while ((el.nodeName.toLowerCase() != 'html') && (el = el.parentNode) ){
					var aaa = (el.nodeName.toLowerCase());
					var bbb = (el.id ? (el.getAttribute('id').indexOf('/') == -1? '#' + el.id:'') : '');
					var matches = bbb.match(/\d+/g);
					if (matches != null || bbb.indexOf(':') > -1) {
						bbb = '';
					}
					var ccc = (el.className ? '.' + el.className.replace(/\s+/g, ".") : '');
					var ddd = '';
					ccc = ccc.replace('"','');
					ccc = ccc.replace('"','');
					var matches = ccc.match(/\d+/g);
					if (matches != null) {
						var allClass = el.className.split(" ");
						for(var ANDIi = 0; ANDIi< allClass.length; ANDIi++){
							var textTemp = allClass[ANDIi].match(/\d+/g);
							if (textTemp == null) {
								ddd += ('.'+allClass[ANDIi]);
							}
						}
					}
					if(ddd != ''){
						path.unshift(aaa+ddd+bbb);
					} else {
						path.unshift(aaa+ccc+bbb);
					}
					if(el.nodeName.toLowerCase() == 'body'){
						var tempPath = path.join(" > ");
						return fixPathStr(tempPath);
					}
				}
				var tempPath = path.join(" > ");
				return fixPathStr(tempPath);
			}
			
			var ANDIallElms = document.querySelectorAll(UAsofYCWsD);
			for(var ANDIi = 0; ANDIi< ANDIallElms.length; ANDIi++){
				if( !ANDIallElms[ANDIi].hasAttribute('AutomaticAreas')){
					var ANDIparentElm = ANDIallElms[ANDIi];
					var pathToLink = cssPath( ANDIallElms[ANDIi]);
					if( pathToLink != undefined && pathToLink.indexOf('/') == -1 && pathToLink.indexOf(':') == -1 ){
						if( unieqPathArr.indexOf(pathToLink) == -1){
							unieqPathArr.push(pathToLink);
						}
						document.querySelectorAll(pathToLink).forEach(function(el) {
							el.setAttribute('AutomaticAreas','true');
						});
					}
				}
			}
			unieqPathArr.sort(function(a, b){
			  return b.length - a.length;
			});	
			var tempArr = [];
			var arrLongesSelector = unieqPathArr[0];
			tempArr.push(arrLongesSelector);
			for(var ANDIi = (unieqPathArr.length-1); ANDIi >=0; ANDIi--){
				if(unieqPathArr[ANDIi] != undefined){
					lastIndex = unieqPathArr[ANDIi].lastIndexOf(" > ");
					str = unieqPathArr[ANDIi].substring(0, lastIndex);
					if(arrLongesSelector.indexOf(str) == -1){
						tempArr.push(str);
					}
				}
			}
			

			var unieqPathArrForLocalStorage = '';
			for(var ANDIi = 0; ANDIi< unieqPathArr.length; ANDIi++){
				var str = unieqPathArr[ANDIi];
					str = str.substring(0, str.lastIndexOf(" > "));
					while(str.length > 7){				
						document.querySelectorAll(str).forEach(function(ANDIparentElm) {
							var numAllLinks =  ANDIparentElm.querySelectorAll(UAsofYCWsD).length;
							if(numAllLinks > 0 && numAllLinks <= 5){
								ANDIparentElm.setAttribute('andiarea','1');
							} else if(numAllLinks > 5 && numAllLinks <= 15){
								ANDIparentElm.setAttribute('andiarea','2');
							} else if(numAllLinks > 15 && numAllLinks <= 30 ){
								ANDIparentElm.setAttribute('andiarea','3');
							} else if(numAllLinks > 30 && numAllLinks <= 50){
								ANDIparentElm.setAttribute('andiarea','4');
							} else if(numAllLinks > 50){
								ANDIparentElm.setAttribute('andiarea','5');
							}
						});
						str = str.substring(0, str.lastIndexOf(" > "));
					}
			};
			function andiSetAreaSize( elmSelector, UAsofYCWsD ){
				if(elmSelector != '')
				document.querySelectorAll(elmSelector).forEach(function(ANDIparentElm) {
					if(ANDIparentElm != null){
						if(ANDIparentElm.querySelectorAll(UAsofYCWsD).length > 0 && ANDIparentElm.querySelectorAll(UAsofYCWsD).length <= 5){
							ANDIparentElm.setAttribute('andiarea','1');
						} else if(ANDIparentElm.querySelectorAll(UAsofYCWsD).length > 5 && ANDIparentElm.querySelectorAll(UAsofYCWsD).length <= 15){
							ANDIparentElm.setAttribute('andiarea','2');
						} else if(ANDIparentElm.querySelectorAll(UAsofYCWsD).length > 15 && ANDIparentElm.querySelectorAll(UAsofYCWsD).length <= 30 ){
							ANDIparentElm.setAttribute('andiarea','3');
						} else if(ANDIparentElm.querySelectorAll(UAsofYCWsD).length > 30 && ANDIparentElm.querySelectorAll(UAsofYCWsD).length <= 50){
							ANDIparentElm.setAttribute('andiarea','4');
						} else if(ANDIparentElm.querySelectorAll(UAsofYCWsD).length > 50){
							ANDIparentElm.setAttribute('andiarea','5');
						}
					}
				});
			}
			andiSetAreaSize( 'section,nav,aside, footer,header' , UAsofYCWsD );
			dbCheckAria('[andiarea="2"]', 2);
			if(parseInt(UA.localStorageSpace(unieqPathArrForLocalStorage)) < parseInt(localStorage.getItem('UAsizeLocalStorage') )){
				localStorage.setItem('UAnewAreaInThisSite', unieqPathArrForLocalStorage);
			}
		
		
		}
		
		if(UA.UAtGnLO.UA2skipAreaAutomate){
			
			document.querySelectorAll('[andiarea="3"]').forEach(function(el) {
				if(el.querySelectorAll('[andiarea="3"]').length > 0 ){
					el.querySelectorAll('[andiarea="3"]').forEach(function(el2) {
						el2.removeAttribute('andiarea');
					});
				}
			});
			document.querySelectorAll('[andiarea="2"]').forEach(function(el) {
				if(el.querySelectorAll('[andiarea="2"]').length > 0 ){
					el.querySelectorAll('[andiarea="2"]').forEach(function(el2) {
						el2.removeAttribute('andiarea');
					});
				}
			});
			var ANDImarkAll = andizxc('[andiarea]');	
			if(ANDImarkAll.length > 1){
				andizxc(ANDImarkAll).each(function(){
					
					if(andizxc(this).closest('#UAXrXQBkb').length == 0
						&& ( andizxc(this).attr('andiarea') == 4 || andizxc(this).attr('andiarea') == 3 ||andizxc(this).attr('andiarea') == 2   ) 
						&& andizxc(this)[0].UAWAGhn()
					){
						var allSkipLInks = andizxc('.UA2skipAreaAutomate').length;
						andizxc(this).prepend('<a class="UA2skipAreaAutomate" href="#" name="UA2skipAutomate' + (allSkipLInks+0) + '"  tabindex="0" aria-hidden="true"><span class="UA2skipAutomateNumber">האם ברצונך לדלג מעל אזור זה ?</span>,<br />"' + UA.UAvtiQvcR.UAmrcdlM + '</a>');						
					}
				});
			}
			var UAcoHop = andizxc("title").text();
			andizxc("body").append('<a id="UAZUoTZ" style="position: absolute; bottom: 0;" class="UAlylat2skipArea" name="UAZUoTZ" href="#UAjPgjWg" tabindex="0" >' + UA.UAvtiQvcR.UAVyKjGkf + UAcoHop + ' ' + UA.UAvtiQvcR.UAxlgiZFjU + ' </a>');
		}
	}
	
	UA.UADjCSKX = function () {
		andizxc('input:not([type="radio"],[type="checkbox"]), textarea ').focus(function () {
			andizxc(this).keydown(function () {
				var UAVuNtJboP = this;
				andizxc(this).css({ 'cursor': 'none' });
				setTimeout(function () {
					andizxc(UAVuNtJboP).css({ 'cursor': '' });
				}, 1500);
			});
		});
    };
	
	 UA.UAFSGRnYd = function (andiElmsinput,andiElmsCheckboxs) {
        andizxc(andiElmsinput).each(function () {
			if(andizxc(this).attr('UAKBYshndiInputdiscrp') == undefined || andizxc(this).attr('UAKBYshndiInputdiscrp') == null || andizxc(this).attr('UAKBYshndiInputdiscrp') == ''){
				andizxc(this).UAtkbmkKL();
			}
		});	
		andizxc(andiElmsCheckboxs).each(function () {
			if(andizxc(this).attr('UAKBYshndiInputdiscrp') == undefined || andizxc(this).attr('UAKBYshndiInputdiscrp') == null || andizxc(this).attr('UAKBYshndiInputdiscrp') == ''){
				andizxc(this).UApeuwZ();
			}
		});
		
		UA.UAKWnSd(document);
		andizxc('iframe').each(function(){
			try {
				andizxc(this).contents().find(andiElmsinput).each(function () {
					if(andizxc(this).attr('UAKBYshndiInputdiscrp') == undefined || andizxc(this).attr('UAKBYshndiInputdiscrp') == null || andizxc(this).attr('UAKBYshndiInputdiscrp') == ''){
						andizxc(this).UAtkbmkKL();
					}
				});
				andizxc(this).contents().find(andiElmsCheckboxs).each(function () {
					if(andizxc(this).attr('UAKBYshndiInputdiscrp') == undefined || andizxc(this).attr('UAKBYshndiInputdiscrp') == null || andizxc(this).attr('UAKBYshndiInputdiscrp') == ''){
						andizxc(this).UApeuwZ();
					}
				});
				UA.UAKWnSd(andizxc(this));
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		});
	}
	
	UA.UAKWnSd = function(doc){
		andizxc(doc).contents().find('input').each(function () {
			var UAWdahYXhU = andizxc(this).attr('type');
			if (UAWdahYXhU === undefined) {
				andizxc(this).attr('type', 'text');
			}
		});
		andizxc(doc).contents().find("input[type=range]").each(function () {
			var UAqRiEmU = andizxc(this).attr("id"), UAwiSyBI = andizxc(this).attr("UAwiSyBI"), UAasxdaLvr = andizxc(this).attr("UAasxdaLvr"), addition = (" (UAwiSyBI is: " + UAwiSyBI + ", UAasxdaLvr is: " + UAasxdaLvr + ")");
			andizxc("label[for= ' " + UAqRiEmU + " ' ]").append(addition);
			andizxc(this).attr("aria-valuemin", UAwiSyBI);
			andizxc(this).attr("aria-valuemax", UAasxdaLvr);
			andizxc(this).attr("role", "slider");
		});	
		andizxc(doc).contents().find('select.chosen-select').each(function(UADRVTPQV){
			var w = andizxc(this).next().find('a').width();
			var h = andizxc(this).next().find('a').height();
			var pL = 0;
			var pT = 0;
			andizxc('head').append('<style id="UAGKOUtU'+UADRVTPQV+'">select.chosen-select,select.select2-offscreen{clip: rect(0 0 0 0) !important;	width: 1px !important;z-index: 9999 !important;height: 1px !important;	border: 0 !important;margin: 0 !important; padding: 0 !important;display: inline-block !important;overflow: hidden !important;position: absolute !important;outline: 0 !important;left: 0px !important;top: 0px !important;}select.chosen-select:focus ,select.select2-offscreen:focus { clip: auto !important;width: '+w+'px !important;  height: '+h+'px !important;border: 0 !important; margin: 0 !important;padding: 0 !important; overflow: hidden !important;	position: absolute !important; outline: 0 !important; left: '+pL+'px !important; top: '+pT+'px !important;}</style>');
			andizxc(this).change(function(){
				var UAKBYsh = andizxc(this).val();
				andizxc(this).next().find('a > span').text(  andizxc(this).find('option[value="'+UAKBYsh+'"]').text() )
			});
		});
	}
	
	UA.UAeJGzDKnU = function () {
		andizxc('[title]:not(img)').each(function(UADRVTPQV){
			if( andizxc.trim(andizxc(this).text()) == andizxc.trim(andizxc(this).attr('title') )){
				andizxc(this).removeAttr('title');
			}
		});
    }
	
	UA.UADWQplDV = function () {
        andizxc('br').each(function (UADRVTPQV) {
            andizxc(this).attr({ 'role': 'presentation' });
        });
		andizxc('iframe').each(function(){
			try{
				andizxc(this).contents().find('br').each(function (UADRVTPQV) {
					andizxc(this).attr({ 'role': 'presentation' });
				});
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		});
    };
	
	UA.UAchjnvGw = function () {
		  UA.UArbrLgi(document);
		  andizxc('iframe').each(function(){
			try{
				UA.UArbrLgi(andizxc(this));
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		});
	}
	
	UA.UArbrLgi = function (doc) {	
		var texts = UA.UAvtiQvcR;
		var typeFile = ['a[href$=".amr"],a[href$=".mp2"],a[href$=".ram"],a[href$=".aiff"],a[href$=".aif"],a[href$=".wma"],a[href$=".wav"],a[href$=".m4v"]' , 'a[href$=".ogg"],a[href$=".m4v"],a[href$=".divx"],a[href$=".mpeg"],a[href$=".m4a"],a[href$=".mp4"],a[href$=".mov"],a[href$=".mpg"],a[href$=".avi"],a[href$=".wmv"]' , 'a[href$=".exe"]', 'a[href$=".vcd"]','a[href$=".cab"]','a[href$=".ace"]','a[href$=".gz"]','a[href$=".dmg"]','a[href$=".iso"]','a[href$=".jar"]','a[href$=".rar"]','a[href$=".zip"],a[href$=".7z"]','a[href$=".psd"]','a[href$=".ai"]','a[href$=".indd"]','a[href$=".ppt"],a[href$=".pptx"],a[href$=".pptm"],a[href$=".pps"],a[href$=".ppsx"]', 'a[href$=".xlsx"],a[href$=".ods"],a[href$=".xls"]' , 'a[href$=".doc"],a[href$=".docx"],a[href$=".odt"],a[href$=".wps"]', 'a[href$=".txt"]','[href$=".pdf"]' , '[target="_blank"],[target="_new"]' , ];
		var addAttrName = ['andiAccLiknssound' , 'andiAccLiknsmovie','andiAccLiknsexe','andiAccLiknsvcd','andiAccLiknscab','andiAccLiknsace','andiAccLiknsgz','andiAccLiknsdmg','andiAccLiknsiso','andiAccLiknsjar','andiAccLiknsrar','andiAccLiknszip','andiAccLiknspsd','andiAccLiknsai','andiAccLiknsindd', 'andiAccLiknspowerpoint','andiAccLiknsexcel','andiAccLiknsdoc','andiAccLiknstxt','andiAccLiknspdf','andiAccLiknsnewwindow'];
		var addAttrValue = ['sound', 'movie','exe','vcd','cab','ace','gz','dmg','iso','jar','rar','zip','psd','ai', 'indd', 'powerpoint','excel','doc','txt','pdf','newwindow'];// 'rel':'external'
		var addText = [texts.UAWUuyfq , texts.UAWxRHq , texts.UAjqYuj , texts.UAatctvlHr , texts.UAxGsMaOgZ, texts.UALUScXq , texts.UANkkkng , texts.UAwnLqZAb , texts.UAnvPTPBCN , texts.UACtcUgfx , texts.UABuNRZg , texts.UAhWCqAM , texts.UATVKWA ,texts.ANDI2UADFkCBpn , texts.ANDI2UAlpwtZJDh , texts.ANDI2UAnpUffiZ , texts.ANDI2UAIwalpsxx ,texts.UAoWtfBqp, texts.UACxQZzqUo , texts.UAkXUlyrm , texts.UArRzxJ];
		
		for(var i = 0;i < typeFile.length; ++i){
			var locationInArr = i;
			andizxc(doc).contents().find(typeFile[locationInArr]).each(function () {
				if(andizxc(this).attr(addAttrName[locationInArr]) != addAttrValue[locationInArr]){
					var newMeaning = '';
					var linkText = andizxc(this).text();
					if(	linkText == '' && andizxc(this).find('img')){
						var findFirstImg = andizxc(this).find('img').first();
						if( andizxc(findFirstImg).attr('alt') != null){
							linkText = (findFirstImg)[0].getAttribute('alt').trim();
						} else if(  andizxc(findFirstImg).attr('aria-label') != null){
							linkText = (findFirstImg)[0].getAttribute('aria-label').trim();
						} else if(  andizxc(findFirstImg).attr('title') != null){
							linkText = andizxc(findFirstImg)[0].getAttribute('title').trim();
						} 
					} else if(linkText == ''){
						if(  andizxc(this).attr('title') != null){
							linkText = andizxc(this)[0].getAttribute('title').trim();
						} 
					}
					var UAKBYshriaLabelLink = andizxc(this).attr('aria-label');
					if(UAKBYshriaLabelLink != undefined){
						(UAKBYshriaLabelLink.indexOf(linkText) == -1)?
							newMeaning = linkText + ' ' + UAKBYshriaLabelLink : UAKBYshriaLabelLink;
					}
					if( newMeaning != undefined && newMeaning.length >= 1){
						andizxc(this).attr({'aria-label':   newMeaning + ", " + addText[locationInArr] }) ;
					}else{
						andizxc(this).attr({'aria-label':  linkText + ", " +addText[locationInArr] });
					}
					var names = (addAttrName[locationInArr]);
					var values = (addAttrValue[locationInArr]);
					andizxc(this).attr(names,values);
				}
			});
		}
		
		

	
    };
		
	UA.UAdwDCl = function (){
		var UAFvaYR = document.querySelectorAll('a:not(.UA2skipAreaAutomate)');
		UA.UAwtbMgKL(UAFvaYR);
		var ANDI2allIframes = document.querySelectorAll('iframe');
		for(var UADRVTPQV = 0; UADRVTPQV < ANDI2allIframes.length;UADRVTPQV++){
			try {
				UA.UAwtbMgKL(ANDI2allIframes[UADRVTPQV].contentWindow.document.querySelectorAll('a'));
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		};
	}

	UA.UAwtbMgKL = function (UAFvaYR){
		if(UAFvaYR.length > 0){
			for(var UAKBYsh = 0; UAKBYsh < UAFvaYR.length;UAKBYsh++){
				if(!UAFvaYR[UAKBYsh].hasAttribute('andifixedkblink')){
					UAFvaYR[UAKBYsh].setAttribute('andifixedkblink','true');
					UAFvaYR[UAKBYsh].addEventListener("click", function(ANDIevent){
						if(andizxc(this).attr('href').indexOf('#') > -1  && andizxc(this).attr('href').indexOf('#/') == -1 ){
							//var hashSrt = encodeURI(this.hash.substr(1))
							try {
								var hashSrt = (this.hash.substr(1))
								if(document.querySelector('#'+hashSrt) != null ){
									document.querySelector('#'+hashSrt).setAttribute('tabindex','0').focus();
								} else {
									document.querySelector('[name="'+hashSrt+'"]').setAttribute('tabindex','0').focus();
								}
							} catch(ANDIerr) {
								if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
							}
						}
					});
					if(UAFvaYR[UAKBYsh].hasAttribute('title')){
						if(UAFvaYR[UAKBYsh].text.trim() == UAFvaYR[UAKBYsh].getAttribute('title').trim()  ){
							UAFvaYR[UAKBYsh].removeAttribute('title');
						}
					}
					if(!UAFvaYR[UAKBYsh].hasAttribute('href')){
						UAFvaYR[UAKBYsh].setAttribute('href','#');
						UAFvaYR[UAKBYsh].addEventListener("click", function(ANDIevent){
							ANDIevent.preventDefault();
						});
					}
				}
			}
		}
	}
	
	UA.UAtvdBh = function () {
		UA.UAZmjbhJVKerFixUserImgEmptyAlt(UA.UAtGnLO.UAFVrfNr);
		andizxc('iframe').each(function(){
			try {
				var ANDIimages = andizxc(this).contents().find(UA.UAtGnLO.UAFVrfNr);
				UA.UAZmjbhJVKerFixUserImgEmptyAlt(ANDIimages);
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		});
    }

	UA.UAZmjbhJVKerFixUserImgEmptyAlt = function (ANDIimages) {
		andizxc(ANDIimages).each(function(){
			if(!andizxc(this).is('[andifixedemptyalt]')){
				if(andizxc(this).attr('src') != undefined){
					 var alt1 = (andizxc(this).attr('src').UAQtjrwo());
					 var alt2 = (andizxc(this).attr('src').UAOECTRt());
				}
				if(andizxc(this).attr('alt') == undefined || andizxc(this).attr('alt') == alt1 || andizxc(this).attr('alt') == alt2  ){
					andizxc(this).attr('alt','');
					this.setAttribute('andifixedemptyalt','true');
				}
			}
		});
    }
	
	UA.UAfQNMrP_network = function(UAXoHdGIeO){
		UA.UAfqURHKjw = function (UASvfzkList){	
			for(var UADRVTPQV = 0; UADRVTPQV < UASvfzkList.length;UADRVTPQV++){
				var UAvBMIL = UASvfzkList[UADRVTPQV].getAttribute('href');
				if(UAvBMIL!='' && UAvBMIL!= null){
					if(UAvBMIL.indexOf('facebook.com/') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAhEBYAuW);
						UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('twitter.com/') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAAMVrGAK);
						UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('youtube.com/') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAKylkoT);
						UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('waze://?q') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAmAnNB);
						UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('instagram.com/') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAsiXNpN);UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('linkedin.com/') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAmPUDFt);UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('plus.google.com/') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAMgSOJzqh);UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					} else if(UAvBMIL.indexOf('mailto:') > -1){
						UASvfzkList[UADRVTPQV].setAttribute('aria-label',UA.UAvtiQvcR.UAZufyUD);UASvfzkList[UADRVTPQV].setAttribute('UAfQNMrP','true');
					}
				}
			}
		}
		if(UAXoHdGIeO){
			var UASvfzkList = document.querySelectorAll('a');
			if(UASvfzkList != undefined && UASvfzkList.length > 0){
				UA.UAfqURHKjw(document.querySelectorAll('a'));
			}
			var ANDI2allIframes = document.querySelectorAll('iframe');
			for(var UADRVTPQV = 0; UADRVTPQV < ANDI2allIframes.length;UADRVTPQV++){
				try {
					var UASvfzkList = ANDI2allIframes[UADRVTPQV].contentWindow.document.querySelectorAll('a');
					if(UASvfzkList != undefined && UASvfzkList.length > 0){
						UA.UAfqURHKjw(UASvfzkList);
					}
				} catch(ANDIerr) {
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
				}
			};
			
		}
	}
	
	UA.UAdDeOTJR = function (UAjmAOuC) {
		if(UAjmAOuC != undefined && UAjmAOuC){
			andizxc('table').each(function () {
				if( !andizxc(this).is(UA.UAtGnLO.UAAgrtkgC)){
					andizxc(this)[0].addAttr({ 'role': 'presentation' });
				}
			});
		}
    };
	
		UA.UAoEPxt = function(elms){
		try{
			var UApVMeIsjm = document.querySelectorAll(elms);
			setPrevNext(UApVMeIsjm)
			for(var UADRVTPQV = 0; UADRVTPQV < UA.ANDI2allIframes.length;UADRVTPQV++){
				try {
					var UApVMeIsjm = (UA.ANDI2allIframes[UADRVTPQV]).contentWindow.document.querySelectorAll(elms);
					setPrevNext(UApVMeIsjm)
				} catch(ANDIerr) {
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
				}
			};
			function setPrevNext(UApVMeIsjm){
				for (var UAKBYsh = 0; UAKBYsh < UApVMeIsjm.length; UAKBYsh++){
					var UAYDxuh = UApVMeIsjm[UAKBYsh].attributes;
					for (var TUAj = 0; TUAj < UAYDxuh.length; TUAj++){
						var UAROKWkn = (UAYDxuh[TUAj].nodeValue).toLowerCase();
						var UAUfyuQdH = (UAYDxuh[TUAj].nodeName).toLowerCase();
						for (var ii in UA.keys.UAdCtnAI) {
							if(UAROKWkn.indexOf(UA.keys.UAdCtnAI[ii]) > -1){
								UApVMeIsjm[UAKBYsh].setAttribute('tabindex','0');
								UApVMeIsjm[UAKBYsh].setAttribute('role','link');
								UApVMeIsjm[UAKBYsh].setAttribute('aria-label',UA.UAvtiQvcR.UAeNXkpqs);
							}
						}
						for (var ii in UA.keys.UAdpJua) {
							if(UAROKWkn.indexOf(UA.keys.UAdpJua[ii]) > -1){
								UApVMeIsjm[UAKBYsh].setAttribute('tabindex','0');
								UApVMeIsjm[UAKBYsh].setAttribute('role','button');
								//UApVMeIsjm[UAKBYsh].setAttribute('aria-label',UA.UAvtiQvcR.UAKBYshutomationNextElm);
								/*andizxc('body').append('<span class="UAGKNCTd" role="alert" aria-label="הפריט התחלף"></span>');
								setTimeout(function () {
									andizxc('.UAGKNCTd').remove();
								}, 500);*/
							}
						}
						for (var ii in UA.keys.UArhdioB) {
							if(UAROKWkn.indexOf(UA.keys.UArhdioB[ii]) > -1){
								UApVMeIsjm[UAKBYsh].setAttribute('tabindex','0');
								UApVMeIsjm[UAKBYsh].setAttribute('role','button');
								//UApVMeIsjm[UAKBYsh].setAttribute('aria-label',UA.UAvtiQvcR.UAKBYshutomationPrevElm);
								/*andizxc('body').append('<span class="UAGKNCTd" role="alert" aria-label="הפריט התחלף"></span>');
								setTimeout(function () {
									andizxc('.UAGKNCTd').remove();
								}, 500);*/
							}
						}
						/*for (var ii in UA.keys.UAyCLLUG) {
                            if (UAROKWkn.indexOf(UA.keys.UAyCLLUG[ii]) > -1) {
                                if (!andizxc(UApVMeIsjm[UAKBYsh]).is('h1,h2,h3,h4,h5,h6,h1 *,h2 * ,h3 * ,h4 *,h5 *,h6 *')){
                                    if (andizxc(UApVMeIsjm[UAKBYsh]).UAgsqXk().trim() != ''){
                                        UApVMeIsjm[UAKBYsh].setAttribute('role', 'heading');
                                        UApVMeIsjm[UAKBYsh].setAttribute('aria-level', '2');
                                        UADvqJNC.UAyCLLUG++;
										
                                    }
                                }
							}
						}*/
					}
				}
			}
		}
		 catch(ANDIerr) {
			if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
		}
	}
	
	UA.UAjSleKzc = function(UACZoXZfX){
		if(UACZoXZfX != undefined && UACZoXZfX.length > 0){
			for(var TUAj = 0; TUAj < UACZoXZfX.length;TUAj++){
				if(UA.UADEOJEu(UACZoXZfX[TUAj].UApZrfLUUh,UACZoXZfX[TUAj].UAYytLpAy)){
					if(UACZoXZfX[TUAj].UAVuNtJboP !=''){
						var UAVuNtJboP = UACZoXZfX[TUAj].UAVuNtJboP;
						var UALEoppdF = UACZoXZfX[TUAj].UALEoppdF;
						var UAUnquof = UACZoXZfX[TUAj].UAUnquof;
						var UApVMeIsjm = document.querySelectorAll(UAVuNtJboP);
						for(var UADRVTPQV = 0; UADRVTPQV < UApVMeIsjm.length;UADRVTPQV++){
							UApVMeIsjm[UADRVTPQV].setAttribute('role','checkbox');
							UApVMeIsjm[UADRVTPQV].setAttribute('tabindex','0');
							UApVMeIsjm[UADRVTPQV].setAttribute('aria-label',UApVMeIsjm[UADRVTPQV].text);
							UApVMeIsjm[UADRVTPQV].addEventListener("click", function(ANDIevent){
								UA.UAXnfjnn(UALEoppdF, UAUnquof);
								setTimeout(function () {
									if (UApVMeIsjm[UADRVTPQV].classList.contains(checkedClass)) {
										andizxc('body').append('<span class="UAGKNCTd" role="alert" aria-label="'+UA.UAvtiQvcR.UACZoXZfXMark+'"></span>');
										setTimeout(function () {
											andizxc('.UAGKNCTd').remove();
										}, 500);
									} else {
										andizxc('body').append('<span class="UAGKNCTd" role="alert" aria-label="'+UA.UAvtiQvcR.UAXNzWQWV+'"></span>');
										setTimeout(function () {
											andizxc('.UAGKNCTd').remove();
										}, 500);
									}
								}, 500);	
								ANDIevent.preventDefault();
							});
						}
					}	
					UA.UAXnfjnn(UALEoppdF,UAUnquof);
				}
			}
		}
	}

	UA.UAqnsGTt = function () {
		var UAJriIDnE = '[role="heading"],h1,h2,h3,h4,h5,h6';
	 	UA.UALilxCCV(UAJriIDnE);
		andizxc('iframe').each(function(){
			try {
				UA.UALilxCCV(andizxc(this).contents().find(UAJriIDnE));
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		});
	}

    UA.UALilxCCV = function (UAJriIDnE) {
        andizxc(UAJriIDnE).each(function () {
           var UAsgXwhz = false;
		   if ( andizxc(this).text().trim() == ''){
				andizxc(this)[0].addAttr({'role':'presentation','UAAiuxiivc':'true'});
			}    
        });
    }
	
	UA.UAtPagyXgt = function(UAszvOXh){
		if(UAszvOXh != undefined && UAszvOXh.length > 0){
			UAszvOXh = andizxc(UAszvOXh);
			var UAvqZOVQ = UAszvOXh.length,UATYKENc = new Array(UAvqZOVQ), UANkDWqXug = new Array(UAvqZOVQ), UAaepmVSm = new Array(UAvqZOVQ), UAhfQorR = new Array(UAvqZOVQ), UANtFeWiH = new Array(UAvqZOVQ), UABsfALOf = new Array(UAvqZOVQ), UAbzOWM = new Array(UAvqZOVQ), UAbUvWNsV = new Array(UAvqZOVQ), UARdzua = new Array(UAvqZOVQ), UAXULjtfu = new Array(UAvqZOVQ), UAZUBiywIN = new Array(UAvqZOVQ),UAfIyMzwB = new Array(UAvqZOVQ), UAVUDhXRc = new Array(UAvqZOVQ), UATBsJb = new Array(UAvqZOVQ), UAIFAmfjV = new Array(UAvqZOVQ),UAiBDno = new Array(UAvqZOVQ), UAcyOHsPm = new Array(UAvqZOVQ), UAoJMBrrO = new Array(UAvqZOVQ), UAGWfCnsU = new Array(UAvqZOVQ), UAhEgAIp = new Array(UAvqZOVQ), UAWTKASRt = new Array(UAvqZOVQ), UALyCXLFf = new Array(UAvqZOVQ), UAbwtOIJSF = new Array(UAvqZOVQ), UAxXSAPBC = new Array(UAvqZOVQ),	 UAYqdiC = new Array(UAvqZOVQ), UATLaawU = new Array(UAvqZOVQ), UAatgHxpS = new Array(UAvqZOVQ), UARUglji = new Array(UAvqZOVQ), UACZZhVezA = new Array(UAvqZOVQ), UAuAobgU = new Array(UAvqZOVQ),UAWmJnIpv = new Array(UAvqZOVQ), UAUpxTmRL = new Array(UAvqZOVQ), UAmWjigukv = new Array(UAvqZOVQ), UAecgnL = new Array(UAvqZOVQ), UAcBhVqXG = new Array(UAvqZOVQ), UANyXPsU = new Array(UAvqZOVQ), UALdvNmf = new Array(UAvqZOVQ);
			andizxc(UAszvOXh).each(function(UADRVTPQV){
				if(!andizxc(this).UAtDFgJDN2() /*&& !andizxc(this).is('[andiValidation]')*/ ){
					var UAfoWodP = UADRVTPQV;
					var UAEIoBPet = andizxc(this);
					andizxc(this)[0].addAttr({'andiValidation':'true'});
					var UAYDxuh = andizxc(this)[0].attributes;	
					for (var TUAj = 0; TUAj < UAYDxuh.length; TUAj++){
						var UAROKWkn = (UAYDxuh[TUAj].nodeValue).toLowerCase();
						var UAUfyuQdH = (UAYDxuh[TUAj].nodeName).toLowerCase();
						if(UAUfyuQdH == 'required' ){
							andizxc(UAEIoBPet)[0].addAttr({'aria-required':'true'});
							UAmWjigukv[UADRVTPQV] = true;
							UADvqJNC.UAmWjigukv++;
						}
						for (var ii in UA.keys.UAmhfNyf) {
							if(UAUfyuQdH.indexOf(UA.keys.UAmhfNyf[ii]) > -1 || UAROKWkn.indexOf(UA.keys.UAmhfNyf[ii]) > -1){
								andizxc(UAEIoBPet)[0].addAttr({'aria-required':'true'});
								UAmWjigukv[UADRVTPQV] = true;
								UADvqJNC.UAmWjigukv++;
							}
						}
						for (var ii in UA.keys.UAAWRkfT) {
							if(UAROKWkn.indexOf(UA.keys.UAAWRkfT[ii]) > -1){
								UAaepmVSm[UADRVTPQV] = true;
								UADvqJNC.UAaepmVSm++;
							}
						}
						for (var ii in UA.keys.UAOwMeaq) {
							if(UAROKWkn.indexOf(UA.keys.UAOwMeaq[ii]) > -1){
								UATYKENc[UADRVTPQV] = true;
								UAecgnL[UADRVTPQV] = parseInt(UAROKWkn);
								UADvqJNC.UATYKENc++;

							}
							if(UAUfyuQdH.indexOf(UA.keys.UAOwMeaq[ii]) > -1){
								UATYKENc[UADRVTPQV] = true;
								UAecgnL[UADRVTPQV] = parseInt(UAROKWkn);
								UADvqJNC.UATYKENc++;
							}
						}
						for (var ii in UA.keys.UATTjWU) {
							if(UAROKWkn.indexOf(UA.keys.UATTjWU[ii]) > -1){
								UANkDWqXug[UADRVTPQV] = true;
								UAcBhVqXG[UADRVTPQV] = parseInt(UAROKWkn);
								UADvqJNC.UANkDWqXug++;
							}
							if(UAUfyuQdH.indexOf(UA.keys.UATTjWU[ii]) > -1){
								UANkDWqXug[UADRVTPQV] = true;
								UADvqJNC.UANkDWqXug++;
								UAcBhVqXG[UADRVTPQV] = parseInt(UAROKWkn);
							}
						}
						for (var ii in UA.keys.UAjDyVhxB) {
							if(UAROKWkn.indexOf(UA.keys.UAjDyVhxB[ii]) > -1){
								UAhfQorR[UADRVTPQV] = true;
								UADvqJNC.UAhfQorR++;
							}
						}
						for (var ii in UA.keys.UAWFMVW) {
							if(UAROKWkn.indexOf(UA.keys.UAWFMVW[ii]) > -1){
								UAbzOWM[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UAbzOWM++;
								UADvqJNC.UALdvNmf++;
							}
						}
						for (var ii in UA.keys.UAJPFzybOZ) {
							if(UAROKWkn.indexOf(UA.keys.UAJPFzybOZ[ii]) > -1){
								UAbUvWNsV[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UAbUvWNsV++;
							}
						}
						for (var ii in UA.keys.UAnVtST) {
							if(UAROKWkn.indexOf(UA.keys.UAnVtST[ii]) > -1){
								UAiBDno[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UAiBDno++;
							}
						}
						for (var ii in UA.keys.UAbKbNDuWJ) {
							if(UAROKWkn.indexOf(UA.keys.UAbKbNDuWJ[ii]) > -1){
								UAcyOHsPm[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
							}
						}
						for (var ii in UA.keys.UAkZruxki) {
							if(UAROKWkn.indexOf(UA.keys.UAkZruxki[ii]) > -1){
								UAoJMBrrO[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UAoJMBrrO++;
							}
						}
						for (var ii in UA.keys.UAKJXSZj) {
							if(UAROKWkn.indexOf(UA.keys.UAKJXSZj[ii]) > -1){
								UAGWfCnsU[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UAGWfCnsU++;
							}
						}
						for (var ii in UA.keys.UAmQDZrKKz) {
							if(UAROKWkn.indexOf(UA.keys.UAmQDZrKKz[ii]) > -1){
								UAhEgAIp[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UAhEgAIp++;
							}
						}
						for (var ii in UA.keys.UAIxZGNK) {
							if(UAROKWkn.indexOf(UA.keys.UAIxZGNK[ii]) > -1){
								UAWTKASRt[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UAWTKASRt++;
							}
						}
						for (var ii in UA.keys.UAhVgUr) {
							if(UAROKWkn.indexOf(UA.keys.UAhVgUr[ii]) > -1){
								UALyCXLFf[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UALyCXLFf++;
							}
						}
						for (var ii in UA.keys.UApJodV) {
							if(UAROKWkn.indexOf(UA.keys.UApJodV[ii]) > -1){
								UAbwtOIJSF[UADRVTPQV] = true;
								UALdvNmf[UADRVTPQV] = true;
								UADvqJNC.UALdvNmf++;
								UADvqJNC.UAbwtOIJSF++;
							}
						}
					}
					
						andizxc(UAEIoBPet).bind('blur keydown', function(ANDIevent){
							var keyCode = ANDIevent.keyCode || ANDIevent.which;   
							if(keyCode == 9  &&  !andizxc(UAEIoBPet).is('[andidontcheckvalid]')  ) {
								if(!ANDIevent.shiftKey) {
								UAoZNysg = andizxc(UAEIoBPet).val();
								if(UAmWjigukv[UADRVTPQV]){
									andizxc(UAEIoBPet).UAFYURkM();
								}
								if(UAaepmVSm[UADRVTPQV]){
									andizxc(UAEIoBPet).UAolfFX();
								}
								if(UATYKENc[UADRVTPQV]){
									andizxc(UAEIoBPet).UAnvjLsvj(UAecgnL[UADRVTPQV]);
								}
								if(UANkDWqXug[UADRVTPQV]){
									andizxc(UAEIoBPet).UAskBAs(UAcBhVqXG[UADRVTPQV]);
								}
								if(UAhfQorR[UADRVTPQV] && !andizxc(UAEIoBPet).is('[role="radio"],[role="checkbox"],[type="radio"],[type="checkbox"]')	){
									andizxc(UAEIoBPet).andiFormEmailValidation();
								}
								if(UAbzOWM[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAtLbtdItz();
								}
								if(UAbUvWNsV[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAtLbtdItz();
								} 
								if(UAiBDno[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAolfFX();
								}
								if(UAcyOHsPm[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAolfFX();
								}
								if(UAoJMBrrO[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAolfFX();
									andizxc(UAEIoBPet).UAnvjLsvj(7);
								}
								if(UAGWfCnsU[UADRVTPQV] && UALdvNmf[UADRVTPQV] && !andizxc(UAEIoBPet).is('[role="radio"],[role="checkbox"],[type="radio"],[type="checkbox"]')  ){
									andizxc(UAEIoBPet).UAolfFX();
									andizxc(UAEIoBPet).UAnvjLsvj(3);
								}
								if(UAhEgAIp[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									//andizxc(UAEIoBPet).andiFormDateValidation();
								}
								if(UAWTKASRt[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAolfFX();
									andizxc(UAEIoBPet).UAnvjLsvj(2);
								}
								if(UALyCXLFf[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAolfFX();
									andizxc(UAEIoBPet).UAnvjLsvj(2);
								}
								if(UAbwtOIJSF[UADRVTPQV] && UALdvNmf[UADRVTPQV] ){
									andizxc(UAEIoBPet).UAolfFX();
									andizxc(UAEIoBPet).UAnvjLsvj(2);
								}
							}
						}
					});
				}
			});
		}
	}

	UA.keys = {UAEGLKkpmf:["search", "srch"], UAmhfNyf:["required", "*"], UAAWRkfT:["\u05de\u05e1\u05e4\u05e8", "num", "number"], UAOwMeaq:["minlength"], UATTjWU:["maxlength"], UAjDyVhxB:["mail", "\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9", "\u05de\u05d9\u05d9\u05dc"], UAWFMVW:["name", "firstname", "fname", "\u05e9\u05dd \u05e4\u05e8\u05d8\u05d9", "\u05e9\u05dd \u05de\u05dc\u05d0", 
		"first name"], UAJPFzybOZ:["lastname", "lname", "\u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4", "last name"], UAdyNyy:["UserName", "User Name", "\u05e9\u05dd \u05de\u05ea\u05e9\u05de\u05e9"], UAMyhuMDN:["password", "pass", "\u05e1\u05d9\u05e1\u05de\u05d4"], UARnATwdX:["password confirm", "passwordconfirm", "password_confirm", "confirm password", "confirmpassword", "confirm_password", "\u05d0\u05d9\u05de\u05d5\u05ea \u05e1\u05d9\u05e1\u05de\u05d4"], 
		UACLpJCsq:["address"], UAuNSGgV:["country"], UAwlxtvPWk:["city"], UAYlqVyrYZ:["street"], UAnVtST:["zip", "postcode"], UAbKbNDuWJ:["POBox"], UAkZruxki:["phone", "telephone", "tel", "mobile", "fax", "\u05e4\u05e7\u05e1", "\u05e0\u05d9\u05d9\u05d3", "\u05de\u05d5\u05d1\u05d9\u05d9\u05dc", "\u05e1\u05dc\u05d5\u05dc\u05e8\u05d9"], UAKJXSZj:["prefix", "pref"], UAmQDZrKKz:["date"], UAIxZGNK:["yy", 
		"yyyy", "\u05e9\u05e0\u05d4", "\u05e9\u05e0\u05ea \u05dc\u05d9\u05d3\u05d4", "\u05e9\u05e0\u05ea", "year"], UAhVgUr:["mm", "month", "\u05d7\u05d5\u05d3\u05e9"], UApJodV:["\u05d9\u05d5\u05dd", "day"], UAEJxcCt:["cardmonth", "expdate_month", "expdatemonth"], UAHzSKiR:["cardyear"], UAmwHMia:["cc", "creditcard", "\u05d0\u05e9\u05e8\u05d0\u05d9", "\u05db\u05e8\u05d8\u05d9\u05e1", "cardno", "cardnumb", "card_Id"], UAWKgLr:["payments"], 
		UARZcyls:["cvv", "\u05e7\u05d5\u05d3 \u05d0\u05d1\u05d8\u05d7\u05ea \u05db\u05e8\u05d8\u05d9\u05e1", "3 \u05e1\u05e4\u05e8\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05e0\u05d5\u05ea \u05d1\u05d2\u05d1 \u05d4\u05db\u05e8\u05d8\u05d9\u05e1"], UAfjEqRsr:["captcha", "accesscode"], UAQpkpo:["units", "amount", "quantity", "item"], UAwCmVMi:["UAACjwhgpc", "msg", "textarea", "comments", "content", "description", "dscrpt"], UARkRWJW:["subject", "\u05d4\u05d5\u05d3\u05e2\u05d4"],
		UAdpJua:['next','leftarrow'],UArhdioB:['prev','rightarrow'],UAdCtnAI:['scroll-top','to the top','to-the-top','scrollUp','to-top','totop','#top'],UAyCLLUG:['rubric','title','heading','caption']
		};
	
	UA.UAYHzGCqU = function () {
		var ANDIcursorX = 0, ANDIcursorY = 0;
		window.onmousemove = function (ANDIevent) {
			ANDIcursorX = ANDIevent.PageX;
			ANDIcursorY = ANDIevent.PageY;
		};

		andizxc(document).keydown(function (ANDIevent) {
			if (ANDIevent.keyCode == 17) {
				if(ANDIcursorX == undefined)ANDIcursorX = 0;
				if(ANDIcursorY == undefined)ANDIcursorY = 0;
				UADvqJNC.ANDI2controlKeyDown++;
				var UAKBYshNDI2BGcolor;
				UAKBYshNDI2BGcolor = localStorage.UAebWXhO;
				andizxc("body").append('<div class="UAKBYshndiCssReser UAEHRTM" id="UAEHRTM"></div>');
				andizxc(".UAEHRTM").css({
					'position': 'absolute',
					'z-index': '10000',
					'background-color': UAKBYshNDI2BGcolor,
					'top': (ANDIcursorY - 15) + "px",
					'left': (ANDIcursorX - 15) + "px"
				}).fadeOut(1000).fadeIn(100).fadeOut(1000).fadeIn(100).fadeOut(1000);
				setTimeout(function () {
					andizxc(".UAEHRTM").remove();
				}, 3000);
			}
		});
    };

	UA.UAnnLmkD = function(UAGoVoEFQq){
		if(UAGoVoEFQq != undefined && UAGoVoEFQq.length > 0){
			andizxc(UAGoVoEFQq).each(function(UADRVTPQV){
				UA.UAYKDOt(andizxc(this),UADRVTPQV);
			});
			
			andizxc('iframe').each(function(TUAj){
				try {
					var UAVuNtJboPIframe = andizxc(this);
					andizxc(this).contents().find(UAGoVoEFQq).each(function(UADRVTPQV){
						UA.UAYKDOt(andizxc(this),TUAj);
					});
				} catch(ANDIerr) { 
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
				}
			});
		}
	}	
	
	UA.UAYKDOt = function (UAQJDsfiN,UAzEBZzIR){
		var UAnhXGOi = andizxc(UAQJDsfiN).parent();
		var UADfBRraiopP = parseInt(andizxc(UAQJDsfiN).position().top);
		var UAEkKMFBEjeftP = parseInt(andizxc(UAQJDsfiN).position().left);
		
		andizxc('form').on('click', ('.UAKBYshndiPaushButton'+UAzEBZzIR), function(evt) {
			evt.preventDefault();
		});
		andizxc(UAQJDsfiN).closest('body').find(UAnhXGOi).attr({'data-id':'andiButtonHere'});
		if( andizxc(UAnhXGOi).find('.UAKBYshndiPaushButton'+UAzEBZzIR).length == 0){
			andizxc(UAnhXGOi).prepend('<input type="image" style="top: '+UADfBRraiopP+'px; left: '+UAEkKMFBEjeftP+'px;z-index:99999999999;position: absolute;" class="UAKBYshndiPaushButton'+UAzEBZzIR+'" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20opacity%3D%22.75%22%20fill%3D%22%23424242%22%20d%3D%22M0%200h24v24H0z%22%2F%3E%3Cpath%20fill%3D%22%23FFF%22%20d%3D%22M10.69%205.604v13c0%20.16-.06.3-.175.417-.117.117-.256.176-.416.176H5.37c-.16%200-.3-.06-.415-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.177-.416.116-.118.255-.177.415-.177H10.1c.16%200%20.3.06.416.176.116.117.174.254.174.414zm8.274%200v13c0%20.16-.06.3-.175.417-.118.117-.257.176-.417.176h-4.728c-.16%200-.3-.06-.416-.175-.117-.116-.176-.255-.176-.415v-13c0-.16.06-.3.175-.416.116-.118.255-.177.415-.177h4.728c.16%200%20.3.06.416.176.115.117.174.254.174.414z%22%2F%3E%3C%2Fsvg%3E " id="KeXR0" alt="'+UA.UAvtiQvcR.UAShONl+'" >');
		}			
		if( andizxc(UAQJDsfiN).closest('html').find('#UAKBYshndiFlash'+UAzEBZzIR).length ==  0){
			andizxc(UAQJDsfiN).closest('html').find('head').append('<style id="UAKBYshndiFlash'+UAzEBZzIR+'"> #UAKBYshndiimg'+UAzEBZzIR+'{top: '+UADfBRraiopP+'px; left: '+UAEkKMFBEjeftP+'px;position:absolute;visibility:visible;z-index:999999;}.UAKBYshndiPaushButton'+UAzEBZzIR+'{width:18px;height:18px;border:none;}<style>');	
		}
		andizxc(UAnhXGOi).find('.UAKBYshndiPaushButton'+UAzEBZzIR).click(function(){
			if( andizxc(UAQJDsfiN).closest('body').find('#UAKBYshndiimg'+UAzEBZzIR).length ==  0){
				andizxc(UAQJDsfiN).closest('body').find(this).after('<div id="UAKBYshndiimg'+UAzEBZzIR+'" style="width:'+andizxc(UAQJDsfiN).width()+'px;height:'+andizxc(UAQJDsfiN).height()+'px;background-color:'+UA.UAtGnLO.UAfEEIsbS.backgroundColor+';">'+UA.UAvtiQvcR.UAShONl2+'</div>');
			} else {
				andizxc(UAQJDsfiN).closest('body').find('#UAKBYshndiimg'+UAzEBZzIR).remove();
			}
		});
	}
	
	UA.UAYIdxEAp = function () {
		andizxc('.regularFocus').remove();
		andizxc('head').append('<style class="regularFocus"> :focus{box-shadow: 0px 0px 10px DeepSkyBlue !important;} [tabindex]:not([tabindex="-1"]):focus,[role="button"]:focus,button:focus,select:focus,textarea:focus,input:focus{box-shadow: 0px 0px 10px DimGray !important;}</style>')
		andizxc('iframe').each(function(){
			try{
				andizxc(this).contents().find('.regularFocus').remove();
				andizxc(this).contents().find('head').append('<style class="regularFocus"> :focus{box-shadow: 0px 0px 10px DeepSkyBlue !important;} [tabindex]:not([tabindex="-1"]):focus,[role="button"]:focus,button:focus,select:focus,textarea:focus,input:focus{box-shadow: 0px 0px 10px DimGray !important;}</style>')
			} catch(ANDIerr) {
				if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
			}
		});
	};
		
	UA.UAySSpGA = function(UALgpPwL){
		if(UALgpPwL != undefined && UALgpPwL.length > 0){
			andizxc(UALgpPwL).each(function(UADRVTPQV){
				andizxc(UALgpPwL[UADRVTPQV].UAVuNtJboP).each(function(TUAj){
					andizxc(this)[0].addAttr({'aria-label':UALgpPwL[UADRVTPQV].UACYwsaXK,'UAKBYshndiInputdiscrp':UALgpPwL[UADRVTPQV].UACYwsaXK });
				});
			});
			andizxc('iframe').each(function(x){
				try {
					andizxc(UALgpPwL).each(function(ANDIb){
						andizxc(this).contents().find(UALgpPwL[ANDIb].UAVuNtJboP).each(function(TUAj){
							andizxc(this)[0].addAttr({'aria-label':UALgpPwL[ANDIb].UACYwsaXK,'UAKBYshndiInputdiscrp':UALgpPwL[ANDIb].UACYwsaXK });
						});
					});
				} catch(ANDIerr) {
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr);
				}
			});
		}
	}
	UA.activeKBRsupport = function(){
		function hideMessage(){
			andizxc('#andiKBRmessage').css('display','none');
			andizxc('#andiKBRmessage [role="button"]').attr({'tabindex':'-1'});
			andizxc('#UAEndkVm')[0].addAttr({'andiKBRmessage':'false'});
		}
		
		runactiveKBRfns = function(){
			UA.UAYIdxEAp();
			UA.UAdwDCl();			
		}
		
		runKBRfns = function(){
			if(localStorage.getItem('activeKBRsupport') != 'true'){
			andizxc('#UAEndkVm')[0].addAttr({'andiKBRmessage':'false'});
				hideMessage();
				runactiveKBRfns();
				localStorage.removeItem('noactiveKBRsupport');
				localStorage.setItem('activeKBRsupport','true');
			}
		}
		
		if( UA.andiAskkeybourdNav) {
			UA.UAYIdxEAp();
			UA.UAdwDCl();
			return false;
		}
		
		if(window.innerWidth > 700) {
			var isRtlLang = (document.querySelector('head').innerHTML.indexOf('UA2StyleSheetLTR') > -1) ?false:true;
			var isDIRok = false;
			var andiKBRmessageStyle = 'z-index:99999999999;	display:none; border-radius:5px; margin:10px;background-color: rgba(0, 0, 0, 0.65);height:75px;box-sizing:border-box;text-align:'+((isRtlLang)?'right':'left')+' ; width:360px;padding: 23px 20px 10px;;position:fixed;color:#fff !important ;bottom:0';
			var smallArrowStyle =  '';
			var ANDIclsBtnStyle = 'z-index:99999999999;	width: 25px;   position: absolute; top: 8px; '+((isRtlLang)?'left':'right')+': 7px;';
			andizxc('#wrapAndiIconOpenMenuBtn').append('<div aria-hidden="true" id="andiKBRmessage" style="'+andiKBRmessageStyle+'"><div style="'+smallArrowStyle+'"></div>'+UA.UAvtiQvcR.UAEyLkIF2158+'<div  style="'+ANDIclsBtnStyle+'" aria-label="'+UA.UAvtiQvcR.UAEyLkIF2159+'" id="ANDIclsBtn" role="button" tabindex="0">X</div></div>');
			if(parseInt(andizxc('#andiKBRmessage').css('right')) != 'NaN' && parseInt(andizxc('#andiKBRmessage').css('right')) < 40){
				andizxc('#andiKBRmessage').css('right','40px');
			}
			if(parseInt(andizxc('#andiKBRmessage').css('left')) != 'NaN' && parseInt(andizxc('#andiKBRmessage').css('left')) < 40){
				andizxc('#andiKBRmessage').css('left','40px');
			}
			eventOn('click','#activateKBRbyY',function (e){
				if(localStorage.getItem('activeKBRsupport') != 'true' ){
					hideMessage();
					runKBRfns();
				}
			});
			eventOn('keydown','#UAEndkVm',function (e){
				if(e.keyCode == 89){
					andizxc('#activateKBRbyY').click();
				}
			});
			eventOn('click','#ANDIclsBtn', function(e){
				andizxc('#andiKBRmessage').css('display','none');
				localStorage.removeItem('activeKBRsupport');
				localStorage.setItem('noactiveKBRsupport','true');
				setTimeout(function(){
					andizxc('#UAEndkVm')[0].addAttr({'andiKBRmessage':'false'});
				},100);
			});		
			eventOn('keydown','#ANDIclsBtn', function(e){
				if(  e.keyCode == 13 ){
					this.click();
				}
			});	
			
			if(localStorage.getItem('activeKBRsupport') == 'true' ){
				runactiveKBRfns();
			} else if(localStorage.getItem('noactiveKBRsupport') == 'true'){
				localStorage.removeItem('activeKBRsupport');
			} else {
				TABSarr = [];
				var myVar, confirmKBRuse;
				andizxc(document).on('keydown',function toovya(e){
					if(localStorage.getItem('noactiveKBRsupport')  != 'true' && localStorage.getItem('activeKBRsupport') != 'true'){
						if(  e.target.tagName != 'INPUT' && e.target.tagName != 'TEXTAREA' && e.target.tagName != 'SELECT' ){
							if(myVar != undefined) clearTimeout(myVar);
							if(e.keyCode == 89 && localStorage.getItem('activeKBRsupport') != 'true' ){
								if(confirmKBRuse != undefined) clearTimeout(confirmKBRuse);
								hideMessage();
								runKBRfns();
							}
							if(e.keyCode == 9 && localStorage.getItem('activeKBRsupport') != 'true' ){
								andizxc('#andiKBRmessage').css('display','inline-block');
								andizxc('#andiKBRmessage [role="button"]').attr({'tabindex':'0'});
								TABSarr.push('tab');
								if(TABSarr.length >= 3){
									if(localStorage.getItem('activeKBRsupport') != 'true' ){
										runKBRfns();
									}
								}
								myVar = setTimeout(function(){
									TABSarr.length = 0;
								}, 1000);
							} else {
								TABSarr.length = 0;
							}
						}
						
					}
				});
				
			}
		}
	}
	
	UA.fixHeading = function(){
		//var posibleHeading = [];
		var posibleHeadingSize = [];
		var basefontsize = localStorage.getItem('basefontsize');
		allElms = document.querySelectorAll('[andiallelmwithtext]');
		for(var i = 0;i < allElms.length; i++){
			var thsiElmfontsize = allElms[i].getAttribute('UAfHyCrS');
			if(thsiElmfontsize != 'null' &&  parseInt(thsiElmfontsize) > basefontsize){
				if( !posibleHeadingSize.contains(thsiElmfontsize) )
				posibleHeadingSize.push(parseInt(thsiElmfontsize));
			}
		}
		posibleHeadingSize.sort(function(a,b){
			return b - a;
		});
		var UAvqZOVQ = posibleHeadingSize.length;
		var didntMarkAsHeading = 0;
		var posibleHeading = 0;
		function markHeading(elm){
			elm.setAttribute('role','heading');
			elm.setAttribute('aria-level',(i+2 <7 )?(i+2):'6');
		}
		for(var i = 0;i < UAvqZOVQ; i++){
			allElms = document.querySelectorAll('[UAfHyCrS="'+posibleHeadingSize[i]+'"]');
			for(var j = 0;j < allElms.length; j++){
				posibleHeading++;
				var thisTagName = allElms[j].tagName.toLowerCase();
				var compareList = 'a input button h1 h2 h3 h4 h5 h6';
				var thisText = (allElms[j].innerText || allElms[j].textContent).trim();
				var numOfSpace = thisText.match(/([\s]+)/g);
				if(compareList.indexOf(thisTagName) == -1 && thisText.indexOf(' ') > -1 && !allElms[j].hasAttribute('[role]')){
					markHeading(allElms[j]);
				} else {
					var parentElm = allElms[j].parentElement;
					var thisParentText = (parentElm.innerText || parentElm.textContent).trim();
					if(compareList.indexOf(thisTagName) == -1 && thisParentText == thisText && compareList.indexOf(parentElm.tagName.toLowerCase()) == -1 && !allElms[j].hasAttribute('[role]') ){
						markHeading(allElms[j])
					} else if(compareList.indexOf(thisTagName) == -1 && numOfSpace != null && thisParentText.match(/([\s]+)/g) != null && ((numOfSpace.length)+1 == (thisParentText.match(/([\s]+)/g).length)) ){
						markHeading(allElms[j]);
					} else {
					}
				}
			}
		}
	} 
		
	UA.fixBreadcrumb = function(){
		(function(){
			var wrapBreadCrumbArr = [];
			andizxc('.breadcrumb, #breadcrumb ,.crumbs, #crumbs, [class*="breadcrumb"],[id*="breadcrumb"]').each(function(){
				var that = this;
				ANDIparentElm = andizxc(this);
				var isWrapAll = true;
				while (andizxc(ANDIparentElm)[0].tagName.toLowerCase() != 'body' && andizxc(ANDIparentElm)[0].tagName.toLowerCase() != 'html'){
					ANDIparentElm = andizxc(ANDIparentElm).parent();
					if((andizxc(ANDIparentElm).attr('class') != undefined && andizxc(ANDIparentElm).attr('class').indexOf('breadcrumb') > -1) ||(andizxc (ANDIparentElm).attr('id') != undefined && 									   				andizxc(ANDIparentElm).attr('id').indexOf('breadcrumb') > -1)){
						isWrapAll = false;
					}
				}
				if(isWrapAll){
					wrapBreadCrumbArr.push(that);
				}
			});
			var createText = function (arrOfElms){
				var tempText = '';
				for(var i = arrOfElms.length-1;i>=0; i-- ){
					if(andizxc(arrOfElms[i]).text().trim().length > 2){
						var elmText = andizxc(arrOfElms[i]).text().trim();
						if(tempText.indexOf(UA.UAvtiQvcR.UAYgMqRNlreadcrumb1) == -1){
							andizxc(arrOfElms[i]).attr('aria-current','page')
							tempText = UA.UAvtiQvcR.UAYgMqRNlreadcrumb1 + elmText + ' ';
						} else {
							if(andizxc(arrOfElms[i]).is('a').length > 0){
								andizxc(arrOfElms[i]).attr('aria-label',UA.UAvtiQvcR.UAYgMqRNlreadcrumb2 + elmText);
							} else if(andizxc(arrOfElms[i]).find('a').length > 0){
								andizxc(arrOfElms[i]).find('a').attr('aria-label',UA.UAvtiQvcR.UAYgMqRNlreadcrumb2 + elmText);
							}
							tempText = tempText + UA.UAvtiQvcR.UAYgMqRNlreadcrumb3 + elmText + ' ';
						}
					}
				}
				return( tempText );
			}

			andizxc(wrapBreadCrumbArr).each(function(i){
				var that = this;
				if(andizxc(that)[0].children.length == 1){
					var wraptext = (andizxc(that)[0].children)
					if(wraptext.length == 1){
						var allElms = andizxc(wraptext)[0].children; 
						var allSentence = createText(allElms);
						andizxc(that).attr({'aria-label':allSentence,'tabindex':'0','role':'dialog'})
					}
				} else {
					var allElms = andizxc(that)[0].children; 
					var allSentence = createText(allElms);
					andizxc(that).attr({'aria-label':allSentence,'tabindex':'0','role':'dialog'});				}
			});
		})();
	}
	
	UA.fixBreadcrumb();
	
/************************************************************************/		
/************************************************************************/		
/************************************************************************/		
/************************************************************************/		
	andiRunAll = function(){
		setTimeout(function(){
			UA.createAutomaticAreas();
			UA.andi2findjsevents();
		},30);
		setTimeout(function(){
			UA.addCssFocusFromHOver();
			UA.UADjCSKX();
		},45);
		setTimeout(function(){
			UA.UAySSpGA (UA.UAtGnLO.UALgpPwL);
			UA.UAFSGRnYd(UA.UAtGnLO.UAFXaEo.UAzvSzeEuJ , UA.UAtGnLO.UAFXaEo.UAkjOzWh);
		},60);
		setTimeout(function(){
			andizxc('iframe').each(function(){
				try {
					if(andizxc(this).attr('src') ){
						UAguZxjVP = andizxc(this).contents().find( UA.UAtGnLO.UAFXaEo.UAzvSzeEuJ  );
						UA.UAtPagyXgt(UAguZxjVP);
					}
				} catch(ANDIerr) {
					if(UA.UAtGnLO.UAKPDJhbW)console.log("Error: "+ANDIerr); 
				} 
			});
			UA.UAtPagyXgt(UA.UAtGnLO.UAFXaEo.UAzvSzeEuJ);
		},80);
		setTimeout(function(){
			UA.UAoEPxt(UA.UAtGnLO.UAgruRSA);
			UA.UAjSleKzc(UA.UAtGnLO.UACZoXZfX);
			UA.UAeJGzDKnU();
			UA.fixHeading();
		},100);
		setTimeout(function(){
			UA.UADWQplDV();
			
			UA.UAtvdBh();
			UA.UAchjnvGw();
			UA.UAfQNMrP_network(true);
		},120);
		setTimeout(function(){
			UA.UAdDeOTJR(UA.UAtGnLO.UAjmAOuC);
			UA.UAqnsGTt();
			UA.UAYHzGCqU();
		},145);
		setTimeout(function(){
			UA.UAgpaCwJxl();
			UA.andiAskkeybourdNav = false;
			UA.activeKBRsupport();
		},170);
	}
	