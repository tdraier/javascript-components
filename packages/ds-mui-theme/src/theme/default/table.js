const dsTable = () => ({

});
const dsTableCell = theme => ({
    root: {
        borderBottom: 'none',
        '& svg': {
            verticalAlign: 'middle'
        },
        '& button': {
            width: 'unset',
            height: 'unset'
        },
        '&:last-child': {
            paddingRight: 0
        }
    },
    head: {
        position: 'sticky',
        top: 0,
        backgroundColor: theme.palette.background.paper,
        zIndex: 2
    },
    body: {
        color: theme.palette.text.secondary
    }
});

const dsTableRow = () => ({
    root: {
        height: '48px'
    },
    head: {
        height: '56px'
    }
});

const dsTablePagination = () => ({
    root: {
    },
    select: {
        boxShadow: 'none'
    },
    caption: {
        fontSize: '0.65rem',
        fontWeight: '800',
        textTransform: 'uppercase'
    }
});

export {dsTable, dsTableCell, dsTableRow, dsTablePagination};
