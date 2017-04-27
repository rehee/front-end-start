export class Core {
    static ScopeApplyFunction(scope: any) {
        return (changeFunction: any) => {
            scope.$apply(changeFunction);
        };
    }

    static ParentScopeFunction(scope: any) {
        return (changeFunction: string) => {
            scope.parentFromChild = () => {
                scope[changeFunction]();
            }
            scope.parentFromChild();
        }
    }
    static ParentScopeObject(scope: any) {
        return (Keys: { [key: string]: any }) => {
            scope.parentFromChild = () => {
                for (let key in Keys) {
                    
                }
                
            }
            console.log(scope.alert)
            scope.parentFromChild();
        }
    }

    static Delay(ms: number) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }
}
