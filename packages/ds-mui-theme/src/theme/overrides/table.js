const dsTable = (theme) => ({
    "root":{
        "overflow":"hidden"
    }
});

const dsTableCell = (theme) => ({
    "root": {
        "borderBottom": "none",
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
