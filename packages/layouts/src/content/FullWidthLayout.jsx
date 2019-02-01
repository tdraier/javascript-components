import PropTypes from 'prop-types';
import React from 'react';
import {Grid, withStyles} from '@material-ui/core';
import {compose} from 'recompose';

let styles = () => ({});

export const FullWidthLayout = ({children}) => (
    <Grid container spacing={0}>
        <Grid item xs={12}>
            {children}
        </Grid>
    </Grid>
);

FullWidthLayout.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired,
};

export default compose(
    withStyles(styles)
)(FullWidthLayout);
