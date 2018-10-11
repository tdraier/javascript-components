import * as _ from 'lodash';

function invokeNext(arr, args) {
    if (arr.length === 1) {
        arr[0].apply(this, args);
    } else if (arr.length > 1) {
        let that = this;
        arr[0].apply(this, _.concat(args,() => { invokeNext.call(that, arr.slice(1), args) }));
    }
}

function composeActions() {
    let actions = Array.prototype.slice.call(arguments);
    return _.reduce(actions, (acc, action) => {
        if (action) {
            _.forEach(action, (value, key) => {
                let previous = acc[key];
                if (typeof previous === 'function') {
                    if (acc[key+"_functions"]) {
                        acc[key+"_functions"] = _.concat(acc[key+"_functions"],value);
                    } else {
                        acc[key + "_functions"] = [previous, value];
                        acc[key] = function() {
                            invokeNext.call(this, this[key + "_functions"], Array.prototype.slice.call(arguments))
                        }
                    }
                } else if (Array.isArray(previous)) {
                    acc[key] = _.concat(previous, value)
                } else {
                    acc[key] = value;
                }
            });
        }
        return acc;
    }, {});

}

export {composeActions}