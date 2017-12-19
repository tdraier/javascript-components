import React from 'react';
import {PickerRedux} from './pickerRedux'
import {PickerState} from './pickerState'

let Picker = function(props) {
    let Picker = props.pickerType === "redux" ? PickerRedux : PickerState;
    return (<Picker {...props} />);
};

export { Picker };