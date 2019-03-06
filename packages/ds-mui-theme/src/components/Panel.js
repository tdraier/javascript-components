import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/* Wrapped component */
import {ExpansionPanel as MuiExpansionPanel, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = theme => ({
    root: {
        position: 'relative',
        '&:before': {
            position: 'absolute',
            left: 0,
            top: -1,
            right: 0,
            height: 1,
            content: '""',
            opacity: 1,
            backgroundColor: theme.palette.divider
        },
        '&:first-child': {
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
            '&:before': {
                display: 'none'
            }
        },
        '&$expanded + &': {
            '&:before': {
                display: 'none'
            }
        }
    },
    ghost: {

    },
    expanded: {
        margin: '16px 0',
        '&:first-child': {
            marginTop: 0
        },
        '&:last-child': {
            marginBottom: 0
        },
        '&:before': {
            opacity: 0
        }
    },

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {
        backgroundColor: theme.palette.action.disabledBackground
    }
});

/*
   Set custom classes of component
 */
const getClasses = ({variant, classes: {root, disabled, expanded, defaultExpanded, ...dsClasses}}) => ({
    root: classnames(
        root,
        dsClasses[variant],
    ),
    disabled,
    expanded
});

/*
   Spread new classes into original component
 */
const Panel = withStyles(styles, {name: 'DsPanel'})(
    ({variant, disabled, expanded, classes, ...props}) => (
        <MuiExpansionPanel classes={getClasses({variant, disabled, expanded, classes})} {...props}/>
    )
);

/*
  Proptype of component
 */
Panel.propTypes = process.env.NODE_ENV !== 'production' ? {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    CollapseProps: PropTypes.object,
    defaultExpanded: PropTypes.bool,
    disabled: PropTypes.bool,
    expanded: PropTypes.bool,
    onChange: PropTypes.func

} : {};

/*
   Default Props
 */
Panel.defaultProps = {
    defaultExpanded: false,
    disabled: false
};

Panel.displayName = 'DsPanel';

export default Panel;
