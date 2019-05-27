const dsDialogTitle = () => ({
    root: {
        paddingBottom: '6px'
    }
});

const dsDialog = theme => ({
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

const dsDialogActions = () => ({
    root: {
        padding: '10px'
    },
    action: {
        boxShadow: 'none'
    }
});

const dsDialogContent = () => ({
    root: {
        padding: '0 24px 0 24px'
    }
});

export {dsDialogTitle, dsDialog, dsDialogActions, dsDialogContent};

