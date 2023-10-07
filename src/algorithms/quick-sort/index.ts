/**
 * @description Write a function that takes an unsorted array of numbers and
 * returns a sorted array of numbers using the Quick Sort algorithm.
 */

const quickSort = (numbers: number[]): number[] => {
    if (numbers.length <= 1) {
        return numbers;
    }

    const pivotIndex = Math.floor(numbers.length / 2);
    const pivot = numbers[pivotIndex];
    const left = [];
    const right = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i === pivotIndex) {
            continue; // Skip the pivot element
        }

        if (numbers[i] <= pivot) {
            left.push(numbers[i]);
        } else {
            right.push(numbers[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};

export default quickSort;
