import {colors} from "@material-ui/core";

const dsGenericPalette = {
    type: "light",
    contrastThreshold: 3,
    tonalOffset: 0.2,
    common: {
        black: "#1f262a",
        white: "#FFFFFF"
    },
    primary: {
        main: "#007cb0",
        dark: "#005F87",
        light: "#009bdc",
    },
    secondary: {
        main: "#e57834",
        dark: "#bd5715",
        light: "#f57c30",
    },
    layout: {
        main: "#4e5156",
        dark: "#3b3d40"
    },
    text: {
        primary: "#1f262a",
        secondary: "#393B3C",
        hint: "#006f9e",
        disabled: "#91A3ae",
        contrastText: "#ffffff",
    },
    border: {
        main: "#D8DEE3"
    },
    valid: {
        main: "#13bd76",
    },
    error: {
        main: "#BD1330",
        light: "#e32646",
    },
    warning: {
        main: "#f6d62f",
    },
    background: {
        paper: "#ffffff",
        default: "#eff2f4",
        dark: "#1F262A"
    },
    publicationStatus: {
        published: {
            main: '#00aa4f'
        },
        modified: {
            main: '#EF6C00'
        },
        notPublished: {
            main: colors.grey[900]
        },
        mandatoryLanguageUnpublishable: {
            main: '#F6D62F'
        },
        liveModified: {
            main: '#F6D62F'
        },
        liveOnly: {
            main: '#F6D62F'
        },
        conflict: {
            main: '#F6D62F'
        },
        mandatoryLanguageValid: {
            main: '#F6D62F'
        },
        deleted: {
            main: '#FB9926'
        },
        markedForDeletion: {
            main: '#CC0000'
        },
        unpublished: {
            main: '#CECECE'
        }
    },
    // TODO: Need a standardization of names
    confirmColor: {
        main: '#00a0e3'
    },
    publish: {
        main: colors.deepOrange[500]
    },
    enabled: {
        main: colors.green[400]
    },
    delete: {
        main: colors.red[600]
    },
    cancelButton: {
        main: '#676767'
    },
    status: {
        add: "#8ce385",
        overwrite: '#e3a35b',
    }
};

export {dsGenericPalette}
