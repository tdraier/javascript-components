{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.NodesTable, {
        id : "${currentNode.properties['storeId'].string}",
        types: ['nt:base'],
        fragments: ["displayName"],
        variables: { lang:"${currentNode.session.locale}" },
        textRenderer: (node) => node.displayName
    })
}
