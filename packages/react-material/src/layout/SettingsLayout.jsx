import React from 'react';
import {AppBar, Toolbar, Typography, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        height: '100%',
        width: '100%'
    },
    main: {
        minHeight: 'calc(100% - 30px)',
        width: '100%',
        paddingTop: theme.spacing.unit * 11,
        paddingRight: theme.spacing.unit,
        paddingLeft: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        position: 'relative'
    },
    footer: {
        width: '100%',
    },
    appBar: {
        // transition: 'all 200ms ease-in-out'
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
                    <Typography align={'center'} gutterBottom={true} color={'textSecondary'}>
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
