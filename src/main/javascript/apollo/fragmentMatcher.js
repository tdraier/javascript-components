import { IntrospectionFragmentMatcher } from 'react-apollo';
const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: {
        __schema: {
            types: [
                {
                    "kind": "INTERFACE",
                    "name": "JCRNode",
                    "possibleTypes": [
                        {
                            "name": "JCRSite"
                        },
                        {
                            "name": "GenericJCRNode"
                        },
                        {
                            "name": "jnt__page"
                        }
                    ]
                }
            ],
        },
    }
})

export default fragmentMatcher;