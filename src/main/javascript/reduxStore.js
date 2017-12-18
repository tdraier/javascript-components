import {createStore} from 'redux'
import * as _ from "lodash";

const reducers = {};

const store = function () {
    let debugTool;
    if (typeof window !== 'undefined') {
        debugTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
            name: "test",
            instanceId: "test"
        });
    }

    return createStore((state = {}, action) => _.mapValues(reducers, (value, key) => value(state[key], action)), debugTool);
}();

export {reducers, store};
