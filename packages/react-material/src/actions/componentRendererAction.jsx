import React from 'react';
import {ComponentRendererConsumer} from "./ComponentRenderer";

let componentRendererAction = {

    init:(context, props) => {
        context.renderComponent = (comp) => {
            if (!context.componentId) {
                let id = "actionComponent-" + context.id;
                let componentHandler = {
                    id,
                    setProps: (props) => context.componentRenderer.setProps(id, props),
                    destroy: () => context.componentRenderer.destroy(id)
                };
                context.componentRenderer.render(id, comp);
                return componentHandler;
            }
        }
    },

    wrappers: [
        (component) => <ComponentRendererConsumer context={component.props.context}>{(componentRenderer) => {
            component.props.context.componentRenderer = componentRenderer;
            return component;
        }}</ComponentRendererConsumer>
    ]

}

export {componentRendererAction};