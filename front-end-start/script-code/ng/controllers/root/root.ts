import * as angular from 'angular';
import { AppKeys, AppConfig } from '../../config/index';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName])
        .controller('rootCtl', ['$scope', rootCtl]);
})();
export function rootCtl($scope: ng.IScope) {
    let vm = this;
    document.title = 'test'
    $scope.layout = {
        title: "home"
    }
    $scope.layout.title="app";
    $scope.alert = () => {
        alert($scope.layout.title);
    }

}