// Import of Light Anthracite theming import
import {anthraciteLightPalette} from "./light/palette";
import {anthraciteLightAppBar} from "./light/appbar";
import {anthraciteLightButton, anthraciteLightIconButton, anthraciteLightButtonBase} from "./light/button";
import {anthraciteLightCheckbox} from "./light/checkbox";
import {anthraciteLightChip} from "./light/chip";
import {anthraciteLightDialogTitle, anthraciteLightDialog, anthraciteLightDialogActions} from "./light/dialog";
import {anthraciteLightFormControlLabel, anthraciteLightFormLabel} from "./light/form";
import {anthraciteLightInput} from "./light/input";
import {
    anthraciteLightListItem,
    anthraciteLightListItemSecondaryAction,
    anthraciteLightListItemText,
    anthraciteLightListSubheader
} from "./light/list";

import {anthraciteLightMenu, anthraciteLightMenuItem} from "./light/menu";
import {anthraciteLightPanel, anthraciteLightPanelActions, anthraciteLightPanelDetails} from "./light/panel";
import {anthraciteLightPaper} from "./light/paper";
import {anthraciteLightSelect} from "./light/select";
import {anthraciteLightShape} from "./light/shape";
import {anthraciteLightTable, anthraciteLightTableCell, anthraciteLightTableRow} from "./light/table";
import {anthraciteLightTab, anthraciteLightTabs} from "./light/tabs";
import {anthraciteLightToolBar} from "./light/toolbar";
import {anthraciteLightTypography} from "./light/typography";
// Import of Dark Anthracite theming
import {anthraciteDarkPalette} from "./dark/palette";
import {anthraciteDarkAppBar} from "./dark/appbar";
import {anthraciteDarkButton, anthraciteDarkButtonBase, anthraciteDarkIconButton} from "./dark/button";
import {anthraciteDarkCheckbox} from "./dark/checkbox";
import {anthraciteDarkDialog, anthraciteDarkDialogActions, anthraciteDarkDialogTitle} from "./dark/dialog";
import {anthraciteDarkFormControlLabel, anthraciteDarkFormLabel} from "./dark/form";
import {anthraciteDarkInput} from "./dark/input";
import {
    anthraciteDarkListItem,
    anthraciteDarkListItemIcon,
    anthraciteDarkListItemSecondaryAction,
    anthraciteDarkListItemText,
    anthraciteDarkListSubheader
} from "./dark/list";

import {anthraciteDarkMenu, anthraciteDarkMenuItem} from "./dark/menu";
import {anthraciteDarkPanel, anthraciteDarkPanelActions, anthraciteDarkPanelDetails} from "./dark/panel";
import {anthraciteDarkPaper} from "./dark/paper";
import {anthraciteDarkSelect} from "./dark/select";
import {anthraciteDarkShape} from "./dark/shape";
import {anthraciteDarkTable, anthraciteDarkTableCell, anthraciteDarkTableRow} from "./dark/table";
import {anthraciteDarkTab, anthraciteDarkTabs} from "./dark/tabs";
import {anthraciteDarkToolBar} from "./dark/toolbar";
import {anthraciteDarkTypography} from "./dark/typography";

const anthraciteLightThemeConfig = {
    palette: anthraciteLightPalette,
    shape: anthraciteLightShape,
    overrides: {
        MuiAppBar: anthraciteLightAppBar,
        MuiButton: anthraciteLightButton,
        MuiButtonBase: anthraciteLightButtonBase,
        MuiIconButton: anthraciteLightIconButton,
        MuiCheckbox: anthraciteLightCheckbox,
        MuiChip: anthraciteLightChip,
        MuiDialogTitle: anthraciteLightDialogTitle,
        MuiDialog: anthraciteLightDialog,
        MuiDialogActions: anthraciteLightDialogActions,
        MuiFormLabel: anthraciteLightFormLabel,
        MuiFormControlLabel: anthraciteLightFormControlLabel,
        MuiInput: anthraciteLightInput,
        MuiListItem: anthraciteLightListItem,
        MuiListItemSecondaryAction: anthraciteLightListItemSecondaryAction,
        MuiListSubheader:  anthraciteLightListSubheader,
        MuiListItemText: anthraciteLightListItemText,
        MuiMenu: anthraciteLightMenu,
        MuiMenuItem: anthraciteLightMenuItem,
        MuiExpansionPanel: anthraciteLightPanel,
        MuiExpansionPanelDetails: anthraciteLightPanelDetails,
        MuiExpansionPanelActions: anthraciteLightPanelActions,
        MuiPaper: anthraciteLightPaper,
        MuiSelect: anthraciteLightSelect,
        MuiTable: anthraciteLightTable,
        MuiTableRow: anthraciteLightTableRow,
        MuiTableCell: anthraciteLightTableCell,
        MuiTab: anthraciteLightTab,
        MuiTabs: anthraciteLightTabs,
        MuiToolbar: anthraciteLightToolBar,
        MuiTypography: anthraciteLightTypography
    }
};

const anthraciteDarkThemeConfig = {
    palette: anthraciteDarkPalette,
    shape: anthraciteDarkShape,
    overrides: {
        MuiAppBar: anthraciteDarkAppBar,
        MuiButton: anthraciteDarkButton,
        MuiButtonBase: anthraciteDarkButtonBase,
        MuiIconButton: anthraciteDarkIconButton,
        MuiCheckbox: anthraciteDarkCheckbox,
        MuiDialogTitle: anthraciteDarkDialogTitle,
        MuiDialog: anthraciteDarkDialog,
        MuiDialogActions: anthraciteDarkDialogActions,
        MuiFormLabel: anthraciteDarkFormLabel,
        MuiFormControlLabel: anthraciteDarkFormControlLabel,
        MuiInput: anthraciteDarkInput,
        MuiListItem: anthraciteDarkListItem,
        MuiListItemIcon: anthraciteDarkListItemIcon,
        MuiListItemSecondaryAction: anthraciteDarkListItemSecondaryAction,
        MuiListSubheader:  anthraciteDarkListSubheader,
        MuiListItemText: anthraciteDarkListItemText,
        MuiMenu: anthraciteDarkMenu,
        MuiMenuItem: anthraciteDarkMenuItem,
        MuiExpansionPanel: anthraciteDarkPanel,
        MuiExpansionPanelDetails: anthraciteDarkPanelDetails,
        MuiExpansionPanelActions: anthraciteDarkPanelActions,
        MuiPaper: anthraciteDarkPaper,
        MuiSelect: anthraciteDarkSelect,
        MuiTable: anthraciteDarkTable,
        MuiTableRow: anthraciteDarkTableRow,
        MuiTableCell: anthraciteDarkTableCell,
        MuiTab: anthraciteDarkTab,
        MuiTabs: anthraciteDarkTabs,
        MuiToolbar: anthraciteDarkToolBar,
        MuiTypography: anthraciteDarkTypography
    }
};

export {anthraciteDarkThemeConfig, anthraciteLightThemeConfig}
