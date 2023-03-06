export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`--- Method: ${propertyKey}`);
        console.log(`------ Params: ${JSON.stringify(args)}`);
        const returnInsp = originalMethod.apply(this, args);
        console.log(`------ return: ${JSON.stringify(returnInsp)}`);
        return returnInsp;
    }
    return descriptor;
}