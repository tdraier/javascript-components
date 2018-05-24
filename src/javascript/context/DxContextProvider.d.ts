import * as React from 'react';

export type DxContextProviderI18n = boolean | Object;

export type DxContextProviderRouter = boolean | Object;

export type DxContextProviderApolloClient = boolean | Object;

export type DxContextProviderMui = boolean | Object;

export interface DxContextProviderProps {
    i18n?: DxContextProviderI18n;
    router?: DxContextProviderRouter;
    apolloClient?: DxContextProviderApolloClient;
    mui?: DxContextProviderMui;
    children: React.ReactElement<any>;
}

export class DxContextProvider extends React.Component<DxContextProviderProps, any> {
    render(): JSX.Element;

}

