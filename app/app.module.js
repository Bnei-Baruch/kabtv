//import 'bootstrap-less/dist/css/bootstrap.min.css';

import angular from 'angular';
//window.angular = angular;

import core from './core/core.module';
import layout from './layout/layout.module';
import vod from './vod/vod.module';
import player from './player/player.module';

angular.module('kabtv', [core, layout, vod, player]);

