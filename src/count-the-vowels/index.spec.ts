import { expect } from "chai";
import countTheVowels from "./index";

describe("countTheVowels", () => {
    context("When the input is a string with two vowels", () => {
        it("should return 2", () => {
            expect(countTheVowels("hello")).to.equal(2);
        });
    });

    context("When the input is a string has no vowels", () => {
        it("should return 0", () => {
            expect(countTheVowels("bcd")).to.equal(0);
        });
    });

    context("When the input is an empty string", () => {
        it("should return 0", () => {
            expect(countTheVowels("")).to.equal(0);
        });
    });

    context("When input is undefined", () => {
        it("should return 0", () => {
            const string = undefined as unknown as string;

            expect(countTheVowels(string)).to.equal(0);
        });
    });
});
