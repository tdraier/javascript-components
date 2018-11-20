const dsListItem = (theme) => ({
    "root": {
        "flex": "1"
    },
    "button":{
        "&[role=button]": {
            "boxShadow":"0px 5px 1px -4px rgba(38, 38, 38, 0.4)",
            "&:hover":{
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

const dsListItemIcon = {
    "root": {
        "marginRight": 0
    }
};

const dsListItemSecondaryAction = {
    "root":{
        "flex":"1",
        "position":"relative",
        "top":0,
        "transform": "none"
    }
};

const dsListItemText = {
    "root": {
        "padding": "0 10px"
    }
};

const dsListSubheader = {
    "root": {
        "textDecoration": "underline"
    }
};

export {
    dsListItemIcon,
    dsListItem,
    dsListItemSecondaryAction,
    dsListItemText,
    dsListSubheader
}
