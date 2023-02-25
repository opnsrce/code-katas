/**
 * @description: Write a recursive function that calculates the factorial of a
 * given positive integer.
 */

const factorial = (n: number): number => {
    if (n < 3) {
        return n;
    }

    return n * factorial(n - 1);
};

export default factorial;
