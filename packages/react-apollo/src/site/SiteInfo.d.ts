import * as React from 'react';

export interface SiteInfoProps {

    /**
     * The site key to get the info from it
     */
    siteKey: string;

    /**
     * The display language for i18n names, titles, labels
     */
    displayLanguage: string;
}

export class SiteInfo extends React.Component<SiteInfoProps, any> {
    render(): JSX.Element;
}

