import PropTypes from 'prop-types';
import React from 'react';
import {Typography, withStyles} from '@material-ui/core';
import {compose} from 'recompose';
import {Trans} from 'react-i18next';
import TopBar from '../components/TopBar';

let styles = theme => ({
    root: {
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    topBar: {
        color: theme.palette.primary.contrastText
    },
    content: {
        flex: '1 1 0%',
        display: 'flex',
        flexDirection: 'column'
    },
    metaNav: {
        position: 'absolute',
        width: '50%',
        height: theme.spacing.unit * 3,
        top: 0,
        right: 0,
        paddingRight: theme.spacing.unit * 4,
        textAlign: 'right',
        color: theme.palette.text.contrastText + '!important',
        background: 'linear-gradient(to right, rgba(78, 81, 86, 0) 0%, ' + theme.palette.layout.main + ' 100%) !important;',
        '& a': {
            color: 'inherit !important'
        }
    }
});

export const MainLayout = ({classes, topBarProps, children}) => (
    <div className={classes.root}>
        <div className={classes.metaNav}>
            <Typography variant="overline" color="inherit"><Trans i18nKey="label.contentManager.link.academy"
                                                                  components={[
                                                                      <a key="academyLink"
                                                                         href={contextJsParameters.config.academyLink}
                                                                         target="_blank"
                                                                         rel="noopener noreferrer"
                                                                      >.
                                                                      </a>
                                                                  ]}/>
            </Typography>
        </div>
        <div className={classes.topBar}>
            <TopBar {...topBarProps}/>
        </div>
        <div className={classes.content}>
            {children}
        </div>
    </div>
);

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired,
    topBarProps: PropTypes.object.isRequired
};

export default compose(
    withStyles(styles)
)(MainLayout);
