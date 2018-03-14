import {createMuiTheme} from 'material-ui';
import {blueGrey, lightBlue, red, grey} from 'material-ui/colors/index'

// All the following keys are optional.
// We try our best to provide a great default value.
let theme = createMuiTheme({
    palette: {
        background: {
            global: grey[200]
        },
        contrastThreshold: 3.1,
        tonalOffset: 0.07,
        primary: {
            main: blueGrey[600],
            light: blueGrey[300],
            dark: blueGrey[700]
        },
        secondary: {
            main: lightBlue[600],
            light: lightBlue[300],
            dark: lightBlue[700]
        },
        error: {
            light: red.A200,
            main: red.A400,
            dark: red.A700
        },
    },
});

export {theme}
