export class Core{
    static ScopeApplyFunction(scope:any){
        return (changeFunction:any)=>{
            scope.$apply(changeFunction);
        };
    }

    static Delay(ms: number) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
}