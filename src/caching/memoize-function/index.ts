/**
 * @description Given a function fn, return a memoized version of that function.
 */

export type Fn = (...params: any) => any;

function memoize(fn: Fn) {
    const cache = new Map();

    return function (...args: any) {
        const keys = cache.keys();
        const argArray = Array.from(args);

        for (let key of keys) {
            if (
                argArray.length === key.length &&
                argArray.every((arg: any, index: number) => key[index] === arg)
            ) {
                return cache.get(key);
            }
        }

        const result = fn(...args);
        cache.set(argArray, result);

        return result;
    };
}

export default memoize;
