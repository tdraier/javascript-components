import React from 'react';
import * as _ from "lodash";

let PickerView = function (props) {
    let Row = function({entry}) {
        if (props.rowRenderComponent) {
            return React.createElement(props.rowRenderComponent, {...props, entry})
        } else {
            return (
                <span>{entry.name}</span>
            )
        }
    };

    return (
        <div>
            {props.pickerEntries.map((entry) => (
                <div key={entry.path} style={{marginLeft: (10* entry.depth)+'px'}}>
                    <input type="checkbox" checked={ entry.open } onChange={(event) => props.onOpenItem(entry.path, event.target.checked)}/>
                    <input type="checkbox" checked={ entry.selected } onChange={(event) => props.onSelectItem(entry.path, event.target.checked)}/>
                    <Row entry={entry}/>
                </div>
            ))}
        </div>
    )
};

export default PickerView;