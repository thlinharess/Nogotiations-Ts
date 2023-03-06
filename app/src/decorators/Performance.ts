

export function Performance(seconds: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor 
    ){
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
          console.log('Início performance');
          let divider = 1;
          let unit = 'milisegundos';
          if(seconds) {
            divider = 1000;
            unit = 'segundos';
          }
          const t1 = performance.now();
          const returnP = originalMethod.apply(this, args);
          const t2 = performance.now();
          console.log(`${propertyKey}, Performance: ${(t1-t2)/divider}`);
        returnP;
        };

        return descriptor;
    }
}