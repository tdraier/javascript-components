import React from 'react';
import {Menu, MenuItem} from "@material-ui/core";
import {I18n} from 'react-i18next';
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {DisplayActions} from "./DisplayActions";

let menuAction = composeActions(componentRendererAction, {
    init: (context) => {
        context.open = false;
    },

    onClick: (context, e) => {
        if (context.componentId) {
            context.setComponentProps({anchorEl:e.currentTarget, open: true});
        } else {
            context.renderComponent(<Menu id={'menu-' + context.id} anchorEl={e.currentTarget} open={true}
                                          onClose={() => context.setComponentProps({anchorEl: null, open: false})}>
                <DisplayActions target={context.menu} context={context.originalContext} render={
                    ({context}) => <I18n>{t => <MenuItem onClick={(e) => context.onClick(context, e)}>
                        {t(context.buttonLabel)}
                    </MenuItem>}</I18n>
                }/>
            </Menu>);
        }
    }
});


export { menuAction };