const dsAppBar = (theme) => ({
    root: {
        boxShadow: theme.shadows[8],
    },
    colorDefault: {
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.text.textContrast
    },
    colorPrimary: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary
    }
});

export {dsAppBar}
