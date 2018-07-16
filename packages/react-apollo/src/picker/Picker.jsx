import React from 'react';
import {Query} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {PredefinedFragments, replaceFragmentsInDocument} from "@jahia/apollo-dx";
import PropTypes from 'prop-types';

class Picker extends React.Component {

    constructor(props) {
        super(props);

        let {
            fragments, rootPaths, queryVariables, hideRoot,
            openableTypes,
            onOpenItem,
            onSelectItem,
            selectableTypes,
            openPaths,
            selectedPaths,
            defaultSelectedPaths,
            onSelectionChange,
            defaultOpenPaths
        } = props;

        this.query = gql`
            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {
                jcr {
                    rootNodes:nodesByPath(paths: $rootPaths) {
                        name
                        children(typesFilter:{types:$types}, limit:1) {
                            pageInfo {
                                totalCount
                            }
                        }
                        selectable : isNodeType(type: {types:$selectable})
                        openable : isNodeType(type: {types:$openable})
                        ... NodeCacheRequiredFields
                        ... node
                    },
                    openNodes:nodesByPath(paths: $openPaths) {
                        ... NodeCacheRequiredFields
                        children(typesFilter:{types:$types}) {
                            nodes {
                                name
                                children(typesFilter:{types:$types}, limit:1) {
                                    pageInfo {
                                        totalCount
                                    }
                                }
                                selectable : isNodeType(type: {types:$selectable})
                                openable : isNodeType(type: {types:$openable})
                                ... NodeCacheRequiredFields
                                ... node
                            }
                        }
                    }
                }
            }
        ${PredefinedFragments.nodeCacheRequiredFields.gql}`;

        replaceFragmentsInDocument(this.query, fragments);

        let state = {};

        this.eventsHandlers = {};

        if (openPaths == null) {
            // Uncontrolled mode
            state.isOpenControlled = false;
            state.openPaths = defaultOpenPaths ? _.clone(defaultOpenPaths) : [];
            this.eventsHandlers.onOpenItem = (path, open) => {
                this.setState((prevState) => ({
                    openPaths: open ?
                        [...prevState.openPaths, path] :
                        _.filter(prevState.openPaths, (thispath) => thispath !== path)
                }));
            };
        } else {
            state.isOpenControlled = true;
            if (onOpenItem) {
                this.eventsHandlers.onOpenItem = onOpenItem;
            }
        }

        if (selectedPaths == null) {
            // Uncontrolled mode
            state.isSelectControlled = false;
            state.selectedPaths = defaultSelectedPaths ? _.clone(defaultSelectedPaths) : [];
            this.eventsHandlers.onSelectItem = (path, selected, multiple) => {
                this.setState((prevState) => {
                    let newSelectedPaths = selected ?
                        [...(multiple ? prevState.selectedPaths : []), path] :
                        _.filter(prevState.selectedPaths, (thispath) => thispath !== path);
                    onSelectionChange(newSelectedPaths);
                    return {
                        selectedPaths: newSelectedPaths
                    };
                });
            };
        } else if (onSelectItem) {
            state.isSelectControlled = true;
            if (onSelectItem) {
                this.eventsHandlers.onSelectItem = onSelectItem;
            }
        }

        this.state = state;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if ((prevState.isOpenControlled !== (nextProps.openPaths != null)) || (prevState.isSelectControlled !== (nextProps.selectedPaths != null))) {
            console.warn("Cannot change between controlled/uncontrolled modes");
        }

        let newState = {};

        if (prevState.isOpenControlled && !_.eq(nextProps.openPaths, prevState.openPaths)) {
            newState.openPaths = nextProps.openPaths;
        }

        if (prevState.isSelectControlled && !_.eq(nextProps.selectedPaths, prevState.selectedPaths)) {
            newState.selectedPaths = nextProps.selectedPaths;
        }
        if (newState.openPaths || newState.selectedPaths) {
            return newState;
        }
        return null
    }

    getVariables(selectedPaths, openPaths) {
        let {rootPaths, openableTypes, selectableTypes, queryVariables} = this.props;

        let vars = {
            rootPaths: rootPaths,
            types: _.union(openableTypes, selectableTypes),
            selectable: selectableTypes,
            openable: openableTypes,
            openPaths: openPaths,
        };

        if (queryVariables) {
            _.assign(vars, queryVariables);
        }

        return vars;
    }

