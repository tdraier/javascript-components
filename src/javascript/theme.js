import {createMuiTheme} from 'material-ui';
import * as _ from "lodash";

var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe'
};

var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162'
};

var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
};

const theme = createMuiTheme();

// All the following keys are optional.
// We try our best to provide a great default value.
// const theme = createMuiTheme({
//     palette: {
//         contrastThreshold: 3.1,
//         tonalOffset: 0.07,
//         primary: {
//             light: indigo[300],
//             main: indigo[500],
//             dark: indigo[700],
//             contrastText: defaultTheme.palette.getContrastText(indigo[500]),
//         },
//         secondary: {
//             light: pink.A200,
//             main: pink.A400,
//             dark: pink.A700,
//             contrastText: defaultTheme.palette.getContrastText(pink.A400),
//         },
//         error: red.A400,
//     },
// });
console.log(theme);
export { theme }
