import { describe, expect, it } from "@jest/globals";
import commonElements from "./index";

describe("commonElements", () => {
    describe("When the inputs are two arrays that share common elements", () => {
        it("should return the common elements", () => {
            const array1 = [1, 2, 3, 4];
            const array2 = [3, 4, 5, 6];

            expect(commonElements(array1, array2)).toEqual([3, 4]);
        });
    });

    describe("When the inputs are two arrays don't share any common elements", () => {
        it("should return an empty array", () => {
            const array1 = [7];
            const array2 = [3, 4, 5, 6];

            expect(commonElements(array1, array2)).toEqual([]);
        });
    });

    describe("When the inputs are two arrays with duplicate common elements", () => {
        it("should not include the duplicates in the result", () => {
            const array1 = [1, 2, 3, 5, 6, 7, 3];
            const array2 = [3, 4, 5, 6];

            expect(commonElements(array1, array2)).toEqual([3, 5, 6]);
        });
    });

    describe("When the first input is not an array and the second one is", () => {
        it("should throw an error", () => {
            const array1 = 5 as unknown as number[];
            const array2 = [1, 2, 3];
            expect(() => commonElements(array1, array2)).toThrow(TypeError);
        });
    });

    describe("When the second input is not an array and the first one is", () => {
        it("should throw an error", () => {
            const array1 = [1, 2, 3];
            const array2 = 5 as unknown as number[];

            expect(() => commonElements(array1, array2)).toThrow(TypeError);
        });
    });
});
