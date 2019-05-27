const dsListItem = theme => ({
    root: {
        flex: '1'
    },
    button: {
        '&[role=button]': {
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        }
    },
    container: {
        display: 'flex'
    },

    secondaryAction: {
        flex: '1',
        position: 'relative',
        top: 0
    }
});

const dsListItemIcon = {
    root: {
        marginRight: 0
    }
};

const dsListItemSecondaryAction = {
    root: {
        flex: '1',
        position: 'relative',
        top: 0,
        transform: 'none'
    }
};

const dsListItemText = {
    root: {
        padding: '0 10px',
        boxShadow: 'none'
    }
};

const dsListSubheader = {
    root: {
        textDecoration: 'underline'
    }
};

export {
    dsListItemIcon,
    dsListItem,
    dsListItemSecondaryAction,
    dsListItemText,
    dsListSubheader
};
