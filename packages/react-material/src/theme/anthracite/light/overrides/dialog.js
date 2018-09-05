const anthraciteLightDialogTitle = {
    "root": {
        "paddingBottom": "6px"
    }
};

const anthraciteLightDialog = {
    "paper": {
        "backgroundColor": "#e8ebed"
    },
    "paperFullScreen": {
        "paddingBottom":"56px",
        "& header": {
            "& div": {
                "padding": "0!important"
            }
        },
        "& .footer": {
            "background":"#363f45",
            "bottom": "-8px",
            "left":"-4px",
            "position":"absolute",
            "width":"100%"
        }
    }
};

const anthraciteLightDialogActions = {
    "root": {
        "padding":"10px"
    },
    "action": {
        "boxShadow": "none"
    }
};

export { anthraciteLightDialog, anthraciteLightDialogTitle, anthraciteLightDialogActions }