import {commonPalette} from "./palette";
import {commonTablePagination} from "./overrides/table";

const commonBaseThemeConfig = {
    palette: commonPalette,
    overrides: {
        MuiTablePagination: commonTablePagination
    },
    zIndex: {
        mobileStepper: 1000,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    }
};

export {commonBaseThemeConfig}