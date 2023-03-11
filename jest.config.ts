/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ["src/**/*.{ts,tsx,js,jsx}", "!@types/**/*.d.ts"],

    // The directory where Jest should output its coverage files
    coverageDirectory: ".coverage",

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: ["/node_modules/"],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ["json", "text", "lcov", "clover", "html"],

    // An object that configures minimum threshold enforcement for coverage results
    globals: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100
    },

    // A preset that is used as a base for Jest's configuration
    preset: "ts-jest",

    // The test environment that will be used for testing
    testEnvironment: "node"
};
