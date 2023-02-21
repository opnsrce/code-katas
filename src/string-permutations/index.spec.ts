import { expect } from "chai";
import stringPermutations from "./index";

describe("string permutations", () => {
    context("When the string is 3 character long", () => {
        it("should return 6 permutations", () => {
            const string = "abc";
            const permutations = ["abc", "acb", "bac", "bca", "cab", "cba"];

            expect(stringPermutations(string)).to.deep.equal(permutations);
        });
    });

    context("When the string is 1 character long", () => {
        it("should return 1 permutation", () => {
            const string = "a";
            const permutations = ["a"];

            expect(stringPermutations(string)).to.deep.equal(permutations);
        });
    });

    context("When the string is empty", () => {
        it("should return an empty array", () => {
            const string = "";
            const permutations = [] as unknown as string[];

            expect(stringPermutations(string)).to.deep.equal(permutations);
        });
    });

    context("When the input is not a string", () => {
        it("should throw an error", () => {
            const string = 5 as unknown as string;

            expect(() => stringPermutations(string)).to.throw(TypeError);
        });
    });
});
