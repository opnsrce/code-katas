import { expect } from "chai";
import groupAnagrams from "./index";

describe("groupAnagrams", () => {
    context("When there are multiple anagrams", () => {
        it("should correctly group the anagrams", () => {
            const anagrams = ["eat", "tea", "tan", "ate", "nat", "bat"];
            const expectedResult = [
                ["eat", "tea", "ate"],
                ["tan", "nat"],
                ["bat"]
            ];

            expect(groupAnagrams(anagrams)).to.deep.equal(expectedResult);
        });
    });

    context("When there is only 1 anagram in the array", () => {
        it("should return that item as its own group", () => {
            expect(groupAnagrams(["a"])).to.deep.equal([["a"]]);
        });
    });

    context("When none of the anagrams can be grouped", () => {
        it("should put each anagram in its own group", () => {
            expect(groupAnagrams(["cat", "dog"])).to.deep.equal([
                ["cat"],
                ["dog"]
            ]);
        });
    });

    context("When the input is not an array", () => {
        it("should throw an error", () => {
            const anagrams = 5 as unknown as string[];
            expect(() => groupAnagrams(anagrams)).to.throw(TypeError);
        });
    });
});
