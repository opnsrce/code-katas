import twoSum from "./index";

describe("twoSum", () => {
    describe("Input: nums = [2,7,11,15], target = 9", () => {
        it("should return [0, 1]", () => {
            expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        });
    });

    describe("Input: nums = [3,2,4], target = 6", () => {
        it("should return [1, 2]", () => {
            expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        });
    });

    describe("Input: nums = [3,3], target = 6", () => {
        it("should return [1, 2]", () => {
            expect(twoSum([3, 3], 6)).toEqual([0, 1]);
        });
    });
});
