import { expect } from "chai";
import emailAddressParser from "./index";

describe("emailAddressParser", () => {
    context("When the input is an array of valid emails", () => {
        it("should group all of the emails together", () => {
            const emails = ["john.doe@gmail.com", "steve@example.co.uk"];

            const expectedResult = {
                valid: emails,
                invalid: []
            };

            expect(emailAddressParser(emails)).to.deep.equal(expectedResult);
        });
    });

    context("When the input is an array of invalid emails", () => {
        it("should group all of the emails together", () => {
            const emails = [
                "noattherate.com",
                "no.domain@.com",
                "spaces in name@example.com"
            ];

            const expectedResult = {
                valid: [],
                invalid: emails
            };

            expect(emailAddressParser(emails)).to.deep.equal(expectedResult);
        });
    });

    context("When the input is an array of valid and invalid emails", () => {
        it("should group the emails correctly", () => {
            const emails = [
                "john.doe@example.com",
                "jane_doe123@example.co.uk",
                "invalid.email@com",
                "noattherate.com",
                "no.domain@.com",
                "spaces in name@example.com"
            ];

            const expectedResult = {
                valid: ["john.doe@example.com", "jane_doe123@example.co.uk"],
                invalid: [
                    "invalid.email@com",
                    "noattherate.com",
                    "no.domain@.com",
                    "spaces in name@example.com"
                ]
            };

            expect(emailAddressParser(emails)).to.deep.equal(expectedResult);
        });
    });

    context("When the input is an empty array", () => {
        it("should return empty groups", () => {
            const emails = [] as unknown as string[];
            const expectedResult = {
                valid: [],
                invalid: []
            };

            expect(emailAddressParser(emails)).to.deep.equal(expectedResult);
        });
    });

    context("When the input is an array of empty strings", () => {
        it("should flag the email as invalid", () => {
            const emails = [""] as unknown as string[];
            const expectedResult = {
                valid: [],
                invalid: [""]
            };

            expect(emailAddressParser(emails)).to.deep.equal(expectedResult);
        });
    });

    context("When the input is not an array", () => {
        it("should throw an error", () => {
            const emails = 5 as unknown as string[];

            expect(() => emailAddressParser(emails)).to.throw(TypeError);
        });
    });

    context("When the input contains values that are not strings", () => {
        it("should throw an error", () => {
            const emails = [5] as unknown as string[];

            expect(() => emailAddressParser(emails)).to.throw(TypeError);
        });
    });
});
