import * as React from 'react';

export interface NotificationProviderProps {
    notificationContext: Object;
}

export class NotificationProvider extends React.Component<NotificationProviderProps, any> {
    render(): JSX.Element;

}

export const withNotifications: React.SFC;
