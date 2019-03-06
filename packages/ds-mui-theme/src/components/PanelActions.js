import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/* Wrapped component */
import {ExpansionPanelActions as MuiExpansionPanelActions, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = () => ({
    /* Styles applied to the root element. */
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '16px 8px'
    },

    /* Styles applied to the children. */
    action: {
        marginLeft: 8
    }
});

/*
   Set custom classes of component
 */
const getClasses = ({variant, classes: {root, action, ...dsClasses}}) => ({
    root: classnames(
        root,
        action,
        dsClasses[variant],
    )
});

/*
   Spread new classes into original component
 */
const PanelActions = withStyles(styles, {name: 'DsPanelActions'})(
    ({variant, classes,action, ...props}) => (
        <MuiExpansionPanelActions classes={getClasses({variant, action, classes})} {...props}/>
    )
);

/*
  Proptype of component
 */
PanelActions.propTypes = process.env.NODE_ENV !== 'production' ? {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
} : {};

/*
   Default Props
 */
PanelActions.defaultProps = {
    enumerable: true
};

PanelActions.displayName = 'DsPanelActions';

export default PanelActions;
