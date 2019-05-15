import React from 'react';
import PropTypes from 'prop-types';

import {createHashHistory} from 'history';
import {createOutletHistory} from './createOutletHistory';
import {Router} from 'react-router';

export class OutletRouter extends React.Component {
    constructor(props) {
        super(props);
        let baseHistory = createHashHistory();
        this.outletHistory = createOutletHistory(baseHistory, props.outlet);
    }

    componentWillUnmount() {
        this.outletHistory.dispose();
    }

    render() {
        return (
            <Router history={this.outletHistory}>{this.props.children}</Router>
        );
    }
}

OutletRouter.defaultProps = {
    outlet: '',
    children: null
};

OutletRouter.propTypes = {
    children: PropTypes.element,
    outlet: PropTypes.string
};
