const anthraciteMenu = (theme) => ({
    "paper": {
        boxShadow: '1px 1px 3px 0px rgba(20, 20, 21, 0.49)'
    }
});

const anthraciteMenuItem = (theme) => ({
    "root": {
        "padding": "5px 17px",
        "fontSize": "0.875rem",
        "color": theme.palette.background.default,
        "&:hover": {
            backgroundColor: theme.palette.text.secondary
        }
    },
    "selected":{
        "backgroundColor":"#007cb0!important"
    }
});

export {anthraciteMenu, anthraciteMenuItem}