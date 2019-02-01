import PropTypes from 'prop-types';
import React from 'react';
import {withStyles} from '@material-ui/core';
import {compose} from 'recompose';
import LeftNavigation from '../components/LeftNavigation';
import styleConstants from '../styleConstants';

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.layout.dark,
        padding: 0,
        paddingRight: theme.spacing.unit * 4
    },
    expanded: {
        marginLeft: styleConstants.leftNavigationDrawerWidth,
        padding: 0
    }
});

export class AppLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            drawerContent: {
                content: null,
                title: null
            }
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    handleDrawerOpen(drawerContent, menu) {
        this.setState({
            openDrawerMenu: menu,
            drawerOpen: true,
            drawerContent: drawerContent
        });
    }

    handleDrawerClose() {
        this.setState({
            openDrawerMenu: null,
            drawerOpen: false
        });
    }

    render() {
        const {children, leftNavigationProps, classes, expanded} = this.props;
        const {handleDrawerOpen, handleDrawerClose} = this;
        return (
            <div className={classes.root}>
                <LeftNavigation {...leftNavigationProps} drawer={{...this.state, handleDrawerOpen, handleDrawerClose}}/>
                <div className={classes.content + ' ' + (expanded ? classes.expanded : '')}>
                    {children}
                </div>
            </div>
        );
    }
}

export default compose(
    withStyles(styles)
)(AppLayout);

AppLayout.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
    leftNavigationProps: PropTypes.object.isRequired
};

AppLayout.defaultProps = {
    expanded: false
};

