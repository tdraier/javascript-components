import React from 'react';
import {IconButton, List, ListItem, makeSelectable} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import {muiTheme} from '../themeProvider';
import {ExpandLess, ExpandMore} from 'material-ui-icons'

let SelectableList = makeSelectable(List);

let PickerViewMaterial = function (props) {
    return (
        <MuiThemeProvider muiTheme={muiTheme()}>
            <SelectableList value={props.selectedPath} onChange={
                (event, path) => {
                    if (path && (props.pickerEntries.find(entry => entry.path === path).selectable)) {
                        props.onSelectItem(path, true)
                    }
                }
            }>
                {props.pickerEntries.map((entry) =>
                    (<ListItem value={entry.path} key={entry.path} nestedLevel={entry.depth + 1}
                               primaryText={props['textRenderer'] ? props['textRenderer'].call(this, entry) : entry.name}
                               rightIconButton={entry.openable ? (<IconButton
                                   onClick={() => props.onOpenItem(entry.path, !entry.open)}>{entry.open ?
                                   <ExpandLess/> : <ExpandMore/>}</IconButton>) : null}
                    />)
                )}
            </SelectableList>
        </MuiThemeProvider>
    )
};

export {PickerViewMaterial};