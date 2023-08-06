const bubbleSort = (numbers: number[]): number[] => {
    if (numbers.length <= 1) {
        return numbers;
    }

    let swapped = false;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            const tmp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = tmp;

            swapped = true;
        }
    }

    if (swapped) {
        return bubbleSort(numbers);
    }

    return numbers;
};

export default bubbleSort;
