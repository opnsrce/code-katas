import { expect } from "chai";
import factorial from "./index";

describe("factorial", () => {
    context("When the input is 0", () => {
        it("should return 0", () => {
            expect(factorial(0)).to.equal(0);
        });
    });

    context("When the input is 1", () => {
        it("should return 1", () => {
            expect(factorial(1)).to.equal(1);
        });
    });

    context("When the input is 2", () => {
        it("should return 2", () => {
            expect(factorial(2)).to.equal(2);
        });
    });

    context("When the input is 3", () => {
        it("should return 6", () => {
            expect(factorial(3)).to.equal(6);
        });
    });
});
