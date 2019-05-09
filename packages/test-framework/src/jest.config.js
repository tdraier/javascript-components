module.exports = {
    moduleNameMapper: {
        '\\.(css|less|woff|woff2|eot|ttf)$': '<rootDir>/node_modules/@jahia/test-framework/build/js/__mocks__/styleMock.js'
    },
    setupFilesAfterEnv: [
        '<rootDir>/node_modules/@jahia/test-framework/build/js/setupTests.js'
    ],
    testPathIgnorePatterns: [
        '<rootDir>/src/main/',
        '<rootDir>/node/',
        '<rootDir>/node_modules/',
        '<rootDir>/target/'
    ],
    verbose: true
};
