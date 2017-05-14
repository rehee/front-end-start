import * as angular from 'angular';
import { AppKeys, AppConfig } from '../../config/index';
import { ApiServiceClass } from '../../services/api';
import * as $ from 'jquery';
(function () {
    angular.module(AppConfig.Keys[AppKeys.AppName])
        .directive("cText", [cText]);
})();

export function cText(): ng.IDirective {
    return {
        restrict: 'E',
        scope: {
            info: '='

        },
        controller: ($scope: ng.IScope) => {
            $scope.count = 0;
            $scope.clickMe = () => {
                $scope.count++;

                console.log($scope.count);
            }
        },
        template: require('./c-text.html'),
        link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attr: ng.IAttributes, controller: any, transclude: ng.ITranscludeFunction) => {
            console.log(attr);
        }
    };
}

(function () {

    angular.module(AppConfig.Keys[AppKeys.AppName])
        .directive("myClick", ['$parse', myClick]);

})();

export function myClick($parse: ng.IParseService): ng.IDirective {
    return {
        restrict: 'A',
        link: (scope: ng.IScope, el: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
            let result = $parse(attr['myClick']);
            el.on('click', () => {
                scope.$apply(() => {
                    result(scope);
                })
            })
        }
    }
}

(function () {

    angular.module(AppConfig.Keys[AppKeys.AppName])
        .directive("myRepeat", [myRepeat]);

})();

export function myRepeat(): ng.IDirective {
    return {
        restrict: 'A',
        transclude: 'element',
        link: (scope: ng.IScope, el: any, attr: ng.IAttributes, controller: ng.IController, trans: ng.ITranscludeFunction) => {
            var items = attr.myRepeat.split(' ');
            var itemString = items[0];
            var collectionName = items[2];
            var element: any[] = [];

            scope.$watchCollection(collectionName, (c: any[]) => {
                // element.forEach(e=>{
                //     $(e.el).remove();
                //     e.scope.$distory();
                // });
                for (let item of element) {
                    $(item.el).remove();
                    item.scope.$destroy();
                }
                element = [];
                if (c == null) {
                    return;
                }
                c.forEach(item => {
                    var childScope = scope.$new();
                    childScope[itemString] = item;
                    trans(childScope, (clone) => {
                        $(el).before(clone);
                        let thisItem: any = {};
                        thisItem.el = clone;
                        thisItem.scope = childScope;
                        element.push(thisItem);

                    })
                })
            })
        }
    }
}