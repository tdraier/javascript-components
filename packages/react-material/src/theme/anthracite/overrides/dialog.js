const anthraciteDialogTitle = (theme) => ({
    "root": {
        "paddingBottom": "6px"
    }
});

const anthraciteDialog = (theme) => ({
    "paper": {
        "backgroundColor": theme.palette.background.paper
    },
    "paperFullScreen": {
        "& .footer": {
            // "background": palette.type.light ? "#363f45" : "#3b3d40",
            "bottom": "-8px",
            "left":"-4px",
            "position":"absolute",
            "width":"100%"
        }
    }
});

const anthraciteDialogActions = (theme) => ({
    "root": {
        "padding":"10px"
    },
    "action": {
        "boxShadow": "none"
    }
});

export {anthraciteDialogTitle, anthraciteDialog, anthraciteDialogActions}

