/**
 * @description Write a function that takes a string and returns all the
 * permutations of that string.
 */

const getPermutations = (string: string): string[] => {
    if (typeof string !== "string") {
        throw new TypeError("Input must be a string");
    }

    if (!string.length) {
        return [];
    }

    if (string.length === 1) {
        return Array.from(string);
    }

    const permutations: string[] = [];

    for (let i = 0; i < string.length; i++) {
        const currentCharacter = string[i];
        const remainingCharacters =
            i == 0 ? string.slice(1) : string.slice(0, i) + string.slice(i + 1);

        const remainingPermutations = getPermutations(remainingCharacters);
        const currentPermutations = remainingPermutations.map(
            (permutation) => currentCharacter + permutation
        );

        permutations.push(...currentPermutations);
    }

    return permutations;
};

export default getPermutations;
