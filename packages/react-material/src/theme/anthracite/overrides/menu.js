const anthraciteMenu = (theme) => ({
    "paper": {
        boxShadow: '1px 1px 3px 0px rgba(20, 20, 21, 0.49)',
        "backgroundColor":theme.palette.menu.background
    }
});

const anthraciteMenuItem = (theme) => ({
    "root": {
        "padding": "5px 17px",
        "fontSize": "0.875rem",
        "color": theme.palette.menu.text,
        "&:hover": {
            backgroundColor:theme.palette.menu.hover
        }
    },
    "selected":{
        "backgroundColor": theme.palette.menu.selected + "!important"
    }
});

export {anthraciteMenu, anthraciteMenuItem}