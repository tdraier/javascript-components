import {ApolloLink, from} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {print} from 'graphql';
import * as Observable from 'zen-observable';

const dxUploadLink = new ApolloLink(
    (operation, forward) => {
        let { operationName, variables, query, extensions, getContext, setContext } = operation;
        let fileFound = false;
        const formData  = new FormData();

        // search for File objects on the request and set it as formData
        Object.keys(variables).forEach(function(k) {
            let variable = variables[k];
            if (variable instanceof File) {
                const id = Math.random().toString(36);
                formData.append(id, variable);
                variables[k] = id;
                fileFound = true;
            }
        });
        if (fileFound) {
            setContext({
                fetchOptions: {formData: formData}
            });
        }

        return forward(operation);
    }
);

const dxHttpLink = (contextPath) => {
    return new HttpLink({
        uri: contextPath + '/modules/graphql',
        credentials: 'same-origin',
        fetch: (uri, fetcherOptions) => {
            if (fetcherOptions.formData) {
                let formData = fetcherOptions.formData;
                let body = JSON.parse(fetcherOptions.body);
                Object.keys(body).forEach(k=>formData.append(k, typeof body[k] === 'string' ? body[k] : JSON.stringify(body[k])));
                fetcherOptions.body = formData;
                delete fetcherOptions.headers["content-type"];
                return fetch(uri,fetcherOptions);
            }
            return fetch(uri,fetcherOptions);
        }
    });
};

const ssrLink = new ApolloLink(
    (operation, forward) => {
        let {operationName, variables, query, extensions, getContext, setContext} = operation;
        let res = gqlHelper.executeQuery(print(query), operationName, JSON.stringify(variables));
        return Observable.of(JSON.parse(res));
    }
);


// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('token');
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : null,
//         }
//     }
// });

export {dxUploadLink, dxHttpLink, ssrLink};