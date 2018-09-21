const anthraciteDialogTitle = (palette) => ({
    "root": {
        "paddingBottom": "6px"
    }
});

const anthraciteDialog = (palette) => ({
    "paper": {
        "backgroundColor": palette.background.paper
    },
    "paperFullScreen": {
        // "paddingBottom":"56px",
        "& header": {
            "& div": {
                "padding": "0!important"
            }
        },
        "& .footer": {
            // "background": palette.type.light ? "#363f45" : "#3b3d40",
            "bottom": "-8px",
            "left":"-4px",
            "position":"absolute",
            "width":"100%"
        }
    }
});

const anthraciteDialogActions = (palette) => ({
    "root": {
        "padding":"10px"
    },
    "action": {
        "boxShadow": "none"
    }
});

export {anthraciteDialogTitle, anthraciteDialog, anthraciteDialogActions}

