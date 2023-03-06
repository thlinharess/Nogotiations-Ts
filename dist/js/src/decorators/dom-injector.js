export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modifying prototype ${target.constructor.name}
         and adding gatter to the property ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Fetching element from DOM with selector ${selector} to inject into ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map