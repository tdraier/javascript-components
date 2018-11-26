import React from 'react';
import {Menu, MenuItem, ModalManager} from "@material-ui/core";
import {I18n} from 'react-i18next';
import {componentRendererAction} from "./componentRendererAction";
import {composeActions} from "./composeActions";
import {DisplayActions} from "./DisplayActions";
import {withStylesAction} from "./withStylesAction";
import {ArrowRight} from "@material-ui/icons"
import {combineLatest} from "rxjs";

let styles = {
    modalRoot: {
        pointerEvents:'none',
    },
    paperRoot: {
        pointerEvents:'initial'
    },
    loading:{
        opacity:0
    }
};

let setActionsRef = (ref, context) => {
    if (ref) {
        if (context.menuSubscription) {
            context.menuSubscription.unsubscribe();
        }
        context.menuSubscription = combineLatest(ref.observerRefs).subscribe(() => context.onMenuLoaded())
    }
};

let preload = (context) => {
    context.currentMenuHandler = context.renderComponent(<DisplayActions target={context.menu} context={{...context.originalContext, parent:context}} render={() => false} />);
};

let display = (context, anchor) => {
    // Disable backdrop for sub menus, click through to main menu backdrop
    let subMenuProps = (context.parent) ? {
        ModalClasses:{root:context.classes.modalRoot},
        classes:{paper:context.classes.paperRoot},
        disableEnforceFocus:true,
        manager:new ModalManager({hideSiblingNodes:false})
    } : {};
    context.menuOpen = true;
    context.currentMenuHandler = context.renderComponent(<Menu className={context.classes.loading}
                                                               id={'menu-' + context.id} {...anchor}
                                                               open={true}
                                                               action={(c)=>context.onMenuLoaded = () => {
                                                                   if (context.menuOpen) {
                                                                       c.updatePosition();
                                                                       context.currentMenuHandler.setProps({className: ""});
                                                                   }
                                                               }}
                                                               BackdropProps={{
                                                                   invisible:true,
                                                                   onContextMenu:(e) => {
                                                                       e.preventDefault();
                                                                       context.currentMenuHandler.setProps({open:false});
                                                                   }
                                                               }}
                                                               onClose={()=> {
                                                                   context.currentMenuHandler.setProps({open:false})
                                                               }}
                                                               onExit={()=> {
                                                                   context.menuOpen = false;
                                                                   if (context.onExit) {
                                                                       context.onExit(context);
                                                                   }
                                                                   if (context.menuSubscription) {
                                                                       context.menuSubscription.unsubscribe();
                                                                   }
                                                                   // Close sub menu if they exist
                                                                   if (context.currentOpenSubmenuContext) {
                                                                       context.currentOpenSubmenuContext.currentMenuHandler.setProps({open:false});
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
        <DisplayActions target={context.menu} context={{...context.originalContext, parent:context}} ref={(r) => setActionsRef(r,context)} render={
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
        if (context.preload) {
            preload(context);
        }
    },

    onMouseEnter: (context, e) => {
        if (context.parent && context.parent.menuOpen) {
            // Open submenu on mouseEnter
            context.parent.currentOpenSubmenuContext = context;
            let b = e.currentTarget.getBoundingClientRect();
            display(context, {anchorPosition:{left:b.x + b.width, top:b.y}, anchorReference:'anchorPosition'});
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
            let b = e.currentTarget.getBoundingClientRect();
            display(context, {anchorPosition:{left:b.x, top:b.y}, anchorReference:'anchorPosition'});
        }
    },

    onContextMenu: (context, e) => {
        e.preventDefault();
        display(context, {anchorPosition:{left:e.clientX, top:e.clientY}, anchorReference:'anchorPosition'});
    },
});


export { menuAction };