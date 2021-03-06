import gql from 'graphql-tag';
import {PredefinedFragments} from '@jahia/apollo-dx';

export const previewQuery = gql`query previewQueryByWorkspace($path: String!, $templateType: String!, $view: String!, $contextConfiguration: String!, $language: String!, $workspace: Workspace!) {
    jcr(workspace: $workspace) {
        nodeByPath(path: $path) {
            id: uuid
            isFile: isNodeType(type: {types: ["jnt:file"]})
            path
            lastModified: property(name: "jcr:lastModified", language: $language) {
                value
            }
            renderedContent(templateType: $templateType, view: $view, contextConfiguration: $contextConfiguration, language: $language) {
                output
                staticAssets(type: "css") {
                    key
                }
            }
            ...NodeCacheRequiredFields
        }
    }
}${PredefinedFragments.nodeCacheRequiredFields.gql}`;
