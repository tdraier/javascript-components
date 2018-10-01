import * as React from 'react';

export type PickerFragments = string | {
    applyFor: string;
    variables?: string;
    gql: Object;
};

export interface PickerProps {
    /**
     * List of root paths for the picker
     */
    rootPaths: string[];
    /**
     * List of folder paths that are open by default (uncontrolled mode)
     */
    defaultOpenPaths?: string[];
    /**
     * List of node types that can be "opened" (folders)
     */
    openableTypes: string[];
    /**
     * List of open folders in controlled mode
     */
    openPaths?: string[];
    /**
     * List of node types that can be "selected" (items)
     */
    selectableTypes: string[];
    /**
     * Preselected items path (uncontrolled mode)
     */
    defaultSelectedPaths?: string[];
    /**
     * List of selected path in controlled mode
     */
    selectedPaths?: string[];
    /**
     * Callback when the selection has changed
     */
    onSelectionChange?: (...args: any[])=>any;
    /**
     * Component to use to do the full rendering of the tree. Should accept : pickerEntries,onSelectItem,onOpenItem . Other properties are passed through.
     */
    render?: (...args: any[])=>any;
    /**
     * Optional set of fragments to add to the graphQL query. Can be a string that identify a predefinedFragment or a fragment definition
     */
    fragments?: PickerFragments[];
    /**
     * Optional set of variable to pass to the graphQL query, in order to fulfill fragments needs
     */
    queryVariables?: Object;
    /**
     * Optional function which receives refetch function of the Query component when the component is strapped
     */
    setRefetch?: (...args: any[])=>any;
}

export class Picker extends React.Component<PickerProps, any> {
    render(): JSX.Element;

}

