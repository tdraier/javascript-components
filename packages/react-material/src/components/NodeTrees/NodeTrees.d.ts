import * as React from 'react';

export interface NodeTreesProps {
    closePath: (...args: any[])=>any;
    closeTree: (...args: any[])=>any;
    isOpen: boolean;
    lang: string;
    openPath: (...args: any[])=>any;
    openPaths: string[];
    path: string;
    setPath: (...args: any[])=>any;
    siteKey: string;
    nodeTreeConfigs: any[];
    setRefetch?: (...args: any[])=>any;
}

export class NodeTrees extends React.Component<NodeTreesProps, any> {
    render(): JSX.Element;
}