import React from 'react';
import {connect, Provider} from 'react-redux'
import {PickerData} from './pickerData'
import {reducers, store} from "../reduxStore";

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
        delete reducers["openPaths_" + this.props.id];
        delete reducers["selectedPath_" + this.props.id];
        delete reducers["selectedPaths_" + this.props.id];
    }

    render() {
        let PickerReduxWithoutStore = this.PickerReduxWithoutStore;
        return (<Provider store={ store }><PickerReduxWithoutStore {...this.props}/></Provider>)
    }
}

export { PickerRedux };
