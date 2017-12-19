import React from 'react';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {client, replaceFragmentsInDocument} from "@jahia/apollo-dx";
import {PickerViewMaterial} from './pickerViewMaterial'
import {PickerViewMaterialMultiple} from "./pickerViewMaterialMultiple";

class PickerData extends React.Component {

    componentCache = [];

    constructor(props) {
        super(props);
    }

    mapResultsToProps({data, ownProps}) {
        let selectedPaths = ownProps.multipleSelection ? ownProps.selectedPaths : [ownProps.selectedPath];
        let openPaths = ownProps.openPaths;

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
        let vars = {
            rootPaths: props.rootPaths,
            types: props.selectableTypes,
            selectable: props.selectableTypes,
            openable: props.openableTypes,
            openPaths: props.openPaths,
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
                                    openable : isNodeType(type: {types:$selectable})
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

export { PickerData };
