{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents, apolloDx, reactRedux, reactApollo) => React.createElement(reactRedux.Provider, {store:dxComponents.store},
        React.createElement(reactApollo.ApolloProvider, {client:apolloDx.client},
            React.createElement(dxComponents.withPathFromSelection("${currentNode.properties['storeId'].string}")(dxComponents.withNodesFromPath(["displayName"])(dxComponents.NodesTableViewMaterial)), {
                types: ['nt:base'],
                queryVariables: { lang:"${currentNode.session.locale}" },
                textRenderer: (node) => node.displayName
            })
        )
    )
}