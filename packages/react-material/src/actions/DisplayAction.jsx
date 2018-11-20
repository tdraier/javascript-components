import React from 'react';
import {actionsRegistry} from './actionsRegistry';
import * as _ from 'lodash';
import {Observable, combineLatest, concat, of} from 'rxjs';

let count = 0;

class StateActionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let enhancedContext = {...this.props.context, ...this.state};

        if (enhancedContext.enabled !== false) {

            let Render = this.props.render;
            if (enhancedContext.actions) {
                return _.map(enhancedContext.actions, (action) => <Render key={action.key} context={{
                    ...enhancedContext,
                    ...action
                }}/>);
            } else {
                return <Render context={enhancedContext}/>
            }
        }
        return false;
    }

}

class DisplayActionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.innerRef = React.createRef();
        this.state = {
        };
    }

    render() {

        let {context, render} = this.props;

        let subscription = this.subscription;
        if (subscription) {
            subscription.unsubscribe();
        }

        let enhancedContext = {...context};
        if (enhancedContext.init) {
            enhancedContext.init(enhancedContext, _.omit(this.props, ['context']));
        }

        // Check observers
        let observersObj = _.pickBy(enhancedContext, (value) => value instanceof Observable);
        let keys = Object.keys(observersObj);

        if (keys.length > 0) {
            // Prepare an updateContext method for subscription - first set it as synchronous update of the context object
            let update = (v) => {
                if (this.innerRef.current) {
                    this.innerRef.current.setState(v);
                } else {
                    enhancedContext = _.assign(enhancedContext, v);
                }
            };

            // Concat with a sync observer to always get an initial value
            let observers = _.map(Object.values(observersObj), obs => concat(of(null), obs));

            // Combine all observers into one
            let combinedObserver = combineLatest(...observers, (...vals) => _.zipObject(keys, vals));
            this.subscription = combinedObserver.subscribe((v) => update(v));
            if (this.props.observerRef) {
                this.props.observerRef(combinedObserver);
            }
        } else {
            if (this.props.observerRef) {
                this.props.observerRef(of(null));
            }
        }

        return <StateActionComponent context={enhancedContext} render={render} ref={this.innerRef} />
    }


    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}

const shallowEquals = (obj1, obj2) =>
    Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(key => obj1[key] === obj2[key]);

class DisplayAction extends React.Component {

    constructor(props) {
        super(props);
        this.id = props.actionKey + "-" + (count++)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !shallowEquals(nextProps.context, this.props.context);
    }

    wrap(Render, wrapper) {
        return (props) => wrapper(<Render {...props}/>)
    }

    render() {
        let {context, actionKey, render, observerRef} = this.props;
        let action = actionsRegistry.get(actionKey);
        let enhancedContext = {...action, ...context, originalContext: context, id:this.id, actionKey};

        let Component = DisplayActionComponent;

        if (enhancedContext.wrappers) {
            Component = _.reduce(enhancedContext.wrappers, this.wrap, DisplayActionComponent);
        }

        return <Component context={enhancedContext} render={render} actionKey={actionKey} observerRef={observerRef}/>
    }
}

export {DisplayAction};