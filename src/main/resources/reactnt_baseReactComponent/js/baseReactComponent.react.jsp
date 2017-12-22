{
    getImports: () => ["${currentNode.properties['react:componentRequire'].string}"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.${currentNode.properties['react:componentExport'].string})
}