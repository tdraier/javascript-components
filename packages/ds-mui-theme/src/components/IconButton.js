import React from 'react';
import * as _ from 'lodash';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import PropTypeConstants from './PropTypesConstants';
/* Wrapped component */
import {IconButton as MuiIconButton, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = theme => ({
    root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.delta.fontSize,
        padding: 7,
        margin: '0px ' + theme.spacing.unit + 'px',
        borderRadius: '50%',
        overflow: 'visible',
        color: theme.palette.font.alpha,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shortest
        }),
        '&:hover': {
            '@media (hover: none)': {
                backgroundColor: 'transparent'
            },
            '&$disabled': {
                backgroundColor: 'transparent'
            }
        },
        '&$disabled': {
            color: theme.palette.font.gamma
        }
    },
    normal: {
        backgroundColor: theme.palette.brand.alpha,
        color: theme.palette.invert.beta,
        '&:hover': {
            backgroundColor: theme.palette.brand.beta
        }
    },
    ghost: {
        backgroundColor: 'transparent'
    },
    colorDefault: {
        color: theme.palette.font.alpha
    },

    sizeCompact: {
        '&> span > svg': {
            fontSize: theme.typography.zeta.fontSize
        },
        padding: 6
    },

    sizeNormal: {
        '&> span > svg': {
            fontSize: theme.typography.delta.fontSize
        },
        padding: 7
    },

    label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit'
    },
    disableRipple: {}
});

/*
   Set custom classes of component
 */
const getClasses = ({variant, color, size, classes: {root, disableRipple, ...dsClasses}}) => ({
    root: classnames(
        root,
        dsClasses[variant],
        dsClasses['color' + _.capitalize(color)],
        dsClasses['size' + _.capitalize(size)]
    ),
    disableRipple
});

/*
   Spread new classes into original component
 */
const IconButton = withStyles(styles, {name: 'DsIconButton'})(
    ({variant, color, size, classes, ...props}) => (
        <MuiIconButton classes={getClasses({variant, color, size, classes})} {...props}/>
    )
);

/*
    Proptype of component
 */
IconButton.propTypes = process.env.NODE_ENV !== 'production' ? {
    /**
     * The icon element.
     */
    children: PropTypes.node,

    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details.
     */
    classes: PropTypes.object.isRequired,

    /**
     * @ignore
     */
    className: PropTypes.string,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypeConstants.IconButtonColors,

    /**
     * If `true`, the button will be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * If `true`, the ripple will be disabled.
     */
    disableRipple: PropTypes.bool,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    variant: PropTypeConstants.IconButtonVariants,

    /**
     * The size of the component
     */
    size: PropTypeConstants.IconButtonSizes

} : {};

/*

 */
IconButton.defaultProps = {
    align: undefined,
    classes: undefined,
    color: 'default',
    disabledRipple: false,
    disabled: false,
    variant: 'ghost',
    size: 'normal'
};

IconButton.displayName = 'DsIconButton';

export default IconButton;
