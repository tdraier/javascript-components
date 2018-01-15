import React from 'react';
import {PickerData} from './PickerData';
import * as _ from "lodash";
import PropTypes from 'prop-types';


class PickerState extends React.Component {

    constructor(props) {
        super(props);
        if (props.multipleSelection) {
            this.state = {
                openPaths: props.openPaths ? props.openPaths : [],
                selectedPaths: props.selectedPaths ? props.selectedPaths : []
            }
        } else {
            this.state = {
                openPaths: props.openPaths ? props.openPaths : [],
                selectedPath: props.selectedPath ? props.selectedPath : null
            }
        }
    }

    onSelectItem(state, path, selected) {
        if (this.props.multipleSelection) {
            this.setState({
                openPaths: state.openPaths,
                selectedPaths: selected ? [
                    ...state.selectedPaths,
                    path
                ] : _.filter(state.selectedPaths, (thispath) => thispath !== path),
            });
        } else {
            this.setState({
                openPaths: state.openPaths,
                selectedPath: selected ? path : null
            });
        }

    }

    onOpenItem(state, path, open) {
        if (this.props.multipleSelection) {
            this.setState({
                openPaths: open ? [
                    ...state.openPaths,
                    path
                ] : _.filter(state.openPaths, (thispath) => thispath !== path),
                selectedPaths: state.selectedPaths
            });
        } else {
            this.setState({
                openPaths: open ? [
                    ...state.openPaths,
                    path
                ] : _.filter(state.openPaths, (thispath) => thispath !== path),
                selectedPath: state.selectedPath
            });
        }
    }


    render() {
        if (this.props.multipleSelection) {
            return React.createElement(PickerData, {
                ...this.props,
                openPaths: this.state.openPaths,
                selectedPaths: this.state.selectedPaths,
                onOpenItem: this.onOpenItem.bind(this, this.state),
                onSelectItem: this.onSelectItem.bind(this, this.state)
            })
        } else {
            return React.createElement(PickerData, {
                ...this.props,
                openPaths: this.state.openPaths,
                selectedPath: this.state.selectedPath,
                onOpenItem: this.onOpenItem.bind(this, this.state),
                onSelectItem: this.onSelectItem.bind(this, this.state)
            })
        }
    }
}

PickerState.propTypes = {
    /**
     * List of root paths for the picker
     */
    rootPaths: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of folder paths that are open
     */
    openPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of node types that can be "opened" (folders)
     */
    openableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of node types that can be "selected" (items)
     */
    selectableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * If the picker allows multiple selection
     */
    multipleSelection: PropTypes.bool,

    /**
     * Preselected item path (for single selection picker)
     */
    selectedPath: PropTypes.string,

    /**
     * Preselected items path (for multiple selection picker)
     */
    selectedPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * Render function for the label of the tree node. Takes a JCR node as parameter, returns the string to display
     */
    textRenderer: PropTypes.func,

    /**
     * Component to use to do the full rendering of the tree
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

export { PickerState }
