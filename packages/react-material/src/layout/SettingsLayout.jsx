import React from 'react';
import {AppBar, Toolbar, Typography, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        height: '100%'
    },
    main: {
        minHeight: 'calc(100% - 96px)',
        marginTop: 64,
        padding: '24px 8px 8px 8px',
        position: 'relative'
    },
    footer: {},
    appBar: {
        transition: 'all 200ms ease-in-out'
    }
});


class SettingsLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes, appBar, children, footer, appBarStyle } = this.props;
        return (
            <section className={classes.root} >
                <AppBar position="fixed" classes={{root:classes.appBar}} style={appBarStyle}>
                    {appBar}
                </AppBar>
                <section className={classes.main}>
                    {children}
                </section>
                <footer className={classes.footer}>
                    <Typography variant={'body1'} align={'center'} gutterBottom={true} color={'textSecondary'}>
                        {footer}
                    </Typography>
                </footer>
            </section>
        );
    }
}


SettingsLayout.propTypes = {
    appBar: PropTypes.element,
    footer: PropTypes.string
};

SettingsLayout = withStyles(styles, {name:"DxSettingsLayout"})(SettingsLayout);

export {SettingsLayout};
