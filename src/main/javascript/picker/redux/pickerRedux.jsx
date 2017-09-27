import React from 'react';
import {connect} from 'react-redux'
import createPickerData from '../createPickerData'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {combineReducers} from 'redux';
import openPaths from './openPaths';
import selectedPaths from './selectedPaths';

const reducers = combineReducers( {
    openPaths,
    selectedPaths,
});

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        openPaths: state.openPaths ? state.openPaths : ownProps.openPaths,
        selectedPaths: state.selectedPaths ? state.selectedPaths : ownProps.selectedPaths
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelectItem(path, select) {
            dispatch({
                type: select ? 'SELECT_PICKER_ENTRY' : 'UNSELECT_PICKER_ENTRY',
                path: path
            })
        },
        onOpenItem(path, open) {
            dispatch({
                type: open ? 'OPEN_PICKER_ENTRY' : 'CLOSE_PICKER_ENTRY',
                path: path
            })
        }
    }
};


function PickerRedux(props) {
    const PickerReduxWithoutStore = connect(
        mapStateToProps,
        mapDispatchToProps
    )(createPickerData(props.fragments, props.renderComponent));

    return React.createElement(Provider, {
            store: createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
                name: props.id,
                instanceId: props.id
            }))
        },
        React.createElement(PickerReduxWithoutStore, props));
}


export default PickerRedux;
