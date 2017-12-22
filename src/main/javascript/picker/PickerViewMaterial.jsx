import React from 'react';
import {IconButton, List, ListItem, makeSelectable} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../themeProvider';

import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

let SelectableList = makeSelectable(List);

let PickerViewMaterial = function (props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <SelectableList value={props.selectedPath} onChange={
                (event, path) => {
                    if (path) {
                        props.onSelectItem(path, true)
                    }

                }
            }>
                {props.pickerEntries.map((entry) =>
                    (<ListItem value={entry.path} key={entry.path} nestedLevel={entry.depth + 1}
                               primaryText={props['textRenderer'] ? props['textRenderer'].call(this, entry) : entry.name}
                               rightIconButton={<IconButton
                                   onClick={() => props.onOpenItem(entry.path, !entry.open)}>{entry.open ?
                                   <ExpandLess/> : <ExpandMore/>}</IconButton>}
                    />)
                )}
            </SelectableList>
        </MuiThemeProvider>
    )
};

export {PickerViewMaterial};