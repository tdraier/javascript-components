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
    },
    appBar: {
        transition: "all 200ms ease-in-out"
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
                    {footer}
                </footer>
            </section>
        );
    }
}


SettingsLayout.propTypes = {
    appBar: PropTypes.element,
    footer: PropTypes.string
};

SettingsLayout = withStyles(styles)(SettingsLayout);

export {SettingsLayout};
