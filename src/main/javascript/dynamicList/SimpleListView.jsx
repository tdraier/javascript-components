import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../themeProvider';
import * as _ from 'lodash';

class SimpleListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactElements: []
        };
    }

    // todo should move this code dynamicList itself
    componentDidMount() {
        if (this.props.components.length > 0 && !this.done) {
            this.done = true;
            let self = this;
            let imports = [];
            _.each(this.props.components, c => {
                imports = imports.concat(c.getImports())
            });

            Promise.all(_.map(imports, (imp) => eval("System.import(imp)"))).then(m => {
                let reactElements = _.map(this.props.components, (c) => {
                    let s = c.getImports().length;
                    let r = c.createElement(React, ReactDOM, ...m);
                    m.splice(s);
                    return r;
                });

                self.setState({reactElements: reactElements});
            });
        }
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        return(<MuiThemeProvider muiTheme={getMuiTheme()}><div>{this.state.reactElements}</div></MuiThemeProvider>);
    }
}

export {SimpleListView}