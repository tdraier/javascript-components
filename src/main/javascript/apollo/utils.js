import gql from "react-apollo";

utils = {
    commonArgs: {
        id: 'String!',
        name: 'String!',
        path: 'String!',
        paths: '[String]!',
        lang: 'String!',
        query: 'String!'
    },

    predefinedFragments: {
        node: {
            displayName: gql`fragment NodeDisplayName on JCRNode {
                displayName(language:$lang)
            }`,
            allProperties: gql`fragment NodeAllProperties on JCRNode {
                properties(language:$lang) {
                    name,
                    value
                }
            }`,
            siteHomePage: gql`fragment NodeSiteHomePage on JCRNode {
                children(anyType:"jnt:page", properties:{key:"j:isHomePage", value:"true"}) {
                    path
                }
            }`
        },
        nodeType: {
            displayName: gql`fragment NodeTypeDisplayName on JCRNodeType {
                displayName(language:$lang)
            }`,
            subTypes: gql`fragment NodeTypeSubTypes on JCRNodeType {
                subTypes {
                    name
                    displayName(language:$lang)
                    abstract
                    mixin
                }
            }`
        }
    }
};

export default utils;