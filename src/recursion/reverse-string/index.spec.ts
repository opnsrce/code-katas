import { describe, expect, it } from "@jest/globals";
import reverString from "./index";

describe("reverseString", () => {
    describe("When the input is a string with a length of 1", () => {
        it("should return the string", () => {
            expect(reverString("a")).toEqual("a");
        });
    });

    describe("When the input is a string with a length of 0", () => {
        it("should return the string", () => {
            expect(reverString("")).toEqual("");
        });
    });

    describe("when the input is 'hello'", () => {
        it("should return 'olleh'", () => {
            expect(reverString("hello")).toEqual("olleh");
        });
    });
});
