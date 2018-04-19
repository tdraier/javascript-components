import React from 'react';
import {
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    SvgIcon,
    withStyles,
    withTheme
} from 'material-ui';
import {ExpandLess, ExpandMore} from 'material-ui-icons'
import PropTypes from 'prop-types';
import {fade} from 'material-ui/styles/colorManipulator'


let styles = (theme) => ({
    root: {},
    padding: {
        paddingTop:0,
        paddingBottom:0
    },
    selected: {
        backgroundColor: theme.palette.secondary.light,
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.light, 0.7)
        }
    },
    selectedText: {
        color: theme.palette.secondary.contrastText
    }
});

let PickerViewMaterial = function (props) {
    let {theme, classes, pickerEntries, onOpenItem, onSelectItem, textRenderer, iconRenderer} = props;
    return (<List classes={{root:classes.root, padding:classes.padding}}>
        {pickerEntries.map((entry) =>
            (<ListItem button
                       onClick={() => entry.selectable ? onSelectItem(entry.path, !entry.selected) : onOpenItem(entry.path, !entry.open)}
                       key={entry.path}
                       divider={true}
                       classes={entry.selected ? {root:classes.selected} : {} }
                >
                    <ListItemIcon classes={entry.selected ? {root:classes.selectedText} : {}}>
                        {entry.openable && entry.hasChildren ? (
                            <IconButton onClick={(event) => {onOpenItem(entry.path, !entry.open); event.stopPropagation()}}>{entry.open ?
                                <ExpandLess/> : <ExpandMore/>}</IconButton>) : <ExpandMore style={{opacity:0}}/>}
                    </ListItemIcon>

                    <ListItemIcon classes={entry.selected ? {root:classes.selectedText} : {}}
                                                    style={{paddingLeft: entry.depth * theme.spacing.unit}}>
                        { iconRenderer && iconRenderer.call(this,entry) }
                    </ListItemIcon>

                    <ListItemText classes={entry.selected ? {primary:classes.selectedText} : {}} inset
                                  primary={textRenderer ? textRenderer.call(this, entry) : entry.name} />
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

PickerViewMaterial = withTheme()(withStyles(styles)(PickerViewMaterial));

export {PickerViewMaterial};