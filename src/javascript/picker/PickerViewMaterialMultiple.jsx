import React from 'react';
import {Checkbox, IconButton, List, ListItem} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import {muiTheme} from '../themeProvider';
import PropTypes from 'prop-types';

import {ExpandLess, ExpandMore} from 'material-ui-icons'

let PickerViewMaterialMultiple = function (props) {
    return (
        <MuiThemeProvider muiTheme={muiTheme()}>
            <List>
                {props.pickerEntries.map((entry) =>
                    (<ListItem primaryTogglesNestedList={true} key={entry.path} nestedLevel={entry.depth+1} primaryText={props['textRenderer'] ? props['textRenderer'].call(this,entry) : entry.name}
                               leftCheckbox={entry.selectable ? <Checkbox checked={ entry.selected } /> : null}
                               onClick={()=>{if (entry.selectable) { props.onSelectItem(entry.path, !entry.selected)}}} rightIconButton={entry.openable ? <IconButton onClick={() => props.onOpenItem(entry.path, !entry.open)}>{ entry.open ? <ExpandLess/> : <ExpandMore/> }</IconButton> : null}
                    />)
                )}
            </List>
        </MuiThemeProvider>

    )
};


PickerViewMaterialMultiple.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem:  PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func,

};

export { PickerViewMaterialMultiple };