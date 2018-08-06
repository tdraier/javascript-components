import {createMuiTheme} from '@material-ui/core';
import {commonBaseThemeConfig} from './themes-config/common-base/config';
import {anthraciteThemeConfig} from "./themes-config/anthracite/config";
import {legacyThemeConfig} from "./themes-config/legacy/config";
import {darkThemeConfig} from "./themes-config/dark/config";
import * as _ from 'lodash';

// To add a new theme create a folder with the name of theme under themes-config
// Then create a config.js file that will export the config of your theme (palette and/or override)
// If you have overrides create a folder overrides and create files for your overrides (e.g: button.js, form.js, select.js, ...) look at
// legacy to have a better idea of what you need to do
// Then import your theme configuration here and merge it with commonBaseThemeConfig and export your theme, also remember to export your
// theme in index.js

// commonBaseThemeConfig should contains the default config to follow our current design guidelines, default colors, margin, width ...

const anthraciteTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, anthraciteThemeConfig));

const legacyTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, legacyThemeConfig));

const darkTheme = createMuiTheme(_.merge({}, commonBaseThemeConfig, darkThemeConfig));

export {anthraciteTheme, legacyTheme, darkTheme}
