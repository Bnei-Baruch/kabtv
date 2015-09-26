import angular from 'angular';
import Vod from './vod';

export default angular.module('kabtv.vod', [])
    .controller('Vod', Vod)
    .name;
