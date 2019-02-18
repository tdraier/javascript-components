import React from 'react';
import {Badge as MuiBadge, withStyles} from '@material-ui/core';
import * as _ from 'lodash';
import classnames from 'classnames';

let styles = theme => ({
    root: {},
    topRight: {

    },
    inline: {

    },
    colorPrimary: {
        color: theme.palette.brand.alpha
    },
    colorInverted: {
        color: theme.palette.invert.beta
    }
});

const getClasses = ({variant, color, size, classes: {root, badge, invisible, ...myClasses}}) => ({
    root: classnames(
        root,
        myClasses[variant],
        myClasses['color' + _.capitalize(color)],
        myClasses['size' + _.capitalize(size)],
    ),
    badge,
    invisible
});

const Badge = withStyles(styles, {name: 'DsBadge'})(
    ({variant, color, size, classes, ...props}) => (
        <MuiBadge classes={getClasses({variant, color, size, classes})} {...props}/>
    )
);

Badge.propTypes = process.env.NODE_ENV !== 'production' ? {
    variant: PropTypes.oneOf(['topRight, inline'])
} : {};

Badge.defaultProps = {
};

Badge.displayName = 'DsBadge';

export default Badge;