import React from 'react';
import {AppBar, Toolbar, Typography, withStyles} from 'material-ui';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.global
    },
    main: {
        minHeight: 'calc(100% - 96px)',
        marginTop: 64,
        padding: 1
    },
    footer: {
        fontSize: '14px',
        fontFamily: theme.typography.fontFamily,
        fontWeight: 300,
        padding: "8px",
        textAlign: "center",
        color: theme.palette.text.secondary
    }
});


let SettingsLayout = function (props) {
    return (
        <section className={props.classes.root}>
            <AppBar position="fixed">
                {props.appBar}
            </AppBar>
            <section className={props.classes.main}>
                {props.children}
            </section>
            <footer className={props.classes.footer}>
                {props.footer}
            </footer>
        </section>
    );
};


SettingsLayout.propTypes = {
    appBar: PropTypes.element,
    footer: PropTypes.string
};

SettingsLayout = withStyles(styles)(SettingsLayout);

export {SettingsLayout};