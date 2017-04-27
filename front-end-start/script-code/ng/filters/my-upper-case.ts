import * as angular from 'angular';
import { AppKeys, AppConfig } from '../config/index';
import {ApiServiceClass} from '../services/api';
import {Core} from '../services/core';

(function(){
    angular.module(AppConfig.Keys[AppKeys.AppName])
        .filter("myUpperCase",[myUpperCase]);
})();

export function myUpperCase(){
    return function(input:string[]){
        return input.map(b=>b.toUpperCase());
    }
}