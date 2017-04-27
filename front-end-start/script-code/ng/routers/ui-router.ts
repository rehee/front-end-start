import * as angular from 'angular';
import { AppKeys, AppConfig } from '../config/index';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName]).config(function($stateProvider:any, $urlRouterProvider:any){
        $stateProvider
        .state('layout',{
			url: '/app',
			template: require('../controllers/root/root.html')
		})
        .state('layout.home',{
			url: '/home',
			template: require('../controllers/home/home.html')
		})
        .state('layout.home2',{
			url: '/home2',
			template: require('../controllers/home2/home.html')
		})
        $urlRouterProvider.otherwise('/app/home');
    });
})();