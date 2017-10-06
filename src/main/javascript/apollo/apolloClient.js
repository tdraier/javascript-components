import {ApolloClient, NetworkInterface, createNetworkInterface} from "react-apollo";
import fragmentMatcher from "./fragmentMatcher";
import { print } from 'graphql/language/printer';

const client = function() {
    let ssrMode = (typeof window === 'undefined');
    let networkInterface;

    if (!ssrMode) {
        networkInterface = createNetworkInterface({
            uri: contextJsParameters.contextPath + '/modules/graphql'
        });

        networkInterface.use([{
            applyMiddleware(req, next) {
                if (!req.options.headers) {
                    req.options.headers = {};  // Create the header object if needed.
                }
                // get the authentication token from local storage if it exists
                req.options.headers['Authorization'] = "Basic " + btoa("root:root1234");
                next();
            }
        }]);
    } else {
        class LocalNetworkInterface {
            query({query, variables, operationName, debugName}) {
                let helper = __.getInstance('org.jahia.modules.jsengine.impl.GQLHelper');
                let res = helper.executeQuery(print(query), operationName, JSON.stringify(variables));
                return Promise.resolve(JSON.parse(res));
            }
        }
        networkInterface = new LocalNetworkInterface();
    }

    return new ApolloClient({
        ssrMode: ssrMode,
        initialState: ssrMode ? undefined : window.__APOLLO_STATE__,
        fragmentMatcher: fragmentMatcher,
        networkInterface: networkInterface
    });
}();

export default client;
