import React from 'react';
import PickerRedux from './redux/pickerRedux'
import PickerState from './react-state/pickerState'

let Picker = function(props) {
    let Picker = props.pickerType === "redux" ? PickerRedux : PickerState;
    return (<Picker {...props} />);
};

export default Picker;