import { describe, expect, it } from "@jest/globals";
import countTheVowels from "./index";

describe("countTheVowels", () => {
    describe("When the input is a string with two vowels", () => {
        it("should return 2", () => {
            expect(countTheVowels("hello")).toEqual(2);
        });
    });

    describe("When the input is a string has no vowels", () => {
        it("should return 0", () => {
            expect(countTheVowels("bcd")).toEqual(0);
        });
    });

    describe("When the input is an empty string", () => {
        it("should return 0", () => {
            expect(countTheVowels("")).toEqual(0);
        });
    });

    describe("When input is undefined", () => {
        it("should return 0", () => {
            const string = undefined as unknown as string;

            expect(countTheVowels(string)).toEqual(0);
        });
    });
});
