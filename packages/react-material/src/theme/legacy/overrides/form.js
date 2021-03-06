const legacyFormControlLabel = {
    label: {
        color: '#676767',
        fontSize: '13px'
    }
};

const legacyFormControl = {
    root: {
        width: '100%',
        '& error': {
        },
        '& message': {
            display: 'none'
        },
        '& label': {
        }
    }
};

const legacyFormHelperText = {
    root: {
        right: '10px',
        color: 'red',
        position: 'absolute',
        background: 'white',
        height: 'calc(100% - 6px)',
        top: '3px',
        margin: '0',
        marginTop: '0',
        lineHeight: '0.3rem',
        zIndex: '99',
        padding: '11px 5px 11px 11px',
        boxSizing: 'border-box',
        '&:hover message': {
            display: 'block'
        },
        '& error': {
        },
        '& message': {
            top: '24px',
            width: '280px',
            right: '0',
            zIndex: '9',
            display: 'none',
            position: 'absolute',
            background: '#fc922f',
            boxShadow: '1px 1px 2px 0px rgba(38, 38, 38, 0.3)',
            borderRadius: '2px',
            color: 'white',
            padding: '14px',
            lineHeight: 'normal'
        },
        '& label': {
        }
    }
};

export {legacyFormControlLabel, legacyFormControl, legacyFormHelperText};
