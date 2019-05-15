import React from 'react';
import {PropTypes} from 'prop-types';
import {CircularProgress, withStyles} from '@material-ui/core';

const styles = () => ({
    loadingOverlay: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        display: 'block',
        transform: 'translate( -50%, -50% )',
        zIndex: 999
    }
});

class ProgressOverlayCmp extends React.Component {
    render() {
        let {classes} = this.props;
        return <div className={classes.loadingOverlay}><CircularProgress/></div>;
    }
}

ProgressOverlayCmp.propTypes = {
    classes: PropTypes.object.isRequired
};

export const ProgressOverlay = withStyles(styles, {name: 'DxProgressOverlay'})(ProgressOverlay);
