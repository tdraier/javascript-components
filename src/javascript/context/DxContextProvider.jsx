import React from 'react';
import {MuiThemeProvider} from 'material-ui';
import {createGenerateClassName} from 'material-ui/styles/index';
import {getI18n} from "../i18n/getI18n";
import {store} from '../reduxStore';
import {theme} from '../theme'
import {client} from '@jahia/apollo-dx';
import {ApolloProvider} from 'react-apollo';
import {Provider} from 'react-redux'
import {I18nextProvider} from 'react-i18next'
import {HashRouter} from 'react-router-dom'
import {OutletRouter} from '../router'
import PropTypes from 'prop-types';
import {JssProvider, SheetsRegistry} from 'react-jss';
import {NotificationProvider} from "../notification/NotificationProvider";

class DxContextProvider extends React.Component {
    constructor(props) {
        super(props);
        let {dxContext, children, i18n, apollo, redux, mui, router, apolloClient} = this.props;
        let state = {};
        if (mui) {
            if (typeof mui === 'object') {
                state.currentTheme = mui;
            } else {
                state.currentTheme = theme;
            }
            dxContext.setTheme = (theme) => {
                // theTheme = _.merge({}, theme, this.state.theme);
                this.setState({
                    currentTheme: theme
                });
            };
        }

        if (dxContext.apolloClient) {
            state.apolloClient = dxContext.apolloClient;
        } else if (apolloClient) {
            state.apolloClient = apolloClient;
        } else if (apollo) {
            let options = {contextPath:dxContext.contextPath};
            if (typeof apollo === 'object') {
                Object.assign(options, apollo)
            }
            state.apolloClient = client(options);
        }

        this.state = state;
    }

    getChildContext() {
        return {dxContext: this.props.dxContext};
    }

    render() {
        let {dxContext, children, i18n, apollo, redux, mui, router} = this.props;
        let {currentTheme, apolloClient} = this.state;

        let Component = React.Children.only(children);
        if (i18n) {
            let options = {currentLanguage:dxContext.uilang, contextPath:dxContext.contextPath};
            if (typeof i18n === 'object') {
                Object.assign(options, i18n)
            }
            Component = React.createElement(I18nextProvider, {i18n:getI18n(options)}, Component);
        }
        if (router) {
            let router = HashRouter;
            let options = {};
            if (typeof router === 'object') {
                if (router.type === 'outlet') {
                    router = OutletRouter;
                    options.outlet = router.outlet;
                }
            }
            Component = React.createElement(HashRouter, options, Component);
        }
        if (apolloClient) {
            Component = React.createElement(ApolloProvider, {client:apolloClient}, Component);
        }
        if (redux) {
            Component = React.createElement(Provider, {store:store}, Component);
        }

        if (currentTheme) {
            let generateClassName = dxContext.generateClassName ? dxContext.generateClassName : createGenerateClassName();
            let sheetsRegistry = dxContext.sheetRegistry ? dxContext.sheetRegistry : new SheetsRegistry();
            Component = React.createElement(JssProvider, {registry: sheetsRegistry,  generateClassName:generateClassName}, React.createElement(MuiThemeProvider, {theme: currentTheme, sheetsManager:new Map()}, Component));
            // } else {
            //     Component = React.createElement(MuiThemeProvider, {theme: currentTheme}, Component);
            // }

            // add notification
            Component = React.createElement(NotificationProvider, {notificationContext:{}}, Component);
        }

        return Component;
    }
}

DxContextProvider.childContextTypes = {
    dxContext: PropTypes.object
};

export {DxContextProvider}