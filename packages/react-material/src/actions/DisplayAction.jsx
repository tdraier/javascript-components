import React from 'react';
import {actionsRegistry} from './actionsRegistry';
import * as _ from 'lodash';
import {Observable, combineLatest, concat, of} from 'rxjs';

let count = 0;

class DisplayAction extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            context: {
                id: props.actionKey + "-" + (count++)
            },
            updateContext: this.updateContext.bind(this),
        }
    }

    static getDerivedStateFromProps(props, state) {
        let action = actionsRegistry.get(props.actionKey);

        if (!action) {
            console.warn("Cannot find action "+props.actionKey);
        }
        if (!!state.context && (props.context === state.context.originalContext)) {
            return null;
        }

        let context = {
            ...state.context,
            ...action,
            ...props.context,
            originalContext: props.context,
        };

        if (context.init) {
            context.init(context, props);
        }

        // Check observers
        let subscription = state.subscription;
        let observersObj = _.pickBy(context, (value) => value instanceof Observable);
        let keys = Object.keys(observersObj);

        if (!subscription && keys.length > 0) {
            // Prepare an updateContext method for subscription - first set it as synchronous update of the context object
            let updateHandler = {
                current: (v) => {
                    context = _.assign(context, v);
                }
            };
            // Concat with a sync observer to always get an initial value
            let observers = _.map(Object.values(observersObj), obs => concat(of(null), obs));

            // Combine all observers into one
            let combined = combineLatest(...observers, (...vals) => _.zipObject(keys, vals));
            subscription = combined.subscribe((v) => {
                updateHandler.current(v);
            });
            // All synchronous updates have been received, switched to asynchronous through state update
            updateHandler.current = state.updateContext;
        } else if (keys.length > 0) {
            // Keep current subscription values
            _.assign(context, _.pick(state.context, keys));
        }

        return {
            ...state,
            subscription,
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

    wrap(Render, wrapper) {
        return (props) => wrapper(<Render {...props}/>)
    }

    render() {
        let {context} = this.state;

        let Render = this.props.render;
        if (context.wrappers) {
            Render = _.reduce(context.wrappers, this.wrap, Render);
        }

        if (context.enabled !== false) {
            if (context.actions) {
                return _.map(context.actions, (action) => <Render key={action.val} context={{
                    ...context,
                    ...action
                }}/>);
            } else {
                return <Render context={context}/>
            }
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
        let {context, subscription} = this.state;
        if (context.onDestroy) {
            context.onDestroy(context);
        }
        if (subscription) {
            subscription.unsubscribe();
        }
    }
}

export {DisplayAction};