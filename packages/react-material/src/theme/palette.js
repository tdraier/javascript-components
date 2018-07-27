import {colors} from "@material-ui/core";
import * as _ from 'lodash';

const commonPalette = {
    tonalOffset: 0.2,
    default: colors.grey[900],
    publish: {
        main: colors.deepOrange[500],
    },
    enabled: {
        main: colors.green[400],
    },
    delete: {
        main: colors.red[600],
    },
    cancelButton: {
        main: '#676767'
    },
    publicationStatus: {
        published: {
            main: '#08D000'
        },
        modified: {
            main: '#FB9926'
        },
        notPublished: {
            main: colors.grey[900]
        },
        mandatoryLanguageUnpublishable: {
            main: ''
        },
        liveModified: {
            main: ''
        },
        liveOnly: {
            main: ''
        },
        conflict: {
            main: ''
        },
        mandatoryLanguageValid: {
            main: ''
        },
        deleted: {
            main: '#FB9926'
        },
        markedForDeletion: {
            main: '#FB9926'
        }
    }
};

const paletteLight = _.merge({
    background: {
        default: colors.grey[200],
        global: colors.grey[200]
    },
    contrastThreshold: 3,
    primary: {
        main: colors.blueGrey[600]
    },
    secondary: {
        main: '#00a0e3'
    },
    error: {
        main: colors.red[400]
    },
    confirmColor: {
        main: '#00a0e3'
    }
}, commonPalette);

const paletteDark = _.merge({
    type: "dark",
    background: {
        default: colors.grey[900],
        global: colors.grey[900]
    },
    contrastThreshold: 3.0,
    primary: {
        main: colors.purple[500]
    },
    secondary: {
        main: colors.green[400]
    },
    error: {
        main: colors.red[200]
    },
    confirmColor: {
        main: colors.green[400]
    }
}, commonPalette);

export { paletteLight, paletteDark }