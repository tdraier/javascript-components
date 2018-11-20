const dsButton = (theme) => ({
    "root": {
        "padding": ""+theme.spacing.unit * 3+ "px,"+theme.spacing.unit *2+"px",
        "textTransform": "none",
        "margin": theme.spacing.unit * 2
    },
    "fab": {
        "boxShadow": "0px 5px 1px -4px rgba(38, 38, 38, 0.4)"
    },
    "text": {
        "padding": 0,
        "boxShadow": "none",
        "minHeight": "auto",
        "minWidth": "auto",
        "&:hover": {
            "backgroundColor": "transparent"
        }
    },
    "contained": {
        "color": theme.palette.text.contrastText,
        "backgroundColor": theme.palette.text.secondary,
        "boxShadow": theme.shadows[4],
        "radius": "1px",
        "&:hover": {
            "boxShadow": theme.shadows[8],
        }
    },
    "containedPrimary": {
        "color": theme.palette.text.contrastText,
        "backgroundColor": theme.palette.primary.main,
        "&:hover": {
            "backgroundColor": theme.palette.primary.dark,
        }
    },
    "containedSecondary": {
        "color": theme.palette.text.contrastText,
        "backgroundColor": theme.palette.secondary.main,
        "&:hover": {
            "backgroundColor": theme.palette.secondary.dark,
        }
    },
    "textPrimary": {
        color: theme.palette.text.contrastText,
        "&:hover": {
            "backgroundColor": "transparent"
        }
    },
    "textSecondary": {
        color: theme.palette.text.contrastText,
        "&:hover": {
            "backgroundColor": "transparent"
        }
    }
});

const dsIconButton =  (theme) => ({
    "root":{
        "boxShadow": "none"
    }
});

const dsButtonBase = (theme) => ({
    "root": {}
});


export {dsButton, dsIconButton, dsButtonBase}
