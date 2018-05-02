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
import {KeyboardArrowDown, KeyboardArrowRight} from 'material-ui-icons';
import PropTypes from 'prop-types';
import {fade} from 'material-ui/styles/colorManipulator'


let styles = (theme) => ({
    root: {
        position:"relative",
    },
    loading: {
        opacity:0.8
    },
	listItemSelected: {
		background: '#00a0e3',
		color: 'whitesmoke'
	},
	listItem: {
		padding: '5px 10px'
	},
	listItemLabel: {
		padding: '0px',
		'& h3': {
			fontSize: '0.875rem',
			color: '#676767',
			fontWeight: '100',
		}
	},
	listItemToggle: {
		marginRight: '6px'
	},
	listItemNodeTypeIcon: {
		marginRight: '5px'
	},
    selected: {
        backgroundColor: 'pink',
        '&:hover': {
            backgroundColor: fade(theme.palette.secondary.light, 0.7)
        }
    },
    selectedText: {
        color: 'whitesmoke!important',
    },
    loadingContainer: {
        position:"absolute",
        width:"100%",
        height:"100%",
        zIndex:999
    }
});

let PickerViewMaterial = function (props) {
    let {theme, classes, pickerEntries, onOpenItem, onSelectItem, textRenderer, iconRenderer, loading} = props;
    return (<div className={classes.root}>
        { loading && <div className={classes.loadingContainer} />}
        <List disablePadding classes={{root:loading ? (classes.root + ' ' + classes.loading) : classes.root}}>
            {pickerEntries.map((entry) =>
                (<ListItem button
                           onClick={() => entry.selectable ? onSelectItem(entry.path, !entry.selected) : onOpenItem(entry.path, !entry.open)}
                           key={entry.path}
                           divider={true}
                           className={entry.selected ? (classes.listItem + ' ' + classes.listItemSelected) : classes.listItem }
                    >
                        <ListItemIcon className={entry.selected ? (classes.listItemToggle + ' ' + classes.selectedText) : classes.listItemToggle}
										style={{paddingLeft: entry.depth * 20}}>
                            {entry.openable && entry.hasChildren ? (
                                <IconButton onClick={(event) => {onOpenItem(entry.path, !entry.open); event.stopPropagation()}}>{entry.open ?
                                    <KeyboardArrowDown color={'secondary'} /> : <KeyboardArrowRight color={'secondary'} />}</IconButton>) : <KeyboardArrowDown color={'secondary'} />}
                        </ListItemIcon>

                        <ListItemIcon className={entry.selected ? (classes.listItemNodeTypeIcon + ' ' + classes.selectedText) : classes.listItemNodeTypeIcon} >
                            { iconRenderer && iconRenderer.call(this,entry) }
                        </ListItemIcon>

                        <ListItemText classes={entry.selected ? {root:classes.listItemLabel, primary:classes.selectedText} : {root:classes.listItemLabel}} inset
                                      primary={textRenderer ? textRenderer.call(this, entry) : entry.name} />
                    </ListItem>
                )
            )}
        </List>
    </div>)
};

PickerViewMaterial.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func
};

PickerViewMaterial = withTheme()(withStyles(styles)(PickerViewMaterial));

export {PickerViewMaterial};
