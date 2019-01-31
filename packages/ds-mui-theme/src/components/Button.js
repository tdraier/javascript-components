import React from 'react';
import {Button as MuiButton, withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import classnames from 'classnames';

let styles = theme => ({
    root: {},
    label: {},
    focusVisible: {},
    disabled: {},
    fullWidth: {},

    colorAlpha: {
        color: 'blue'
    },
    colorBeta: {
        color: 'red'
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
        myClasses['size' + _.capitalize(size)],
    ),
    label,
    focusVisible,
    disabled,
    fullWidth
});

const Button = withStyles(styles, {name: 'DsButton'})(
    ({variant, color, size, classes, ...props}) => (
        <MuiButton classes={getClasses({variant, color, size, classes})} {...props}/>
    )
);

Button.propTypes = process.env.NODE_ENV !== 'production' ? {
} : {};

Button.defaultProps = {
};

Button.displayName = 'DsButton';

export default Button;