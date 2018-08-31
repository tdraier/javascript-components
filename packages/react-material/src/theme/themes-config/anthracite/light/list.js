const anthraciteLightListItem =  {
    "root": {
        "flex": "1"
    },
    "button":{
        "&[role=button]": {
            "backgroundColor":"#d7dce0",
            "boxShadow":"0px 5px 1px -4px rgba(38, 38, 38, 0.4)",
            "&:hover":{
                "backgroundColor":"#d1d7dc"
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
}
const anthraciteLightListItemIcon =  {
    "root": {
        "marginRight": 0
    }
}

const anthraciteLightListItemSecondaryAction =  {
    "root":{
        "flex":"1",
        "position":"relative",
        "top":0,
        "transform": "none"
    }
};

const anthraciteLightListItemText =  {
    "root": {
        "padding": "0 10px"
    }
};

const anthraciteLightListSubheader=  {
    "root": {
        "textDecoration": "underline"
    }
};



export {anthraciteLightListItem, anthraciteLightListItemSecondaryAction, anthraciteLightListItemText, anthraciteLightListSubheader}