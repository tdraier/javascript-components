import React from 'react';
import {connect, Provider} from 'react-redux'
import {PickerData} from './PickerData'
import {reducers, store, resetStateReducer} from "../reduxStore";
import PropTypes from 'prop-types';

class PickerRedux extends React.Component {
    constructor(props) {
        super(props);
        this.PickerReduxWithoutStore = connect(this.mapStateToProps, this.mapDispatchToProps)(PickerData);
    }

    mapStateToProps(state, ownProps) {
        if (ownProps.multipleSelection) {
            return {
                ...ownProps,
                openPaths: state["openPaths_" + ownProps.id] ? state["openPaths_" + ownProps.id] : ownProps.openPaths,
                selectedPaths: state["selectedPaths_" + ownProps.id] ? state["selectedPaths_" + ownProps.id] : ownProps.selectedPaths
            }
        } else {
            return {
                ...ownProps,
                openPaths: state["openPaths_" + ownProps.id] ? state["openPaths_" + ownProps.id] : ownProps.openPaths,
                selectedPath: state["selectedPath_" + ownProps.id] ? state["selectedPath_" + ownProps.id] : ownProps.selectedPath
            }
        }
    };

    mapDispatchToProps(dispatch, ownProps) {
        return {
            onSelectItem(path, select) {
                dispatch({
                    type: select ? 'SELECT_PICKER_ENTRY_' + ownProps.id : 'UNSELECT_PICKER_ENTRY_' + ownProps.id,
                    path: path
                })
            },
            onOpenItem(path, open) {
                dispatch({
                    type: open ? 'OPEN_PICKER_ENTRY_' + ownProps.id : 'CLOSE_PICKER_ENTRY_' + ownProps.id,
                    path: path
                })
            }
        }
    };

    openPaths() {
        return (state = this.props.openPaths || [], action) => {
            let index = state.indexOf(action.path);
            if (action.type === 'OPEN_PICKER_ENTRY_' + this.props.id && index === -1) {
                return [
                    ...state,
                    action.path
                ]
            } else if (action.type === 'CLOSE_PICKER_ENTRY_' + this.props.id && index !== -1) {
                return _.filter(state, (path) => path !== action.path);
            }
            return state;
        };
    }


    selectedPath() {
        return (state = this.props.selectedPath, action) => {
            if (action.type === 'SELECT_PICKER_ENTRY_' + this.props.id) {
                return action.path
            } else if (action.type === 'UNSELECT_PICKER_ENTRY_' + this.props.id) {
                return null;
            }
            return state;
        };
    }

    selectedPaths() {
        return (state = this.props.selectedPaths || [], action) => {
            let index = state.indexOf(action.path);
            if (action.type === 'SELECT_PICKER_ENTRY_' + this.props.id && index === -1) {
                return [
                    ...state,
                    action.path
                ]
            } else if (action.type === 'UNSELECT_PICKER_ENTRY_' + this.props.id && index !== -1) {
                return _.filter(state, (path) => path !== action.path);
            }
            return state;
        };
    }


    componentWillMount() {
        reducers["openPaths_" + this.props.id] = this.openPaths();
        if (this.props.multipleSelection) {
            reducers["selectedPaths_" + this.props.id] = this.selectedPaths();
        } else {
            reducers["selectedPath_" + this.props.id] = this.selectedPath();
        }
    }

    componentWillUnmount() {
        reducers["openPaths_" + this.props.id] = resetStateReducer;
        reducers["selectedPath_" + this.props.id] = resetStateReducer;
        reducers["selectedPaths_" + this.props.id] = resetStateReducer;

        store.dispatch({type:"RESET_STATE"});

        delete reducers["openPaths_" + this.props.id];
        delete reducers["selectedPath_" + this.props.id];
        delete reducers["selectedPaths_" + this.props.id];
    }

    render() {
        let PickerReduxWithoutStore = this.PickerReduxWithoutStore;
        return (<Provider store={ store }><PickerReduxWithoutStore {...this.props}/></Provider>)
    }
}


PickerRedux.propTypes = {
    /**
     * Identifier for the picker redux store
     */
    id: PropTypes.string,

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


export { PickerRedux };
