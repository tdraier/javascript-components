import React from 'react';
import {Menu, MenuItem} from "@material-ui/core";
import {I18n} from 'react-i18next';
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {DisplayActions} from "./DisplayActions";

let menuAction = composeActions(componentRendererAction, {
    onClick: (context, e) => {
        let handler = context.renderComponent(<Menu id={'menu-' + context.id} anchorEl={e.currentTarget} open={true}
                                                        onClose={()=>handler.setProps({anchorEl:null, open:false})} onExited={()=>handler.destroy()}>
            <DisplayActions target={context.menu} context={context.originalContext} render={
                ({context}) => <I18n>{t => <MenuItem data-sel-role={context.key} onClick={(e) => { handler.setProps({open:false}); context.onClick(context, e); }}>
                    {t(context.buttonLabel)}
                </MenuItem>}</I18n>
            }/>
        </Menu>);
    }
});


export { menuAction };