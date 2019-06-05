import React from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {dsGenericTheme} from '../theme';
import PropTypes from 'prop-types';

export const DSProvider = ({children}) => (
    <MuiThemeProvider theme={dsGenericTheme}>
        {children}
    </MuiThemeProvider>
);

DSProvider.propTypes = {
    children: PropTypes.node.isRequired
};
