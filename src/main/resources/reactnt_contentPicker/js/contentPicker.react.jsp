{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.DxContextProvider, {dxContext:contextJsParameters, mui:true, apollo:true, i18n:true},
        React.createElement(dxComponents.Picker, {
            fragments: ["displayName"],
            render: dxComponents.PickerViewMaterial,
            rootPaths: ["${currentNode.properties['rootPath'].string}"],
            defaultOpenPaths: ["${currentNode.properties['rootPath'].string}"],
            openableTypes:['jnt:page','jnt:virtualsite','jnt:virtualsitesFolder'],
            selectableTypes:['jnt:page', 'jnt:content'],
            queryVariables: { lang:"${currentNode.session.locale}" },
            textRenderer: (entry) => entry.node.displayName,
            onSelectionChange: (selection) => { console.log(selection) }
        })
    )
}