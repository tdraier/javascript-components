import React from 'react';
import {withNotifications} from './NotificationProvider';
import PropTypes from 'prop-types';

class Notification extends React.Component {
    componentDidMount() {
        let {notificationContext, message, predefinedOptions, options} = this.props;
        if (message && notificationContext) {
            notificationContext.notify(message, predefinedOptions, options);
        }
    }

    render() {
        return false;
    }
}

Notification = withNotifications()(Notification);

Notification.propTypes = {
    message: PropTypes.string,
    predefinedOptions: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.object
};

export {Notification};
