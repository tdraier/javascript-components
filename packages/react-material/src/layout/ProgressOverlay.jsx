import React from 'react';
import {CircularProgress, withStyles} from '@material-ui/core';

const styles = theme => ({
    loadingOverlay: {
        position: 'fixed',
        left: '50%',
        top: '50%',
        display: 'block',
        transform: 'translate( -50%, -50% )',
        zIndex: 999
    }
});

class ProgressOverlay extends React.Component {
    render() {
        let {classes} = this.props;
        return <div className={classes.loadingOverlay}><CircularProgress/></div>;
    }
}

ProgressOverlay = withStyles(styles, {name: 'DxProgressOverlay'})(ProgressOverlay);

export {ProgressOverlay};
