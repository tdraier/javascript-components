const anthraciteTable = () => ({
    root: {
        overflow: 'hidden'
    }
});

const anthraciteTableCell = theme => ({
    root: {
        borderBottom: 'none',
        padding: '8px',
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
        boxShadow: '2px 1px 1px 0px rgba(20, 20, 21, 0.49)',
        position: 'relative',
        background: theme.palette.background.paper
    }
});

const anthraciteTableRow = () => ({
    root: {
        height: '36px'
    },
    head: {
        height: 'unset'
    }
});

const anthraciteTablePagination = () => ({
    root: {},
    select: {
        boxShadow: 'none'
    }
});

export {
    anthraciteTable,
    anthraciteTableCell,
    anthraciteTableRow,
    anthraciteTablePagination
};
