import PickerView from './pickerView'
import {gql, graphql} from 'react-apollo';
import * as _ from "lodash";
import parseFragments from "../apollo/parseFragment";

function mapResultsToProps({ data, ownProps}) {

    let selectedPaths = ownProps.selectedPaths;
    let openPaths = ownProps.openPaths;

    let pickerEntries = [];
    let nodesById = {};

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
        };
        pickerEntries.splice(index, 0, pickerNode);
        nodesById[node.uuid] = pickerNode;
        return pickerNode;
    };

    if (data.rootNodes) {
        _.forEach(data.rootNodes, rootNode => {
            let root = addNode(rootNode, 0, 0);
            root.hidden = ownProps.hideRoot;
        });
    }
    if (data.openNodes) {
        _.sortBy(data.openNodes, ['path']).forEach((node) => {
            let parent = nodesById[node.uuid];
            if (parent) {
                let parentIndex = _.indexOf(pickerEntries, parent);
                _.forEachRight(node.children, (child) => {
                    addNode(child, parent.depth + 1, parentIndex + 1)
                })
            }
        });
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


function mapPropsToOptions(props) {
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

let componentCache = [];

function createPickerData(fragments, renderComponent) {

    let cacheMatch = _.find(componentCache, (f)=> JSON.stringify(f.fragments) === JSON.stringify(fragments) && f.renderComponent === renderComponent);

    if (cacheMatch) {
        return cacheMatch.dataComponent;
    }

    let parameterTypes = {
        rootPaths:'[String!]!',
        selectable:'[String]',
        openable:'[String]',
        openPaths:'[String!]!',
        types:'[String]'
    };


    let parsed = parseFragments(fragments, parameterTypes);
    let component = graphql(gql`
                query PickerQuery${parsed.parametersString} {
                    rootNodes:nodesByPath(paths: $rootPaths) {
                        path
                        uuid
                        name
                        selectable : isNodeType(anyType: $selectable)
                        openable : isNodeType(anyType: $openable)
                        ${parsed.fragmentSpread}
                    },
                    openNodes:nodesByPath(paths: $openPaths) {
                        path
                        uuid
                        children(anyType:$types) {
                            path
                            uuid
                            name
                            selectable : isNodeType(anyType: $selectable)
                            openable : isNodeType(anyType: $openable)
                            ${parsed.fragmentSpread}
                        }
                    }
                },
                ${parsed.aggregatedFragment}`,
        {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(renderComponent || PickerView);

    componentCache.push({fragments:fragments, renderComponent:renderComponent, dataComponent:component});

    return component;
}

export default createPickerData
