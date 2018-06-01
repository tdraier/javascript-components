import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {CacheResolverMap, IdGetter} from 'apollo-cache-inmemory'

export declare type ApolloDxClientOptions<TCacheShape> = {
    contextPath?: String;
    link?: ApolloLink;
    cacheResolver?: CacheResolverMap;
    dataIdFromObject?: IdGetter;
};


export function client(options: ApolloDxClientOptions): ApolloClient