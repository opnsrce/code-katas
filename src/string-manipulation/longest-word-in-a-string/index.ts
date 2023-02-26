/**
 * @description: Write a function that takes a string as input and returns the
 * length of the longest word in the string.
 */

const lengthOfLongestWordInString = (string: string = ""): number => {
    const words = string.match(/(\w+)/g);

    if (string.length < 2) {
        return string.length;
    }

    if (!words) {
        return 0;
    }

    return words.reduce(
        (prev, current) => (current.length > prev ? current.length : prev),
        0
    );
};

export default lengthOfLongestWordInString;
