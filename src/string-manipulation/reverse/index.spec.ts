import { describe, expect, it } from "@jest/globals";
import reverseString from ".";

describe("reverseString", () => {
    describe("input is not a string", () => {
        it("should throw an error", () => {
            expect(() => reverseString(null as unknown as string)).toThrowError(
                "Input must be a string"
            );
        });
    });

    describe("input is a multi-character string", () => {
        it("should reverse the string", () => {
            expect(reverseString("abc")).toBe("cba");
        });
    });

    describe("input is a single-character string", () => {
        it("should return the string", () => {
            expect(reverseString("a")).toBe("a");
        });
    });

    describe("input is an empty string", () => {
        it("should return an empty string", () => {
            expect(reverseString("")).toBe("");
        });
    });
});
