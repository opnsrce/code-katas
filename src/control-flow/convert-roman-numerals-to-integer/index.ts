/**
 * @description Write a function that converts Roman numerals to an integer.
 */

const convertRomanNumeralsToInteger = (romanNumerals: string): number => {
    const numeralsMap: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    const characters = Array.from(romanNumerals);
    let arabicNumber = 0;

    for (let i = 0; i < characters.length; i++) {
        const currentCharacterValue = numeralsMap[characters[i]];
        const nextCharacterValue = numeralsMap[characters[i + 1]];

        if (nextCharacterValue > currentCharacterValue) {
            arabicNumber += nextCharacterValue - currentCharacterValue;
            i++;
        } else {
            arabicNumber += currentCharacterValue;
        }
    }

    return arabicNumber;
};

export default convertRomanNumeralsToInteger;
