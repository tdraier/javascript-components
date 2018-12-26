import {createMuiTheme} from '@material-ui/core';
import * as _ from 'lodash';

import {shape} from "./shape";
import {typography} from "./typography";

// Overrides
import {dsAppBar} from "./overrides/appbar";
import {dsAvatar} from "./overrides/avatar";
import {dsButton, dsButtonBase, dsIconButton} from "./overrides/button";
import {dsCard, dsCardContent, dsCardHeader} from "./overrides/card"
import {dsDialog, dsDialogActions, dsDialogTitle, dsDialogContent} from "./overrides/dialog";
import {dsDivider} from "./overrides/divider";
import {dsCheckbox} from "./overrides/checkbox";
import {dsInput, dsInputBase} from "./overrides/input";
import {dsMenu, dsMenuItem} from "./overrides/menu";
import {dsPaper} from "./overrides/paper";
import {dsSelect} from "./overrides/select";
import {dsIcons} from "./overrides/icon";
import {dsTable, dsTableCell, dsTableRow, dsTablePagination} from "./overrides/table";
import {dsTab, dsTabs} from "./overrides/tabs";
import {dsToolBar} from "./overrides/toolbar";
import {dsToggleButton}from "./overrides/toggle";
import {dsListItem, dsListItemSecondaryAction, dsListItemText, dsListSubheader, dsListItemIcon} from "./overrides/list";
import {dsTypography} from "./overrides/typography";
import {dsTooltip} from "./overrides/tooltips";
import {dsFormControlLabel, dsFormLabel} from "./overrides/form";
import {dsPanel, dsPanelActions, dsPanelDetails} from "./overrides/panel";
import {dsChip} from "./overrides/chip";
import {dsSnackbarContent} from "./overrides/snackbar";

// Import of Dark Jahia DS palette
import { dsGenericPalette } from './palette.js'

// import of Jahia DS shadows
import { dsShadows } from './shadows.js';

const dsGenericThemeConfig = {
    palette: dsGenericPalette,
    shape,
    typography,
    shadows : dsShadows
};

const dsThemeOverrides = (theme) => ({
    MuiAppBar: dsAppBar(theme),
    MuiAvatar: dsAvatar(theme),
    MuiButton: dsButton(theme),
    MuiButtonBase: dsButtonBase(theme),
    MuiIconButton: dsIconButton(theme),
    MuiCard: dsCard(theme),
    MuiCardContent: dsCardContent(theme),
    MuiCardHeader: dsCardHeader(theme),
    MuiCheckbox: dsCheckbox(theme),
    MuiChip: dsChip(theme),
    MuiDialogTitle: dsDialogTitle(theme),
    MuiDialog: dsDialog(theme),
    MuiDialogActions: dsDialogActions(theme),
    MuiDialogContent: dsDialogContent(theme),
    MuiDivider: dsDivider(theme),
    MuiFormLabel: dsFormLabel(theme),
    MuiFormControlLabel: dsFormControlLabel(theme),
    MuiInput: dsInput(theme),
    MuiInputBase: dsInputBase(theme),
    MuiListItem: dsListItem(theme),
    MuiListItemIcon: dsListItemIcon,
    MuiListItemSecondaryAction: dsListItemSecondaryAction,
    MuiListSubheader: dsListSubheader,
    MuiListItemText: dsListItemText,
    MuiMenu: dsMenu(theme),
    MuiMenuItem: dsMenuItem(theme),
    MuiExpansionPanel: dsPanel(theme),
    MuiExpansionPanelDetails: dsPanelDetails,
    MuiExpansionPanelActions: dsPanelActions(theme),
    MuiPaper: dsPaper(theme),
    MuiSelect: dsSelect(theme),
    MuiSnackbarContent: dsSnackbarContent(theme),
    MuiSvgIcon: dsIcons(theme),
    MuiTable: dsTable(theme),
    MuiTableRow: dsTableRow(theme),
    MuiTableCell: dsTableCell(theme),
    MuiTab: dsTab(theme),
    MuiTabs: dsTabs(theme),
    MuiToggleButton: dsToggleButton(theme),
    MuiToolbar: dsToolBar(theme),
    MuiTooltip: dsTooltip(theme),
    MuiTypography: dsTypography(theme)
});

const dsGenericTheme = createMuiTheme(dsGenericThemeConfig);
_.merge(dsGenericTheme, {overrides: dsThemeOverrides(dsGenericTheme)});

export {dsGenericTheme}
