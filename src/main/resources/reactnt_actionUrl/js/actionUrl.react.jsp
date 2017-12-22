{
    getImports: () => ["material-ui", "material-ui-icons"],
    createElement: (React, ReactDom, materialUi, materialUiIcons) => React.createElement(materialUi.IconButton, { key:"${currentNode.identifier}" }, [ React.createElement(materialUiIcons.${currentNode.properties['icon'].string}, { key:"icon"}) ])
}
