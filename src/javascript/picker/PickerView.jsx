import React from 'react';
import PropTypes from 'prop-types';

let PickerView = function (props) {
    return (
        <div>
            {props.pickerEntries.map((entry) => (
                <div key={entry.path} style={{marginLeft: (10* entry.depth)+'px'}}>
                    <input type="checkbox" checked={ entry.open } onChange={(event) => props.onOpenItem(entry.path, event.target.checked)}/>
                    <input type="checkbox" checked={ entry.selected } onChange={(event) => props.onSelectItem(entry.path, event.target.checked)}/>
                    <span>{props['textRenderer'] ? props['textRenderer'].call(this,entry) : entry.name}</span>
                </div>
            ))}
        </div>
    )
};

PickerView.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem:  PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func,
};

export { PickerView };