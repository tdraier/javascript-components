{
    getImports: () => ["@jahia/react-dxcomponents", "@jahia/apollo-dx", "react-redux", "react-apollo"],
    createElement: (React, ReactDom, dxComponents, apolloDx, reactRedux, reactApollo) => React.createElement(reactRedux.Provider, {store:dxComponents.store},
        React.createElement(reactApollo.ApolloProvider, {client:apolloDx.client},
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
    )
}