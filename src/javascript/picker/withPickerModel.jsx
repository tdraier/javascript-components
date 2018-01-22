import React from 'react';
import {graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {replaceFragmentsInDocument} from "@jahia/apollo-dx";
import {connect} from 'react-redux'
import {reducers, resetStateReducer, store} from "../reduxStore";

function withPickerModel(fragments, reduxStoreId) {


    return (ViewComponent) => {
        // GraphQL maps
        let mapResultsToProps = ({data, ownProps}) => {
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
        };

        let mapPropsToOptions = (props) => {
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
        };

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

        replaceFragmentsInDocument(query, fragments);

        let GraphQLComponent = graphql(query, {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(ViewComponent);


        if (reduxStoreId) {
            // Redux map
            let mapStateToProps = (state, ownProps) => {
                return {
                    ...ownProps,
                    openPaths: state["openPaths_" + reduxStoreId] ? state["openPaths_" + reduxStoreId] : ownProps.openPaths,
                    selectedPaths: state["selectedPaths_" + reduxStoreId] ? state["selectedPaths_" + reduxStoreId] : ownProps.selectedPaths
                }
            };

            let mapDispatchToProps = (dispatch, ownProps) => {
                return {
                    onSelectItem(path, select, multiple) {
                        dispatch({
                            type: select ? 'SELECT_PICKER_ENTRY_' + (multiple ? "MULTIPLE_" : "SINGLE_") + reduxStoreId : 'UNSELECT_PICKER_ENTRY_' + reduxStoreId,
                            path: path
                        })
                    },
                    onOpenItem(path, open) {
                        dispatch({
                            type: open ? 'OPEN_PICKER_ENTRY_' + reduxStoreId : 'CLOSE_PICKER_ENTRY_' + reduxStoreId,
                            path: path
                        })
                    }
                }
            };

            let ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(GraphQLComponent);

            return class extends React.Component {
                constructor(props) {
                    super(props);
                }

                componentWillMount() {
                    // Setup reducers
                    reducers["openPaths_" + reduxStoreId] = (state = this.props.openPaths || [], action) => {
                        let index = state.indexOf(action.path);
                        if (action.type === 'OPEN_PICKER_ENTRY_' + reduxStoreId && index === -1) {
                            return [
                                ...state,
                                action.path
                            ]
                        } else if (action.type === 'CLOSE_PICKER_ENTRY_' + reduxStoreId && index !== -1) {
                            return _.filter(state, (path) => path !== action.path);
                        }
                        return state;
                    };
                    reducers["selectedPaths_" + reduxStoreId] = (state = this.props.selectedPaths || [], action) => {
                        let index = state.indexOf(action.path);
                        if (action.type === 'SELECT_PICKER_ENTRY_MULTIPLE_' + reduxStoreId && index === -1) {
                            return [
                                ...state,
                                action.path
                            ]
                        } else if (action.type === 'SELECT_PICKER_ENTRY_SINGLE_' + reduxStoreId) {
                            return [action.path];
                        } else if (action.type === 'UNSELECT_PICKER_ENTRY_' + reduxStoreId && index !== -1) {
                            return _.filter(state, (path) => path !== action.path);
                        }
                        return state;
                    };
                }

                componentWillUnmount() {
                    reducers["openPaths_" + reduxStoreId] = resetStateReducer;
                    reducers["selectedPaths_" + reduxStoreId] = resetStateReducer;

                    store.dispatch({type: "RESET_STATE"});

                    delete reducers["openPaths_" + reduxStoreId];
                    delete reducers["selectedPaths_" + reduxStoreId];
                }

                render() {
                    return (<ConnectedComponent {...this.props}/>)
                }
            };
        } else {
            return class extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        openPaths: props.openPaths ? props.openPaths : [],
                        selectedPaths: props.selectedPaths ? props.selectedPaths : (props.selectedPath ? [props.selectedPath] : [])
                    };
                }

                onSelectItem(state, path, selected, multiple) {
                    this.setState({
                        openPaths: state.openPaths,
                        selectedPaths: selected ? [
                            ...(multiple ? state.selectedPaths : []),
                            path
                        ] : _.filter(state.selectedPaths, (thispath) => thispath !== path),
                    });
                }

                onOpenItem(state, path, open) {
                    this.setState({
                        openPaths: open ? [
                            ...state.openPaths,
                            path
                        ] : _.filter(state.openPaths, (thispath) => thispath !== path),
                        selectedPaths: state.selectedPaths
                    });
                }


                render() {
                    return <GraphQLComponent {...this.props}
                                             onOpenItem={this.onOpenItem.bind(this, this.state)}
                                             onSelectItem={this.onSelectItem.bind(this, this.state)}
                                             openPaths={this.state.openPaths}
                                             selectedPaths={this.state.selectedPaths}
                    />;
                }

            }
        }
    }
}

// PickerData.propTypes = {
//     /**
//      * List of root paths for the picker
//      */
//     rootPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
//
//     /**
//      * List of folder paths that are open
//      */
//     openPaths: PropTypes.arrayOf(PropTypes.string),
//
//     /**
//      * List of node types that can be "opened" (folders)
//      */
//     openableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
//
//     /**
//      * List of node types that can be "selected" (items)
//      */
//     selectableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
//
//     /**
//      * If the picker allows multiple selection
//      */
//     multipleSelection: PropTypes.bool,
//
//     /**
//      * Preselected item path (for single selection picker)
//      */
//     selectedPath: PropTypes.string,
//
//     /**
//      * Preselected items path (for multiple selection picker)
//      */
//     selectedPaths: PropTypes.arrayOf(PropTypes.string),
//
//     /**
//      * Render function for the label of the tree node. Takes a JCR node as parameter, returns the string to display
//      */
//     textRenderer: PropTypes.func,
//
//     /**
//      * Component to use to do the full rendering of the tree
//      */
//     renderComponent: PropTypes.element,
//
//     /**
//      * Optional set of fragments to add to the graphQL query. Can be a string that identify a predefinedFragment or a fragment definition
//      */
//     fragments: PropTypes.arrayOf(PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.shape({
//             applyFor: PropTypes.string.isRequired,
//             variables: PropTypes.string,
//             gql: PropTypes.object.isRequired
//         })
//     ])),
//
//     /**
//      * Optional set of variable to pass to the graphQL query, in order to fulfill fragments needs
//      */
//     variables: PropTypes.object
//
// };
//

export {withPickerModel};
