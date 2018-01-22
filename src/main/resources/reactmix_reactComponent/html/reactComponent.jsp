<%@ page import="org.jahia.modules.react.ReactUtils" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>
<%@ taglib prefix="react" uri="http://www.jahia.org/tags/react" %>

<jahia-npm-resource name="${react:getPackage(currentNode.primaryNodeType.name)}"></jahia-npm-resource>

<script>
    (function initReactComponent${fn:replace(currentNode.identifier,'-','_')}() {
        contextJsParameters['mainResourceId'] = '${renderContext.mainResource.node.identifier}';
        contextJsParameters['mainResourcePath'] = '${renderContext.mainResource.node.path}';
        contextJsParameters['siteKey'] = '${renderContext.mainResource.node.resolveSite.name}';

        let comp = <template:include view="react" templateType="js"/>;

        let imports = ["react", "react-dom"];
        if (comp.getImports) {
            imports = imports.concat(comp.getImports());
        }
        Promise.all(imports.map(n => System.import(n))).then(function(m) {
            var ReactDOM = m[1];
            var element = comp.createElement.apply(comp,m);

            var componentId = "reactComponent${fn:replace(currentNode.identifier,'-','_')}";
            ReactDOM.render(element, document.getElementById(componentId));
        });
    })();
</script>

<div id="reactComponent${fn:replace(currentNode.identifier,'-','_')}" >loading ..</div>