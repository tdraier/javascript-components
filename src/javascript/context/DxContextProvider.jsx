import React from 'react';
import {MuiThemeProvider} from 'material-ui';
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
import * as _ from "lodash";

class DxContextProvider extends React.Component {
    constructor(props) {
        super(props);
        if (props.mui && typeof props.mui === 'object') {
            this.state = {
                theme: props.mui
            }
        }
        props.dxContext.setTheme = (theme) => {
            this.setState({
                theme: theme
            });
        }
    }

    getChildContext() {
        return {dxContext: this.props.dxContext};
    }

    render() {
        let {dxContext, children, i18n, apollo, redux, mui, router} = this.props;

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
        if (apollo) {
            let options = {contextPath:dxContext.contextPath};
            if (typeof apollo === 'object') {
                Object.assign(options, apollo)
            }
            Component = React.createElement(ApolloProvider, {client:client(options)}, Component);
        }
        if (redux) {
            Component = React.createElement(Provider, {store:store}, Component);
        }
        if (mui) {
            let theTheme = theme;
            if (this.state && this.state.theme) {
                theTheme = _.merge({}, theme, this.state.theme);
            }
            Component = React.createElement(MuiThemeProvider, {theme:theTheme}, Component);
        }
        return Component;
    }
}

DxContextProvider.childContextTypes = {
    dxContext: PropTypes.object
};

export {DxContextProvider}