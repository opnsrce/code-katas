import { describe, expect, it } from "@jest/globals";
import lengthOfLongestWordInString from "./index";

describe("lengthOfLongestWordInString", () => {
    describe("When the input is a string with a length of 1", () => {
        it("should return 1", () => {
            const string = "a";

            expect(lengthOfLongestWordInString(string)).toEqual(1);
        });
    });

    describe("When the input is 'hello world'", () => {
        it("should return 5", () => {
            const string = "hello world";

            expect(lengthOfLongestWordInString(string)).toEqual(5);
        });
    });

    describe("When the input is 'hello worlds'", () => {
        it("should return 6", () => {
            const string = "hello worlds";

            expect(lengthOfLongestWordInString(string)).toEqual(6);
        });
    });

    describe("When the input is 'May the force be with you'", () => {
        it("should return 5", () => {
            const string = "May the force be with you";

            expect(lengthOfLongestWordInString(string)).toEqual(5);
        });
    });
});
