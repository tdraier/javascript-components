const anthraciteAppBar = (theme) => ({
    "root": {},
    "colorDefault": {
        "backgroundColor": "transparent",
        "boxShadow": "none",
        "paddingTop": "30px",
        "marginBottom": "30px"
    },
    "colorPrimary": {
        "backgroundColor": "transparent",
        "boxShadow": "none",
        "paddingTop": "30px",
        "marginBottom": "30px",
        "color": theme.palette.getContrastText(theme.palette.background.default),
    }
});

export {anthraciteAppBar}
