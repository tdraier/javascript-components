import {getMuiTheme, lightBaseTheme} from 'material-ui/styles/index';
import * as _ from "lodash";

function muiTheme() {
    let ssrMode = (typeof window === 'undefined');
    if (ssrMode) {
        var req = global.request;

        let theme = _.clone(lightBaseTheme);
        theme.userAgent = req.getHeader("User-Agent");
        return getMuiTheme(theme);
    } else {
        return getMuiTheme(lightBaseTheme);
    }
}

export default muiTheme;