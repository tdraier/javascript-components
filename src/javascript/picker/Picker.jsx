import React from 'react';
import {PickerRedux} from './PickerRedux'
import {PickerState} from './PickerState'
import PropTypes from 'prop-types';

let Picker = function(props) {
    let Picker = props.pickerType === "state" ? PickerState : PickerRedux;
    return (<Picker {...props} />);
};

Picker.propTypes = {
    /**
     * Identifier for the picker redux store
     */
    id: PropTypes.string,

    /**
     * Type of internal state storage - either redux (can be shared) or internal state
     */
    pickerType: PropTypes.oneOf(['state', 'redux']),

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

Picker.defaultProps = {
    rootPaths: ['/'],
    openableTypes:['nt:base'],
    selectableTypes:['nt:base']
};

export { Picker };