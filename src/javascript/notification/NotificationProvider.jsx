import React from 'react';
import PropTypes from 'prop-types';
import { Component } from "react";
import {Snackbar} from "material-ui";

class NotificationProvider extends Component {
    constructor(props) {
        super(props);

        let {notificationContext} = this.props;

        this.state = {
            notification: {
                message: "",
                open: false
            }
        };

        notificationContext.notify = (message) => {
            this.setState({
                notification: {
                    message: message,
                    open:true
                }
            });
        };

        notificationContext.closeNotification = () => {
            this.setState({
                notification: {
                    message: '',
                    open: false
                }
            });
        };
    }

    getChildContext() {
        return {
            notificationContext: this.props.notificationContext
        };
    }

    render() {
        // TODO make it configurable
        return <div>
            {this.props.children}

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                autoHideDuration={5000}
                onClose={this.props.notificationContext.closeNotification}
                open={this.state.notification.open}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{this.state.notification.message}</span>}
            />
        </div>;
    }
}

NotificationProvider.propTypes = {
    notificationContext: PropTypes.object.isRequired
};

NotificationProvider.childContextTypes = {
    notificationContext: PropTypes.object.isRequired
};

export {NotificationProvider}