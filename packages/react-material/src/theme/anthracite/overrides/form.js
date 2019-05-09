const anthraciteFormControlLabel = theme => ({
    label: {
        color: theme.palette.form.text,
        fontWeight: '400',
        fontSize: '0.75rem'
    },
    disabled: {
        '& span': {
            color: theme.palette.form.text
        },
        '& svg': {
            opacity: '0.3'
        }
    },
    labelPlacementStart: {
        flexDirection: 'column-reverse',
        '& span': {
            alignSelf: 'flex-start'
        }
    }
});

const anthraciteFormLabel = theme => ({
    root: {
        color: theme.palette.form.text
    },
    error: {
        color: theme.palette.form.text
    }
});

export {anthraciteFormControlLabel, anthraciteFormLabel};
