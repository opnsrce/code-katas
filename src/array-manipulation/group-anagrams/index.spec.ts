import { describe, expect, it } from "@jest/globals";
import groupAnagrams from "./index";

describe("groupAnagrams", () => {
    describe("When the input is an array containing multiple anagrams", () => {
        it("should correctly group the anagrams", () => {
            const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
            const expectedResult = [
                ["eat", "tea", "ate"],
                ["tan", "nat"],
                ["bat"]
            ];

            expect(groupAnagrams(anagrams)).toEqual(expectedResult);
        });
    });

    describe("When the input is an array with a single value", () => {
        it("should return that item as its own group", () => {
            expect(groupAnagrams(["a"])).toEqual([["a"]]);
        });
    });

    describe("When the input is an array containing only unique anagrams", () => {
        it("should put each anagram in its own group", () => {
            expect(groupAnagrams(["cat", "dog"])).toEqual([["cat"], ["dog"]]);
        });
    });

    describe("When the input is not an array", () => {
        it("should throw an error", () => {
            const anagrams = 5 as unknown as string[];
            expect(() => groupAnagrams(anagrams)).toThrow(TypeError);
        });
    });
});
