import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import * as _ from 'lodash';
import {replaceFragmentsInDocument} from '@jahia/apollo-dx';

function withNodesFromPath(fragments) {
    return ViewComponent => {
        // GraphQL maps
        let mapResultsToProps = ({data, ownProps}) => {
            let nodes = [];

            let jcr = data.jcr;

            if (jcr) {
                if (jcr.node) {
                    nodes = jcr.node.children.nodes;
                }
            }

            return {
                ...ownProps,
                nodes: nodes
            };
        };

        let mapPropsToOptions = props => {
            let vars = {
                path: props.path,
                types: props.types
            };
            if (props.queryVariables) {
                _.assign(vars, props.queryVariables);
            }

            return {
                variables: vars,
                skip: !props.path
            };
        };

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

        query = replaceFragmentsInDocument(query, fragments);

        return graphql(query, {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(ViewComponent);
    };
}

export {withNodesFromPath};
