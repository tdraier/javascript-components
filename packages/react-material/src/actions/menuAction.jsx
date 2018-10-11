import React from 'react';
import {Menu, MenuItem} from "@material-ui/core";
import {I18n} from 'react-i18next';
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {DisplayActions} from "./DisplayActions";


let menuAction = composeActions(componentRendererAction, {
    init: (context) => {
        context.open = false;
        context.component = <Menu id={'menu-'+context.key} open={false}
                                                      onClose={() => context.setComponentProps({anchorEl: null, open:false})}>
            <DisplayActions target={context.menu} context={context.originalContext} render={
                ({context}) => <I18n>{ t => <MenuItem onClick={(e)=>context.onClick(context,e)}>
                    {t(context.buttonLabel)}
                </MenuItem>}</I18n>
            }/>
        </Menu>
    },

    onClick: (context, e) => {
        context.setComponentProps({anchorEl:e.currentTarget, open: true});
    }
});


export { menuAction };