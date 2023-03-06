export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Method: ${propertyKey}`);
        console.log(`------ Params: ${JSON.stringify(args)}`);
        const returnInsp = originalMethod.apply(this, args);
        console.log(`------ return: ${JSON.stringify(returnInsp)}`);
        return returnInsp;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map