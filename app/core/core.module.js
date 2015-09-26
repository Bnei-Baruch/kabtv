import angular from 'angular';
import ngRoute from 'angular-route';
import ngTranslate from 'angular-translate';
import ngTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import angulartics from 'angulartics';
import angularticsGTM from 'angulartics/src/angulartics-gtm';
import angularticsGA from 'angulartics-google-analytics'
//import ngSpinner from 'angular-spinner';

import exception from '../blocks/exception/exception.module';
import logger from '../blocks/logger/logger.module';
import router from '../blocks/router/router.module';

import {config, configure, runBlock} from './config';
import {API_BASE, HELP_IMAGE_BASE, CLIP_ON_FINISH_EVENT} from './constants';
import dataservice from './dataservice';


export default angular.module('app.core', [
    /*
     * Angular modules
     */
    ngRoute,
    /*
     * Our reusable cross app code modules
     */
    exception, logger, router,
    /*
     * 3rd Party modules
     */
    ngTranslate,
    angulartics,
    angularticsGA,
    angularticsGTM,
    //ngSpinner
])
    .config(configure)
    .constant('API_BASE', API_BASE)
    .constant('HELP_IMAGE_BASE', HELP_IMAGE_BASE)
    .constant('CLIP_ON_FINISH_EVENT', CLIP_ON_FINISH_EVENT)
    .factory('dataservice', dataservice)
    .run(runBlock)
    .value('config', config)
    .name;