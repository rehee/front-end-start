///<reference path="../../../../typings/globals/jasmine/index.d.ts" />
import * as angular from 'angular';
import * as angularMock from 'angular-mocks';

import {
    AppKeys, AppConfig
} from '../../config/index';
import { homeCtl2 } from './home';
import { ApiServiceClass } from "../../services/api";

describe(
    'home test sample',
    () => {
        it('test sample exception', () => {
            expect(true).toBeTruthy('is true or truthy');
        })
    });

describe('in the file home.ts', () => {
    describe('in the home controller', () => {
        let sut: homeCtl2,
            controller: ng.IControllerService,
            $scope: ng.IScope,
            api: ApiServiceClass,
            controllerParms: {
                $scope: ng.IScope,
            };
        beforeEach(() => {

            angular.mock.module(AppConfig.Keys[AppKeys.AppName]);

            inject(($rootScope: ng.IRootScopeService, $injector: ng.auto.IInjectorService) => {
                controller = $injector.get<ng.IControllerService>('$controller');
                $scope = $rootScope.$new();
                controllerParms = {
                    $scope: $scope
                }
            })

            sut = controller<homeCtl2>('homeCtl2', controllerParms);

        });

        describe('constructor', () => {
            it('controller init', () => {
                console.log(sut.lists);
                expect(true).toBeTruthy('is true or truthy');
            })
        });

        describe('add method', () => {
            it('add method add 1', () => {
                
                sut.add(1);
                expect(sut.lists[sut.lists.length-1]==1).toBeTruthy('the function is fine');
            })
        });
    });
});