import { describe, expect, it } from "@jest/globals";
import sumArray from "./index";

describe("sumArray", () => {
    describe("When the input is an empty array", () => {
        it("should return 0", () => {
            const array = [] as unknown as number[];

            expect(sumArray(array)).toEqual(0);
        });
    });

    describe("When the input is an array containing a single number", () => {
        it("should return that value", () => {
            const array = [5];

            expect(sumArray(array)).toEqual(5);
        });
    });

    describe("When the input is an array of numbers", () => {
        it("should return the sume of the array", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            expect(sumArray(array)).toEqual(45);
        });
    });
});
