import { expect } from "chai";
import reverString from "./index";

describe("reverseString", () => {
    context("When the input is a string with a length of 1", () => {
        it("should return the string", () => {
            expect(reverString("a")).to.equal("a");
        });
    });

    context("When the input is a string with a length of 0", () => {
        it("should return the string", () => {
            expect(reverString("")).to.equal("");
        });
    });

    context("when the input is 'hello'", () => {
        it("should return 'olleh'", () => {
            expect(reverString("hello")).to.equal("olleh");
        });
    });
});
