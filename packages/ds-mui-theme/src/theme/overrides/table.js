const dsTable = (theme) => ({
    "root":{
        "overflow":"hidden"
    }
});

const dsTableCell = (theme) => ({
    "root": {
        "borderBottom": "none",
        "background": theme.palette.background.paper,
        "& svg": {
            "verticalAlign":"middle"
        },
        "& button": {
            "width":"unset",
            "height":"unset"
        },
        "&:last-child": {
            "paddingRight": 0
        }
    },
    "head": {
        "backgroundColor": theme.palette.background.paper,
        "boxShadow": "2px 1px 1px 0px rgba(20, 20, 21, 0.49)",
        "position": "relative",
    }
});

const dsTableRow = (theme) => ({
    "root": {
        "height": "48px"
    },
    "head": {
        "height": "56px"
    }
});


const dsTablePagination = (theme) => ({
    "root": {
    },
    "select": {
        boxShadow: "none",
    }
});

export {dsTable, dsTableCell, dsTableRow, dsTablePagination}
