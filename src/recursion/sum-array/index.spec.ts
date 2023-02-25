import { expect } from "chai";
import sumArray from "./index";

describe("sumArray", () => {
    context("When the input is an empty array", () => {
        it("should return 0", () => {
            const array = [] as unknown as number[];

            expect(sumArray(array)).to.equal(0);
        });
    });

    context("When the input is an array containing a single number", () => {
        it("should return that value", () => {
            const array = [5];

            expect(sumArray(array)).to.equal(5);
        });
    });

    context("When the input is an array of numbers", () => {
        it("should return the sume of the array", () => {
            const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            expect(sumArray(array)).to.equal(45);
        });
    });
});
