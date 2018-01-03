import React from 'react';
import {NodesTableViewMaterial} from './NodesTableViewMaterial'
import {ApolloProvider, graphql} from 'react-apollo';
import gql from "graphql-tag";
import * as _ from "lodash";
import {client, replaceFragmentsInDocument} from "@jahia/apollo-dx";

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

export { NodesTableData };
