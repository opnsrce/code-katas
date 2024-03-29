import { describe, expect, it } from "@jest/globals";
import palindrome from "./index";

describe("palindrome", () => {
    describe("When the input is a single word that is a palindrome", () => {
        it("should return true", () => {
            const string = "racecar";

            expect(palindrome(string)).toEqual(true);
        });
    });

    describe("When the input is a single word that is not a palindrome", () => {
        it("should return false", () => {
            const string = "reacecar";

            expect(palindrome(string)).toEqual(false);
        });
    });

    describe("When the input is a sentence that is a palindrome", () => {
        it("should return true", () => {
            const string = "Was it a car or a cat I saw?";

            expect(palindrome(string)).toEqual(true);
        });
    });

    describe("When the input is a sentence that is not a palindrome", () => {
        it("should return false", () => {
            const string = "A quick brown fox jumped over a lazy dog.";

            expect(palindrome(string)).toEqual(false);
        });
    });

    describe("When the input is not a string", () => {
        it("should throw an error", () => {
            const string = 5 as unknown as string;

            expect(() => palindrome(string)).toThrow(TypeError);
        });
    });
});