    getPickerEntries(data, selectedPaths, openPaths) {
        let pickerEntries = [];
        let nodesById = {};
        let jcr = data.jcr;

        let addNode = function (node, depth, index) {
            let selected = false;
            if (node.selectable) {
                selected = _.indexOf(selectedPaths, node.path) !== -1
            }
            let pickerNode = {
                name: node.name,
                path: node.path,
                open: node.openable && _.indexOf(openPaths, node.path) !== -1,
                selected: selected,
                openable: node.openable,
                selectable: node.selectable,
                depth: depth,
                prefix: _.repeat("&nbsp;", depth * 3),
                node: node,
                hidden: false,
                hasChildren: node.children.pageInfo.totalCount > 0
            };
            pickerEntries.splice(index, 0, pickerNode);
            nodesById[node.uuid] = pickerNode;
            return pickerNode;
        };

        if (jcr) {
            if (jcr.rootNodes) {
                _.forEach(jcr.rootNodes, rootNode => {
                    let root = addNode(rootNode, 0, 0);
                    root.hidden = this.props.hideRoot;
                });
            }
            if (jcr.openNodes) {
                _.sortBy(jcr.openNodes, ['path']).forEach((node) => {
                    let parent = nodesById[node.uuid];
                    if (parent) {
                        let parentIndex = _.indexOf(pickerEntries, parent);
                        _.forEachRight(node.children.nodes, (child) => {
                            addNode(child, parent.depth + 1, parentIndex + 1)
                        })
                    }
                });
            }
        }

        // Nodes loaded, fill selection list
        let selectedNodes = _.filter(pickerEntries, (node) => {
            return node.selected
        }).map((node) => {
            return node.node
        });

        selectedPaths = _.map(selectedNodes, "path");
        pickerEntries = _.filter(pickerEntries, pickerNode => {
            return !pickerNode.hidden;
        });

        return pickerEntries;
    }

    render() {
        let selectedPaths = this.state.selectedPaths ? this.state.selectedPaths : this.props.selectedPaths;
        let openPaths = this.state.openPaths ? this.state.openPaths : this.props.openPaths;
        let {rootPaths, openableTypes, selectableTypes, queryVariables, openSelection} = this.props;

        openPaths = _.clone(openPaths);
        let fullyOpenPath = (path) => {
            let rootFound = false;
            _.tail(_.split(path, "/")).reduce((acc, it) => {
                if (!rootFound) {
                    _.forEach(rootPaths, rootPath => {
                        rootFound = rootFound || _.startsWith(acc, rootPath);
                    })
                }
                if (rootFound && _.indexOf(openPaths, acc) === -1) {
                    openPaths.push(acc);
                }
                return acc + "/" + it
            }, "");
        };

        _.each(selectedPaths, path => openSelection && fullyOpenPath(path));

        let vars = this.getVariables(selectedPaths, openPaths);

        return <Query query={this.query} variables={vars} fetchPolicy={"cache-first"} >
            {
                ({error, loading, data}) => {
                    let renderProp = this.props.children;
                    if (this.props.onLoading) {
                        this.props.onLoading(loading);
                    }
                    if (loading) {
                        if (this.previousEntries) {
                            return renderProp({pickerEntries:this.previousEntries, loading, ...this.eventsHandlers});
                        } else {
                            return renderProp({pickerEntries:[], loading, ...this.eventsHandlers});
                        }
                    }
                    if (error) return `Error! ${error.message}`;
                    let pickerEntries = this.getPickerEntries(data, selectedPaths, openPaths);
                    this.previousEntries = pickerEntries;

                    return renderProp({pickerEntries, loading, ...this.eventsHandlers});
                }
            }
        </Query>
    }

}

Picker.defaultProps = {
    openSelection: true
}

Picker.propTypes = {

    /**
     * If true (default value), opens the tree of the current selection.
     */
    openSelection: PropTypes.bool,
    /**
     * List of root paths for the picker
     */
    rootPaths: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of folder paths that are open by default (uncontrolled mode)
     */
    defaultOpenPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of node types that can be "opened" (folders)
     */
    openableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of open folders in controlled mode
     */
    openPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of node types that can be "selected" (items)
     */
    selectableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * Preselected items path (uncontrolled mode)
     */
    defaultSelectedPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of selected path in controlled mode
     */
    selectedPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * Callback when the selection has changed
     */
    onSelectionChange: PropTypes.func,

    /**
     * Component to use to do the full rendering of the tree. Should accept : pickerEntries,onSelectItem,onOpenItem . Other properties are passed through.
     */
    render: PropTypes.func,

    /**
     * Optional set of fragments to add to the graphQL query. Can be a string that identify a predefinedFragment or a fragment definition
     */
    fragments: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            applyFor: PropTypes.string.isRequired,
            variables: PropTypes.string,
            gql: PropTypes.object.isRequired
        })
    ])),

    /**
     * Optional set of variable to pass to the graphQL query, in order to fulfill fragments needs
     */
    queryVariables: PropTypes.object

};


export {Picker}
