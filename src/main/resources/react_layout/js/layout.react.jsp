<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>

<c:set var="children" value="${jcr:getChildrenOfType(currentNode, 'reactmix:reactComponent')}"/>
<c:if test="${fn:length(children) == 0}">
{
    getImports: () => ["@jahia/react-dxcomponents"],
    createElement: function(React, ReactDom, dxComponents) => React.createElement(dxComponents.TestLayout, {}, [])
}
</c:if>
<c:if test="${fn:length(children) > 0}">
{
    children: {<c:forEach items="${children}" var="child" varStatus="status">"${child.name}":<template:module editable="false" node="${child}" view="react"/>${!status.last ? ',':''}</c:forEach>},
    getImports: function() {
        let imports = ["@jahia/react-dxcomponents", "lodash"];
        Object.keys(this.children).forEach((k) => imports = imports.concat(this.children[k].getImports()));
        return imports
    },
    createElement: function(React, ReactDom, dxComponent, _, ...rest) {
        let props = _.mapValues(this.children, c => { let s = c.getImports().length; let r = c.createElement(React,ReactDom, ...rest); rest.splice(s); return r; })
        return React.createElement(dxComponent.TestLayout, props)
    }
}
</c:if>
