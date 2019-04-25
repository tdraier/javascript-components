module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest'
    },
    testPathIgnorePatterns: [
        'build/',
        'node/',
        'node_modules/',
        'target/'
    ]
};
