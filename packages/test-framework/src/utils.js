import React from 'react';
import {shallow} from 'enzyme/build';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

export const shallowWithTheme = (children, options, theme) => {
    const wrapper = shallow(<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>, options);
    const instance = wrapper.instance();
    return wrapper.shallow({context: instance.getChildContext()});
};

export const mock = (jest, lib) => {
    jest.mock(lib, () => require('./__mocks__/' + lib));
};
