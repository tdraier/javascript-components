import {colors} from "@material-ui/core";

const darkPalette = {
    type: "dark",
    contrastThreshold: 3.0,
    background: {
        default: colors.grey[900],
        global: colors.grey[900]
    },
    primary: {
        main: colors.purple[500]
    },
    secondary: {
        main: colors.green[400]
    },
    error: {
        main: colors.red[200]
    },
    confirmColor: {
        main: colors.green[400]
    }
};

export { darkPalette }