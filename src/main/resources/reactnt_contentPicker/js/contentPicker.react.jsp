{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.DxContextProvider, {dxContext:contextJsParameters, mui:true, apollo:true, redux:true, i18n:true},
        React.createElement(dxComponents.withPickerModel(["displayName"], "${currentNode.properties['storeId'].string}")(dxComponents.PickerViewMaterial), {
            rootPaths: ["${currentNode.properties['rootPath'].string}"],
            openPaths: ["${currentNode.properties['rootPath'].string}"],
            openableTypes:['jnt:page','jnt:virtualsite','jnt:virtualsitesFolder'],
            selectableTypes:['jnt:page', 'jnt:content'],
            multipleSelection:false,
            queryVariables: { lang:"${currentNode.session.locale}" },
            textRenderer: (entry) => entry.node.displayName
        })
    )
}