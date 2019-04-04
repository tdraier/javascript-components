import {ApolloLink} from 'apollo-link';
import {HttpLink} from 'apollo-link-http';
import {print} from 'graphql';
import * as Observable from 'zen-observable';
import {BatchHttpLink} from 'apollo-link-batch-http';

const dxUploadLink = new ApolloLink(
    (operation, forward) => {
        let {variables, setContext} = operation;
        let fileFound = false;
        const formData = new FormData();

        // Search for File objects on the request and set it as formData
        Object.keys(variables).forEach(function (k) {
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

const dxHttpLink = (contextPath, batch, httpOptions) => {
    let Link = batch ? BatchHttpLink : HttpLink;
    return new Link({
        uri: contextPath + '/modules/graphql',
        credentials: 'same-origin',
        fetch: (uri, fetcherOptions) => {
            if (fetcherOptions.formData) {
                let formData = fetcherOptions.formData;
                let body = JSON.parse(fetcherOptions.body);
                if (Array.isArray(body)) {
                    formData.append('query', fetcherOptions.body);
                } else {
                    Object.keys(body).forEach(k => formData.append(k, typeof body[k] === 'string' ? body[k] : JSON.stringify(body[k])));
                }

                fetcherOptions.body = formData;
                delete fetcherOptions.headers['content-type'];
                return fetch(uri, fetcherOptions);
            }

            return fetch(uri, fetcherOptions);
        },
        ...httpOptions
    });
};

const dxSseLink = contextPath => {
    class Link extends ApolloLink {
        constructor(url) {
            super();
            this.url = url;
        }

        request(operation) {
            return new Observable(observer => {
                let options = Object.assign(operation, {query: print(operation.query)});
                const {query} = options;
                if (!query) {
                    throw new Error('Must provide `query` to subscribe.');
                }

                // If ((operationName && !isString(operationName)) || (variables && !isObject(variables))) {
                //     throw new Error('Incorrect option types to subscribe. `operationName` must be a string, and `variables` must be an object.');
                // }
                let subscribeUrl = this.url + '?query=' + encodeURIComponent(options.query) + '&operationName=' + encodeURIComponent(options.operationName) + '&variables=' + encodeURIComponent(JSON.stringify(options.variables));
                let evtSource = new EventSource(subscribeUrl);
                evtSource.onmessage = e => {
                    const message = JSON.parse(e.data);
                    observer.next(message);
                };

                evtSource.onerror = () => {
                    console.error('EventSource connection failed for subscription. Retry.');
                    if (evtSource) {
                        evtSource.close();
                    }
                };

                return () => evtSource.close();
            });
        }
    }
    return new Link(contextPath);
};

const ssrLink = new ApolloLink(
    operation => {
        let {operationName, variables, query} = operation;
        /* eslint-disable-next-line */
        let res = gqlHelper.executeQuery(print(query), operationName, JSON.stringify(variables));
        return Observable.of(JSON.parse(res));
    }
);

// Const authLink = setContext((_, { headers }) => {
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

export {dxUploadLink, dxHttpLink, ssrLink, dxSseLink};
