import React from 'react';
import {PickerRedux} from './PickerRedux'
import {PickerState} from './PickerState'

let Picker = function(props) {
    let Picker = props.pickerType === "redux" ? PickerRedux : PickerState;
    return (<Picker {...props} />);
};

export { Picker };