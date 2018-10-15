import React from 'react';
import {ComponentRendererConsumer} from "./ComponentRenderer";

let componentRendererAction = {

    init:(context, props) => {
        context.componentRenderer = props.componentRenderer;
        context.renderComponent = (comp) => {
            if (!context.componentId) {
                context.componentId = context.id;
                context.componentRenderer.render(context.componentId, comp);
                context.setComponentProps = (props) => context.componentRenderer.setProps(context.componentId, props);
            }
        }
    },

    onDestroy:(context) => {
        if (context.componentId) {
            context.componentRenderer.destroy(context.componentId);
        }
    },

    wrappers: [
        (component) => <ComponentRendererConsumer>{(componentRenderer) => React.cloneElement(component, {componentRenderer})}</ComponentRendererConsumer>
    ]

}

export {componentRendererAction};