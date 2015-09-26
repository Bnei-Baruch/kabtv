import angular from 'angular';
import tabs from '../tabs/tabs.module'
import vod from '../vod/vod.module'
import Header from './header'
import Footer from './footer'
import Shell from './shell'

angular.module('app.layout', [vod, tabs])
    .controller('Footer', Footer)
    .controller('Header', Header)
    .controller('Shell', Shell);
