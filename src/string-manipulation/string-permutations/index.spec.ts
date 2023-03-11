import { describe, expect, it } from "@jest/globals";
import stringPermutations from "./index";

describe("string permutations", () => {
    describe("When the input is a 3 character long string", () => {
        it("should return 6 permutations", () => {
            const string = "abc";
            const permutations = ["abc", "acb", "bac", "bca", "cab", "cba"];

            expect(stringPermutations(string)).toEqual(permutations);
        });
    });

    describe("When the input is a 1 character long string", () => {
        it("should return 1 permutation", () => {
            const string = "a";
            const permutations = ["a"];

            expect(stringPermutations(string)).toEqual(permutations);
        });
    });

    describe("When the input is an empty string", () => {
        it("should return an empty array", () => {
            const string = "";
            const permutations = [] as unknown as string[];

            expect(stringPermutations(string)).toEqual(permutations);
        });
    });

    describe("When the input is not a string", () => {
        it("should throw an error", () => {
            const string = 5 as unknown as string;

            expect(() => stringPermutations(string)).toThrow(TypeError);
        });
    });
});
