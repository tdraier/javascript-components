import {createMuiTheme} from '@material-ui/core';
import {paletteLight, paletteDark} from './palette';
import {dialogTitle, dialogContent, dialogContentText, dialogActions} from './overrides/dialog';
import {switchOverride} from './overrides/switch';
import {button, iconButton} from './overrides/button';
import {tableRowLight, tableCell} from './overrides/table';
import {checkbox} from './overrides/checkbox';
import {formControlLabelLight, formControl, formHelperTextLight} from './overrides/form';
import {inputLight} from './overrides/input';
import {typographyLight} from './overrides/typography';
import {collapse} from './overrides/collapse';
import {selectLight} from './overrides/select';
import {menuItem} from './overrides/menu';
import {listItemText} from './overrides/list';
import {paper} from './overrides/paper';
import * as _ from 'lodash';

// All the following keys are optional.
// We try our best to provide a great default value.
let baseTheme = {
	overrides: {
        MuiDialogTitle: dialogTitle,
        MuiDialogContent: dialogContent,
        MuiDialogContentText: dialogContentText,
        MuiDialogActions: dialogActions,
        MuiSwitch: switchOverride,
        MuiButton: button,
		MuiTableCell: tableCell,
        MuiIconButton: iconButton,
        MuiCheckbox: checkbox,
		MuiFormControl: formControl,
        MuiCollapse: collapse,
		MuiMenuItem: menuItem,
        MuiListItemText: listItemText,
        MuiPaper: paper
	}
};

// const theme = createMuiTheme(_.merge({
//     palette: paletteLight,
//     overrides: {
//         MuiInput: inputLight,
//         MuiSelect: selectLight,
//         MuiTableRow: tableRowLight,
//         MuiTypography: typographyLight,
//         MuiFormHelperText: formHelperTextLight,
//         MuiFormControlLabel: formControlLabelLight
//     }
// }, baseTheme));
//
// const darkTheme = createMuiTheme(_.merge({
//     palette: paletteDark
// }, baseTheme));

const theme = createMuiTheme({
    palette: paletteLight
});

const darkTheme = createMuiTheme({
    palette: paletteDark
});

export {theme, darkTheme}
