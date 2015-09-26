import angular from 'angular';
import Tabs from './tabs';
import Updates from './updates';

export default angular.module('kabtv.tabs', [])
    .controller('Tabs', Tabs)
    .controller('Updates', Updates)
    .name;
