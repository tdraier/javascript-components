import * as _ from "lodash";

function selectedPaths(props) {
    return (state = props.selectedPaths || [], action) => {
        let index = state.indexOf(action.path);
        if (action.type === 'SELECT_PICKER_ENTRY_' + props.id && index === -1) {
            return [
                ...state,
                action.path
            ]
        } else if (action.type === 'UNSELECT_PICKER_ENTRY_' + props.id && index !== -1) {
            return _.filter(state, (path) => path !== action.path);
        }
        return state;
    };
}

export default selectedPaths
