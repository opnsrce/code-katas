/**
 * @description: Write a function that takes an array of integers as
 * input and returns the second largest number in the array.
 */

const secondLargestNumber = (numbers: number[]): number => {
    const captured: number[] = [];

    if (
        !Array.isArray(numbers) ||
        numbers.every((element) => typeof element === "number") === false
    ) {
        throw new TypeError("Input must be an array of numbers");
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > captured[0] || captured[0] === undefined) {
            captured[0] = numbers[i];
        } else if (numbers[i] > captured[1] || captured[1] === undefined) {
            captured[1] = numbers[i];
        }
    }

    return captured[1];
};

export default secondLargestNumber;
