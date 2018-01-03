import React from 'react';
import {NodesTableData} from './NodesTableData'
import {connect, Provider} from 'react-redux'
import {reducers, store} from "../reduxStore";

class NodesTable extends React.Component {
    constructor(props) {
        super(props);
        this.NodesTableWithoutStore = connect(this.mapStateToProps, this.mapDispatchToProps)(NodesTableData);
    }

    mapStateToProps(state, ownProps) {
        return {
            ...ownProps,
            path: state["selectedPath_"+ ownProps.id] ? state["selectedPath_"+ ownProps.id] : ownProps.defaultPath,
        }
    };

    mapDispatchToProps(dispatch, ownProps) {
        return {
        }
    };

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {
        let NodesTableWithoutStore = this.NodesTableWithoutStore;
        return (<Provider store={ store }><NodesTableWithoutStore {...this.props}/></Provider>)
    }
}

export { NodesTable };
