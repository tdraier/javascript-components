import React from "react";
import PropTypes from 'prop-types';
import Select, {components} from 'react-select';
import {ArrowDropDown as ArrowDropDownIcon} from "@material-ui/icons";
import {Input, MenuItem, ListItemText, ListItemIcon, withStyles} from "@material-ui/core";
import * as _ from 'lodash';

const styles = theme => ({
    root: {
        display: 'inline-block',
        minWidth: 200
    }
});

const ITEM_HEIGHT = 48;

const customStyles = {
    control: () => ({
        display: "flex",
        alignItems: "center",
        border: 0,
        height: "auto",
        background: "transparent",
        "&:hover": {
            boxShadow: "none"
        }
    }),
    menu: () => ({
        backgroundColor: "white",
        boxShadow: "1px 2px 6px #888888", // should be changed as material-ui
        position: "absolute",
        left: 0,
        top: `calc(100% + 1px)`,
        width: "100%",
        zIndex: 2,
        maxHeight: ITEM_HEIGHT * 4.5
    }),
    dropdownIndicator: () => ({
        padding: 0
    }),
    clearIndicator: () => ({
        padding: 0
    }),
    menuList: () => ({
        maxHeight: ITEM_HEIGHT * 4.5,
        overflowY: "auto"
    })
};

class Option extends React.Component {

    render() {

        const {data, children, isFocused, isSelected, onFocus} = this.props;

        return (
            <MenuItem
                onFocus={onFocus}
                selected={isFocused}
                onClick={event => {this.props.selectOption(this.props.data, event)}}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400
                }}
                title={data.title}
            >
                {data.icon != null &&
                <ListItemIcon>
                    <img src={data.icon + '.png'}/>
                </ListItemIcon>
                }
                <ListItemText>
                    {children}
                </ListItemText>
            </MenuItem>
        );
    }
}

class DropdownIndicator extends React.Component {

    render() {
        return (
            <components.DropdownIndicator {...this.props}>
                <ArrowDropDownIcon/>
            </components.DropdownIndicator>
        );
    }
};

class SelectWrapped extends React.Component {

    render() {

        const {classes, value, options, ...other} = this.props;
        let optionValue = _.find(options, (data) => data.value === value);

        return (
            <Select
                components={{
                    Option,
                    DropdownIndicator,
                    IndicatorSeparator:() => false
                }}
                styles={customStyles}
                isClearable={true}
                options={options}
                value={optionValue}
                {...other}
            />
        );
    }
}

class FilterSelect extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(data) {
        let newValue = null;
        if (data != null) {
            newValue = data.value;
        }
        if (this.props.onChange !== undefined) {
            this.props.onChange(newValue);
        }
    };

    render() {

        let {classes, options, value, onChange, ...other} = this.props;

        return (
            <Input classes={classes}
                   fullWidth
                   inputComponent={SelectWrapped}
                   onChange={this.handleChange}
                   value={value}
                   inputProps={{
                       options,
                       ...other
                   }}
            />
        );
    }
}

FilterSelect.propTypes = {
    classes: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange : PropTypes.func
};

FilterSelect = _.flowRight(
    withStyles(styles)
)(FilterSelect);

export {FilterSelect};