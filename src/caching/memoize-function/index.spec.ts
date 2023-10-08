import { describe, it, jest } from "@jest/globals";
import memoize, { Fn } from "./index";

describe("Memoize Function", () => {
    const invokeFnWith =
        (fn: Fn) =>
        (...args: any[]) => {
            for (const arg of args) {
                fn(...arg);
            }
        };

    describe("When passed [[1,2], [1,2]] ", () => {
        it("should invoke the original function once", () => {
            const fn = jest.fn((...args: any) => true);
            const memoizedFunction = memoize(fn);

            invokeFnWith(memoizedFunction)([1, 2], [1, 2]);

            expect(fn).toBeCalledTimes(1);
        });
    });

    describe("When passed [[1,2], [1,2], [3,4]] ", () => {
        it("should invoke the original function twice", () => {
            const fn = jest.fn((...args: any) => true);

            const memoizedFunction = memoize(fn);

            invokeFnWith(memoizedFunction)([1, 2], [1, 2], [3, 4]);

            expect(fn).toBeCalledTimes(2);
        });
    });

    describe("When passed [[{}, {}], [{}, {}], [{}, {}]] ", () => {
        it("should invoke the original function three times", () => {
            const fn = jest.fn((...args: any) => true);

            const memoizedFunction = memoize(fn);

            invokeFnWith(memoizedFunction)([{}, {}], [{}, {}], [{}, {}]);

            expect(fn).toBeCalledTimes(3);
        });
    });

    describe("When passed [[o, o], [o, o], [o, o]] ", () => {
        it("should invoke the original function once", () => {
            const o = {};
            const fn = jest.fn((...args: any) => true);
            const memoizedFunction = memoize(fn);

            invokeFnWith(memoizedFunction)([o, o], [o, o], [o, o]);

            expect(fn).toBeCalledTimes(1);
        });
    });

    describe("When passed [[1,1,1],[1,1],[1],[1,1],[1,1,1]] ", () => {
        it("should invoke the original function three times", () => {
            const fn = jest.fn((...arr: any) =>
                arr.reduce((a: number, b: number) => a + b, 0)
            );

            const memoizedFunction = memoize(fn);

            invokeFnWith(memoizedFunction)(
                [1, 1, 1],
                [1, 1],
                [1],
                [1, 1],
                [1, 1, 1]
            );

            expect(fn).toBeCalledTimes(3);
        });
    });
});
