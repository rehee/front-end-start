import * as angular from 'angular';
import { AppKeys, AppConfig } from '../config/index';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName]).config(function($stateProvider:any, $urlRouterProvider:any){
        $stateProvider
        .state('home',{
			url: '/',
			template: require('../controllers/home/home.html')
		})
        .state('home2',{
			url: '/home',
			template: require('../controllers/home/home.html')
		})
        $urlRouterProvider.otherwise('/');
    });
})();