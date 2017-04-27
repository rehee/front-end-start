import * as angular from 'angular';
import 'angular-ui-router';
import { AppKeys, AppConfig } from './config/index';
angular.module(AppConfig.Keys[AppKeys.AppName], ['ui.router']);

import  './services/api';

import './controllers/root/root';
import './controllers/home/home';
import './controllers/home2/home';

import './filters/my-upper-case'
import './routers/ui-router';

import './directives/c-text/c-text';
