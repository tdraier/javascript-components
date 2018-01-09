<%@ taglib prefix="react" uri="http://www.jahia.org/tags/react" %>
{
    getImports: () => ["${react:getPackage(currentNode.primaryNodeType.name)}"],
    createElement: (React, ReactDom, pack) => React.createElement(pack.${react:getImport(currentNode.primaryNodeType.name)})
}
