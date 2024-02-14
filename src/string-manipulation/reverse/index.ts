/**
 * @description Write a function that takes a string as input and returns the
 * string reversed. You can't use the built-in reverse() method.
 */

const reverseString = (input: string): string => {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }
    if (input.length <= 1) {
        return input;
    }

    const char = input[0];

    return reverseString(input.substring(1)) + char;
};

export default reverseString;
