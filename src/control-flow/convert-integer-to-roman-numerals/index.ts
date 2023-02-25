/**
 * @description Write a function that converts an integer to Roman Numerals
 */

const convertIntegerToRomanNumerals = (integer: number): string => {
    const numeralsMap: { [key: number]: string } = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    };

    const categories = Object.keys(numeralsMap)
        .map((c) => parseInt(c))
        .sort((a, b) => b - a);

    const numerals = [];

    let i = 0;
    while (integer > 0 && i < categories.length) {
        const numeral = numeralsMap[categories[i]];
        if (integer - categories[i] === 0) {
            numerals.push(numeralsMap[integer]);
            break;
        } else if (integer - categories[i] === -1) {
            numerals.push("I" + numeral);
            break;
        } else if (integer - categories[i] > 0) {
            numerals.push(numeral);
            integer = integer - categories[i];
            i = 0;
        } else {
            i++;
        }
    }

    return numerals.join("");
};

export default convertIntegerToRomanNumerals;
