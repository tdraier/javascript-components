import React from 'react';
import {NodesTableData} from './NodesTableData'
import {connect, Provider} from 'react-redux'
import {reducers, store} from "../reduxStore";
import PropTypes from 'prop-types';

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

NodesTable.propTypes = {
    /**
     * Id of the redux store where the selected path is taken
     */
    id: PropTypes.string,

    /**
     * Path of the nodes to display
     */
    defaultPath: PropTypes.string,

    /**
     * List of node types of nodes to display
     */
    types: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * Function that returns a <TableRow> component for the header
     */
    headers: PropTypes.func,

    /**
     * Function that returns a <TableRow> component for a row, takes a JCR node as parameter
     */
    row: PropTypes.func,


    /**
     * Render function for the label of the tree node. Takes a JCR node as parameter, returns the string to display
     */
    textRenderer: PropTypes.func,

    /**
     * Component to use to do the full rendering of the table
     */
    renderComponent: PropTypes.element,

    /**
     * Optional set of fragments to add to the graphQL query. Can be a string that identify a predefinedFragment or a fragment definition
     */
    fragments: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            applyFor: PropTypes.string.isRequired,
            variables: PropTypes.string,
            gql: PropTypes.object.isRequired
        })
    ])),

    /**
     * Optional set of variable to pass to the graphQL query, in order to fulfill fragments needs
     */
    variables: PropTypes.object
};

export { NodesTable };
