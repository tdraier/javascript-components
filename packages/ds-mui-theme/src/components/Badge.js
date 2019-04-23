import React from 'react';
import {Badge as MuiBadge, withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.brand.alpha,
        color: theme.palette.invert.beta,
        margin: '0 ' + theme.spacing.unit + 'px',
        '& svg': {
            width: 14,
            float: 'left'
        }
    },
    normal: {
        height: theme.spacing.unit * 2.75,
        minWidth: theme.spacing.unit * 2.75,
        borderRadius: theme.spacing.unit / 2,
        padding: 0 + ' 4px'
    },
    dot: {
        height: theme.spacing.unit,
        minWidth: theme.spacing.unit,
        borderRadius: '50%',
        '& > span': {
            display: 'none'
        }
    },
    circle: {
        height: theme.spacing.unit * 2.75,
        minWidth: theme.spacing.unit * 2.75,
        borderRadius: '50%'
    },
    positionInline: {
        display: 'inline-block'
    },
    positionRelative: {},
    colorPrimary: {
        backgroundColor: theme.palette.brand.alpha,
        color: theme.palette.invert.beta
    },
    colorInverted: {
        backgroundColor: theme.palette.invert.beta
    },
    colorValid: {
        backgroundColor: theme.palette.support.beta
    },
    colorWarning: {
        backgroundColor: theme.palette.support.gamma
    },
    colorDanger: {
        backgroundColor: theme.palette.support.delta
    },
    colorError: {
        backgroundColor: theme.palette.support.alpha
    },
    badge: {
        '& > span': {
            position: 'static',
            transform: 'none',
            fontSize: theme.spacing.unit * 1.5,
            fontWeight: 600
        }
    }
});

const getClasses = ({variant, color, position, classes: {root, badge, ...myClasses}}) => ({
    root: classnames(
        root,
        myClasses[variant],
        myClasses['color' + _.capitalize(color)],
        myClasses['position' + _.capitalize(position)],
    ),
    badge
});

const Badge = withStyles(styles, {name: 'DsBadge'})(
    ({variant, color, position, classes, icon, children, ...props}) => (
        <MuiBadge
            classes={getClasses({
                variant, color, position, classes
            })}
            {...props}
        >
            {children}
            {icon}
        </MuiBadge>
    ),
);

Badge.propTypes = process.env.NODE_ENV !== 'production' ? {
    icon: PropTypes.node,
    variant: PropTypes.oneOf(['normal', 'dot', 'circle'])
} : {};

Badge.defaultProps = {
    color: 'primary',
    variant: 'normal',
    position: 'inline'
};

Badge.displayName = 'DsBadge';

export default Badge;
