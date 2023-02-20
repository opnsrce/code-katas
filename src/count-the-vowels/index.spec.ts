import { expect } from "chai";
import countTheVowels from "./index";

describe("countTheVowels", () => {
    context("When the string has two vowels", () => {
        it("should return 2", () => {
            expect(countTheVowels("hello")).to.equal(2);
        });
    });

    context("When the string has no vowels", () => {
        it("should return 0", () => {
            expect(countTheVowels("bcd")).to.equal(0);
        });
    });

    context("When the string is empty", () => {
        it("should return 0", () => {
            expect(countTheVowels("")).to.equal(0);
        });
    });

    context("When the string is undefined", () => {
        it("should return 0", () => {
            const string = undefined as unknown as string;

            expect(countTheVowels(string)).to.equal(0);
        });
    });
});
