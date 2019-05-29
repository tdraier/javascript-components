import {createMuiTheme} from '@material-ui/core';
import * as _ from 'lodash';

import {shape} from './shape';
import {typography} from './typography';
// Default
import {dsAppBar} from './default/appbar';
import {dsAvatar} from './default/avatar';
import {dsButton, dsButtonBase, dsIconButton} from './default/button';
import {dsCard, dsCardContent, dsCardHeader} from './default/card';
import {dsDialog, dsDialogActions, dsDialogContent, dsDialogTitle} from './default/dialog';
import {dsDivider} from './default/divider';
import {dsCheckbox} from './default/checkbox';
import {dsInput, dsInputBase} from './default/input';
import {dsMenu, dsMenuItem} from './default/menu';
import {dsPaper} from './default/paper';
import {dsSelect} from './default/select';
import {dsIcons} from './default/icon';
import {dsTable, dsTableCell, dsTableRow} from './default/table';
import {dsTab, dsTabs} from './default/tabs';
import {dsToolBar} from './default/toolbar';
import {dsToggleButton} from './default/toggle';
import {dsListItem, dsListItemIcon, dsListItemSecondaryAction, dsListItemText, dsListSubheader} from './default/list';
import {dsTypography} from './default/typography';
import {dsTooltip} from './default/tooltips';
import {dsFormControlLabel, dsFormLabel} from './default/form';
import {dsPanel, dsPanelActions, dsPanelDetails} from './default/panel';
import {dsChip} from './default/chip';
import {dsSnackbarContent} from './default/snackbar';
// Import of Dark Jahia DS palette
import {dsGenericPalette} from './palette.js';
// Import of Jahia DS shadows
import {dsShadows} from './shadows.js';

const dsGenericThemeConfig = {
    palette: dsGenericPalette,
    shape,
    typography,
    shadows: dsShadows
};

const dsThemeOverrides = theme => ({
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

export default dsGenericTheme;
