import * as _ from 'lodash';
import {composeServices} from './composeServices';

class Registry {
    constructor() {
        this.registry = {};
    }

    add(key) {
        let actions = Array.prototype.slice.call(arguments, 1);
        let action = composeServices(this.registry[key], ...actions);
        action.key = key;

        if (action.target) {
            action.target = _.map(action.target, t => {
                if (typeof t === 'string') {
                    let spl = t.split(':');
                    return ({id: spl[0], priority: spl[1] ? spl[1] : 0});
                }

                return t;
            });
        }

        this.registry[key] = action;
    }

    get(key) {
        return this.registry[key];
    }

    getAll() {
        return _.values(this.registry);
    }

    find(filters) {
        let result = this.registry.getAll();
        if (filters.target) {
            result = _.filter(result, item => _.includes(_.map(item.target, 'id'), filters.target));
            result = _.sortBy(result, [function (o) {
                let found = _.find(o.target, function (t) {
                    return t.id === filters.target;
                });
                return found && found.priority && found.priority !== 0 ? found.priority : 'undefined';
            }]);
        }

        return _.filter(result, _.omit(filters, 'target'));
    }
}

let registry = new Registry();

export {registry};
