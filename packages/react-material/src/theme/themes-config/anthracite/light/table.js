const anthraciteLightTable = {
    "root":{
        "overflow":"hidden"
    }
};

const anthraciteLightTableCell = {
    "root": {
        "borderBottom": "none",
        "padding":"8px",
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
        "boxShadow": "2px 1px 1px 0px rgba(20, 20, 21, 0.49)",
        "position": "relative",
        "background": "#F5F5F5"
    }
};

const anthraciteLightTableRow = {
    "root": {
        "height": "36px"
    },
    "head": {
        "height":"unset"
    }
};

export {anthraciteLightTable, anthraciteLightTableCell, anthraciteLightTableRow}