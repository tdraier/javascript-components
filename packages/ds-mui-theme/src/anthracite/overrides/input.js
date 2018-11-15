const anthraciteInput = (theme) => ({
    "root": {},
    "error": {
        "& input": {
            "backgroundColor": theme.palette.error.main,
            "color": theme.palette.text.contrastText
        },
        "& div div": {
            "backgroundColor": theme.palette.error.main,
            "color": theme.palette.text.contrastText
        },
        "& svg": {
            "color": "#F5F5F5"
        }
    },
    "disabled": {
        "& input": {
            "backgroundColor": "#b2bcc2",
            "boxShadow": "none"
        }
    },
    "input": {
        "backgroundColor": theme.palette.background.paper,
        "color": theme.palette.text.secondary,
        "boxShadow": "0px 5px 1px -4px rgba(38, 38, 38, 0.4)",
        "fontSize": "0.875rem",
        "padding": "6px 10px",
        "&[readonly]": {
            "backgroundColor": "rgba(252, 253, 253, 0.5)",
            "boxShadow": "none"
        },
        "&[required]": {
            "backgroundColor": theme.palette.background.paper,
        },
        "&:focus": {
            "boxShadow": "0px 4px 1px -4px rgba(38, 38, 38, 0.4)!important"
        }
    },
    "underline": {
        "&:after": {
            "opacity":"0"
        }
    }
});

export {anthraciteInput}



