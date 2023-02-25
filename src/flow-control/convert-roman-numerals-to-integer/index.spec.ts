import { expect } from "chai";
import convertRomanNumeralsToInteger from "./index";

describe("convertRomanNumeralsToInteger", () => {
    context("When the input is 'I'", () => {
        it("should return 1", () => {
            expect(convertRomanNumeralsToInteger("I")).to.equal(1);
        });
    });

    context("When the input is 'V'", () => {
        it("should return 5", () => {
            expect(convertRomanNumeralsToInteger("V")).to.equal(5);
        });
    });

    context("When the input is 'X'", () => {
        it("should return 10", () => {
            expect(convertRomanNumeralsToInteger("X")).to.equal(10);
        });
    });

    context("When the input is 'C'", () => {
        it("should return 100", () => {
            expect(convertRomanNumeralsToInteger("C")).to.equal(100);
        });
    });

    context("When the input is 'D'", () => {
        it("should return 500", () => {
            expect(convertRomanNumeralsToInteger("D")).to.equal(500);
        });
    });

    context("When the input is 'M'", () => {
        it("should return 1000", () => {
            expect(convertRomanNumeralsToInteger("M")).to.equal(1000);
        });
    });

    context("When the input is 'IV'", () => {
        it("should return 4", () => {
            expect(convertRomanNumeralsToInteger("IV")).to.equal(4);
        });
    });

    context("When the input is 'IX'", () => {
        it("should return 9", () => {
            expect(convertRomanNumeralsToInteger("IX")).to.equal(9);
        });
    });

    context("When the input is 'MMVIII'", () => {
        it("should return 2008", () => {
            expect(convertRomanNumeralsToInteger("MMVIII")).to.equal(2008);
        });
    });

    context("When the input is 'MDCLXVI'", () => {
        it("should return 1666", () => {
            expect(convertRomanNumeralsToInteger("MDCLXVI")).to.equal(1666);
        });
    });
});
