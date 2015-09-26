import angular from 'angular';
import ngRoute from 'angular-route';
import logger from '../logger/logger.module';
import {routehelperConfig, routehelper} from './routehelper';

export default angular.module('blocks.router', [ngRoute, logger])
    .provider('routehelperConfig', routehelperConfig)
    .factory('routehelper', routehelper)
    .name;
