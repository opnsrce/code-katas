/**
 * @description Given an array of integers nums and an integer target, return
 * indices of the two numbers such that they add up to target.
 */

const twoSum = (nums: number[], target: number): number[] => {
    for (let a = 0; a < nums.length; a++) {
        const currentNum = nums[a];
        const remaining = target - currentNum;

        for (let i = a + 1; i < nums.length; i++) {
            if (nums[i] === remaining) {
                return [a, i];
            }
        }
    }

    return [];
};

export default twoSum;
