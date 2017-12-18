import React from 'react';
import {Checkbox, List, ListItem} from 'material-ui';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

let cellStyle = {
    'width': '48px',
    'paddingLeft': '12px',
    'paddingRight': '12px'
};

let iconStyles = {
    fontSize: '16px',
    height:'24px',
    width:'24px'
};

let PickerViewMaterial = function (props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
                <List>

                    {props.pickerEntries.map((entry) => {
                        let select = (<Checkbox checked={ entry.selected } onCheck={(event, value) => props.onSelectItem(entry.path, value)}/>);
                        let expand = (<Checkbox uncheckedIcon={<ExpandMore/>} checkedIcon={<ExpandLess/>} checked={ entry.open } onCheck={(event, value) => props.onOpenItem(entry.path, value)}/>);
                        return (<ListItem key={entry.path} nestedLevel={entry.depth+1} primaryText={props['textRenderer'] ? props['textRenderer'].call(this,entry) : entry.name}
                                          innerDivStyle={{fontWeight:"400"}} leftCheckbox={select} rightToggle={expand} />)
                    })}
                </List>
            </div>
        </MuiThemeProvider>

    )
};

export default PickerViewMaterial;