const main = (string: string): boolean => {
    const regExp = /[^a-z0-9]/g;

    if (typeof string !== "string") {
        throw new TypeError("Input must be a string");
    }

    const normalizedString = string.toLowerCase().replace(regExp, "");
    const reversedString = normalizedString.split("").reverse().join("");

    return normalizedString === reversedString;
};

export default main;
