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
            main: '#00a0e3',
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
        },
		cancelButton: {
			main: '#676767'
		},
		confirmColor: {
			main: '#00a0e3'
		}
    },
	overrides: {
		MuiList: {
			root: {
			}
		},
		MuiListItem: {
			root: {
			}
		},
		MuiListItemText: {
			root: {
			}

		},
		MuiDialogTitle: {
			root: {
				width: '600px',
				boxSizing: 'border-box',
				padding: '24px 24px 0px 24px',
				fontSize: '1rem',
			}
		},
		MuiDialogContent: {
			root: {
				padding: '4px 24px 10px 24px',
			},

		},
		MuiDialogContentText: {
			root: {
				fontSize: '0.875rem'
			}
		},
		MuiDialogActions: {
			root: {
				justifyContent: 'left',
				padding: '0 20px',
				marginTop: '30px',
			},
		},
		MuiSwitch: {
			root: {
				width: '52px'
			}
		},
        MuiButton: {
            root: {
                color: "inherit",
				padding: '8px',
				minWidth: '68px'
            },
			'&:hover': {
				background: 'red'
			}
        },
		MuiTableRow: {
			root: {
				borderBottom: '1px solid rgba(224, 224, 224, 1)',
				'&:hover': {
					backgroundColor: '#F7F7F7!important'
				}
			},
		},
        MuiTableCell: {
            body: {
                color: "inherit",
            }
        },
        MuiIconButton: {
            root: {
                color: "inherit",
				width: '38px',
            },

        },
        MuiCheckbox: {
            default: {
                color: "inherit",
            }
        },
		MuiFormControlLabel: {
			label: {
				color: '#676767',
				fontSize: '13px'
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
				boxShadow: 'inset 1px 1px 1px 0 rgba(38, 38, 38, 0.3)',
				borderRadius: '2px',
				background: 'whitesmoke',
				padding: '2px 11px 0',
				boxSizing: 'border-box',
			},
			input: {
				color: '#676767',
				fontSize: '0.8rem'
			}
		},
		MuiFormControl: {
			root: {
				width:"100%",
		        "& error": {
		        },
		        "& message": {
		            display:"none"
		        },
		        "& label": {
		        }
			}
		},
		MuiCollapse: {
			entered: {
				overflow: 'visible'
			}
		},
		MuiFormHelperText: {
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
				"&:hover message": {
					display: 'block'
				},
				"& error": {
		        },
		        "& message": {
					top: '24px',
				    width: '280px',
				    right: '0',
				    padding: '9px',
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
		        "& label": {
		        }
			}
		},
		MuiTypography: {
			root: {
			},
			body: {
				fontSize:'0.8rem'
			},
			colorTextSecondary: {
				color: 'rgba(0, 0, 0, 0.3)'
			},
			title: {
				fontSize: '1.2rem'
			},
			subheading: {
				fontSize: '0.875rem'
			},
			caption: {
				fontSize: '0.65rem',
				fontWeight: '800',
				textTransform: 'uppercase'
			}
		},
		MuiSelect: {
			root: {
				color: '#EBEBEB'
			},
			select: {},
			selectMenu: {
				color: 'whitesmoke',
				paddingRight: '23px',
				'&:focus': {
					backgroundColor: 'inherit'
				}
			},
			disabled: {},
			icon: {},
		},
		MuiMenuItem: {
			root: {
				backgroundColor: 'transparent!important',
				padding: '10px',
				paddingLeft: '10px',
				paddingRight: '10px',
			},
			selected: {
			}

		},
		MuiListItemText: {
			root: {
				padding: '0',
			}
		},
		MuiPaper: {
			root: {

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
