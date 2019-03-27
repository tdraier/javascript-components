import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'react-select';
import {withStyles} from '@material-ui/core/styles';
import {MenuItem, ListItemText, TextField, Paper, Typography} from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    input: {
        display: 'flex',
        padding: 0
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'auto'
    },
    noOptionsMessage: {
    },
    singleValue: {
        fontSize: theme.typography.delta.fontSize
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: theme.typography.delta.fontSize
    },
    paper: {
        position: 'absolute',
        zIndex: 99,
        marginTop: 0,
        left: 0,
        right: 0
    }
});

const NoOptionsMessage = props => {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.noOptionsMessage}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
};

const inputComponent = ({inputRef, ...props}) => {
    return <div ref={inputRef} {...props}/>;
};

const Control = props => {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps
                }
            }}
            {...props.selectProps.textFieldProps}
        />
    );
};

const Option = props => {
    return (
        <MenuItem buttonRef={props.innerRef}
                  selected={props.isSelected}
                  component="div"
                  {...props.innerProps}
        >
            <ListItemText primary={props.label}/>
        </MenuItem>
    );
};

const Menu = props => {
    return (
        <Paper
            square
            className={props.selectProps.classes.paper}
            {...props.innerProps}
        >
            {props.children}
        </Paper>
    );
};

const Placeholder = props => {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
};

const SingleValue = props => (
    <ListItemText primary={props.data.label}/>
);

const ValueContainer = props => {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
};

const defaultComponents = {
    Control,
    Menu,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer
};

/*
   Set custom classes of component
 */
const getClasses = ({variant, color, classes: {root, disabled, expanded, defaultExpanded, ...dsClasses}}) => ({
    root: classnames(
        root,
        dsClasses[variant],
        dsClasses['color' + _.capitalize(color)]
    )
});

const SearchableSelect = ({variant, color, classes, components, ...props}) => {
    return (
        <Select classes={getClasses({variant, color, classes})}
                {...props}
                components={{...defaultComponents, ...components}}
        />
    );
};

SearchableSelect.propTypes = process.env.NODE_ENV !== 'production' ? {
    classes: PropTypes.object,

    isLoading: PropTypes.bool,

    defaultValue: PropTypes.object,

    options: PropTypes.array,

    /**
     * Apply custom components
     */
    components: PropTypes.object,

    filterOption: PropTypes.func,

    /**
     * If 'true' selected option can be cleaned up
     */
    isClearable: PropTypes.bool,

    /**
     * The string of placeholder
     */
    placeholder: PropTypes.string,

    onClose: PropTypes.func,

    onOpen: PropTypes.func,

    onChange: PropTypes.func,

    onInputChange: PropTypes.func

} : {};

export default withStyles(styles, {name: 'DsSearchableSelect'})(SearchableSelect);
