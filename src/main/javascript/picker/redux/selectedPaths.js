import * as _ from "lodash";

const selectedPaths = (state = [], action) => {
    let index = state.indexOf(action.path);
    if (action.type === 'SELECT_PICKER_ENTRY' && index === -1) {
        console.log("redux select " + action.path);
        return [
            ...state,
            action.path
        ]
    } else if (action.type === 'UNSELECT_PICKER_ENTRY' && index !== -1) {
        console.log("redux unselect " + action.path);
        return _.filter(state, (path) => path !== action.path);
    }
    return state;
};

export default selectedPaths
