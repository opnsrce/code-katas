import { expect } from "chai";
import secondLargestNumber from "./index";

describe("secondLargestNumber", () => {
    context("When the array contains two or more numbers", () => {
        it("should return the second largest number in the array", () => {
            const numbers = [5, 7, 22, 16, 12];

            expect(secondLargestNumber(numbers)).to.equal(16);
        });
    });

    context("When the array is empty", () => {
        it("should return undefined", () => {
            const numbers = [] as unknown as number[];

            expect(secondLargestNumber(numbers)).to.equal(undefined);
        });
    });

    context("When input is not an array of numbers", () => {
        it("should throw an error", () => {
            const numbers = ["hello", 5, 10] as unknown as number[];

            expect(() => secondLargestNumber(numbers)).to.throw(TypeError);
        });
    });
});
