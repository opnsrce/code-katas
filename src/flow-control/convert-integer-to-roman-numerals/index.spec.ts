import { expect } from "chai";
import convertIntegerToRomanNumerals from "./index";

describe("convertIntegerToRomanNumerals", () => {
    context("When the input is 1", () => {
        it("should return 'I'", () => {
            expect(convertIntegerToRomanNumerals(1)).to.equal("I");
        });
    });

    context("When the input is 5", () => {
        it("should return 'V'", () => {
            expect(convertIntegerToRomanNumerals(5)).to.equal("V");
        });
    });

    context("When the input is 10", () => {
        it("should return 'X", () => {
            expect(convertIntegerToRomanNumerals(10)).to.equal("X");
        });
    });

    context("When the input is 100", () => {
        it("should return 'C'", () => {
            expect(convertIntegerToRomanNumerals(100)).to.equal("C");
        });
    });

    context("When the input is 500", () => {
        it("should return 'D'", () => {
            expect(convertIntegerToRomanNumerals(500)).to.equal("D");
        });
    });

    context("When the input is 1000", () => {
        it("should return 'M'", () => {
            expect(convertIntegerToRomanNumerals(1000)).to.equal("M");
        });
    });

    context("When the input is '4'", () => {
        it("should return 'IV'", () => {
            expect(convertIntegerToRomanNumerals(4)).to.equal("IV");
        });
    });

    context("When the input is '9'", () => {
        it("should return 'IX'", () => {
            expect(convertIntegerToRomanNumerals(9)).to.equal("IX");
        });
    });

    context("When the input is 2008", () => {
        it("should return 'MMVIII'", () => {
            expect(convertIntegerToRomanNumerals(2008)).to.equal("MMVIII");
        });
    });

    context("When the input is '1666'", () => {
        it("should return MDCLXVI", () => {
            expect(convertIntegerToRomanNumerals(1666)).to.equal("MDCLXVI");
        });
    });
});
