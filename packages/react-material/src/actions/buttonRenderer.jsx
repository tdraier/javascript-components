import {Button} from "@material-ui/core";
import React from "react";
import {I18n} from 'react-i18next';

let buttonRenderer = (buttonProps, showIcon) => ({context}) => <I18n ns={context.buttonLabelNamespace}>
    {t => <Button data-sel-role={context.key} onClick={(e) => { e.stopPropagation(); context.onClick(context, e)}} {...buttonProps}>
        {showIcon && context.buttonIcon}
        <span dangerouslySetInnerHTML={{__html:t(context.buttonLabel, context.buttonLabelParams)}}/>
    </Button>}
</I18n>;

export {buttonRenderer};