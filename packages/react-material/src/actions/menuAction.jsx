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
        if (menuStatus[context.id].menuSubscription) {
            menuStatus[context.id].menuSubscription.unsubscribe();
            delete menuStatus[context.id].menuSubscription;
        }
        menuStatus[context.id].menuSubscription = combineLatest(ref.observerRefs).subscribe(() => menuStatus[context.id].onMenuLoaded())
    }
};

let menuStatus = {};

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

    if (!menuStatus[context.id]) {
        menuStatus[context.id] = {
            open:false,
            inMenu:false
        }
    }

    menuStatus[context.id].open = true;
    context.currentMenuHandler = context.renderComponent(<Menu className={context.classes.loading}
                                                               id={'menu-' + context.id} {...anchor}
                                                               open={true}
                                                               action={(c)=> {
                                                                   menuStatus[context.id].onMenuLoaded = () => {
                                                                       if (menuStatus[context.id].open) {
                                                                           c.updatePosition();
                                                                           context.currentMenuHandler.setProps({className: ""});
                                                                       }
                                                                   }}
                                                               }
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
                                                                   menuStatus[context.id].open = false;
                                                                   if (context.onExit) {
                                                                       context.onExit(context);
                                                                   }
                                                                   if (menuStatus[context.id].menuSubscription) {
                                                                       menuStatus[context.id].menuSubscription.unsubscribe();
                                                                       delete menuStatus[context.id].menuSubscription;
                                                                   }
                                                                   // Close sub menu if they exist
                                                                   if (context.currentOpenSubmenuContext) {
                                                                       context.currentOpenSubmenuContext.currentMenuHandler.setProps({open:false});
                                                                   }
                                                               }}
                                                               onExited={()=> {
                                                                   // Free resources after exit
                                                                   context.currentMenuHandler.destroy();
                                                                   delete menuStatus[context.id];
                                                               }}
                                                               onMouseEnter={() => {
                                                                   menuStatus[context.id].inMenu=true;
                                                               }}
                                                               onMouseLeave={() => {
                                                                   menuStatus[context.id].inMenu=false;
                                                               }}
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
                                                 onMouseLeave={context.onMouseLeave && ((e) => {
                                                     context.onMouseLeave(context, e);
                                                 })}
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
        if (context.parent && menuStatus[context.parent.id].open) {
            // Open submenu on mouseEnter
            context.parent.currentOpenSubmenuContext = context;
            let b = e.currentTarget.getBoundingClientRect();
            display(context, {anchorPosition:{left:b.left + b.width, top:b.top}, anchorReference:'anchorPosition'});
        }
    },

    onMouseLeave: (context, e) => {
        if (context.parent && context.parent.currentOpenSubmenuContext) {
            // Close submenu on mouseLeave - first check if the pointer has not left for the menu itself
            setTimeout(() => {
                if ((!menuStatus[context.id] || !menuStatus[context.id].inMenu) && context.parent.currentOpenSubmenuContext && context.parent.currentOpenSubmenuContext.key === context.key) {
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
            display(context, {anchorPosition:{left:b.left, top:b.top}, anchorReference:'anchorPosition'});
        }
    },

    onContextMenu: (context, e) => {
        e.preventDefault();
        display(context, {anchorPosition:{left:e.clientX, top:e.clientY}, anchorReference:'anchorPosition'});
    },
});


export { menuAction };