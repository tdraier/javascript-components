import React from 'react';
import {Grid, Paper} from 'material-ui';
import PropTypes from 'prop-types';

let TestLayout = function (props) {
    return (<Grid container>
        <Grid item xs={12} md={6}>
            <Paper> {props.leftCol}</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
            <Paper>{props.rightCol}</Paper>
        </Grid>
    </Grid>);
};


TestLayout.propTypes = {
    leftCol: PropTypes.element,
    rightCol: PropTypes.element
};

export {TestLayout};