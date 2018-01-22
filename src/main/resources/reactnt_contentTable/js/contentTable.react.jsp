{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.DxContextProvider, {dxContext:contextJsParameters, mui:true, apollo:true, redux:true, i18n:true},
        React.createElement(dxComponents.withPathFromSelection("${currentNode.properties['storeId'].string}")(dxComponents.withNodesFromPath(["displayName"])(dxComponents.NodesTableViewMaterial)), {
            types: ['nt:base'],
            queryVariables: { lang:"${currentNode.session.locale}" },
            textRenderer: (node) => node.displayName
        })
    )
}