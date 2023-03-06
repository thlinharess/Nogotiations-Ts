
export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
    let returnEscape = originalMethod.apply(this, args)

    if(typeof returnEscape === 'string') {
        returnEscape = returnEscape.replace(/<script>[\s\S]*?<\/script>/, '');
    }
     return returnEscape;
   }
  return descriptor;
}