var reactRender = require('@jahia/jsengine/reactRender.jsx').default;

exports.default = function (context) {
    var id = "picker" + context.currentNode.identifier.replaceAll('-','_');
    var rootPath = context.currentNode.getProperty('rootPath').getString();

    global.request = context.renderContext.request;

    return reactRender('@jahia/react-dxcomponents', 'Picker', 'react_' + context.currentNode.identifier.replaceAll('-','_'),
        {
            id: id,
            rootPaths: [rootPath],
            openPaths: [rootPath],
            openableTypes: ['nt:base'],
            selectableTypes: ['nt:base'],
            pickerType: "redux"
        }
    );
};
