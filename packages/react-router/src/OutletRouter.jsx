import React from 'react';

import {createHashHistory} from "history";
import {createOutletHistory} from "./createOutletHistory"
import {Router} from 'react-router'

class OutletRouter extends React.Component {

    constructor(props) {
        super(props);
        let baseHistory = createHashHistory();
        this.outletHistory = createOutletHistory(baseHistory, props.outlet);
    }

    componentWillMount() {

    }

    componentWillUnmount() {
        this.outletHistory.dispose();
    }

    render() {
        return (<Router history={this.outletHistory}>{this.props.children}</Router>)
    }
}

export { OutletRouter };