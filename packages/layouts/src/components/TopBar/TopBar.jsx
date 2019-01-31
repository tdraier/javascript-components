import PropTypes from 'prop-types';
import React from 'react';
import {Grid, Typography, withStyles} from '@material-ui/core';
import {compose} from 'recompose';
import styleConstants from '../../styleConstants';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: styleConstants.topBarHeight + 'px'
    },
    typoTitle: {
        width: '260px',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
    },
    head: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: 'auto'
    },
    search: {
        marginLeft: 'auto',
        width: '80%'
    },
    topBarActions: {
        width: 'min-content',
        alignSelf: 'flex-end',
        paddingTop: theme.spacing.unit * 3
    },
    topBarGrid: {
        '& button': {
            margin: '0px'
        }
    }
});

export const TopBar = ({classes, title, contextModifiers, path, actions}) => (
    <div className={classes.root} data-sel-role="top-bar">
        <Grid container spacing={0} alignItems="center">
            <Grid item xs={3} className={classes.topBarGrid}>
                <Typography variant="body1" color="inherit">{path}</Typography>

                <Typography variant="h5"
                            color="inherit"
                            className={classes.typoTitle}
                            data-sel-role="top-bar-title"
                >
                    {title}
                </Typography>

                {contextModifiers}
            </Grid>
            <Grid item xs={9} className={classes.topBarActions}>
                {actions}
            </Grid>
        </Grid>
    </div>
);

TopBar.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    contextModifiers: PropTypes.element.isRequired,
    path: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
};

const EnhancedTopBar = compose(
    withStyles(styles)
)(TopBar);

export default EnhancedTopBar;

EnhancedTopBar.propTypes = {
    actions: PropTypes.object,
    contextModifiers: PropTypes.element,
    path: PropTypes.element,
    title: PropTypes.string.isRequired
};
