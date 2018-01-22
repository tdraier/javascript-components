{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: (React, ReactDom, dxComponents) => React.createElement(dxComponents.DxContextProvider, {dxContext: contextJsParameters, mui:true, apollo:true, redux:true, i18n:true},
        React.createElement(dxComponents.MutationExample)
    )
}