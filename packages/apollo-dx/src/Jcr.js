import gql from "graphql-tag";
import {replaceFragmentsInDocument} from "./parser";

class Jcr {
    constructor(apolloClient) {
        this.apolloClient = apolloClient;
    }

    executeQuery(query, mapResult, fragments, vars) {
        return new Promise((resolve, reject) => {

            replaceFragmentsInDocument(query, fragments);

            this.apolloClient.query({
                query: query,
                variables: vars
            })
                .then(result => resolve(mapResult(result)))
                .catch(error => reject(error));
        });
    }

    getNodeById(uuid, fragments, variables) {
        let vars = _.assign({
            uuid: uuid
        }, variables);

        let query = gql`
            query getNodeById($uuid:String!) {
                jcr {
                    workspace
                    nodeById(uuid:$uuid) {
                        workspace
                        uuid
                        name
                        path
                        ... node
                    }
                }
            }
        `;
        return this.executeQuery(query, (result) => result.data.jcr.nodeById, fragments, vars);
    }

    getNodeByPath(path, fragments, variables) {
        let vars = _.assign({
            path: path
        }, variables);

        let query = gql`
            query getNodeByPath($path:String!) {
                jcr {
                    workspace
                    nodeByPath(path:$path) {
                        workspace
                        uuid
                        name
                        path
                        ... node
                    }
                }
            }
        `;
        return this.executeQuery(query, (result) => result.data.jcr.nodeByPath, fragments, vars);
    }


    getNodesByPath(paths, fragments, variables) {
        let vars = _.assign({
            paths: paths
        }, variables);

        let query = gql`
            query getNodesByPath($paths:[String!]!) {
                jcr {
                    workspace
                    nodesByPath(paths:$paths) {
                        workspace
                        uuid
                        name
                        path
                        ... node
                    }
                }
            }
        `;
        return this.executeQuery(query, (result) => {
            debugger;
            return result.data.jcr.nodesByPath
        }, fragments, vars);
    }

}

export {Jcr};
