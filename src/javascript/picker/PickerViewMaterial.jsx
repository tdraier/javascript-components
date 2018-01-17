import React from 'react';
import {IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, withTheme} from 'material-ui';
import {ExpandLess, ExpandMore, RadioButtonChecked, RadioButtonUnchecked} from 'material-ui-icons'
import PropTypes from 'prop-types';

let PickerViewMaterial = function (props) {
    return (<List>
        {props.pickerEntries.map((entry) =>
            (<ListItem button
                       onClick={() => entry.selectable ? props.onSelectItem(entry.path, !entry.selected) : props.onOpenItem(entry.path, !entry.open)}
                       key={entry.path}
                >
                    <ListItemIcon style={entry.selectable ? {} : {opacity: 0}}>{entry.selected ? <RadioButtonChecked/> :
                        <RadioButtonUnchecked/>}</ListItemIcon>
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
    </List>)
};

PickerViewMaterial.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func
};

PickerViewMaterial = withTheme()(PickerViewMaterial);

export {PickerViewMaterial};