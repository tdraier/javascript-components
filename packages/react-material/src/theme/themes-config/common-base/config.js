import {commonPalette} from "./palette";
import {commonTablePagination} from "./overrides/table";

const commonBaseThemeConfig = {
    palette: commonPalette,
    overrides: {
        MuiTablePagination: commonTablePagination
    }
};

export {commonBaseThemeConfig}