/**
 * @description Write a function that takes in an array of strings and groups
 * the strings into groups of anagrams (strings that are made up of the same
 * letters in a different order). The function should return an array of arrays,
 * where each sub-array contains all the anagrams of a given group.
 */

const groupAnagrams = (anagrams: string[]): Array<string[]> => {
    if (!Array.isArray(anagrams)) {
        throw TypeError("Input must be an array of strings");
    }

    const sortedAnagrams = anagrams.map((str: string): string =>
        Array.from(str).sort().join("")
    );

    const map: { [key: string]: string[] } = {};

    for (let i = 0; i < sortedAnagrams.length; i++) {
        if (!map[sortedAnagrams[i]]) {
            map[sortedAnagrams[i]] = [];
        }

        const sortedWord = Array.from(anagrams[i]).sort().join("");

        map[sortedWord].push(anagrams[i]);
    }

    const result = Object.keys(map).map((key: string) => map[key]);

    return result;
};

export default groupAnagrams;
