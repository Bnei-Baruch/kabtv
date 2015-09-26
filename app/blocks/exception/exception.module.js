import angular from 'angular';
import exception from './exception';
import logger from '../logger/logger.module';
import {exceptionHandlerProvider, config} from './exception-handler.provider';

export default angular.module('blocks.exception', [logger])
    .factory('exception', exception)
    .provider('exceptionHandler', exceptionHandlerProvider)
    .config(config)
    .name;
