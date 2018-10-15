import React from 'react';
import {actionsRegistry} from './actionsRegistry';
import * as _ from 'lodash';

class DisplayActionComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            update: this.updateContext.bind(this),
        }
    }

    static getDerivedStateFromProps(props, state) {
        let action = actionsRegistry.get(props.actionKey);

        if (!!state.context && props.context === state.context.originalContext) {
            return null;
        }

        let context = {
            ...action,
            ...props.context,
            originalContext: props.context,
            render: props.render,
        };

        if (context.init) {
            context.init(context, props);
        }

        return {
            ...state,
            context
        }
    }


    updateContext(newContext) {
        this.setState({
            context: {
                ...this.state.context,
                ...newContext
            }
        });
    }

    render() {
        let {context} = this.state;
        if (context.enabled !== false) {
            let Render = context.render;
            return <Render context={context}/>
        }
        return false;
    }

    componentDidUpdate() {
        let {context} = this.state;
        if (context.onUpdate) {
            context.onUpdate(context);
        }
    }

    componentDidMount() {
        let {context} = this.state;
        if (context.onMount) {
            context.onMount(context);
        }
    }

    componentWillUnmount() {
        let {context} = this.state;
        if (context.onDestroy) {
            context.onDestroy(context);
        }
    }
}

let DisplayAction = (props) => {
    let action = actionsRegistry.get(props.actionKey);
    return _.reduce(action.wrappers, (acc, wrapper) => wrapper(acc), <DisplayActionComponent {...props} />);
};

export {DisplayAction};