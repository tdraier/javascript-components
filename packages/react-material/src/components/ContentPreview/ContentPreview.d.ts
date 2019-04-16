import * as React from 'react';

export interface ContentPreviewProps {
    classes: Object;
    path: string;
    workspace: string;
    language: string;
    templateType: string;
    view: string;
    contextConfiguration: string;
    fullScreen: boolean;
}

export class ContentPreview extends React.Component<ContentPreviewProps, any> {
    render(): JSX.Element;

}

