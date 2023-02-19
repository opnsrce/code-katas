/**
 * @description Write a function that takes a string as input and
 * returns the first non-repeated character in the string.
 */

const firstNonRepeatingCharacter = (testStr: string): string | undefined => {
    if (typeof testStr !== "string") {
        throw new TypeError("Input must be a string");
    }

    const seenChars = new Set<string>();
    const repeatedChars = new Set<string>();

    for (let i = 0; i < testStr.length; i++) {
        const char = testStr.charAt(i);

        if (seenChars.has(char)) {
            repeatedChars.add(char);
        } else {
            seenChars.add(char);
        }
    }

    for (const char of seenChars.keys()) {
        if (!repeatedChars.has(char)) {
            return char;
        }
    }

    return undefined;
};

export default firstNonRepeatingCharacter;
