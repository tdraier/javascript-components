import PropTypes from 'prop-types';
import React from 'react';
import {Grid, withStyles} from '@material-ui/core';
import {Typography} from '@jahia/ds-mui-theme';
import {compose} from 'recompose';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px ' + (theme.spacing.unit * 3) + 'px',
        height: theme.spacing.unit * 18
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
    topBarActions: {
        width: 'min-content',
        display: 'flex',
        justifyContent: 'flex-end'
    },
    topBarGrid: {
        '& button': {
            margin: '0px'
        }
    }
});

export const TopBar = ({classes, title, contextModifiers, path, actions}) => (
    <div className={classes.root} data-sel-role="top-bar">
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="flex-end"
              spacing={24}
        >
            <Grid item xs={4} className={classes.topBarGrid}>
                <Grid container
                      direction="column"
                      justify="space-between"
                      alignItems="flex-start"
                >
                    <Typography noWrap gutterBottom variant="omega" color="invert">{path}</Typography>

                    <Typography gutterBottom
                                variant="beta"
                                color="invert"
                                className={classes.typoTitle}
                                data-sel-role="top-bar-title"
                    >
                        {title}
                    </Typography>
                    <div>
                        {contextModifiers}
                    </div>
                </Grid>
            </Grid>
            <Grid item xs={8} className={classes.topBarActions}>
                {actions}
            </Grid>
        </Grid>
    </div>
);

TopBar.propTypes = {
    actions: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    contextModifiers: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default compose(
    withStyles(styles)
)(TopBar);
