const anthraciteFormControlLabel = (theme) => ({
    "label": {
        "color": theme.palette.background.default,
        "fontWeight": "400",
        "fontSize": "0.75rem"
    },
    "disabled": {
        "& span": {
            "color": theme.palette.background.default,
        },
        "& svg": {
            "opacity": "0.3"
        }
    },
    "labelPlacementStart": {
        "flexDirection": "column-reverse",
        "& span": {
            "alignSelf": "flex-start"
        }
    }
});

const anthraciteFormLabel = (theme) => ({
    "root": {
        "color": theme.palette.background.default,
    },
    "error": {
        "color": theme.palette.background.default,
    }
});

export {anthraciteFormControlLabel, anthraciteFormLabel}
