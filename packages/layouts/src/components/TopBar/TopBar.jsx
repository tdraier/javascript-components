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
    topBar: {
        width: 'min-content',
        alignSelf: 'flex-end',
        paddingTop: theme.spacing.unit * 3
    },
    topBarGrid: {
        marginBottom: theme.spacing.unit * 2,
        '& button': {
            margin: '0px'
        }
    }
});

export const TopBar = ({classes, title, contextModifiers, actions}) => (
    <div className={classes.root} data-cm-role="cm-top-bar">
        <Grid container spacing={0} alignItems="center">
            <Grid item xs={2} className={classes.topBarGrid}>
                <Typography variant="h5"
                            color="inherit"
                            className={classes.typoTitle}
                            data-cm-role="cm-mode-title"
                >
                    {title}
                </Typography>

                {contextModifiers}
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={9} className={classes.topBar}>
                {actions}
            </Grid>
        </Grid>
    </div>
);

TopBar.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    contextModifiers: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
};

const EnhancedTopBar = compose(
    withStyles(styles)
)(TopBar);

export default EnhancedTopBar;

EnhancedTopBar.propTypes = {
    actions: PropTypes.object.isRequired,
    contextModifiers: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
};
