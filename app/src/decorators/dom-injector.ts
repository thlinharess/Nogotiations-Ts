export function domInjector(selector: string) {

    return function (target: any,propertyKey: string){
        console.log(`Modifying prototype ${target.constructor.name}
         and adding gatter to the property ${propertyKey}`);
        
        let element: HTMLElement;

        const getter = function() {
            if(!element) {
                element = <HTMLElement>document.querySelector(selector);
                console.log(`Fetching element from DOM with selector ${selector} to inject into ${propertyKey}`)
            }

            return element;
        }

        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        );
    }
}