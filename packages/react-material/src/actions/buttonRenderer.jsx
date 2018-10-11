import {Button} from "@material-ui/core";
import React from "react";
import {I18n} from 'react-i18next';

let buttonRenderer = (buttonProps) => ({context}) => <I18n>
    {t => <Button data-sel-role={context.key} onClick={(e) => { e.stopPropagation(); context.onClick(context, e)}} {...buttonProps}>
        {t(context.buttonLabel)}
    </Button>}
</I18n>;

export {buttonRenderer};