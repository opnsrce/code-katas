/**
 * @description: Write a function that takes a string and returns the number of
 * vowels (a, e, i, o, u) in the string.
 */

const countVowels = (string: string = ""): number =>
    string.match(/[aeiou]/gi)?.length || 0;

export default countVowels;
