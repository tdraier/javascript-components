import React from 'react';
import {ComponentRendererConsumer} from "./ComponentRenderer";

let componentRendererAction = {

    init:(context, props, next) => {
        context.componentRenderer = props.componentRenderer;
    },

    wrappers: [
        (component) => <ComponentRendererConsumer>{(componentRenderer) => React.cloneElement(component, {componentRenderer})}</ComponentRendererConsumer>
    ]

}

export {componentRendererAction};