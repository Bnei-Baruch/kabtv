angular.module('kabtv').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/audioPlayer.html',
    "<div class=audioPlayer><div class=play ng-class=playOnOff ng-click=togglePlay()></div><div class=mute ng-class=muteOnOff ng-click=toggleMute()></div><div class=volume><div class=volumeRail></div></div></div>"
  );


  $templateCache.put('views/cliplist.html',
    "<div><select ng-model=selectedClipList ng-options=\"item.name for item in clipListes\" class=selectTag><option value=\"\" ng-hide=\"selectedClipList.id == item.id\">{{selectedClipList.title}}</option></select><div class=clipListContainer><div ng-repeat=\"item in clipList\" class=item><div ng-click=runClip(item) class=\"cont clearfix\"><img ng-src={{item.image_url}} title={{item.title}} alt={{item.title}} class=\"clipImage toL\"><h2>{{item.title}}</h2><p>{{item.description}}</p></div><div class=clipData>{{item.duration}}</div></div></div></div>"
  );


  $templateCache.put('views/footer.html',
    "<footer id=footer class=toL><nav><a ng-href={{data.url}} ng-repeat=\"data in footMenuData\">{{data.caption}}</a></nav></footer>"
  );


  $templateCache.put('views/header.html',
    "<header id=header ng-controller=kabtvHeader><div class=\"tree toL\"><img src=./images/tree.gif></div><div class=whiteWrappwer><a href=\"./\" class=\"logoTop toL\"><img ng-src=./images/kab_tv_{{Lang.toLowerCase()}}.gif></a><div id=help-e class=toR><a href=\"http://live.kab.tv/client.php?locale=he&style=silver_he&group=3\" target=_blank onclick=\"if(navigator.userAgent.toLowerCase().indexOf('opera') != -1 && window.event.preventDefault) window.event.preventDefault();this.newWindow = window.open('http://live.kab.tv/client.php?locale=he&style=silver_he&group=3&url='+escape(document.location.href)+'&referrer='+escape(document.referrer), 'mibew', 'toolbar=0,scrollbars=0,location=0,status=1,menubar=0,width=640,height=480,resizable=1');this.newWindow.focus();this.newWindow.opener=window;return false\"><img ng-src={{helpImage}} alt=\"technical support\" border=0 width=226 height=50></a> </div><nav class=headLangNav><a ng-repeat=\"data in topMenuData\" ng-href={{data.url}} ng-class=currentLang(data.language)>{{data.caption}}</a></nav></div><nav class=headLinksNav><a ng-repeat=\"data in linksList\" ng-href={{data.url}} title={{data.title}}>{{data.caption}}</a></nav></header>"
  );


  $templateCache.put('views/playerClip.html',
    "<div class=clearfix><div class=backToOnLine ng-click=getStream()>{{ 'PLAYER_BACK_TO_LIVE' | translate}}</div><div id=player></div><a ng-show=showFullScreen class=\"textToRight fullScreenButton\" ng-click=gofs()><img src=images/fs.gif alt=\"{{ 'PLAYER_FULLSCREEN' | translate}}\" width=14 height=14> {{ 'PLAYER_FULLSCREEN' | translate}}</a><div class=\"playerPanel playerDescription\"><h1 class=clipTitle>{{playerData.title}}</h1><div id=clip-save-button><a ng-href={{playerData.download_url}} class=\"downloadIcon clipIconBig\"><img src=images/save-big.gif title=\"{{ 'VOD_DOWNLOAD' | translate}}\" alt=\"{{ 'VOD_DOWNLOAD' | translate}}\"> {{ 'VOD_DOWNLOAD' | translate}}</a></div><p>{{playerData.description}}</p><br><div id=addthis-toolbox class=\"addthis_toolbox addthis_default_style addthis_16x16_style\"><a class=addthis_button_twitter></a> <a class=addthis_button_google_plusone_share></a> <a class=addthis_button_email></a></div></div></div>"
  );


  $templateCache.put('views/playerStream.html',
    "<div class=clearfix><div class=tabs><div ng-click=switchVideoAudio(true) class=\"tabBtn {{isVideo? 'select': '';}}\">{{'PLAYER_VIDEO' | translate}}</div><div ng-click=switchVideoAudio(false) class=\"{{isVideo? '':'select';}} tabBtn\" ng-if=hasAudio(currentPlayerLang)>{{'PLAYER_AUDIO' | translate}}</div><div class=broadcastTime translate=PLAYER_BROADCAST_TIME translate-value-time={{broadcastTime}}></div></div><div id=player></div><a ng-show=showFullScreen class=fullScreenButton ng-click=gofs()><img src=images/fs.gif alt=\"{{ 'PLAYER_FULLSCREEN' | translate}}\" width=14 height=14> {{ 'PLAYER_FULLSCREEN' | translate}}</a><div class=playerPanel><label ng-repeat=\"item in playerData | filter:videoFilter\" class=\"langs {{(currentPlayerLang == item.language) ? 'selected': '';}}\">{{item.language}} <input type=radio ng-model=currentPlayerLang value=item.language ng-change=switchPlayerLang(item.language) name=switcherLang-{{item.language}}></label><div class=qualitySwitcher ng-if=hasPlayerDataQuality() ng-show=isOnlineTran><label ng-repeat=\"item in playerDataQuality | orderBy: item.quality\" ng-if=\"currentPlayerLang == item.language\" class=\"langs {{(currentPlayerQuality == item.quality) ? 'selected': '';}}\">{{item.quality.toUpperCase() | translate}} <input type=radio ng-model=currentPlayerQuality value=item.quality name=switcherQuality-{{item.language}} ng-change=playerQualityChange(item.quality)></label></div></div></div>"
  );


  $templateCache.put('views/tabs.html',
    "<div class=tabs id=asideTabIframe ng-controller=kabtvTabs><div ng-repeat=\"item in tabs\" class=\"tabBtn {{currentTab == item ? 'select': '';}}\" ng-click=switchTab(item)>{{item | translate}}</div><div ng-include=\"currentTab + '.tpl'\" class=forIframe></div></div><script type=text/ng-template id=TAB_UPDATES.tpl><div class=\"updates\" ng-include=\"'views/updates.html'\"></div></script><script type=text/ng-template id=TAB_SCHEDULE.tpl><iframe ng-src=\"{{currentTabUrl}}\" frameborder=\"0\" scroll></iframe></script><script type=text/ng-template id=TAB_QUESTIONS.tpl><iframe ng-src=\"{{currentTabUrl}}\" frameborder=\"0\"></iframe></script><script type=text/ng-template id=TAB_SKETCHES.tpl><iframe ng-src=\"{{currentTabUrl}}\" frameborder=\"0\"></iframe></script>"
  );


  $templateCache.put('views/updates.html',
    "<div ng-repeat=\"update in updates\" class=\"item clearfix\"><div class=ad ng-if=update.url><div class=header><a ng-href={{update.url}} target=_blank><span class=title ng-bind-html=update.title></span> <span class=subtitle ng-bind-html=update.subtitle></span></a></div><div class=body ng-if=update.description><div class=description ng-bind-html=update.description></div></div><div class=body ng-if=update.image_url><a ng-href={{update.url}} target=_blank><img ng-src={{update.image_url}}></a></div><a ng-if=update.url_caption ng-href={{update.url}} class=\"url toR\" target=_blank>{{update.url_caption}}>></a></div><div class=ad ng-if=!update.url><div class=header><span class=title ng-bind-html=update.title></span> <span class=subtitle ng-bind-html=update.subtitle></span></div><div class=body ng-if=update.description><div class=description ng-bind-html=update.description></div></div><div class=body ng-if=update.image_url><img ng-src={{update.image_url}}></div></div></div>"
  );

}]);
