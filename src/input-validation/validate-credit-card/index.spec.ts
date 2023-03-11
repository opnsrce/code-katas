import { describe, expect, it } from "@jest/globals";
import validateCreditCard from "./index";

describe("validateCreditCard", () => {
    describe("When the input is a valid Visa card number with no spaces", () => {
        it("should return true", () => {
            const card = "4575412805241282";

            expect(validateCreditCard(card)).toEqual(true);
        });
    });

    describe("When the input is a valid Visa card number with spaces", () => {
        it("should return true", () => {
            const card = "4575 4128 0524 1282";

            expect(validateCreditCard(card)).toEqual(true);
        });
    });

    describe("When the input is a valid Master Card card number without spaces", () => {
        () => {
            it("should return true", () => {
                const card = "5410004120072439";

                expect(validateCreditCard(card)).toEqual(true);
            });
        };
    });

    describe("When the input is a valid Master Card card number with spaces", () => {
        it("should return true", () => {
            const card = "5410 0041 2007 2439";

            expect(validateCreditCard(card)).toEqual(true);
        });
    });

    describe("When the input is not a valid credit card number", () => {
        it("should return false", () => {
            const card = "5410 0041 2007 1246";

            expect(validateCreditCard(card)).toEqual(false);
        });
    });

    describe("When the input is a string containing non-numeric characters", () => {
        it("should return false", () => {
            const card = "bad value";

            expect(validateCreditCard(card)).toEqual(false);
        });
    });

    describe("When the input is not a string", () => {
        it("should return false", () => {
            const card = 12345678 as unknown as string;

            expect(validateCreditCard(card)).toEqual(false);
        });
    });

    describe("When the input is undefined", () => {
        it("should return false", () => {
            const card = undefined as unknown as string;

            expect(validateCreditCard(card)).toEqual(false);
        });
    });
});
