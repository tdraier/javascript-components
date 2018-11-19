import React from 'react';
import {actionsRegistry} from './actionsRegistry';
import * as _ from "lodash";
import {DisplayAction} from "./DisplayAction";

class DisplayActions extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {target, context, render} = this.props;

        const actionsToDisplay = _.filter(actionsRegistry.getAll(), (action) => _.includes(_.map(action.target, "id"), target));
        actionsToDisplay = _.sortBy(actionsToDisplay, [function(o) {
            let target = _.find(o.target, function(t) { return t.id === target; });
            return target && target.priority && target.priority != 0 ? target.priority : 'undefined'; 
        }]);

        return _.map(actionsToDisplay, action => <DisplayAction key={action.key} context={context} actionKey={action.key} render={render}/>)
    }
}

export {DisplayActions};