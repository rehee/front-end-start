import * as angular from 'angular';
import { AppKeys, AppConfig } from '../../config/index';
import {ApiServiceClass} from '../../services/api';
import {Core} from '../../services/core';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName]).controller('homeCtl', ['ApiService','$scope',homeCtl]);
})();

export function homeCtl(api:ApiServiceClass,$scope:ng.IScope) {
    let scopeApply = Core.ScopeApplyFunction($scope);
    let vm = this;

    vm.name = api.Test("this is app 2 3 4");
    vm.customer = {
        name:'123',
        address:'456'
    };
    vm.list = [];
    console.log($scope);
    let count=0;
    vm.p = async(time:number)=>{
        vm.name = 'start';
        count++;
        let list:string[]= ['a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c','a','b','c'];
        let name = await api.P(time*1000);
        scopeApply(()=>vm.name=name);
        scopeApply(()=>{vm.list=[];});
        scopeApply(()=>vm.list=list.map(b=>b+count).slice(0,10));
        console.log($scope);
    }
    
}