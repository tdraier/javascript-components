import React from 'react';
import {IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, withTheme} from '@material-ui/core';
import {ExpandLess, ExpandMore, CheckBoxOutlineBlank, CheckBox} from '@material-ui/icons'
// import ExpandLess from 'material-ui-icons/ExpandLess'
// import ExpandMore from 'material-ui-icons/ExpandMore'
// import CheckBoxOutlineBlank from 'material-ui-icons/CheckBoxOutlineBlank'
// import CheckBox from 'material-ui-icons/CheckBox'
import PropTypes from 'prop-types';

let PickerViewMaterialMultiple = function (props) {
    return (
        <List>
            {props.pickerEntries.map((entry) => (
                    <ListItem button
                              onClick={() => entry.selectable ? props.onSelectItem(entry.path, !entry.selected, true) : props.onOpenItem(entry.path, !entry.open)}
                              key={entry.path}
                    >
                        <ListItemIcon style={entry.selectable ? {} : {opacity: 0}}>{entry.selected ? <CheckBox/> :
                            <CheckBoxOutlineBlank/>}</ListItemIcon>
                        <ListItemText style={{paddingLeft: entry.depth * props.theme.spacing.unit}} inset
                                      primary={props['textRenderer'] ? props['textRenderer'].call(this, entry) : entry.name} />
                        <ListItemSecondaryAction>
                            {entry.openable && entry.hasChildren ? (
                                <IconButton onClick={() => props.onOpenItem(entry.path, !entry.open)}>{entry.open ?
                                    <ExpandLess/> : <ExpandMore/>}</IconButton>) : null}
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            )}
        </List>
    )
};

PickerViewMaterialMultiple.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem:  PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func,
};

PickerViewMaterialMultiple = withTheme()(PickerViewMaterialMultiple);

export { PickerViewMaterialMultiple };