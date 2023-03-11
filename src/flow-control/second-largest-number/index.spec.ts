import { describe, expect, it } from "@jest/globals";
import secondLargestNumber from "./index";

describe("secondLargestNumber", () => {
    describe("When the input is an array of more than 2 numbers", () => {
        it("should return the second largest number in the array", () => {
            const numbers = [5, 7, 22, 16, 12];

            expect(secondLargestNumber(numbers)).toEqual(16);
        });
    });

    describe("When the iput is an empty array", () => {
        it("should return undefined", () => {
            const numbers = [] as unknown as number[];

            expect(secondLargestNumber(numbers)).toEqual(undefined);
        });
    });

    describe("When the input is an array containing non-numeric values", () => {
        it("should throw an error", () => {
            const numbers = ["hello", 5, 10] as unknown as number[];

            expect(() => secondLargestNumber(numbers)).toThrow(TypeError);
        });
    });
});
