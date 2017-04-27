export enum AppKeys{
    AppName=1
}

export class AppConfig{
    public static Keys:{[key:number]:string}={
        [AppKeys.AppName]:"ng-app"
    }
}