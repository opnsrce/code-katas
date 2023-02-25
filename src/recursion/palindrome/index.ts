/**
 * @description: Write a recursive function that takes in a string and returns
 * whether or not it's a palindrome
 */

const palindrome = (string: string): boolean => {
    const regExp = /[^a-z0-9]/g;

    if (typeof string !== "string") {
        throw new TypeError("Input must be a string");
    }

    const normalizedString = string.toLowerCase().replace(regExp, "");

    if (normalizedString.length < 2) {
        return true;
    }

    const firstCharacter = normalizedString.slice(0, 1);
    const lastCharacter = normalizedString.slice(-1);

    if (firstCharacter !== lastCharacter) {
        return false;
    }

    return palindrome(
        normalizedString.slice(1, 2) + normalizedString.slice(2, -1)
    );
};

export default palindrome;
