import { expect } from "chai";
import sumArray from "./index";

describe("sumArray", () => {
    context("when the array empty", () => {
        it("should return 0", () => {
            const array = [] as unknown as number[];

            expect(sumArray(array)).to.equal(0);
        });
    });

    context("when the array only has 1 value", () => {
        it("should return that value", () => {
            const array = [5];

            expect(sumArray(array)).to.equal(5);
        });
    });

    context("when the array is an array of numbers", () => {
        it("should return the sume of the array", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            expect(sumArray(array)).to.equal(45);
        });
    });
});
