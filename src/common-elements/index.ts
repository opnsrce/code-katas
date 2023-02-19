/**
 * @description Write a function that takes two arrays and returns an array of
 * the common elements shared between them.
 */

/**
 * Returns the common elements between two arrays
 * @param {Array} array1 The first array
 * @param {Array} array2 The second array
 * @returns {Array} An Array of common elements
 */
const commonElements = (
    array1: (string | number)[],
    array2: (string | number)[]
): (string | number)[] => {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        throw new TypeError("Inputs must be an array");
    }

    const elements = new Set<string | number>();

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            elements.add(array1[i]);
        }
    }

    return Array.from(elements);
};

export default commonElements;
