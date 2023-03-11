import { describe, expect, it } from "@jest/globals";
import convertIntegerToRomanNumerals from "./index";

describe("convertIntegerToRomanNumerals", () => {
    describe("When the input is 1", () => {
        it("should return 'I'", () => {
            expect(convertIntegerToRomanNumerals(1)).toEqual("I");
        });
    });

    describe("When the input is 5", () => {
        it("should return 'V'", () => {
            expect(convertIntegerToRomanNumerals(5)).toEqual("V");
        });
    });

    describe("When the input is 10", () => {
        it("should return 'X", () => {
            expect(convertIntegerToRomanNumerals(10)).toEqual("X");
        });
    });

    describe("When the input is 100", () => {
        it("should return 'C'", () => {
            expect(convertIntegerToRomanNumerals(100)).toEqual("C");
        });
    });

    describe("When the input is 500", () => {
        it("should return 'D'", () => {
            expect(convertIntegerToRomanNumerals(500)).toEqual("D");
        });
    });

    describe("When the input is 1000", () => {
        it("should return 'M'", () => {
            expect(convertIntegerToRomanNumerals(1000)).toEqual("M");
        });
    });

    describe("When the input is '4'", () => {
        it("should return 'IV'", () => {
            expect(convertIntegerToRomanNumerals(4)).toEqual("IV");
        });
    });

    describe("When the input is '9'", () => {
        it("should return 'IX'", () => {
            expect(convertIntegerToRomanNumerals(9)).toEqual("IX");
        });
    });

    describe("When the input is 2008", () => {
        it("should return 'MMVIII'", () => {
            expect(convertIntegerToRomanNumerals(2008)).toEqual("MMVIII");
        });
    });

    describe("When the input is '1666'", () => {
        it("should return MDCLXVI", () => {
            expect(convertIntegerToRomanNumerals(1666)).toEqual("MDCLXVI");
        });
    });
});
