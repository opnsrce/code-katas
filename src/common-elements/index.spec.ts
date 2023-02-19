import { expect } from "chai";
import commonElements from "./index";

describe("commonElements", () => {
    context("When two arrays share common elements", () => {
        it("should return the common elements", () => {
            const array1 = [1, 2, 3, 4];
            const array2 = [3, 4, 5, 6];

            expect(commonElements(array1, array2)).to.deep.equal([3, 4]);
        });
    });

    context("When two arrays don't share any common elements", () => {
        it("should return an empty array", () => {
            const array1 = [7];
            const array2 = [3, 4, 5, 6];

            expect(commonElements(array1, array2)).to.deep.equal([]);
        });
    });

    context("When there are duplicate common elements", () => {
        it("should not include the duplicates in the result", () => {
            const array1 = [1, 2, 3, 5, 6, 7, 3];
            const array2 = [3, 4, 5, 6];

            expect(commonElements(array1, array2)).to.deep.equal([3, 5, 6]);
        });
    });

    context("When the first input is not an array", () => {
        it("should throw an error", () => {
            const array1 = 5 as unknown as number[];
            const array2 = [1, 2, 3];
            expect(() => commonElements(array1, array2)).to.throw(TypeError);
        });
    });

    context("When the second input is not an array", () => {
        it("should throw an error", () => {
            const array1 = [1, 2, 3];
            const array2 = 5 as unknown as number[];

            expect(() => commonElements(array1, array2)).to.throw(TypeError);
        });
    });
});
