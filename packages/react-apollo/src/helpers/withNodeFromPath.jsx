import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import * as _ from 'lodash';
import {replaceFragmentsInDocument} from '@jahia/apollo-dx';

function withNodeFromPath(fragments) {
    return ViewComponent => {
        // GraphQL maps
        let mapResultsToProps = ({data, ownProps}) => {
            let node;

            if (data.jcr && data.jcr.node) {
                node = data.jcr.node;
            }

            return {
                ...ownProps,
                node: node
            };
        };

        let mapPropsToOptions = props => {
            let vars = {
                path: props.path,
                workspace: props.workspace ? props.workspace : 'EDIT'
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
            query NodeQuery($path:String!, $workspace:Workspace!) {
                jcr(workspace:$workspace) {
                    workspace
                    node:nodeByPath(path: $path) {
                        workspace
                        path
                        uuid
                        ... node
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

export {withNodeFromPath};
