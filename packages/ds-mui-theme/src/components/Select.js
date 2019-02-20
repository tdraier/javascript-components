import React from 'react';
import {Select as MuiSelect, withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import classnames from 'classnames';
import PropTypes from 'prop-types';

let styles = theme => ({
    root: {},
    disabled: {},
    normal: {},
    ghost: {},
    colorNormal: {
        color: 'red'
    },
    colorInverted: {
        color: 'blue'
    },
    sizeNormal: {},
    sizeCompact: {
        height: theme.unit * 3
    },
    noWrap: {},
    gutterBottom: {},
    paragraph: {}
});

const getClasses = ({variant, color, size, classes: {root, label, focusVisible, disabled, fullWidth, ...myClasses}}) => ({
    root: classnames(
        root,
        myClasses[variant],
        myClasses['color' + _.capitalize(color)],
        myClasses['size' + _.capitalize(size)]
    ),
    label,
    focusVisible,
    disabled,
    fullWidth
});

const Select = withStyles(styles, {name: 'DsButton'})(
    ({variant, color, size, classes, ...props}) => (
        <MuiSelect classes={getClasses({variant, color, size, classes})} {...props}/>
    )
);

Select.propTypes = process.env.NODE_ENV !== 'production' ? {

    /**
     * Applies the theme typography styles.
     * Use `body1` as the default value with the legacy implementation and `body2` with the new one.
     */
    variant: PropTypes.oneOf(['normal', 'ghost'])
} : {};

Select.defaultProps = {};

Select.displayName = 'DsSelect';

export default Select;
