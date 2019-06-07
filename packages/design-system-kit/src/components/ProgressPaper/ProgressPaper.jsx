import React from 'react';
import {Paper, CircularProgress, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = {
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const ProgressPaper = ({classes}) => (
    <Paper classes={classes}>
        <CircularProgress/>
    </Paper>
);

ProgressPaper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProgressPaper);
