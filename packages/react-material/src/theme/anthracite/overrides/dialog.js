const anthraciteDialogTitle = () => ({
    root: {
        paddingBottom: '6px'
    }
});

const anthraciteDialog = theme => ({
    paper: {
        backgroundColor: theme.palette.background.paper
    },
    paperFullScreen: {
        '& .footer': {
            // "background": palette.type.light ? "#363f45" : "#3b3d40",
            bottom: '-8px',
            left: '-4px',
            position: 'absolute',
            width: '100%'
        }
    }
});

const anthraciteDialogActions = () => ({
    root: {
        padding: '10px'
    },
    action: {
        boxShadow: 'none'
    }
});

const anthraciteDialogContent = () => ({
    root: {
        padding: '0 24px 0 24px'
    }
});

export {
    anthraciteDialogTitle,
    anthraciteDialog,
    anthraciteDialogActions,
    anthraciteDialogContent
};
