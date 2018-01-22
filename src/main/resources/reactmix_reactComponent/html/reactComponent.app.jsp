<%@ page import="org.jahia.modules.react.ReactUtils" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="template" uri="http://www.jahia.org/tags/templateLib" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jcr" uri="http://www.jahia.org/tags/jcr" %>
<%@ taglib prefix="react" uri="http://www.jahia.org/tags/react" %>

<template:addResources type="javascript" resources="apps/${currentNode.primaryNodeType.localName}.js" />
<c:set var="targetId" value="reactComponent${fn:replace(currentNode.identifier,'-','_')}"/>

<div id="${targetId}" >loading ..</div>
<script type="text/javascript">
    contextJsParameters['mainResourceId'] = '${renderContext.mainResource.node.identifier}';
    contextJsParameters['mainResourcePath'] = '${renderContext.mainResource.node.path}';
    contextJsParameters['siteKey'] = '${renderContext.mainResource.node.resolveSite.name}';

    reactRender('${targetId}', "${currentNode.identifier}", contextJsParameters);
</script>
