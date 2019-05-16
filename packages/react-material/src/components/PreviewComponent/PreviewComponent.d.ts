import * as React from 'react';

export interface PreviewComponentProps {
    classes: Object;
    t: (...args: any[])=>any;
    data: Object;
    workspace: string;
    fullScreen?: boolean;
}

export class PreviewComponent extends React.Component<PreviewComponentProps, any> {
    render(): JSX.Element;

}

