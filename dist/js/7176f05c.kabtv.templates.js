angular.module('kabtv').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/layout/footer.html',
    "<div data-ng-controller=\"Footer as vm\"><nav class=links-nav><a data-ng-href={{item.url}} data-ng-repeat=\"item in vm.links\" class=nav-link>{{item.caption}}</a></nav></div>"
  );


  $templateCache.put('app/layout/header.html',
    "<div id=header data-ng-controller=\"Header as vm\"><div class=\"tree toL\"><img src=static/images/tree.gif></div><div class=white-wrappwer><a href=\"/\" class=toL><img data-ng-src={{vm.logoImage}}></a><div id=tech-support class=toR><a href=\"\" data-ng-click=vm.gotoHelpMessage()><img data-ng-src={{vm.helpImage}} alt=\"technical support\" border=0 width=226 height=50></a></div><nav class=langs-nav><a data-ng-repeat=\"item in vm.languages\" data-ng-href=/{{item.key|lowercase}} data-ng-class=\"{'nav-link': true, selected: vm.isCurrentLang(item)}\">{{item.caption}}</a></nav></div><nav class=links-nav><a data-ng-repeat=\"item in vm.links\" data-ng-href={{item.url}} class=nav-link title={{item.title}}>{{item.caption}}</a></nav></div>"
  );


  $templateCache.put('app/layout/shell.html',
    "<div id=shell class={{vm.pageDirection}} data-ng-controller=\"Shell as vm\"><header class=clearfix><div data-ng-include=\"'app/layout/header.html'\"></div></header><div id=main-panel class=clearfix data-ng-style=vm.mainPanelStyle()><div id=left-panel data-ng-include=\"'app/vod/vod.html'\"></div><div id=center-panel data-ng-view=\"\">Center panel content</div><div id=right-panel data-ng-include=\"'app/tabs/tabs.html'\"></div></div><footer id=footer class=clearfix><div data-ng-include=\"'app/layout/footer.html'\"></div></footer></div>"
  );


  $templateCache.put('app/player/clip.html',
    "<div class=clearfix><div class=back-to-stream data-ng-click=vm.gotoStream() data-ng-if=\"$root.isLive || $root.config.lang.key == 'HEB' || $root.config.lang.key == 'RUS'\">{{ 'PLAYER_BACK_TO_LIVE' | translate}}</div><span us-spinner spinner-key=spinner-1 spinner-start-active=true></span><div id=player><kabtv-jw-player data-ng-if=!vm.isWMV data-file=vm.clip.play_url></kabtv-jw-player><kabtv-wmv-player data-ng-if=vm.isWMV data-url=vm.clip.play_url></kabtv-wmv-player></div><div class=player-panel><h1 class=clip-title>{{vm.clip.title}}</h1><div id=clip-save-button><a data-ng-href={{vm.clip.download_url}} class=\"download-icon clip-icon-big\"><img src=static/images/save-big.gif title=\"{{ 'VOD_DOWNLOAD' | translate}}\" alt=\"{{ 'VOD_DOWNLOAD' | translate}}\"> {{ 'VOD_DOWNLOAD' | translate}}</a></div><p>{{vm.clip.description}}</p><br><div id=addthis-toolbox class=\"addthis_toolbox addthis_default_style addthis_16x16_style\"><a class=addthis_button_twitter></a> <a class=addthis_button_google_plusone_share></a> <a class=addthis_button_email></a></div></div></div>"
  );


  $templateCache.put('app/player/jwplayer.directive.html',
    "<div id=player><div id=jwplayer-container></div></div>"
  );


  $templateCache.put('app/player/playlist.html',
    "<div class=clearfix><kabtv-jw-player data-file=vm.currentPlayListItem.play_url></kabtv-jw-player><div class=player-panel><h1 class=vod-item-title>{{vm.currentPlayListItem.title}}</h1><p>{{vm.currentPlayListItem.description}}</p></div></div>"
  );


  $templateCache.put('app/player/soundmanager.directive.html',
    "<div id=audio-player><div class=play data-ng-class=\"{play: true, off: isPlay}\" data-ng-click=togglePlay()></div><div class=mute data-ng-class=\"{mute: true, off: isMute}\" data-ng-click=toggleMute()></div><div class=volume><div class=volume-rail></div></div></div>"
  );


  $templateCache.put('app/player/stream.html',
    "<div class=clearfix><div class=tabs><div data-ng-click=vm.playVideo() data-ng-class=\"{'tab-button': true, 'select': vm.isVideo}\">{{'PLAYER_VIDEO' | translate}}</div><div data-ng-click=vm.playAudio() data-ng-class=\"{'tab-button': true, 'select': vm.isAudio}\" data-ng-if=vm.hasAudio>{{'PLAYER_AUDIO' | translate}}</div><div class=jerusalem-time translate=PLAYER_BROADCAST_TIME translate-value-time={{vm.jerusalemTime}}></div></div><div id=player><kabtv-jw-player data-ng-if=\"vm.isVideo && vm.isHLS\" data-stream=vm.stream></kabtv-jw-player><kabtv-wmv-player data-ng-if=\"vm.isVideo && vm.isWMV\" data-url=vm.stream.url></kabtv-wmv-player><kabtv-sound-player data-ng-if=vm.isAudio data-url=vm.audioStream.url></kabtv-sound-player></div><div class=player-panel><label data-ng-repeat=\"item in vm.alternateLanguages\" class=\"langs {{(vm.currentPlayerLang.key == item.language.key) ? 'selected': '';}}\" data-ng-if=\"isLive || !item.is_live_only\">{{item.language.caption}} <input type=radio data-ng-model=vm.currentPlayerLang data-ng-value=item.language.key data-ng-change=vm.changeLanguage(item.language) name=vm.switcher-language-{{item.language.key}}></label><div class=quality-switcher data-ng-show=vm.showQualitySelection()><span>{{'STREAM_QUALITY' | translate}}:</span><label data-ng-repeat=\"item in vm.alternateQualities | orderBy: item.quality\" class=langs>{{item.quality.toUpperCase() | translate}} <input type=radio data-ng-model=vm.currentPlayerQuality value=item.quality name=vm.switcher-quality-{{item.quality}} data-ng-change=vm.changeQuality(item.quality)></label><label class=\"langs selected\">{{vm.currentPlayerQuality.toUpperCase() | translate}}</label></div></div></div>"
  );


  $templateCache.put('app/player/wmvplayer.directive.html',
    "<div id=wmv-player><object name=wmv-player type=application/x-ms-wmp data-ng-if=!isIE><param name=autostart value=true><param name=controller value=true><param name=volume value=50><param name=uiMode value=full><param name=animationAtStart value=true><param name=showDisplay value=false><param name=ShowAudioControls value=true><param name=ShowPositionControls value=false><param name=transparentAtStart value=false><param name=ShowControls value=true><param name=ShowStatusBar value=true><param name=ShowTracker value=false><param name=ClickToPlay value=false><param name=DisplayBackColor value=#000000><param name=DisplayForeColor value=#ffffff><param name=balance value=false><param name=src value={{url}}><param name=fullScreen value={{showFullScreen}}><param name=type value=application/x-ms-wmp></object><object name=wmv-player classid=CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6 style=\"background-color: rgb(0, 0, 0)\" data-ng-if=isIE><param name=rate value=1><param name=balance value=0><param name=defaultFrame value=\"\"><param name=playCount value=1><param name=autoStart value=1><param name=currentMarker value=0><param name=invokeURLs value=-1><param name=baseURL value=\"\"><param name=volume value=50><param name=mute value=0><param name=uiMode value=full><param name=stretchToFit value=0><param name=windowlessVideo value=-1><param name=enabled value=-1><param name=enableContextMenu value=-1><param name=fullScreen value=0><param name=SAMIStyle value=\"\"><param name=SAMILang value=\"\"><param name=SAMIFilename value=\"\"><param name=captioningID value=\"\"><param name=enableErrorDialogs value=0><param name=autostart value=true><param name=controller value=true><param name=volume value=50><param name=uiMode value=full><param name=animationAtStart value=true><param name=showDisplay value=false><param name=ShowAudioControls value=true><param name=ShowPositionControls value=false><param name=transparentAtStart value=false><param name=ShowControls value=true><param name=ShowStatusBar value=true><param name=ShowTracker value=false><param name=ClickToPlay value=false><param name=DisplayBackColor value=#000000><param name=DisplayForeColor value=#ffffff><param name=balance value=false><param name=enabled value=true><param name=mute value=false><param name=bgcolor value=#000000><param name=windowlessVideo value=1></object><div><a class=full-screen-button data-ng-click=gofs()><img src=static/images/fs.gif alt=\"{{ 'PLAYER_FULLSCREEN' | translate}}\" width=14 height=14> {{ 'PLAYER_FULLSCREEN' | translate}}</a></div></div>"
  );


  $templateCache.put('app/tabs/tabs.html',
    "<div id=tabs data-ng-controller=\"Tabs as vm\"><div id=tabs-header data-ng-repeat=\"item in vm.tabs\" data-ng-class=\"{'tab-button': true, 'select': vm.isSelectedTab(item)}\" data-ng-click=vm.switchTab($index)>{{item.name | translate}}</div><div data-ng-include=\"vm.selectedTab.name + '.tpl'\" class=forIframe data-ng-style=vm.tabContentStyle()></div></div><script type=text/ng-template id=TAB_UPDATES.tpl><div id=\"tabs-content\" data-ng-include=\"'app/tabs/updates.html'\"></div></script><script type=text/ng-template id=TAB_SCHEDULE.tpl><iframe data-ng-src=\"{{vm.selectedTabUrl}}\" frameborder=\"0\"></iframe></script><script type=text/ng-template id=TAB_QUESTIONS.tpl><iframe data-ng-src=\"{{vm.selectedTabUrl}}\" frameborder=\"0\"></iframe></script><script type=text/ng-template id=TAB_SKETCHES.tpl><iframe data-ng-src=\"{{vm.selectedTabUrl}}\" frameborder=\"0\"></iframe></script>"
  );


  $templateCache.put('app/tabs/updates.html',
    "<div id=updates data-ng-controller=\"Updates as vm\"><div data-ng-repeat=\"update in vm.updates\" class=\"update-item clearfix\"><div class=ad data-ng-if=update.url><div class=header><a data-ng-href={{update.url}} class=link target=_blank><span class=title data-ng-bind-html=update.title></span> <span class=subtitle data-ng-bind-html=update.subtitle></span></a></div><div class=body data-ng-if=update.description><div class=description data-ng-bind-html=update.description></div></div><div class=body data-ng-if=update.image_url><a data-ng-href={{update.url}} target=_blank><img data-ng-src={{update.image_url}}></a></div><a data-ng-if=update.url_caption data-ng-href={{update.url}} class=\"url toR\" target=_blank>{{update.url_caption}}>></a></div><div class=ad data-ng-if=!update.url><div class=header><span class=title data-ng-bind-html=update.title></span> <span class=subtitle data-ng-bind-html=update.subtitle></span></div><div class=body data-ng-if=update.description><div class=description data-ng-bind-html=update.description></div></div><div class=body data-ng-if=update.image_url><img data-ng-src={{update.image_url}}></div></div></div></div>"
  );


  $templateCache.put('app/vod/vod.html',
    "<div id=vod data-ng-controller=\"Vod as vm\"><select id=vod-categories data-ng-model=vm.selectedCategory data-ng-change=vm.changeCategory() data-ng-options=\"item.name for item in vm.categories\"></select><div id=vod-items data-ng-style=vm.vodItemsStyle()><div data-ng-repeat=\"item in vm.vodItems\" class=vod-item><div data-ng-click=vm.playVod(item) class=clearfix><img data-ng-src={{item.image_url}} class=\"vod-item-image toL\" title={{item.title}} alt={{item.title}} width=70 height=70><h2 class=vod-item-title>{{item.title}}</h2><p class=vod-item-description>{{item.description}}</p><p class=vod-item-duration>{{item.duration}}</p></div></div></div></div>"
  );

}]);
