import {IconButton} from "@material-ui/core";
import React from "react";

let iconButtonRenderer = (buttonProps) => ({context}) => <IconButton data-sel-role={context.key} onClick={(e) => { e.stopPropagation(); context.onClick(context, e)} } {...buttonProps}>
    {context.buttonIcon}
</IconButton>;

export {iconButtonRenderer};