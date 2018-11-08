import React from 'react';
import {connect} from "react-redux";
import * as _ from 'lodash';

let reduxAction = (mapStateToProps, mapDispatchToProps) => {
    let Component = connect(mapStateToProps, mapDispatchToProps)((props) => props.children(_.omit(props, ['children', 'context'])));

    return {
        wrappers: [
            (component) => <Component context={component.props.context}>{(props) => {
                _.assign(component.props.context, props);
                return component;
            }}</Component>
        ]
    }
};


export { reduxAction };