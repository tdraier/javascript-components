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
    child: <c:forEach items="${children}" var="child" begin="0" end="0"><template:module node="${child}" view="react"/></c:forEach>,
    getImports: function() { return ["@jahia/react-dxcomponents"].concat(this.child.getImports()) },
    createElement: function(React, ReactDom, dxComponent, ...rest) { return React.createElement(dxComponent.TestLayout, {}, [this.child.createElement(React, ReactDom, ...rest)]) }
}
</c:if>
