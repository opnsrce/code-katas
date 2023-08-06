import { describe, expect, it } from "@jest/globals";
import quickSort from "./index";

describe.only("quickSort", () => {
    describe("When the input is [2]", () => {
        it("should return [2]", () => {
            const numbers = [2];
            const expectedResult = [2];

            expect(quickSort(numbers)).toStrictEqual(expectedResult);
        });
    });

    describe("When the input is [2,1,3]", () => {
        it("should return [1,2,3]", () => {
            const numbers = [2, 1, 3];
            const expectedResult = [1, 2, 3];

            expect(quickSort(numbers)).toStrictEqual(expectedResult);
        });
    });

    describe("When the input is [1 ,6,-1, 5, 10, 0, 8]", () => {
        it("should return [-1, 0, 5, 6, 8, 10]", () => {
            const numbers = [1, 6, -1, 5, 10, 0, 8];
            const expectedResult = [-1, 0, 1, 5, 6, 8, 10];

            expect(quickSort(numbers)).toStrictEqual(expectedResult);
        });
    });

    describe("When the input contains duplicates", () => {
        it.only("should return the correct sorted array", () => {
            const numbers = [4, 2, 3, 1, 4, 1, 3, 2];
            const expectedResult = [1, 1, 2, 2, 3, 3, 4, 4];

            expect(quickSort(numbers)).toStrictEqual(expectedResult);
        });
    });
});
