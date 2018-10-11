import React from 'react';
import {ComponentRendererConsumer} from "./ComponentRenderer";

var count = 0;

let componentRendererAction = {

    init:(context, props, next) => {
        context.componentRenderer = props.componentRenderer;
        if (next) {
            next();
        }
    },

    onMount:(context, next) => {
        if (context.component && context.enabled !== false) {
            context.componentId = context.key + (count++);
            context.componentRenderer.render(context.componentId, context.component);
            context.setComponentProps = (props) => context.componentRenderer.setProps(context.componentId, props);
        }
        if (next) {
            next();
        }
    },

    onDestroy:(context, next) => {
        if (context.componentId) {
            context.componentRenderer.destroy(context.componentId);
        }
        if (next) {
            next();
        }
    },

    wrappers: [
        (component) => <ComponentRendererConsumer>{(componentRenderer) => React.cloneElement(component, {componentRenderer})}</ComponentRendererConsumer>
    ]

}

export {componentRendererAction};