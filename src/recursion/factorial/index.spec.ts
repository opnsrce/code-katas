import { describe, expect, it } from "@jest/globals";
import factorial from "./index";

describe("factorial", () => {
    describe("When the input is 0", () => {
        it("should return 0", () => {
            expect(factorial(0)).toEqual(0);
        });
    });

    describe("When the input is 1", () => {
        it("should return 1", () => {
            expect(factorial(1)).toEqual(1);
        });
    });

    describe("When the input is 2", () => {
        it("should return 2", () => {
            expect(factorial(2)).toEqual(2);
        });
    });

    describe("When the input is 3", () => {
        it("should return 6", () => {
            expect(factorial(3)).toEqual(6);
        });
    });
});
