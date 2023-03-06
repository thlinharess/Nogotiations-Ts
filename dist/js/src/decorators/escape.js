export function escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let returnEscape = originalMethod.apply(this, args);
        if (typeof returnEscape === 'string') {
            returnEscape = returnEscape.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return returnEscape;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map