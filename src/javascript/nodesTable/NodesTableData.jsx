import React from 'react';
import {NodesTableViewMaterial} from './NodesTableViewMaterial'
import {ApolloProvider, graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {client, replaceFragmentsInDocument} from "@jahia/apollo-dx";
import PropTypes from 'prop-types';

class NodesTableData extends React.Component {

    constructor(props) {
        super(props);
        this.componentCache = [];
    }

    mapResultsToProps({data, ownProps}) {
        let nodes = [];

        let jcr = data.jcr;

        if (jcr) {
            if (jcr.node) {
                nodes = jcr.node.children.nodes;
            }
        }

        return {
            ...ownProps,
            nodes: nodes,
        };
    }

    mapPropsToOptions(props) {
        let vars = {
            path: props.path,
            types: props.types,
        };
        if (props.variables) {
            _.assign(vars, props.variables);
        }

        return {
            variables: vars,
            skip: !props.path
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
                query NodesQuery($path:String!, $types:[String]!) {
                    jcr {
                        node:nodeByPath(path: $path) {
                            path
                            uuid
                            name
                            children(typesFilter:{types:$types}) {
                                nodes {
                                    path
                                    uuid
                                    name
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
            })(renderComponent || NodesTableViewMaterial);

            this.componentCache.push({fragments: fragments, renderComponent: renderComponent, dataComponent: Component});
        }

        return (<ApolloProvider  client={client}><Component {...this.props} /></ApolloProvider>);
    }
}

NodesTableData.propTypes = {
    /**
     * Path of the nodes to display
     */
    path: PropTypes.string.isRequired,

    /**
     * List of node types of nodes to display
     */
    types: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * Function that returns a <TableRow> component for the header
     */
    headers: PropTypes.func,

    /**
     * Function that returns a <TableRow> component for a row, takes a JCR node as parameter
     */
    row: PropTypes.func,

    /**
     * Render function for the label of the tree node. Takes a JCR node as parameter, returns the string to display
     */
    textRenderer: PropTypes.func,

    /**
     * Component to use to do the full rendering of the table
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

export { NodesTableData };
