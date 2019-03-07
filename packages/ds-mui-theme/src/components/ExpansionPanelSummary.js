import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/* Wrapped component */
import {ExpansionPanelSummary as MuiExpansionPanelSummary, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = theme => ({
    root: {
        display: 'flex',
        minHeight: 8 * 6,
        padding: '0 24px 0 24px',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)',
        borderRadius: 1,
        '&:hover:not($disabled)': {
            cursor: 'pointer'
        },
        '&$expanded': {
            minHeight: 64
        },
        '&$focused': {
            boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.1)'
        },
        '&$disabled': {
            opacity: 0.38
        }
    },

    /* Styles applied to the root element if `expanded={true}`. */
    expanded: {},

    /* Styles applied to the root and children wrapper elements when focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the children wrapper element. */
    content: {
        display: 'flex',
        flexGrow: 1,
        margin: '12px 0',
        '& > :last-child': {
            paddingRight: 32
        },
        '&$expanded': {
            margin: '20px 0'
        }
    },

    /* Styles applied to the `IconButton` component when `expandIcon` is supplied. */
    expandIcon: {
        position: 'absolute',
        top: '50%',
        right: 8,
        transform: 'translateY(-50%) rotate(0deg)',
        '&:hover': {
            // Disable the hover effect for the IconButton,
            // because a hover effect should apply to the entire Expand button and
            // not only to the IconButton.
            backgroundColor: 'transparent'
        },
        '&$expanded': {
            transform: 'translateY(-50%) rotate(180deg)'
        }
    }
});

/*
   Set custom classes of component
 */
const getClasses = ({variant, classes: {root, ...dsClasses}}) => ({
    root: classnames(
        root,
        dsClasses[variant],
    )
});

/*
   Spread new classes into original component
 */
const ExpansionPanelSummary = withStyles(styles, {name: 'DsExpansionPanelSummary'})(
    ({variant, classes, ...props}) => (
        <MuiExpansionPanelSummary classes={getClasses({variant, classes})} {...props}/>
    )
);

/*
  Proptype of component
 */
ExpansionPanelSummary.propTypes = process.env.NODE_ENV !== 'production' ? {
    children: PropTypes.node,
    classes: PropTypes.object,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    expanded: PropTypes.bool,
    expandIcon: PropTypes.node,
    IconButtonProps: PropTypes.object,
    onChange: PropTypes.func,
    onClick: PropTypes.func

} : {};

/*
   Default Props
 */
ExpansionPanelSummary.defaultProps = {
    disabled: false
};

ExpansionPanelSummary.displayName = 'DsExpansionPanelSummary';
ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

export default ExpansionPanelSummary;
