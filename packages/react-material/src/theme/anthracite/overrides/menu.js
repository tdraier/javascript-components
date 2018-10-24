const anthraciteMenu = (theme) => ({
    "paper": {
        boxShadow: '1px 1px 3px 0px rgba(20, 20, 21, 0.49)'
    }
});

const anthraciteMenuItem = (theme) => ({
    "root": {
        "padding": "5px 17px",
        "fontSize": "0.875rem",
        "color": "#3a3c3f",
        "&:hover": {
            backgroundColor: "#d1d1d1"
        }
    },
    "selected":{
        "backgroundColor":"#007cb0!important"
    }
});

export {anthraciteMenu, anthraciteMenuItem}