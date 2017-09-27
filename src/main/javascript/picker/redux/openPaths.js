import * as _ from "lodash";

const openPaths = (state = [], action) => {

    let index = state.indexOf(action.path);
    if (action.type === 'OPEN_PICKER_ENTRY' && index === -1) {
        console.log("redux open " + action.path);
        return [
            ...state,
            action.path
        ]
    } else if (action.type === 'CLOSE_PICKER_ENTRY' && index !== -1) {
        console.log("redux close " + action.path);
        return _.filter(state, (path) => path !== action.path);
    }
    return state;
};

export default openPaths;
