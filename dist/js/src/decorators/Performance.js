export function Performance(seconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log('Início performance');
            let divider = 1;
            let unit = 'milisegundos';
            if (seconds) {
                divider = 1000;
                unit = 'segundos';
            }
            const t1 = performance.now();
            const returnP = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, Performance: ${(t1 - t2) / divider}`);
            returnP;
        };
        return descriptor;
    };
}
//# sourceMappingURL=Performance.js.map