import React from 'react';
import {PickerData} from './PickerData';
import * as _ from "lodash";


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

export { PickerState }
