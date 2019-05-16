import * as React from 'react';

export interface ContentPreviewProps {
    path: string;
    workspace: string;
    language: string;
    templateType: string;
    view: string;
    contextConfiguration: string;
    fullScreen: boolean;
    setRefetch?: (...args: any[])=>any;
    fetchPolicy?: string;
}

export const ContentPreview: React.SFC<ContentPreviewProps>;

