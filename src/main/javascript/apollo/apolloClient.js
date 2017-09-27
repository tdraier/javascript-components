import {ApolloClient, createNetworkInterface} from "react-apollo";
import fragmentMatcher from "./fragmentMatcher";

const client = function() {

    let networkInterface = createNetworkInterface({
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


    return new ApolloClient({
        fragmentMatcher: fragmentMatcher,
        networkInterface: networkInterface
    });
}();

export default client;
