import {createMuiTheme} from 'material-ui';
import {blueGrey, deepOrange, green, grey, lightBlue, purple, red} from 'material-ui/colors/index'

// All the following keys are optional.
// We try our best to provide a great default value.
let theme = createMuiTheme({
	palette: {
        background: {
            global: grey[200],
        },
        contrastThreshold: 2.5,
        tonalOffset: 0.2,
        primary: {
            main: blueGrey[600],
        },
        secondary: {
            main: lightBlue[600],
        },
        error: {
            main: red[400],
        },
        publish: {
            main: deepOrange[500],
        },
        enabled: {
            main: green[400],
        },
        delete: {
            main: red[600],
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: "inherit",
            }
        },
		MuiTableRow: {
			root: {}
		},
        MuiTableCell: {
            body: {
                color: "inherit",
            }
        },
        MuiIconButton: {
            root: {
                color: "inherit",
				width: '38px'
            }
        },
		MuiInput: {
			root: {
				'&:before': {
					display: 'none'
				},
				'&:after': {
					display: 'none'
				},
				boxShadow: '2px 2px 3px 1px rgba(38,38,38,0.3)',
				background: 'white',
				padding: '2px 11px 0',
				boxSizing: 'border-box'
			},
			input: {
				color: '#00a0e3',
				fontSize: '0.875rem'
			}
		},
		MuiTypography: {
			root: {
			},
			subheading: {
				fontSize: '1.2rem'
			},
			caption: {
				fontWeight: '800',
				textTransform: 'uppercase'
			}
		}
    }
});

let darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            global: grey[900]
        },
        contrastThreshold: 3.0,
        tonalOffset: 0.2,
        primary: {
            main: purple[500]
        },
        secondary: {
            main: green[400]
        },
        error: {
            main: red[200]
        },
        publish: {
            main: deepOrange[500],
        },
        enabled: {
            main: green[400],
        },
        delete: {
            main: red[600],
        }
    },
    overrides: {
        MuiButton: {
            root: {
                color: "inherit",
            }
        },
        MuiTableCell: {
            body: {
                color: "inherit",
            }
        },
        MuiIconButton: {
            root: {
                color: "inherit",
            }
        }
    }
});


export {theme, darkTheme}
