import React from 'react';
import PickerData from '../pickerData';
import * as _ from "lodash";


class PickerState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openPaths: props.openPaths ? props.openPaths : [],
            selectedPaths: props.selectedPaths ? props.selectedPaths : []
        }
    }

    onSelectItem(state, path, selected) {
        this.setState({
            openPaths: state.openPaths,
            selectedPaths: selected ? [
                ...state.selectedPaths,
                path
            ] : _.filter(state.selectedPaths, (thispath) => thispath !== path),
        });

    }

    onOpenItem(state, path, open) {
        this.setState({
            openPaths: open ? [
                ...state.openPaths,
                path
            ] : _.filter(state.openPaths, (thispath) => thispath !== path),
            selectedPaths: state.selectedPaths
        });
    }


    render() {
        return React.createElement(PickerData, {
            ...this.props,
            openPaths: this.state.openPaths,
            selectedPaths: this.state.selectedPaths,
            onOpenItem: this.onOpenItem.bind(this, this.state),
            onSelectItem: this.onSelectItem.bind(this, this.state)
        })
    }
}

export default PickerState
