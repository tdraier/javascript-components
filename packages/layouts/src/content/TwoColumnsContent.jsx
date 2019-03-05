import PropTypes from 'prop-types';
import React from 'react';
import {withStyles} from '@material-ui/core';
import {compose} from 'recompose';

const styles = theme => ({
    root: {
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.palette.ui.alpha,
        padding: (theme.spacing.unit * 4) + 'px ' + (theme.spacing.unit * 4) + 'px 0'
    },
    left: {
        flex: '7 1 0%',
        display: 'flex',
        flexDirection: 'column',
        paddingRight: (theme.spacing.unit * 2) + 'px'
    },
    right: {
        flex: '5 1 0%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: (theme.spacing.unit * 2) + 'px'
    }
});

export const TwoColumnsContent = ({children, rightCol, classes}) => (
    <div className={classes.root}>
        <div className={classes.left}>
            {children}
        </div>
        <div className={classes.right}>
            {rightCol}
        </div>
    </div>
);

TwoColumnsContent.propTypes = {
    children: PropTypes.element.isRequired,
    rightCol: PropTypes.element.isRequired
};

export default compose(
    withStyles(styles)
)(TwoColumnsContent);
