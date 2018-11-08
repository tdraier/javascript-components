import React from 'react';
import {Menu, MenuItem, ModalManager} from "@material-ui/core";
import {I18n} from 'react-i18next';
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {DisplayActions} from "./DisplayActions";
import {withStylesAction} from "./withStylesAction";
import {ArrowRight} from "@material-ui/icons"

let styles = {
    modalRoot: {
        pointerEvents:'none',
    },
    paperRoot: {
        pointerEvents:'initial'
    }
};


let display = (context, anchor) => {
    // Disable backdrop for sub menus, click through to main menu backdrop
    let subMenuProps = (context.parent) ? {
        ModalClasses:{root:context.classes.modalRoot},
        classes:{paper:context.classes.paperRoot},
        disableEnforceFocus:true,
        manager:new ModalManager({hideSiblingNodes:false})
    } : {};
    context.currentMenuHandler = context.renderComponent(<Menu id={'menu-' + context.id} {...anchor} open={true}
                                                onClose={()=> {
                                                    context.currentMenuHandler.setProps({anchorEl:null, open:false})
                                                }}
                                                onExit={()=> {
                                                    if (context.onExit) {
                                                        context.onExit(context);
                                                    }
                                                    // Close sub menu if they exist
                                                    if (context.currentOpenSubmenuContext) {
                                                        context.currentOpenSubmenuContext.currentMenuHandler.setProps({'open':false});
                                                    }
                                                }}
                                                onExited={()=> {
                                                    // Free resources after exit
                                                    context.currentMenuHandler.destroy();
                                                }}
                                                onMouseEnter={() => context.mouseInMenu=true}
                                                onMouseLeave={() => context.mouseInMenu=false}
                                                {...subMenuProps}
    >
        <DisplayActions target={context.menu} context={{...context.originalContext, parent:context}} render={
            ({context}) => <I18n>{t => <MenuItem data-sel-role={context.key}
                                                 onClick={(e) => {
                                                     // First close all menu by closing main menu
                                                     let rootContext = context;
                                                     while (rootContext.parent && rootContext.parent.currentMenuHandler) {
                                                         rootContext = rootContext.parent;
                                                     }
                                                     rootContext.currentMenuHandler.setProps({open:false});
                                                     // Send click event
                                                     context.onClick(context, e);
                                                 }}
                                                 onMouseEnter={(e) => {
                                                     // If a submenu was open, close it
                                                     if (context.parent.currentOpenSubmenuContext) {
                                                         context.parent.currentOpenSubmenuContext.currentMenuHandler.setProps({'open': false});
                                                     }
                                                     // Send mouseEnter event
                                                     if (context.onMouseEnter) {
                                                         context.onMouseEnter(context, e);
                                                     }
                                                 }}
                                                 onMouseLeave={context.onMouseLeave && ((e) => { context.onMouseLeave(context, e); })}
            >
                <span dangerouslySetInnerHTML={{__html:t(context.buttonLabel, context.buttonLabelParams)}}/>
                {context.icon}
            </MenuItem>}</I18n>
        }/>
    </Menu>);
};

let menuAction = composeActions(componentRendererAction, withStylesAction(styles), {

    init: (context) => {
        if (!context.icon) {
            context.icon = <ArrowRight/>;
        }
    },

    onMouseEnter: (context, e) => {
        if (context.parent) {
            // Open submenu on mouseEnter
            context.parent.currentOpenSubmenuContext = context;
            display(context, {anchorEl:e.target,  anchorOrigin:{vertical: 'top', horizontal: 'right'}});
        }
    },

    onMouseLeave: (context, e) => {
        if (context.parent && context.parent.currentOpenSubmenuContext) {
            // Close submenu on mouseLeave - first check if the pointer has not left for the menu itself
            setTimeout(() => {
                if (!context.mouseInMenu && context.parent.currentOpenSubmenuContext && context.parent.currentOpenSubmenuContext.key === context.key) {
                    context.parent.currentOpenSubmenuContext.currentMenuHandler.setProps({'open': false})
                    context.parent.currentOpenSubmenuContext = null;
                }
            }, 50);
        }
    },

    onClick: (context, e) => {
        // If not a submenu, open it (can be overridden for submenu, as menu is opened on mouseEnter)
        if (!context.parent) {
            display(context, {anchorEl:e.target,  anchorOrigin:{vertical: 'top', horizontal: 'right'}});
        }
    },

    onContextMenu: (context, e) => {
        e.preventDefault();
        display(context, {anchorPosition:{left:e.clientX, top:e.clientY}, anchorReference:'anchorPosition'});
    },
});


export { menuAction };