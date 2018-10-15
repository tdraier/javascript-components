import React from 'react';
import {actionsRegistry} from './actionsRegistry';
import * as _ from 'lodash';

let count = 0;

class DisplayActionComponent extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            update: this.updateContext.bind(this),
            id: props.actionKey + "-" + (count++)
        }
    }

    static getDerivedStateFromProps(props, state) {
        let action = actionsRegistry.get(props.actionKey);

        if (!!state.context && (props.context === state.context.originalContext)) {
            return null;
        }

        let context = {
            ...state.context,
            ...action,
            ...props.context,
            id: state.id,
            originalContext: props.context,
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
            let Render = this.props.render;
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