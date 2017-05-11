import * as angular from 'angular';
import { AppKeys, AppConfig } from '../../config/index';
import { ApiServiceClass } from '../../services/api';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName])
        .directive("cText", [cText]);
})()

export function cText():ng.IDirective {
    return {
        restrict: 'E',
        scope:{
            info:'='
            
        },
        controller:($scope:ng.IScope)=>{
           $scope.count=0;
           $scope.clickMe=()=>{
               $scope.count++;

                console.log($scope.count);
            }
        },
        template: require('./c-text.html'),
        link:(scope:ng.IScope,element:ng.IAugmentedJQuery,attr:ng.IAttributes,controller:any,transclude:ng.ITranscludeFunction)=>{
            console.log(attr);
        }
    };
}