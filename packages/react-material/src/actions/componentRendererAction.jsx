import React from 'react';
import {ComponentRendererConsumer} from "./ComponentRenderer";

let componentRendererAction = {

    init:(context, props) => {
        context.componentRenderer = props.componentRenderer;
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
        (component) => <ComponentRendererConsumer>{(componentRenderer) => React.cloneElement(component, {componentRenderer})}</ComponentRendererConsumer>
    ]

}

export {componentRendererAction};