{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.DynamicComponentsList, {
        id : "${currentNode.properties['react:id'].string}"
    })
}