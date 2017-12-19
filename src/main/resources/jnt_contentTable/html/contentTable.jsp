<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>


<jahia-npm-resource name="@jahia/react-dxcomponents"></jahia-npm-resource>
<script>
    Promise.all([System.import("react"), System.import("react-dom"), System.import("@jahia/react-dxcomponents")]).then(function(m) {
        var React = m[0];
        var ReactDOM = m[1];
        var dxComponents = m[2];
        var tableid = "table${fn:replace(currentNode.identifier,'-','_')}"
        var storeid = "${currentNode.properties['storeId'].string}";

        ReactDOM.render(React.createElement(dxComponents.NodesTable, {
            id : storeid,
            types: ['nt:base'],
            fragments: ["displayName"],
            variables: { lang:"${currentNode.session.locale}" },
            textRenderer: (node) => node.displayName
        }), document.getElementById(tableid));

    });
</script>

[Content table]
<div id="table${fn:replace(currentNode.identifier,'-','_')}" ></div>