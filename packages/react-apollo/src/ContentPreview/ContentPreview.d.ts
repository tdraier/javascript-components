import * as React from 'react';

export interface ContentPreviewProps {
    children: (...args: any[])=>any;
    path: string;
    workspace: string;
    language: string;
    templateType: string;
    view: string;
    contextConfiguration: string;
    setRefetch?: (...args: any[])=>any;
    fetchPolicy?: string;
}

export const ContentPreview: React.SFC<ContentPreviewProps>;

