/**
 * @description Write a function that takes an array of email addresses and
 * returns an object with two arrays: one containing valid email addresses, and
 * another containing invalid ones.
 *
 * An email address is considered valid if it meets the following criteria:
 * - Contains a username, followed by the "@" symbol, followed by a domain name,
 *   followed by a top-level domain (e.g. ".com").
 * - The username and domain name can contain lowercase letters, numbers,
 *   underscores, and periods.
 * - The top-level domain must be at least two characters long.
 *
 * The function should throw a TypeError if the input is not an array of
 * strings.
 */
const emailAddressParser = (emails: string[]): object => {
    const valid: string[] = [];
    const invalid: string[] = [];
    const emailValidatorRegex =
        /^([a-z0-9_\.]+)@([a-z0-9_\.]+){2,}\.([a-z0-9_\.]+){2,}$/;

    const typeError = new TypeError("Input must be an array of strings");

    if (!Array.isArray(emails)) {
        throw typeError;
    }

    for (let email of emails) {
        if (typeof email !== "string") {
            throw typeError;
        }

        if (emailValidatorRegex.test(email.toLowerCase())) {
            valid.push(email);
        } else {
            invalid.push(email);
        }
    }

    return {
        valid,
        invalid
    };
};

export default emailAddressParser;
