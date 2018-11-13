import {IconButton, Tooltip} from "@material-ui/core";
import {I18n} from 'react-i18next';
import React from "react";

let iconButtonRenderer = (buttonProps, propagateEvent) => ({context}) => {
    let button = <IconButton data-sel-role={context.key} onClick={(e) => {
        if (!propagateEvent) {
            e.stopPropagation();
        }
        context.onClick(context, e)} } {...buttonProps}>
        {context.buttonIcon}
    </IconButton>;

    if (context.buttonLabel) {
        return <I18n ns={context.buttonLabelNamespace}>
            {t => <Tooltip title={t(context.buttonLabel, context.buttonLabelParams)}>{button}</Tooltip>}
        </I18n>
    }

    return button;
};

export {iconButtonRenderer};