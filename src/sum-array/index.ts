/**
 * @description Using recursion, write a function that returns the sum of an
 * array of numbers.
 */

const sumArray = (arrayOfNumbers: number[]): number => {
    if (arrayOfNumbers.length === 1) {
        return arrayOfNumbers[0];
    }

    if (arrayOfNumbers.length === 0) {
        return 0;
    }

    return arrayOfNumbers[0] + sumArray(arrayOfNumbers.slice(1));
};

export default sumArray;
