import { describe, expect, it } from "@jest/globals";
import sumOfPrimes from "./index";

describe("sum of primes", () => {
    describe("When the input is 1", () => {
        it("should return 1", () => {
            expect(sumOfPrimes(1)).toEqual(1);
        });
    });

    describe("When the input is 2", () => {
        it("should return 1", () => {
            expect(sumOfPrimes(1)).toEqual(1);
        });
    });

    describe("When the input is 10", () => {
        it("should return 17", () => {
            expect(sumOfPrimes(10)).toEqual(17);
        });
    });

    describe("When the input is 20", () => {
        it("should return 77", () => {
            expect(sumOfPrimes(20)).toEqual(77);
        });
    });

    describe("When the input is 30", () => {
        it("should return 129", () => {
            expect(sumOfPrimes(30)).toEqual(129);
        });
    });
});
