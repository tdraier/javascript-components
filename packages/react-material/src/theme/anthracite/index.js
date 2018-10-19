import {createMuiTheme} from '@material-ui/core';
import {commonBaseThemeConfig} from "../common-base/config";
import * as _ from 'lodash';

import {shape} from "./shape";
import {typography} from "./typography";
// Overrides
import {anthraciteAppBar} from "./overrides/appbar";
import {anthraciteButton, anthraciteButtonBase, anthraciteIconButton} from "./overrides/button";
import {anthraciteCard, anthraciteCardContent, anthraciteCardHeader} from "./overrides/card"
import {anthraciteDialog, anthraciteDialogActions, anthraciteDialogTitle} from "./overrides/dialog";
import {anthraciteCheckbox} from "./overrides/checkbox";
import {anthraciteInput} from "./overrides/input";
import {anthraciteMenu, anthraciteMenuItem} from "./overrides/menu";
import {anthracitePaper} from "./overrides/paper";
import {anthraciteSelect} from "./overrides/select";
import {anthraciteTable, anthraciteTableCell, anthraciteTableRow, anthraciteTablePagination} from "./overrides/table";
import {anthraciteTab, anthraciteTabs} from "./overrides/tabs";
import {anthraciteToolBar} from "./overrides/toolbar";
import {anthraciteTypography} from "./overrides/typography";

// Import of Light Anthracite theming import
import {anthraciteLightPalette} from "./light/palette";
import {anthraciteLightChip} from "./light/overrides/chip";
import {anthraciteLightFormControlLabel, anthraciteLightFormLabel} from "./light/overrides/form";
import {
    anthraciteLightListItem,
    anthraciteLightListItemSecondaryAction,
    anthraciteLightListItemText,
    anthraciteLightListSubheader
} from "./light/overrides/list";

import {anthraciteLightPanel, anthraciteLightPanelActions, anthraciteLightPanelDetails} from "./light/overrides/panel";

// Import of Dark Anthracite theming
import {anthraciteDarkPalette} from "./dark/palette";
import {anthraciteDarkFormControlLabel, anthraciteDarkFormLabel} from "./dark/overrides/form";
import {
    anthraciteDarkListItem,
    anthraciteDarkListItemIcon,
    anthraciteDarkListItemSecondaryAction,
    anthraciteDarkListItemText,
    anthraciteDarkListSubheader
} from "./dark/overrides/list";
import {anthraciteDarkPanel, anthraciteDarkPanelActions, anthraciteDarkPanelDetails} from "./dark/overrides/panel";

const anthraciteLightThemeConfig = {
    palette: anthraciteLightPalette,
    shape,
    typography
};

const anthraciteLightThemeOverrides = (theme) => ({
    MuiAppBar: anthraciteAppBar(theme),
    MuiButton: anthraciteButton(theme),
    MuiButtonBase: anthraciteButtonBase(theme),
    MuiIconButton: anthraciteIconButton(theme),
    MuiCard: anthraciteCard(theme),
    MuiCardContent: anthraciteCardContent(theme),
    MuiCardHeader: anthraciteCardHeader(theme),
    MuiCheckbox: anthraciteCheckbox(theme),
    MuiChip: anthraciteLightChip,
    MuiDialogTitle: anthraciteDialogTitle(theme),
    MuiDialog: anthraciteDialog(theme),
    MuiDialogActions: anthraciteDialogActions(theme),
    MuiFormLabel: anthraciteLightFormLabel,
    MuiFormControlLabel: anthraciteLightFormControlLabel,
    MuiInput: anthraciteInput(theme),
    MuiListItem: anthraciteLightListItem,
    MuiListItemSecondaryAction: anthraciteLightListItemSecondaryAction,
    MuiListSubheader: anthraciteLightListSubheader,
    MuiListItemText: anthraciteLightListItemText,
    MuiMenu: anthraciteMenu(theme),
    MuiMenuItem: anthraciteMenuItem(theme),
    MuiExpansionPanel: anthraciteLightPanel,
    MuiExpansionPanelDetails: anthraciteLightPanelDetails,
    MuiExpansionPanelActions: anthraciteLightPanelActions,
    MuiPaper: anthracitePaper(theme),
    MuiSelect: anthraciteSelect(theme),
    MuiTable: anthraciteTable(theme),
    MuiTableRow: anthraciteTableRow(theme),
    MuiTablePagination: anthraciteTablePagination(theme),
    MuiTableCell: anthraciteTableCell(theme),
    MuiTab: anthraciteTab(theme),
    MuiTabs: anthraciteTabs(theme),
    MuiToolbar: anthraciteToolBar(theme),
    MuiTypography: anthraciteTypography(theme)
});

const anthraciteLightTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, anthraciteLightThemeConfig));
_.merge(anthraciteLightTheme, {overrides: anthraciteLightThemeOverrides(anthraciteLightTheme)});

const anthraciteDarkThemeConfig = {
    palette: anthraciteDarkPalette,
    shape,
    typography
};

const anthraciteDarkThemeOverrides = (theme) => ({
    MuiAppBar: anthraciteAppBar(theme),
    MuiButton: anthraciteButton(theme),
    MuiButtonBase: anthraciteButtonBase(theme),
    MuiIconButton: anthraciteIconButton(theme),
    MuiCard: anthraciteCard(theme),
    MuiCardContent: anthraciteCardContent(theme),
    MuiCardHeader: anthraciteCardHeader(theme),
    MuiCheckbox: anthraciteCheckbox(theme),
    MuiDialogTitle: anthraciteDialogTitle(theme),
    MuiDialog: anthraciteDialog(theme),
    MuiDialogActions: anthraciteDialogActions(theme),
    MuiFormLabel: anthraciteDarkFormLabel,
    MuiFormControlLabel: anthraciteDarkFormControlLabel,
    MuiInput: anthraciteInput(theme),
    MuiListItem: anthraciteDarkListItem,
    MuiListItemIcon: anthraciteDarkListItemIcon,
    MuiListItemSecondaryAction: anthraciteDarkListItemSecondaryAction,
    MuiListSubheader: anthraciteDarkListSubheader,
    MuiListItemText: anthraciteDarkListItemText,
    MuiMenu: anthraciteMenu(theme),
    MuiMenuItem: anthraciteMenuItem(theme),
    MuiExpansionPanel: anthraciteDarkPanel,
    MuiExpansionPanelDetails: anthraciteDarkPanelDetails,
    MuiExpansionPanelActions: anthraciteDarkPanelActions,
    MuiPaper: anthracitePaper(theme),
    MuiSelect: anthraciteSelect(theme),
    MuiTable: anthraciteTable(theme),
    MuiTableRow: anthraciteTableRow(theme),
    MuiTableCell: anthraciteTableCell(theme),
    MuiTab: anthraciteTab(theme),
    MuiTabs: anthraciteTabs(theme),
    MuiToolbar: anthraciteToolBar(theme),
    MuiTypography: anthraciteTypography(theme)
});

const anthraciteDarkTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, anthraciteDarkThemeConfig));
_.merge(anthraciteDarkTheme, {overrides: anthraciteDarkThemeOverrides(anthraciteDarkTheme)});


export {anthraciteLightTheme, anthraciteDarkTheme}
