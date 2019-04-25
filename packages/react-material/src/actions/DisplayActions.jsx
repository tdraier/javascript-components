import React from 'react';
import {actionsRegistry} from './actionsRegistry';
import * as _ from 'lodash';
import {DisplayAction} from './DisplayAction';

class DisplayActions extends React.Component {
    constructor(props) {
        super(props);
        this.observerRefs = [];
    }

    render() {
        const {target, context, render, filter} = this.props;

        let actionsToDisplay = _.filter(actionsRegistry.getAll(), action => _.includes(_.map(action.target, 'id'), target));
        actionsToDisplay = _.sortBy(actionsToDisplay, [function (o) {
            let found = _.find(o.target, function (t) {
                return t.id === target;
            });
            return found && found.priority && found.priority !== 0 ? found.priority : 'undefined';
        }]);

        if (filter) {
            actionsToDisplay = _.filter(actionsToDisplay, filter);
        }

        return _.map(actionsToDisplay, action => <DisplayAction key={action.key} context={context} actionKey={action.key} render={render} observerRef={obs => this.observerRefs.push(obs)}/>);
    }
}

export {DisplayActions};
