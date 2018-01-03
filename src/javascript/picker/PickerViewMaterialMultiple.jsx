import React from 'react';
import {Checkbox, IconButton, List, ListItem} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import getMuiTheme from '../themeProvider';

import {ExpandLess, ExpandMore} from 'material-ui-icons'

let PickerViewMaterialMultiple = function (props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <List>
                {props.pickerEntries.map((entry) =>
                    (<ListItem primaryTogglesNestedList={true} key={entry.path} nestedLevel={entry.depth+1} primaryText={props['textRenderer'] ? props['textRenderer'].call(this,entry) : entry.name}
                               leftCheckbox={<Checkbox checked={ entry.selected } onCheck={(event, value) => props.onSelectItem(entry.path, value)}/>}
                               onClick={()=>{props.onSelectItem(entry.path, !entry.selected)}} rightIconButton={<IconButton onClick={() => props.onOpenItem(entry.path, !entry.open)}>{ entry.open ? <ExpandLess/> : <ExpandMore/> }</IconButton>}
                    />)
                )}
            </List>
        </MuiThemeProvider>

    )
};

export { PickerViewMaterialMultiple };