var reactRender = require('@jahia/jsengine/reactRender.jsx').default;

exports.default = function (context) {
    var id = "picker" + context.currentNode.identifier.replaceAll('-','_');
    var rootPath = context.currentNode.getProperty('rootPath').getString();

    return reactRender('@jahia/react-dxcomponents', 'PickerStandalone', 'react_' + context.currentNode.identifier.replaceAll('-','_'),
        {
            id: id,
            rootPaths: [rootPath],
            openPaths: [rootPath],
            openableTypes: ['nt:base'],
            selectableTypes: ['nt:base'],
            pickerType: "react"
        }
    );
};
