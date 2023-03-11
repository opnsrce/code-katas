import { describe, expect, it } from "@jest/globals";
import convertRomanNumeralsToInteger from "./index";

describe("convertRomanNumeralsToInteger", () => {
    describe("When the input is 'I'", () => {
        it("should return 1", () => {
            expect(convertRomanNumeralsToInteger("I")).toEqual(1);
        });
    });

    describe("When the input is 'V'", () => {
        it("should return 5", () => {
            expect(convertRomanNumeralsToInteger("V")).toEqual(5);
        });
    });

    describe("When the input is 'X'", () => {
        it("should return 10", () => {
            expect(convertRomanNumeralsToInteger("X")).toEqual(10);
        });
    });

    describe("When the input is 'C'", () => {
        it("should return 100", () => {
            expect(convertRomanNumeralsToInteger("C")).toEqual(100);
        });
    });

    describe("When the input is 'D'", () => {
        it("should return 500", () => {
            expect(convertRomanNumeralsToInteger("D")).toEqual(500);
        });
    });

    describe("When the input is 'M'", () => {
        it("should return 1000", () => {
            expect(convertRomanNumeralsToInteger("M")).toEqual(1000);
        });
    });

    describe("When the input is 'IV'", () => {
        it("should return 4", () => {
            expect(convertRomanNumeralsToInteger("IV")).toEqual(4);
        });
    });

    describe("When the input is 'IX'", () => {
        it("should return 9", () => {
            expect(convertRomanNumeralsToInteger("IX")).toEqual(9);
        });
    });

    describe("When the input is 'MMVIII'", () => {
        it("should return 2008", () => {
            expect(convertRomanNumeralsToInteger("MMVIII")).toEqual(2008);
        });
    });

    describe("When the input is 'MDCLXVI'", () => {
        it("should return 1666", () => {
            expect(convertRomanNumeralsToInteger("MDCLXVI")).toEqual(1666);
        });
    });
});
