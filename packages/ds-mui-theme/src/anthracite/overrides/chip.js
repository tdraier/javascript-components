const anthraciteChip = (theme) => ({
    //change color to dark
    "root":{
        "backgroundColor": theme.palette.chip.background
    },
    "clickable":{
        "&:hover":{
            "backgroundColor": theme.palette.chip.background
        }
    },
    "avatar":{
        "backgroundColor": theme.palette.chip.background
    }
});

export {anthraciteChip}
