{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.RouterExample, {
        id : "${currentNode.properties['outletId'].string}"
    })
}
