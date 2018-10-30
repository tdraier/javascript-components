import React from 'react';
import {withStyles} from "@material-ui/core";

let withStylesAction = (styles) => {
    let Component = withStyles(styles)((props) => props.children(props.classes));

    return {
        wrappers: [
            (component) => <Component context={component.props.context}>{(classes) => {
                component.props.context.classes = classes;
                return component;
            }}</Component>
        ]
    }

};


export { withStylesAction };