import * as _ from "lodash";

function openPaths(props) {
    return (state = props.openPaths || [], action) => {
        let index = state.indexOf(action.path);
        if (action.type === 'OPEN_PICKER_ENTRY_' + props.id && index === -1) {
            return [
                ...state,
                action.path
            ]
        } else if (action.type === 'CLOSE_PICKER_ENTRY_' + props.id && index !== -1) {
            return _.filter(state, (path) => path !== action.path);
        }
        return state;
    };
}

export default openPaths;
