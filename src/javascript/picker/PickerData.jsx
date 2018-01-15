import React from 'react';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {client, replaceFragmentsInDocument} from "@jahia/apollo-dx";
import {PickerViewMaterial} from './PickerViewMaterial'
import {PickerViewMaterialMultiple} from "./PickerViewMaterialMultiple";
import PropTypes from 'prop-types';

class PickerData extends React.Component {

    constructor(props) {
        super(props);
        this.componentCache = [];
    }

    mapResultsToProps({data, ownProps}) {
        let selectedPaths = ownProps.multipleSelection ? ownProps.selectedPaths : [ownProps.selectedPath];
        let openPaths = ownProps.openPaths ? ownProps.openPaths : [];

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
                hidden: false
            };
            pickerEntries.splice(index, 0, pickerNode);
            nodesById[node.uuid] = pickerNode;
            return pickerNode;
        };

        if (jcr) {
            if (jcr.rootNodes) {
                _.forEach(jcr.rootNodes, rootNode => {
                    let root = addNode(rootNode, 0, 0);
                    root.hidden = ownProps.hideRoot;
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
        return {
            ...ownProps,
            pickerEntries: pickerEntries,
        };
    }

    mapPropsToOptions(props) {
        let openPaths = props.openPaths ? props.openPaths : [];

        let fullyOpenPath = (props, path) => {
            let rootFound = false;
            _.tail(_.split(path, "/")).reduce((acc, it) => {
                if (!rootFound) {
                    _.forEach(props.rootPaths, rootPath => {
                        rootFound = rootFound || _.startsWith(acc, rootPath);
                    })
                }
                if (rootFound && _.indexOf(openPaths, acc) === -1) {
                    openPaths.push(acc);
                }
                return acc + "/" + it
            }, "");
        };

        if (props.multipleSelection) {
            _.each(props.selectedPaths, path => fullyOpenPath(props, path));
        } else {
            fullyOpenPath(props, props.selectedPath);
        }

        let vars = {
            rootPaths: props.rootPaths,
            types: _.union(props.openableTypes, props.selectableTypes),
            selectable: props.selectableTypes,
            openable: props.openableTypes,
            openPaths: openPaths,
        };
        if (props.variables) {
            _.assign(vars, props.variables);
        }

        return {
            variables: vars
        }
    }

    render() {
        let fragments = this.props.fragments;
        let renderComponent = this.props.renderComponent;

        let cacheMatch = _.find(this.componentCache, (f) => JSON.stringify(f.fragments) === JSON.stringify(fragments) && f.renderComponent === renderComponent);
        let Component;
        if (cacheMatch) {
            Component = cacheMatch.dataComponent;
        } else {
            let query = gql`
                query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {
                    jcr {
                        rootNodes:nodesByPath(paths: $rootPaths) {
                            path
                            uuid
                            name
                            selectable : isNodeType(type: {types:$selectable})
                            openable : isNodeType(type: {types:$openable})
                            ... node
                        },
                        openNodes:nodesByPath(paths: $openPaths) {
                            path
                            uuid
                            children(typesFilter:{types:$types}) {
                                nodes {
                                    path
                                    uuid
                                    name
                                    selectable : isNodeType(type: {types:$selectable})
                                    openable : isNodeType(type: {types:$openable})
                                    ... node
                                }
                            }
                        }
                    }
                }`;

            replaceFragmentsInDocument(query, fragments);

            Component = graphql(query, {
                props: this.mapResultsToProps,
                options: this.mapPropsToOptions
            })(renderComponent || this.props.multipleSelection ? PickerViewMaterialMultiple : PickerViewMaterial);

            this.componentCache.push({fragments: fragments, renderComponent: renderComponent, dataComponent: Component});
        }

        return (<ApolloProvider  client={client}><Component {...this.props} /></ApolloProvider>);
    }
}

PickerData.propTypes = {
    /**
     * List of root paths for the picker
     */
    rootPaths: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of folder paths that are open
     */
    openPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of node types that can be "opened" (folders)
     */
    openableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of node types that can be "selected" (items)
     */
    selectableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * If the picker allows multiple selection
     */
    multipleSelection: PropTypes.bool,

    /**
     * Preselected item path (for single selection picker)
     */
    selectedPath: PropTypes.string,

    /**
     * Preselected items path (for multiple selection picker)
     */
    selectedPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * Render function for the label of the tree node. Takes a JCR node as parameter, returns the string to display
     */
    textRenderer: PropTypes.func,

    /**
     * Component to use to do the full rendering of the tree
     */
    renderComponent: PropTypes.element,

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
    variables: PropTypes.object

};

export { PickerData };
