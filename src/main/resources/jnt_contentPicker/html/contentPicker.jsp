<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<jahia-npm-resource name="@jahia/content-picker"></jahia-npm-resource>

<script>
    System.import('@jahia/content-picker/picker/index').then(function (picker) {
        picker.mount(document.getElementById("picker${fn:replace(currentNode.identifier,'-','_')}"), {
            id : "picker${fn:replace(currentNode.identifier,'-','_')}",
            rootPaths: ["${currentNode.properties['rootPath'].string}"],
            openableTypes: ['nt:base'],
            selectableTypes: ['nt:base'],
            alternativeRender: true,
            alternativeRowRender: true,
            fragments:true,
            pickerType: "redux"
        });
    })
</script>

<div id="picker${fn:replace(currentNode.identifier,'-','_')}" ></div>