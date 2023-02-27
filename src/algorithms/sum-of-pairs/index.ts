/**
 * @description Write a function that takes in an array of integers and a
 * targetinteger and returns an array of two integers that add up to target, or
 * null if no such pair exists.
 */

const sumOfPairs = (pairs: number[], target: number): null | number[] => {
    const complements = new Map<number, number>();

    for (let i = 0; i < pairs.length; i++) {
        const num = pairs[i];
        const complement = target - num;

        if (complements.has(num)) {
            return [num, complements.get(num)!];
        }

        complements.set(complement, num);
    }

    return null;
};

export default sumOfPairs;
