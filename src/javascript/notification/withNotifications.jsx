import React from 'react';
import PropTypes from 'prop-types';

function withNotifications() {
    return (WrappedComponent) => {
        let Component = class extends React.Component {
            render() {
                return (<WrappedComponent notificationContext={this.context.notificationContext} {...this.props} />)
            }
        };

        Component.contextTypes = {
            notificationContext: PropTypes.object
        };

        return Component
    }
}

export { withNotifications }