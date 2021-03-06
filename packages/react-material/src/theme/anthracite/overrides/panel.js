const anthracitePanel = theme => ({
    root: {
        transitionProperty: 'all',
        margin: '7px 40px',
        '&:before': {
            display: 'none'
        },
        '&:hover': {
            boxShadow: '0px 7px 4px -6px rgba(20, 20, 21, 0.25)'
        }
    },
    expanded: {
        margin: '10px 35px 40px',
        boxShadow: '0px 29px 11px -20px rgba(20, 20, 21, 0.35)',
        '&:first-child': {
            marginTop: '10px'
        },
        '&:hover': {
            boxShadow: '0px 28px 8px -22px rgba(20, 20, 21, 0.35)'
        }
    },
    disabled: {
        backgroundColor: theme.palette.panel.disabled,
        boxShadow: 'none',
        '&:hover': {
            boxShadow: 'none'
        }
    }
});

const anthracitePanelDetails = {
    root: {
        padding: '0 29px 40px'
    }
};

const anthracitePanelActions = theme => ({
    root: {
        padding: '10px',
        background: theme.palette.panel.background
    },
    action: {
        boxShadow: 'none',
        marginLeft: '5px'
    }
});

export {anthracitePanel, anthracitePanelDetails, anthracitePanelActions};
