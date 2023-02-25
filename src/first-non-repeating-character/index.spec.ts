import { expect } from "chai";
import firstNonRepeatedCharacter from "./index";

describe("firstNonRepeatedCharacter", () => {
    context("When the input is a string with non-repeating characters", () => {
        it("should return the first non-repeated character in the string", () => {
            const string = "a quick brown fox jumps over the lazy dog";

            expect(firstNonRepeatedCharacter(string)).to.equal("q");
        });
    });

    context("When the input is an empty string", () => {
        it("should return udefined", () => {
            const string = "";

            expect(firstNonRepeatedCharacter(string)).to.equal(undefined);
        });
    });

    context(
        "When the input is a string without non-repeating characters",
        () => {
            it("should return udefined", () => {
                const string = "abcabc";

                expect(firstNonRepeatedCharacter(string)).to.equal(undefined);
            });
        }
    );

    context("When the input is not a string", () => {
        it("should throw an error", () => {
            const string = 5 as unknown as string;

            expect(() => firstNonRepeatedCharacter(string)).throw(TypeError);
        });
    });
});
