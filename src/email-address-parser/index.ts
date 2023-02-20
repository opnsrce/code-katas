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
