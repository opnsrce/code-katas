import { expect } from "chai";
import someOfPairs from "./index";

describe("sumOfPairs", () => {
    context("When the input is [2, 7, 11, 15] and the target is 13", () => {
        it("should return [2, 11]", () => {
            const pairs = [2, 7, 11, 15];
            const target = 13;
            const expectedResult = [2, 11];

            expect(someOfPairs(pairs, target)).to.have.members(expectedResult);
        });
    });

    context("When the input is [2, 7, 11, 15] and the target is 30", () => {
        it("should return null", () => {
            const pairs = [2, 7, 11, 15];
            const target = 30;
            const expectedResult = null;

            expect(someOfPairs(pairs, target)).to.equal(expectedResult);
        });
    });

    context("When the input is [2, 7, 11, 15] and the target is 22", () => {
        it("should return null", () => {
            const pairs = [2, 7, 11, 15];
            const target = 22;
            const expectedResult = [7, 15];

            expect(someOfPairs(pairs, target)).to.have.members(expectedResult);
        });
    });
});
