import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
/* Wrapped component */
import {ExpansionPanelDetails as MuiExpansionPanelDetails, withStyles} from '@material-ui/core';

/* Styles applied in the component.
* root: the style of the component itself
* attributeValue: when an attribute is set
*/
let styles = () => ({
    root: {
        display: 'flex',
        padding: '8px 24px 24px'
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
const PanelDetails = withStyles(styles, {name: 'DsPanelDetails'})(
    ({variant, disabled, expanded, classes, ...props}) => (
        <MuiExpansionPanelDetails classes={getClasses({variant, disabled, expanded, classes})} {...props}/>
    )
);

/*
  Proptype of component
 */
PanelDetails.propTypes = process.env.NODE_ENV !== 'production' ? {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
} : {};

/*
   Default Props
 */
PanelDetails.defaultProps = {
};

PanelDetails.displayName = 'DsPanelDetails';

export default PanelDetails;
