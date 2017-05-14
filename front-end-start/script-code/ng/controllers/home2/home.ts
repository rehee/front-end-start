import * as angular from 'angular';
import { AppKeys, AppConfig } from '../../config/index';
import { ApiServiceClass } from '../../services/api';
import { Core } from '../../services/core';

interface IHomeController2 {
    lists: number[];
    ttt(event: any, e: any): void;
    add(input: number): void;
    changeTitle(title: string): void;
}
//  private api: ApiServiceClass,
//         public scope: ng.IScope,
export class homeCtl2 implements IHomeController2 {
    constructor(
        public scope: ng.IScope
    ) {
        console.log(scope.layout);
    }
    public ttt = (event: any, e: any) => {
        console.log(event);
        console.log(e);
    }
    public add = (input: number = 0) => {
        this.lists.push(input);
    }
    public changeTitle = (title: string = "app")=>{
        this.scope.layout.title = title;
    }
    public lists: number[] = [1, 2, 3, 4, 5];
}


(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName]).controller('homeCtl2', ["$scope", homeCtl2]);
})();

// "ApiService","$scope",