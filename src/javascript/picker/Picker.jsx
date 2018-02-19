import React from 'react';
import {graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {replaceFragmentsInDocument} from "@jahia/apollo-dx";
import PropTypes from 'prop-types';

class Picker extends React.Component {

    constructor(props) {
        super(props);

        let query = gql`
            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {
                jcr {
                    rootNodes:nodesByPath(paths: $rootPaths) {
                        path
                        uuid
                        name
                        children(typesFilter:{types:$types}, limit:1) {
                            pageInfo {
                                totalCount
                            }
                        }
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
                                children(typesFilter:{types:$types}, limit:1) {
                                    pageInfo {
                                        totalCount
                                    }
                                }
                                selectable : isNodeType(type: {types:$selectable})
                                openable : isNodeType(type: {types:$openable})
                                ... node
                            }
                        }
                    }
                }
            }`;

        let { fragments, ...graphqlComponentProps } = props;

        replaceFragmentsInDocument(query, fragments);

        this.graphqlComponentProps = graphqlComponentProps;

        let state = {};
        let that = this;
        if (!props.openPaths) {
            state.openPaths = props.defaultOpenPaths ? _.clone(props.defaultOpenPaths) : [];
            graphqlComponentProps.onOpenItem = (path,open) => {
                that.setState( (prevState, props) => ({
                    openPaths: open ? [
                        ...prevState.openPaths,
                        path
                    ] : _.filter(prevState.openPaths, (thispath) => thispath !== path)
                }));
                if (props.onOpenItem) {
                    props.onOpenItem(path,open);
                }
            }
        }

        if (!props.selectedPaths) {
            state.selectedPaths = props.defaultSelectedPaths ? _.clone(props.defaultSelectedPaths) :  [];
            graphqlComponentProps.onSelectItem = (path,selected,multiple) => {
                that.setState((prevState, props)=> ({
                    selectedPaths: selected ? [
                        ...(multiple ? prevState.selectedPaths : []),
                            path
                        ] : _.filter(prevState.selectedPaths, (thispath) => thispath !== path)
                }));
                if (props.onSelectItem) {
                    props.onSelectItem(path,select,multiple);
                }
            }
        }
        this.state = state;

        this.GraphQLComponent = graphql(query, {
            props: this.mapResultsToProps,
            options: this.mapPropsToOptions
        })(this.props.render);
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (this.props.onSelectionChange && !_.isEqual(this.state.selectedPaths,prevState.selectedPaths)) {
            this.props.onSelectionChange(this.state.selectedPaths);
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        let { fragments, onOpenItem, onSelectItem, ...graphqlComponentProps } = nextProps;
        _.assign(this.graphqlComponentProps, graphqlComponentProps);
    }

    mapResultsToProps({data, ownProps}) {
        let selectedPaths = ownProps.selectedPaths;
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

        if (props.selectedPaths) {
            _.each(props.selectedPaths, path => fullyOpenPath(props, path));
        }

        let vars = {
            rootPaths: props.rootPaths,
            types: _.union(props.openableTypes, props.selectableTypes),
            selectable: props.selectableTypes,
            openable: props.openableTypes,
            openPaths: openPaths,
        };

        if (props.queryVariables) {
            _.assign(vars, props.queryVariables);
        }

        return {
            variables: vars
        }
    }

    render() {
        let GraphQLComponent = this.GraphQLComponent;

        return <GraphQLComponent {...this.graphqlComponentProps} {...this.state} />
    }
}

Picker.propTypes = {
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