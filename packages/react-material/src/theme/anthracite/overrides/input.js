const anthraciteInput = theme => ({
    root: {},
    error: {
        '& input': {
            backgroundColor: theme.palette.error.main,
            color: '#F5F5F5'
        },
        '& div div': {
            backgroundColor: theme.palette.error.main,
            color: '#F5F5F5'
        },
        '& svg': {
            color: '#F5F5F5'
        }
    },
    disabled: {
        '& input': {
            backgroundColor: '#b2bcc2',
            boxShadow: 'none'
        }
    },
    input: {
        backgroundColor: '#fcfdfd',
        color: '#504e4d',
        boxShadow: '0px 5px 1px -4px rgba(38, 38, 38, 0.4)',
        fontSize: '0.875rem',
        padding: '6px 10px',
        '&[readonly]': {
            backgroundColor: 'rgba(252, 253, 253, 0.5)',
            boxShadow: 'none'
        },
        '&[required]': {
            backgroundColor: '#fcfdfd'
        },
        '&:focus': {
            boxShadow: '0px 4px 1px -4px rgba(38, 38, 38, 0.4)!important'
        }
    },
    underline: {
        '&:after': {
            opacity: '0'
        }
    }
});

export {anthraciteInput};

