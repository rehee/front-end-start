import * as angular from 'angular';
import { AppKeys, AppConfig } from '../../config/index';
import { ApiServiceClass } from '../../services/api';
import { Core } from '../../services/core';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName]).controller('homeCtl2', ['ApiService', '$scope', homeCtl2]);
})();

export function homeCtl2(api: ApiServiceClass, $scope: ng.IScope) {
    let scopeApply = Core.ScopeApplyFunction($scope);
    let parentFunction = Core.ParentScopeFunction($scope);
    let parentObject = Core.ParentScopeObject($scope);
    let vm = this;
    document.title = 'home'
    $scope.layout.title=333;
    vm.name = api.Test("this is app 2 3 4");
    vm.customer = {
        name: '123',
        address: '456'
    };
    vm.list = [];
    console.log($scope);
    let count = 0;
    vm.p = async (time: number) => {
        vm.name = 'start';
        count++;
        let list: string[] = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c'];
        let name = await api.P(time * 1000);
        scopeApply(() => vm.name = name);
        scopeApply(() => { vm.list = []; });
        scopeApply(() => vm.list = list.map(b => b + count).slice(0, 10));
        console.log($scope);
    }

    vm.parentAlert = function () {
        $scope.alert();
    }

    vm.parentLayout = function () {
        parentObject({['layout']:{title:"123"}});
    }




}