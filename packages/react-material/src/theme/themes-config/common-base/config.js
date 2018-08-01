import {commonPalette} from "./palette";
import {commonTypography} from "./overrides/typography";
import {commonTablePagination} from "./overrides/table";

const commonBaseThemeConfig = {
    palette: commonPalette,
    overrides: {
        MuiTypography: commonTypography,
        MuiTablePagination: commonTablePagination
    }
};

export {commonBaseThemeConfig}