import { expect } from "chai";
import validateCreditCard from "./index";

describe("validateCreditCard", () => {
    context(
        "When the credit card number is a valid Visa with no spaces between the numbers",
        () => {
            it("should return true", () => {
                const card = "4575412805241282";

                expect(validateCreditCard(card)).to.equal(true);
            });
        }
    );

    context(
        "When the credit card number is a valid Visa with spaces between the numbers",
        () => {
            it("should return true", () => {
                const card = "4575 4128 0524 1282";

                expect(validateCreditCard(card)).to.equal(true);
            });
        }
    );

    context(
        "When the credit card number is a valid Mastercard with no spaces between the numbers",
        () => {
            it("should return true", () => {
                const card = "5410004120072439";

                expect(validateCreditCard(card)).to.equal(true);
            });
        }
    );

    context(
        "When the credit card number is a valid Mastercard with spaces between the numbers",
        () => {
            it("should return true", () => {
                const card = "5410 0041 2007 2439";

                expect(validateCreditCard(card)).to.equal(true);
            });
        }
    );

    context("When the credit card number is not valid", () => {
        it("should return false", () => {
            const card = "5410 0041 2007 1246";

            expect(validateCreditCard(card)).to.equal(false);
        });
    });

    context("When the credit card number is not valid", () => {
        it("should return false", () => {
            const card = "5410 0041 2007 1246";

            expect(validateCreditCard(card)).to.equal(false);
        });
    });

    context("When the passed in input is not a string of numbers", () => {
        it("should return false", () => {
            const card = "bad value";

            expect(validateCreditCard(card)).to.equal(false);
        });
    });

    context("When the passed in input is not a string", () => {
        it("should return false", () => {
            const card = 12345678 as unknown as string;

            expect(validateCreditCard(card)).to.equal(false);
        });
    });

    context("When the passed in input undefined", () => {
        it("should return false", () => {
            const card = undefined as unknown as string;

            expect(validateCreditCard(card)).to.equal(false);
        });
    });
});
