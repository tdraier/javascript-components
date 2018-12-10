const dsFormControlLabel = (theme) => ({
    label: {
        color: theme.palette.background.default,
        fontWeight: "400",
        fontSize: "0.75rem"
    },
    disabled: {
        "& span": {
            color: theme.palette.background.default,
        },
        "& svg": {
            opacity: "0.3"
        }
    },
    labelPlacementStart: {
        flexDirection: "column-reverse",
        "& span": {
            alignSelf: "flex-start"
        }
    }
});

const dsFormLabel = (theme) => ({
    root: {
        color: theme.palette.background.default,
    },
    error: {
        color: theme.palette.background.default,
    }
});

export {dsFormControlLabel, dsFormLabel}
