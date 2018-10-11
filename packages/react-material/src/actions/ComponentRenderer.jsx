import React, {Component, createContext} from "react";
import * as _ from 'lodash';

const ComponentRendererContext = createContext();

class ComponentRendererProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            components: {},
            componentsProps: {}
        };

        this.value = {
            render: (key, component, props) => this.setState((previous) => {
                let newState = {
                    components: { ...previous.components },
                    componentsProps : { ...previous.componentsProps }
                };
                newState.components[key] = component;
                newState.componentsProps[key] = {...props};
                return newState;
            }),
            setProps: (key, props ) => this.setState((previous) => {
                let newState = {
                    componentsProps : { ...previous.componentsProps }
                };
                newState.componentsProps[key] = {...props};
                return newState;
            }),
            destroy: (key) => this.setState((previous) => {
                let newState = {
                    components: { ...previous.components },
                    componentsProps : { ...previous.componentsProps }
                };
                delete newState.components[key];
                delete newState.componentsProps[key];
                return newState;
            })
        };
    }

    render() {
        return (
            <ComponentRendererContext.Provider value={this.value}>
                {_.values(_.map(this.state.components, (component,key) => (<React.Fragment key={key}>{ React.cloneElement(component, this.state.componentsProps[key]) }</React.Fragment>)))}
                {this.props.children}
            </ComponentRendererContext.Provider>
        );
    }
}

class ComponentRendererConsumer extends Component {
    render() {
        return <ComponentRendererContext.Consumer {...this.props}/>
    }
}

export {ComponentRendererProvider, ComponentRendererConsumer};
