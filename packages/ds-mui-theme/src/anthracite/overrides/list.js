const anthraciteListItem = (theme) => ({
    "root": {
        "flex": "1"
    },
    "button":{
        "&[role=button]": {
            "backgroundColor": theme.palette.background.default,
            "boxShadow":"0px 5px 1px -4px rgba(38, 38, 38, 0.4)",
            "&:hover":{
                "backgroundColor": theme.palette.background.default,
            }
        }
    },
    "container": {
        "display":"flex"
    },
    "secondaryAction": {
        "flex":"1",
        "position":"relative",
        "top":0
    }
});

const anthraciteListItemIcon = {
    "root": {
        "marginRight": 0
    }
};

const anthraciteListItemSecondaryAction = {
    "root":{
        "flex":"1",
        "position":"relative",
        "top":0,
        "transform": "none"
    }
};

const anthraciteListItemText = {
    "root": {
        "padding": "0 10px"
    }
};

const anthraciteListSubheader = {
    "root": {
        "textDecoration": "underline"
    }
};

export {
    anthraciteListItemIcon,
    anthraciteListItem,
    anthraciteListItemSecondaryAction,
    anthraciteListItemText,
    anthraciteListSubheader
}