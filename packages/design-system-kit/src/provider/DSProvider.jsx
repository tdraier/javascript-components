import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {dsGenericTheme} from '../theme';

export const DSProvider = ({children}) => (
    <MuiThemeProvider theme={dsGenericTheme}>
        {children}
    </MuiThemeProvider>
);

DSProvider.propTypes = {
    children: React.ReactNode
};
