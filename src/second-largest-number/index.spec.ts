import { expect } from "chai";
import secondLargestNumber from "./index";

describe("secondLargestNumber", () => {
    context("When the input is an array of more than 2 numbers", () => {
        it("should return the second largest number in the array", () => {
            const numbers = [5, 7, 22, 16, 12];

            expect(secondLargestNumber(numbers)).to.equal(16);
        });
    });

    context("When the iput is an empty array", () => {
        it("should return undefined", () => {
            const numbers = [] as unknown as number[];

            expect(secondLargestNumber(numbers)).to.equal(undefined);
        });
    });

    context("When the input is an array containing non-numeric values", () => {
        it("should throw an error", () => {
            const numbers = ["hello", 5, 10] as unknown as number[];

            expect(() => secondLargestNumber(numbers)).to.throw(TypeError);
        });
    });
});
