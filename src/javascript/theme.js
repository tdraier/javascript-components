import {createMuiTheme} from 'material-ui';
import {indigo, pink, red, grey} from 'material-ui/colors/index'

// All the following keys are optional.
// We try our best to provide a great default value.
let theme = createMuiTheme({
    palette: {
        background: {
            global: grey[100]
        },
        contrastThreshold: 3.1,
        tonalOffset: 0.07,
        primary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[700],
        },
        secondary: {
            light: pink[200],
            main: pink[400],
            dark: pink[700],
        },
        error: {
            light: red.A200,
            main: red.A400,
            dark: red.A700
        },
    },
});

export { theme }
