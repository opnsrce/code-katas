import { expect } from "chai";
import sumOfPrimes from "./index";

describe("sum of primes", () => {
    context("When the input is 1", () => {
        it("should return 1", () => {
            expect(sumOfPrimes(1)).to.equal(1);
        });
    });

    context("When the input is 2", () => {
        it("should return 1", () => {
            expect(sumOfPrimes(1)).to.equal(1);
        });
    });

    context("When the input is 10", () => {
        it("should return 17", () => {
            expect(sumOfPrimes(10)).to.equal(17);
        });
    });

    context("When the input is 20", () => {
        it("should return 77", () => {
            expect(sumOfPrimes(20)).to.equal(77);
        });
    });

    context("When the input is 30", () => {
        it("should return 129", () => {
            expect(sumOfPrimes(30)).to.equal(129);
        });
    });
});
