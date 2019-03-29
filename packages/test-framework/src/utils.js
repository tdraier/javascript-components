export const mock = (jest, lib) => {
    jest.mock(lib, () => require('./__mocks__/' + lib));
};
