import {commonPalette} from "./palette";
import {commonTablePagination} from "./overrides/table";

const commonBaseThemeConfig = {
    palette: commonPalette,
    overrides: {
        MuiTablePagination: commonTablePagination
    },
    zIndex: {
        mobileStepper: 1000,
        appBar: 1004,
        drawer: 1008,
        modal: 1012,
        snackbar: 1400,
        tooltip: 1500
    }
};

export {commonBaseThemeConfig}