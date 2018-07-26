import {ApolloClient} from 'apollo-client';
import {from, split} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {getMainDefinition, toIdValue} from 'apollo-utilities';
import {fragmentMatcher} from "./fragmentMatcher";

import {dxHttpLink, dxSseLink, dxUploadLink, ssrLink} from "./links";

const client = function (options) {
    options = options || {};

    let ssrMode = (typeof window === 'undefined');

    // Map of path/uuid to be able to resolve cache key when we only have the path during cache resolving
    let idByPath = {};

    // get final cacke Key
    let getId = (workspace, uuid) => toIdValue(normalizeId(workspace, uuid));

    // get formated cache key
    let normalizeId = (workspace, uuid) => workspace + ":" + uuid;

    let dataIdFromObject = (data) => {
        // use dataIdFromObject() from the options if provided
        if (options.dataIdFromObject) {
            let r = options.dataIdFromObject(data);
            if (r) {
                return r;
            }
        }

        // in order to cache JCR node we need at least uuid and workspace fields
        if (data.uuid && data.workspace) {
            if (data.path) {
                // store key for path, in case queryNodeByPath is used in the future we can resolve the appropriate ID
                idByPath[data.path] = data.uuid;
            }
            return normalizeId(data.workspace, data.uuid);
        }

        // use default apollo cache key
        if (data.__typename && data.id) {
            return normalizeId(data.__typename, data.id)
        }
        return undefined;
    };

    let cacheResolvers = {
        JCRQuery: {
            nodeById: (_, args) => {
                if (_.workspace) {
                    return getId(_.workspace, args.uuid)
                }
            },
            nodesById: (_, args) => {
                if (_.workspace) {
                    return args.uuids.map(function (uuid) {
                        return getId(_.workspace, uuid);
                    })
                }
            },
            nodeByPath: (_, args) => {
                if (_.workspace && idByPath[args.path]) {
                    return getId(_.workspace, idByPath[args.path])
                }
            },
            nodesByPath: (_, args) => {
                if (_.workspace) {
                    let f = args.paths.map((path) => (idByPath[path] ? getId(_.workspace, idByPath[path]) : undefined));
                    return f.indexOf(undefined) !== -1 ? undefined : f;
                }
            }
        }
    };

    // add JCRNode cache resolvers:
    for (let typeName of fragmentMatcher.possibleTypesMap["JCRNode"]) {
        cacheResolvers[typeName] = {
            nodeInWorkspace: (_, args) => {
                if (_.uuid) {
                    return getId(args.workspace, _.uuid)
                }
            }
        }
    }

    if (options.cacheResolvers) {
        Object.assign(cacheResolvers, options.cacheResolvers);
    }

    let cache = new InMemoryCache({
        fragmentMatcher: fragmentMatcher,
        dataIdFromObject: dataIdFromObject,
        cacheResolvers: cacheResolvers
    });

    let sseLink = dxSseLink((options.contextPath ? options.contextPath : '')+'/modules/graphql');

    let httpLink = from([dxUploadLink, dxHttpLink(options.contextPath ? options.contextPath : '')]);

    let link = split(
        // split based on operation type
        ({ query }) => {
            const { kind, operation } = getMainDefinition(query);
            return kind === 'OperationDefinition' && operation === 'subscription';
        },
        sseLink,
        httpLink,
    );
    return new ApolloClient({
        link: !ssrMode ? (options.link ? options.link : link) : ssrLink,
        cache: cache,
        ssrMode: ssrMode
    });
};

export {client};
