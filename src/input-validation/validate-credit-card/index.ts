/**
 * @description Write a function that validates a credit card. Credit card
 * numbers can be validated using the Luhn algorithm, which works as follows:
 * 1. Starting from the rightmost digit, double every second digit. If the
 *    result of this doubling operation is greater than 9, then add the two
 *    digits of the result together.
 * 2. Add up all the digits in the resulting sequence.
 * 3. If the total sum is divisible by 10, then the credit card number is valid.
 */

const validateCreditCard = (creditCard: string = ""): boolean => {
    if (typeof creditCard !== "string" || !creditCard.length) {
        return false;
    }

    const cardAsNumbers = Array.from(creditCard.replace(/\s/g, ""))
        .map((digit) => parseInt(digit))
        .reverse();

    let checkSum = 0;

    for (let i = 0; i < cardAsNumbers.length; i++) {
        const number = cardAsNumbers[i];
        if (i % 2 == 0) {
            checkSum += number;
            continue;
        }

        const doubledValue = cardAsNumbers[i] * 2;

        if (doubledValue > 9) {
            checkSum += 1 + (doubledValue - 10);
        } else {
            checkSum += doubledValue;
        }
    }

    if (checkSum % 10 === 0) {
        return true;
    }

    return false;
};

export default validateCreditCard;
