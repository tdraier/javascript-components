{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.Picker, {
        id : "${currentNode.properties['storeId'].string}",
        rootPaths: ["${currentNode.properties['rootPath'].string}"],
        openPaths: ["${currentNode.properties['rootPath'].string}"],
        openableTypes:['jnt:page','jnt:virtualsite','jnt:virtualsitesFolder'],
        selectableTypes:['jnt:page', 'jnt:content'],
        pickerType: "redux",
        multipleSelection:false,
        fragments: ["displayName"],
        variables: { lang:"${currentNode.session.locale}" },
        textRenderer: (entry) => entry.node.displayName
    })
}