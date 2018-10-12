import React from 'react';
import {Menu, MenuItem} from "@material-ui/core";
import {I18n} from 'react-i18next';
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {DisplayActions} from "./DisplayActions";


let menuAction = composeActions(componentRendererAction, {
    init: (context) => {
        context.open = false;
        context.menuId = context.key;
        context.componentRenderer.render(context.menuId, <Menu id={'menu-'+context.key} open={false}
                                                      onClose={() => context.componentRenderer.setProps(context.menuId, {anchorEl: null, open:false})}>
            <DisplayActions target={context.menu} context={context.originalContext} render={
                ({context}) => <I18n>{ t => <MenuItem onClick={(e)=>context.onClick(context,e)}>
                    {t(context.buttonLabel)}
                </MenuItem>}</I18n>
            }/>
        </Menu>)
    },

    onDestroy(context) {
        if (context.menuId) {
            context.componentRenderer.destroy(context.menuId);
        }
    },

    onClick: (context, e) => {
        context.componentRenderer.setProps(context.menuId, {anchorEl:e.currentTarget, open: true});
    }
});


export { menuAction };