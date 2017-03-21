import ng from 'angular';
let angular = require('angular');
(function () {
    angular.module('ng-app', []);
})();
(function () {
    angular.module('ng-app').controller('testCtl', ['$q', testCtl]);
    function testCtl($q: ng.IQService) {
        let vm = this;
        vm.Alert= function(){
            alert();
        }
    }
})();

export class TestCtlClass {
    constructor(private $q: ng.IQService) {
    }
    
    Alert(): void {
        console.log(1);
    }
}