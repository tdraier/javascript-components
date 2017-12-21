<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>

<!-- TODO: Get this dynamically -->
<jahia-npm-resource name="@jahia/react-dxcomponents"></jahia-npm-resource>

<script>
    (function initReactComponent${fn:replace(currentNode.identifier,'-','_')}() {

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

<c:if test="${renderContext.editMode}">
    [React component ${currentNode.path}]
</c:if>

<div id="reactComponent${fn:replace(currentNode.identifier,'-','_')}" >loading ..</div>