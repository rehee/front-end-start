import * as angular from 'angular';
import { AppKeys, AppConfig } from '../config/index';
(function(){
    angular.module(AppConfig.Keys[AppKeys.AppName])
        .service('ApiService',['$q', '$http',ApiService]);
})();

export function ApiService($q: ng.IQService, $http: ng.IHttpService){
    return new ApiServiceClass($q, $http);
    
}
export class ApiServiceClass{
    private $q: ng.IQService;
    private $http: ng.IHttpService;
    constructor($q: ng.IQService, $http: ng.IHttpService ) {
        this.$q = $q;
        this.$http = $http;
    }

    Test(input:string):string{
        return input;
    }

    P(timeSpend:number):ng.IPromise<string> {
        let deferred = this.$q.defer();
        setTimeout(()=>deferred.resolve('finish'),timeSpend)
        return deferred.promise;
    }

}
