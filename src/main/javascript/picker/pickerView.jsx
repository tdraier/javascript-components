import React from 'react';

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

export default PickerView;