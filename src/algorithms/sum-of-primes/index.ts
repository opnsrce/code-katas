/**
 * @description Write a function that takes a number as input and returns the
 * sum of all prime numbers up to and including that number
 */

const sumOfPrimes = (number: number): number => {
    if (number < 3) {
        return 1;
    }

    const isPrime = (n: number): boolean => {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    };

    let sum = 0;

    for (let i = 2; i <= number; i++) {
        sum += isPrime(i) ? i : 0;
    }

    return sum;
};

export default sumOfPrimes;
