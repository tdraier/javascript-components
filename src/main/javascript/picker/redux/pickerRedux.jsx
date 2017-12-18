import React from 'react';
import {connect, Provider} from 'react-redux'
import PickerData from '../pickerData'
import {reducers, store} from "../../reduxStore";
import openPaths from './openPaths';
import selectedPaths from './selectedPaths';

const mapStateToProps = (state, ownProps) => {
    return {
        ...ownProps,
        openPaths: state["openPaths"+ ownProps.id] ? state["openPaths"+ ownProps.id] : ownProps.openPaths,
        selectedPaths: state["selectedPaths"+ ownProps.id] ? state["selectedPaths"+ ownProps.id] : ownProps.selectedPaths
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
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

class PickerRedux extends React.Component {
    constructor(props) {
        super(props);
        this.PickerReduxWithoutStore = connect(mapStateToProps, mapDispatchToProps)(PickerData);
    }

    componentWillMount() {
        reducers["openPaths" + this.props.id] = openPaths(this.props);
        reducers["selectedPaths" + this.props.id] = selectedPaths(this.props);
    }

    componentWillUnmount() {
        delete reducers["openPaths" + this.props.id];
        delete reducers["selectedPaths" + this.props.id];
    }

    render() {
        let PickerReduxWithoutStore = this.PickerReduxWithoutStore;
        return (<Provider store={ store }><PickerReduxWithoutStore {...this.props}/></Provider>)
    }
}

export default PickerRedux;
