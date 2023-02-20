/**
 * @description: Write a program that prints the numbers from 1 to n. For
 * multiples of three, print "Fizz" instead of the number. For multiples of
 * five, print "Buzz" instead of the number. For multiples of both three and
 * five, print "FizzBuzz" instead of the number. N cannot exceed 100.
 */

const fizzBuzz = (n: number): (string | number)[] => {
    const error = "Input must be a number between 1 and 100";

    if (typeof n !== "number") {
        throw new TypeError(error);
    }
    if (n < 1 || n > 100) {
        throw new RangeError(error);
    }

    const output: (string | number)[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("FizzBuzz");
        } else if (i % 3 === 0) {
            output.push("Fizz");
        } else if (i % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(i);
        }
    }

    return output;
};

export default fizzBuzz;
