import PropTypes from 'prop-types';
import React from 'react';
import {List} from '@material-ui/core';
import LeftDrawerListItems from './LeftDrawerListItems';

export const LeftDrawerContent = ({context, actionPath}) => (
    <List>
        <LeftDrawerListItems context={context} actionPath={actionPath}/>
    </List>
);

LeftDrawerContent.propTypes = {
    actionPath: PropTypes.string.isRequired,
    context: PropTypes.object.isRequired
};

export default LeftDrawerContent;
