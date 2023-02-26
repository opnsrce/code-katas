/**
 * @description Write a function that reverses a string using recursion
 */

const reverseString = (string: string): string => {
    if (string.length <= 1) {
        return string;
    }

    return string.slice(-1) + reverseString(string.slice(0, -1));
};

export default reverseString;
