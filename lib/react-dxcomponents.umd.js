(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('material-ui'), require('material-ui/styles/index'), require('i18next'), require('i18next-xhr-backend'), require('i18next-chained-backend'), require('lodash'), require('redux'), require('material-ui/colors/index'), require('@jahia/apollo-dx'), require('react-apollo'), require('react-redux'), require('react-i18next'), require('react-router-dom'), require('history'), require('react-router'), require('prop-types'), require('react-jss'), require('material-ui-icons'), require('graphql-tag'), require('material-ui/styles/colorManipulator')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'material-ui', 'material-ui/styles/index', 'i18next', 'i18next-xhr-backend', 'i18next-chained-backend', 'lodash', 'redux', 'material-ui/colors/index', '@jahia/apollo-dx', 'react-apollo', 'react-redux', 'react-i18next', 'react-router-dom', 'history', 'react-router', 'prop-types', 'react-jss', 'material-ui-icons', 'graphql-tag', 'material-ui/styles/colorManipulator'], factory) :
	(factory((global.jahia = global.jahia || {}, global.jahia.reactcomponents = {}),global.React,global.materialUi,global.materialUiStyles,global.i18n,global.XHR,global.ChainedBackend,global._,global.redux,global.index$1,global.jahia.apollodx,global.reactApollo,global.reactRedux,global.reactI18next,global.reactRouterDom,global.history,global.reactRouter,global.PropTypes,global.reactJss,global.materialUiIcons,global.gql,global.colorManipulator));
}(this, (function (exports,React,materialUi,index,i18n,XHR,ChainedBackend,_,redux,index$1,apolloDx,reactApollo,reactRedux,reactI18next,reactRouterDom,history,reactRouter,PropTypes,reactJss,materialUiIcons,gql,colorManipulator) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
i18n = i18n && i18n.hasOwnProperty('default') ? i18n['default'] : i18n;
XHR = XHR && XHR.hasOwnProperty('default') ? XHR['default'] : XHR;
ChainedBackend = ChainedBackend && ChainedBackend.hasOwnProperty('default') ? ChainedBackend['default'] : ChainedBackend;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();



var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};









var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function getI18n(options) {

    var backends = [XHR];
    var backendOptions = [{
        loadPath: (options.contextPath ? options.contextPath : '') + '/modules/{{ns}}/javascript/locales/{{lng}}.json'
    }];

    if (options['getData']) {
        var getData = options['getData'];
        backends.splice(0, 0, XHR);
        backendOptions.splice(0, 0, {
            loadPath: "{{ns}}/{{lng}}",
            ajax: function ajax(url, options, callback, data) {
                var _url$split = url.split('/'),
                    _url$split2 = slicedToArray(_url$split, 2),
                    ns = _url$split2[0],
                    lang = _url$split2[1];

                var value = getData(ns, lang);
                if (value) {
                    callback(JSON.stringify(value), { status: 200 });
                } else {
                    callback(null, { status: 400 });
                }
            }
        });
    }

    var defaults$$1 = {
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        },

        // react i18next special options (optional)
        react: {
            wait: true,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },

        backend: {
            backends: backends,
            backendOptions: backendOptions
        }
    };

    options = _.merge(defaults$$1, options);

    i18n.use(ChainedBackend).init(options);
    return i18n;
}

var reducers = {};

var store = function () {
    var debugTool = void 0;
    if (typeof window !== 'undefined') {
        debugTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
            name: "DX Redux",
            instanceId: "dx"
        });
    }

    return redux.createStore(function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];
        return _.mapValues(reducers, function (value, key) {
            return value(state[key], action);
        });
    }, debugTool);
}();

var resetStateReducer = function resetStateReducer(state, action) {
    if (action.type === 'RESET_STATE') {
        return undefined;
    }
    return state;
};

var _overrides;

// All the following keys are optional.
// We try our best to provide a great default value.
var theme = materialUi.createMuiTheme({
	palette: {
		background: {
			global: index$1.grey[200]
		},
		contrastThreshold: 2.5,
		tonalOffset: 0.2,
		primary: {
			main: index$1.blueGrey[600]
		},
		secondary: {
			main: '#00a0e3'
		},
		error: {
			main: index$1.red[400]
		},
		publish: {
			main: index$1.deepOrange[500]
		},
		enabled: {
			main: index$1.green[400]
		},
		delete: {
			main: index$1.red[600]
		},
		cancelButton: {
			main: '#676767'
		},
		confirmColor: {
			main: '#00a0e3'
		}
	},
	overrides: (_overrides = {
		MuiList: {
			root: {}
		},
		MuiListItem: {
			root: {}
		},
		MuiListItemText: {
			root: {}

		},
		MuiDialogTitle: {
			root: {
				width: '600px',
				boxSizing: 'border-box',
				padding: '24px 24px 0px 24px',
				fontSize: '1rem'
			}
		},
		MuiDialogContent: {
			root: {
				padding: '4px 24px 10px 24px'
			}

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
				marginTop: '30px'
			}
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
			}
		},
		MuiTableCell: {
			body: {
				color: "inherit"
			}
		},
		MuiIconButton: {
			root: {
				color: "inherit",
				width: '38px'
			}
		},
		MuiCheckbox: {
			default: {
				color: "inherit"
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
				boxSizing: 'border-box'
			},
			input: {
				color: '#676767',
				fontSize: '0.8rem'
			}
		},
		MuiFormControl: {
			root: {
				width: "100%",
				"& error": {},
				"& message": {
					display: "none"
				},
				"& label": {}
			}
		},
		MuiFormHelperText: {
			root: {
				right: '10px',
				color: 'red',
				position: 'absolute',
				background: 'whitesmoke',
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
				"& error": {},
				"& message": defineProperty({
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
					color: 'white'
				}, 'padding', '14px'),
				"& label": {}
			}
		},
		MuiTypography: {
			root: {},
			body: {
				fontSize: '0.8rem'
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
			icon: {}
		},
		MuiMenuItem: {
			root: {
				backgroundColor: 'transparent!important',
				padding: '10px',
				paddingLeft: '10px',
				paddingRight: '10px'
			},
			selected: {}

		}
	}, defineProperty(_overrides, 'MuiListItemText', {
		root: {
			padding: '0'
		}
	}), defineProperty(_overrides, 'MuiPaper', {
		root: {}
	}), _overrides)
});

var darkTheme = materialUi.createMuiTheme({
	palette: {
		type: "dark",
		background: {
			global: index$1.grey[900]
		},
		contrastThreshold: 3.0,
		tonalOffset: 0.2,
		primary: {
			main: index$1.purple[500]
		},
		secondary: {
			main: index$1.green[400]
		},
		error: {
			main: index$1.red[200]
		},
		publish: {
			main: index$1.deepOrange[500]
		},
		enabled: {
			main: index$1.green[400]
		},
		delete: {
			main: index$1.red[600]
		}
	},
	overrides: {
		MuiButton: {
			root: {
				color: "inherit"
			}
		},
		MuiTableCell: {
			body: {
				color: "inherit"
			}
		},
		MuiIconButton: {
			root: {
				color: "inherit"
			}
		}
	}
});

exports.ThemeTester = function (_React$Component) {
    inherits(ThemeTester, _React$Component);

    function ThemeTester(props) {
        classCallCheck(this, ThemeTester);

        var _this = possibleConstructorReturn(this, (ThemeTester.__proto__ || Object.getPrototypeOf(ThemeTester)).call(this, props));

        _this.switch = _this.switch.bind(_this);

        _this.themes = [theme, darkTheme];
        _this.state = {
            checked: false
        };
        return _this;
    }

    createClass(ThemeTester, [{
        key: 'switch',
        value: function _switch() {
            var _this2 = this;

            this.setState(function (previous) {
                _this2.props.dxContext.setTheme(previous.checked ? theme : darkTheme);
                return {
                    checked: !previous.checked
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React__default.createElement(materialUi.Switch, { color: 'default', onChange: this.switch, checked: this.state.checked });
        }
    }]);
    return ThemeTester;
}(React__default.Component);

exports.ThemeTester = withDxContext()(exports.ThemeTester);

function createOutletHistory(baseHistory, outletName) {
    var _this = this;

    var getPath = function getPath(path) {
        var parts = [];
        var base = baseHistory.location.pathname;
        var newPath = outletName + ':' + path;
        if (base.indexOf('(') > -1) {
            base = base.substr(base.indexOf('(') + 1);
            base = base.substr(0, base.indexOf(')'));
            parts = base.split('//');
            parts = _.map(parts, function (p) {
                return p.startsWith(outletName + ':') ? newPath : p;
            });
        }
        if (parts.indexOf(newPath) === -1) {
            parts.push(newPath);
        }
        return '/(' + _.join(parts, '//') + ')';
    };

    var getState = function getState(state) {
        var newState = void 0;
        if (state) {
            newState = baseHistory.location.state ? baseHistory.location.state : {};
            newState['router_' + outletName] = state;
        } else if (baseHistory.location.state) {
            newState = baseHistory.location.state;
            delete newState['router_' + outletName];
        }
        return newState;
    };

    var extractPath = function extractPath(base) {
        if (base.indexOf('(') > -1) {
            base = base.substr(base.indexOf('(') + 1);
            base = base.substr(0, base.indexOf(')'));
            var parts = base.split('//');
            var s = outletName + ':';
            var part = _.find(parts, function (p) {
                return p.startsWith(s);
            });
            if (part) {
                return part.substr(s.length);
            }
        }
        return '';
    };

    var initialLocation = _.clone(baseHistory.location);
    initialLocation.pathname = extractPath(initialLocation.pathname);

    var listeners = [];

    var history$$1 = {
        length: baseHistory.length,
        action: baseHistory.action,
        location: initialLocation,
        createHref: function createHref(location) {
            return baseHistory.createHref({ pathname: getPath(location.pathname) });
        },
        push: function push(path, state) {
            return baseHistory.push(getPath(path), getState(state));
        },
        replace: function replace(path, state) {
            baseHistory.replace(getPath(path), getState(state));
        },
        go: function go(n) {
            baseHistory.go(n);
        },
        goBack: function goBack() {
            baseHistory.goBack();
        },
        goForward: function goForward() {
            baseHistory.goForward();
        },
        block: function block(prompt) {
            return baseHistory.block(prompt);
        },
        listen: function listen(listener) {
            listeners.push(listener);
            return function () {
                _.pull(listeners, listener);
            };
        },
        dispose: function dispose() {
            unlisten();
        }
    };

    var unlisten = baseHistory.listen(function (event) {
        var path = extractPath(event.pathname);
        var state = void 0;
        if (event.state && event.state['router_' + outletName]) {
            state = event.state['router_' + outletName];
        }
        if (history$$1.location.pathname !== path || history$$1.location.state !== state) {
            Object.assign(history$$1.location, event);
            history$$1.location.pathname = path;
            history$$1.location.state = state;
            _.each(listeners, function (listener) {
                return listener.call(_this, history$$1.location);
            });
        }
    });

    // unlisten when not used anymore !

    return history$$1;
}

var OutletRouter = function (_React$Component) {
    inherits(OutletRouter, _React$Component);

    function OutletRouter(props) {
        classCallCheck(this, OutletRouter);

        var _this = possibleConstructorReturn(this, (OutletRouter.__proto__ || Object.getPrototypeOf(OutletRouter)).call(this, props));

        var baseHistory = history.createHashHistory();
        _this.outletHistory = createOutletHistory(baseHistory, props.outlet);
        return _this;
    }

    createClass(OutletRouter, [{
        key: "componentWillMount",
        value: function componentWillMount() {}
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.outletHistory.dispose();
        }
    }, {
        key: "render",
        value: function render() {
            return React__default.createElement(
                reactRouter.Router,
                { history: this.outletHistory },
                this.props.children
            );
        }
    }]);
    return OutletRouter;
}(React__default.Component);

var NotificationProvider = function (_Component) {
    inherits(NotificationProvider, _Component);

    function NotificationProvider(props) {
        classCallCheck(this, NotificationProvider);

        var _this = possibleConstructorReturn(this, (NotificationProvider.__proto__ || Object.getPrototypeOf(NotificationProvider)).call(this, props));

        var notificationContext = _this.props.notificationContext;


        _this.state = {
            notification: {
                message: "",
                open: false
            }
        };

        notificationContext.notify = function (message) {
            _this.setState({
                notification: {
                    message: message,
                    open: true
                }
            });
        };

        notificationContext.closeNotification = function () {
            _this.setState({
                notification: {
                    message: '',
                    open: false
                }
            });
        };
        return _this;
    }

    createClass(NotificationProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                notificationContext: this.props.notificationContext
            };
        }
    }, {
        key: 'render',
        value: function render() {
            // TODO make it configurable
            return React__default.createElement(
                'div',
                null,
                this.props.children,
                React__default.createElement(materialUi.Snackbar, {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    autoHideDuration: 5000,
                    onClose: this.props.notificationContext.closeNotification,
                    open: this.state.notification.open,
                    SnackbarContentProps: {
                        'aria-describedby': 'message-id'
                    },
                    message: React__default.createElement(
                        'span',
                        { id: 'message-id' },
                        this.state.notification.message
                    )
                })
            );
        }
    }]);
    return NotificationProvider;
}(React.Component);

NotificationProvider.propTypes = {
    notificationContext: PropTypes.object.isRequired
};

NotificationProvider.childContextTypes = {
    notificationContext: PropTypes.object.isRequired
};

var DxContextProvider = function (_React$Component) {
    inherits(DxContextProvider, _React$Component);

    function DxContextProvider(props) {
        classCallCheck(this, DxContextProvider);

        var _this = possibleConstructorReturn(this, (DxContextProvider.__proto__ || Object.getPrototypeOf(DxContextProvider)).call(this, props));

        var _this$props = _this.props,
            dxContext = _this$props.dxContext,
            children = _this$props.children,
            i18n$$1 = _this$props.i18n,
            apollo = _this$props.apollo,
            redux$$1 = _this$props.redux,
            mui = _this$props.mui,
            router = _this$props.router,
            apolloClient = _this$props.apolloClient;

        var state = {};
        if (mui) {
            if ((typeof mui === 'undefined' ? 'undefined' : _typeof(mui)) === 'object') {
                state.currentTheme = mui;
            } else {
                state.currentTheme = theme;
            }
            dxContext.setTheme = function (theme) {
                // theTheme = _.merge({}, theme, this.state.theme);
                _this.setState({
                    currentTheme: theme
                });
            };
        }

        if (dxContext.apolloClient) {
            state.apolloClient = dxContext.apolloClient;
        } else if (apolloClient) {
            state.apolloClient = apolloClient;
        } else if (apollo) {
            var options = { contextPath: dxContext.contextPath };
            if ((typeof apollo === 'undefined' ? 'undefined' : _typeof(apollo)) === 'object') {
                Object.assign(options, apollo);
            }
            state.apolloClient = apolloDx.client(options);
        }

        _this.state = state;
        return _this;
    }

    createClass(DxContextProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { dxContext: this.props.dxContext };
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                dxContext = _props.dxContext,
                children = _props.children,
                i18n$$1 = _props.i18n,
                apollo = _props.apollo,
                redux$$1 = _props.redux,
                mui = _props.mui,
                router = _props.router;
            var _state = this.state,
                currentTheme = _state.currentTheme,
                apolloClient = _state.apolloClient;


            var Component$$1 = React__default.Children.only(children);
            if (i18n$$1) {
                var options = { lng: dxContext.uilang, contextPath: dxContext.contextPath };
                if ((typeof i18n$$1 === 'undefined' ? 'undefined' : _typeof(i18n$$1)) === 'object') {
                    Object.assign(options, i18n$$1);
                }
                Component$$1 = React__default.createElement(reactI18next.I18nextProvider, { i18n: getI18n(options) }, Component$$1);
            }
            if (router) {
                var _router = reactRouterDom.HashRouter;
                var _options = {};
                if ((typeof _router === 'undefined' ? 'undefined' : _typeof(_router)) === 'object') {
                    if (_router.type === 'outlet') {
                        _router = OutletRouter;
                        _options.outlet = _router.outlet;
                    }
                }
                Component$$1 = React__default.createElement(reactRouterDom.HashRouter, _options, Component$$1);
            }
            if (apolloClient) {
                Component$$1 = React__default.createElement(reactApollo.ApolloProvider, { client: apolloClient }, Component$$1);
            }
            if (redux$$1) {
                Component$$1 = React__default.createElement(reactRedux.Provider, { store: store }, Component$$1);
            }

            if (currentTheme) {
                var generateClassName = dxContext.generateClassName ? dxContext.generateClassName : index.createGenerateClassName();
                var sheetsRegistry = dxContext.sheetRegistry ? dxContext.sheetRegistry : new reactJss.SheetsRegistry();

                Component$$1 = React__default.createElement(reactJss.JssProvider, { registry: sheetsRegistry, generateClassName: generateClassName }, React__default.createElement(materialUi.MuiThemeProvider, { theme: currentTheme, sheetsManager: new Map() }, React__default.createElement(NotificationProvider, { notificationContext: {} }, Component$$1)));
            }

            return Component$$1;
        }
    }]);
    return DxContextProvider;
}(React__default.Component);

DxContextProvider.childContextTypes = {
    dxContext: PropTypes.object
};

function withDxContext() {
    return function (WrappedComponent) {
        var Component$$1 = function (_React$Component) {
            inherits(Component$$1, _React$Component);

            function Component$$1() {
                classCallCheck(this, Component$$1);
                return possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).apply(this, arguments));
            }

            createClass(Component$$1, [{
                key: 'render',
                value: function render() {
                    return React__default.createElement(WrappedComponent, _extends({ dxContext: this.context.dxContext }, this.props));
                }
            }]);
            return Component$$1;
        }(React__default.Component);

        Component$$1.contextTypes = {
            dxContext: PropTypes.object
        };

        return Component$$1;
    };
}

exports.LanguageSwitcher = function (_React$Component) {
    inherits(LanguageSwitcher, _React$Component);

    function LanguageSwitcher(props, context) {
        classCallCheck(this, LanguageSwitcher);

        var _this = possibleConstructorReturn(this, (LanguageSwitcher.__proto__ || Object.getPrototypeOf(LanguageSwitcher)).call(this, props, context));

        _this.state = {
            anchorEl: null
        };
        return _this;
    }

    createClass(LanguageSwitcher, [{
        key: 'handleClick',
        value: function handleClick(event) {
            this.setState({ anchorEl: event.target });
        }
    }, {
        key: 'handleClose',
        value: function handleClose(lang) {
            this.setState({ anchorEl: null });
            if (lang) {
                this.context.i18n.changeLanguage(lang);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var availableLocales = ['fr', 'en'];

            return React__default.createElement(
                'div',
                null,
                React__default.createElement(
                    materialUi.Button,
                    { onClick: this.handleClick.bind(this)
                    },
                    this.props.t('label.languages')
                ),
                React__default.createElement(
                    materialUi.Menu,
                    { open: Boolean(this.state.anchorEl), onClose: this.handleClose.bind(this, null),
                        anchorEl: this.state.anchorEl },
                    availableLocales.map(function (locale) {
                        return React__default.createElement(
                            materialUi.MenuItem,
                            { onClick: _this2.handleClose.bind(_this2, locale), key: locale,
                                value: locale },
                            locale
                        );
                    })
                )
            );
        }
    }]);
    return LanguageSwitcher;
}(React__default.Component);

exports.LanguageSwitcher.contextTypes = {
    i18n: PropTypes.object
};

exports.LanguageSwitcher = reactI18next.translate('react-dxcomponents')(exports.LanguageSwitcher);

var styles = function styles(theme) {
    return {
        root: {
            backgroundColor: theme.palette.background.global
        },
        main: {
            minHeight: 'calc(100% - 96px)',
            marginTop: 64,
            padding: 1
        },
        footer: {
            fontSize: '14px',
            fontFamily: theme.typography.fontFamily,
            fontWeight: 300,
            padding: "8px",
            textAlign: "center",
            color: theme.palette.text.secondary
        },
        appBar: {
            transition: "all 200ms ease-in-out"
        }
    };
};

exports.SettingsLayout = function (_React$Component) {
    inherits(SettingsLayout, _React$Component);

    function SettingsLayout(props) {
        classCallCheck(this, SettingsLayout);
        return possibleConstructorReturn(this, (SettingsLayout.__proto__ || Object.getPrototypeOf(SettingsLayout)).call(this, props));
    }

    createClass(SettingsLayout, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                appBar = _props.appBar,
                children = _props.children,
                footer = _props.footer,
                appBarStyle = _props.appBarStyle;

            return React__default.createElement(
                'section',
                { className: classes.root },
                React__default.createElement(
                    materialUi.AppBar,
                    { position: 'fixed', classes: { root: classes.appBar }, style: appBarStyle },
                    appBar
                ),
                React__default.createElement(
                    'section',
                    { className: classes.main },
                    children
                ),
                React__default.createElement(
                    'footer',
                    { className: classes.footer },
                    footer
                )
            );
        }
    }]);
    return SettingsLayout;
}(React__default.Component);

exports.SettingsLayout.propTypes = {
    appBar: PropTypes.element,
    footer: PropTypes.string
};

exports.SettingsLayout = materialUi.withStyles(styles)(exports.SettingsLayout);

var styles$1 = function styles(theme) {
    return {
        root: {
            margin: '0',
            color: 'inherit',
            backgroundColor: theme.palette.primary.light,
            width: '720px',
            height: '44px',
            lineHeight: '40px',
            borderRadius: '3px',
            fontWeight: '200'
        },
        rootFocus: {
            margin: '0',
            color: theme.palette.text.secondary,
            backgroundColor: '#fff',
            width: '720px',
            height: '44px',
            lineHeight: '40px',
            borderRadius: '3px',
            fontWeight: '100',
            boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.4)"
            // '& $input': {
            //     width: '300px'
            // }
        },
        input: {
            transitionProperty: 'width',
            transitionDuration: '300ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0ms'

        },
        searchIcon: {
            'marginTop': 'auto',
            'marginBottom': 'auto',
            'paddingLeft': '14px',
            'opacity': '0.87'
        },
        hidden: {
            opacity: 0,
            marginTop: 'auto',
            marginBottom: 'auto'
        },
        closeIcon: {
            marginTop: 'auto',
            marginBottom: 'auto',
            opacity: 0.87
        }
    };
};

exports.SearchBar = function (_React$Component) {
    inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        classCallCheck(this, SearchBar);

        var _this = possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        _this.onClear = _this.onClear.bind(_this);
        _this.state = {
            focus: false
        };
        return _this;
    }

    createClass(SearchBar, [{
        key: 'handleChange',
        value: function handleChange(event) {
            // Let the handler deal with the change only when the user has paused changing the filter text for a second.
            event.persist();
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function () {
                this.props.onChangeFilter(event.target.value);
            }.bind(this), 1000);
        }
    }, {
        key: 'onClear',
        value: function onClear() {
            this.inputSearchBar.value = '';
            this.props.onChangeFilter('');
        }
    }, {
        key: 'onFocus',
        value: function onFocus() {
            this.setState({
                focus: true
            });
            this.props.onFocus();
        }
    }, {
        key: 'onBlur',
        value: function onBlur() {
            this.setState({
                focus: false
            });
            this.props.onBlur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                classes = _props.classes,
                t = _props.t,
                placeholderLabel = _props.placeholderLabel;


            return React__default.createElement(materialUi.Input, { classes: { root: this.state.focus ? classes.rootFocus : classes.root, input: classes.input },
                onChange: this.handleChange,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                disableUnderline: true,
                type: 'text',
                inputRef: function inputRef(input) {
                    _this2.inputSearchBar = input;
                },
                placeholder: placeholderLabel || t('label.searchPlaceholder'),
                startAdornment: React__default.createElement(
                    materialUi.InputAdornment,
                    { classes: { root: classes.searchIcon }, position: 'start' },
                    React__default.createElement(materialUiIcons.Search, null)
                ),
                endAdornment: React__default.createElement(
                    materialUi.InputAdornment,
                    { position: 'end', classes: { root: this.state.focus ? classes.closeIcon : classes.hidden } },
                    React__default.createElement(
                        materialUi.IconButton,
                        { onClick: this.onClear },
                        React__default.createElement(
                            materialUi.Icon,
                            null,
                            React__default.createElement(materialUiIcons.Close, null)
                        )
                    )
                ),
                style: this.props.style
            });
        }
    }]);
    return SearchBar;
}(React__default.Component);

exports.SearchBar = materialUi.withStyles(styles$1)(reactI18next.translate('react-dxcomponents')(exports.SearchBar));

var _templateObject = taggedTemplateLiteral(['\n            query NodeQuery($path:String!, $workspace:Workspace!) {\n                jcr(workspace:$workspace) {\n                    workspace\n                    node:nodeByPath(path: $path) {\n                        workspace\n                        path\n                        uuid\n                        ... node\n                    }\n                }\n            }'], ['\n            query NodeQuery($path:String!, $workspace:Workspace!) {\n                jcr(workspace:$workspace) {\n                    workspace\n                    node:nodeByPath(path: $path) {\n                        workspace\n                        path\n                        uuid\n                        ... node\n                    }\n                }\n            }']);

function withNodeFromPath(fragments) {
    return function (ViewComponent) {
        // GraphQL maps
        var mapResultsToProps = function mapResultsToProps(_ref) {
            var data = _ref.data,
                ownProps = _ref.ownProps;

            var node = void 0;

            if (data.jcr && data.jcr.node) {
                node = data.jcr.node;
            }

            return _extends({}, ownProps, {
                node: node
            });
        };

        var mapPropsToOptions = function mapPropsToOptions(props) {
            var vars = {
                path: props.path,
                workspace: props.workspace ? props.workspace : 'EDIT'
            };
            if (props.queryVariables) {
                _.assign(vars, props.queryVariables);
            }

            return {
                variables: vars,
                skip: !props.path
            };
        };

        var query = gql(_templateObject);

        apolloDx.replaceFragmentsInDocument(query, fragments);

        return reactApollo.graphql(query, {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(ViewComponent);
    };
}

var _templateObject$1 = taggedTemplateLiteral(['\n            query NodesQuery($path:String!, $types:[String]!) {\n                jcr {\n                    node:nodeByPath(path: $path) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }'], ['\n            query NodesQuery($path:String!, $types:[String]!) {\n                jcr {\n                    node:nodeByPath(path: $path) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }']);

function withNodesFromPath(fragments) {
    return function (ViewComponent) {
        // GraphQL maps
        var mapResultsToProps = function mapResultsToProps(_ref) {
            var data = _ref.data,
                ownProps = _ref.ownProps;

            var nodes = [];

            var jcr = data.jcr;

            if (jcr) {
                if (jcr.node) {
                    nodes = jcr.node.children.nodes;
                }
            }

            return _extends({}, ownProps, {
                nodes: nodes
            });
        };

        var mapPropsToOptions = function mapPropsToOptions(props) {
            var vars = {
                path: props.path,
                types: props.types
            };
            if (props.queryVariables) {
                _.assign(vars, props.queryVariables);
            }

            return {
                variables: vars,
                skip: !props.path
            };
        };

        var query = gql(_templateObject$1);

        apolloDx.replaceFragmentsInDocument(query, fragments);

        return reactApollo.graphql(query, {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(ViewComponent);
    };
}

function withPathFromSelection(reduxStoreId) {
    return function (WrappedComponent) {
        return reactRedux.connect(function (state, ownProps) {
            return _extends({}, ownProps, {
                path: state["selectedPaths_" + reduxStoreId] && state["selectedPaths_" + reduxStoreId].length === 1 ? state["selectedPaths_" + reduxStoreId][0] : null
            });
        }, function () {
            return {};
        })(WrappedComponent);
    };
}

function withNotifications() {
    return function (WrappedComponent) {
        var Component$$1 = function (_React$Component) {
            inherits(Component$$1, _React$Component);

            function Component$$1() {
                classCallCheck(this, Component$$1);
                return possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).apply(this, arguments));
            }

            createClass(Component$$1, [{
                key: 'render',
                value: function render() {
                    return React__default.createElement(WrappedComponent, _extends({ notificationContext: this.context.notificationContext }, this.props));
                }
            }]);
            return Component$$1;
        }(React__default.Component);

        Component$$1.contextTypes = {
            notificationContext: PropTypes.object
        };

        return Component$$1;
    };
}

var styles$2 = function styles(theme) {
    return {
        root: {
            position: "relative"
        },
        loading: {
            opacity: 0.8
        },
        listItemSelected: {
            background: '#00a0e3',
            color: 'whitesmoke'
        },
        listItem: {
            padding: '5px 10px'
        },
        listItemLabel: {
            padding: '0px',
            '& h3': {
                fontSize: '0.875rem',
                color: '#676767',
                fontWeight: '100'
            }
        },
        listItemToggle: {
            marginRight: '6px'
        },
        listItemNodeTypeIcon: {
            marginRight: '5px'
        },
        selected: {
            backgroundColor: 'pink',
            '&:hover': {
                backgroundColor: colorManipulator.fade(theme.palette.secondary.light, 0.7)
            }
        },
        selectedText: {
            color: 'whitesmoke!important'
        },
        loadingContainer: {
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 999
        }
    };
};

exports.PickerViewMaterial = function PickerViewMaterial(props) {
    var _this = this;

    var theme = props.theme,
        classes = props.classes,
        pickerEntries = props.pickerEntries,
        onOpenItem = props.onOpenItem,
        onSelectItem = props.onSelectItem,
        textRenderer = props.textRenderer,
        iconRenderer = props.iconRenderer,
        loading = props.loading;

    return React__default.createElement(
        'div',
        { className: classes.root },
        loading && React__default.createElement('div', { className: classes.loadingContainer }),
        React__default.createElement(
            materialUi.List,
            { disablePadding: true, classes: { root: loading ? classes.root + ' ' + classes.loading : classes.root } },
            pickerEntries.map(function (entry) {
                return React__default.createElement(
                    materialUi.ListItem,
                    { button: true,
                        onClick: function onClick() {
                            return entry.selectable ? onSelectItem(entry.path, !entry.selected) : onOpenItem(entry.path, !entry.open);
                        },
                        key: entry.path,
                        divider: true,
                        className: entry.selected ? classes.listItem + ' ' + classes.listItemSelected : classes.listItem
                    },
                    React__default.createElement(
                        materialUi.ListItemIcon,
                        { className: entry.selected ? classes.listItemToggle + ' ' + classes.selectedText : classes.listItemToggle,
                            style: { paddingLeft: entry.depth * 20 } },
                        entry.openable && entry.hasChildren ? React__default.createElement(
                            materialUi.IconButton,
                            { onClick: function onClick(event) {
                                    onOpenItem(entry.path, !entry.open);event.stopPropagation();
                                } },
                            entry.open ? React__default.createElement(materialUiIcons.KeyboardArrowDown, { color: 'secondary' }) : React__default.createElement(materialUiIcons.KeyboardArrowRight, { color: 'secondary' })
                        ) : React__default.createElement(materialUiIcons.KeyboardArrowDown, { color: 'secondary' })
                    ),
                    React__default.createElement(
                        materialUi.ListItemIcon,
                        { className: entry.selected ? classes.listItemNodeTypeIcon + ' ' + classes.selectedText : classes.listItemNodeTypeIcon },
                        iconRenderer && iconRenderer.call(_this, entry)
                    ),
                    React__default.createElement(materialUi.ListItemText, { classes: entry.selected ? { root: classes.listItemLabel, primary: classes.selectedText } : { root: classes.listItemLabel }, inset: true,
                        primary: textRenderer ? textRenderer.call(_this, entry) : entry.name })
                );
            })
        )
    );
};

exports.PickerViewMaterial.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func
};

exports.PickerViewMaterial = materialUi.withTheme()(materialUi.withStyles(styles$2)(exports.PickerViewMaterial));

exports.PickerViewMaterialMultiple = function PickerViewMaterialMultiple(props) {
    var _this = this;

    return React__default.createElement(
        materialUi.List,
        null,
        props.pickerEntries.map(function (entry) {
            return React__default.createElement(
                materialUi.ListItem,
                { button: true,
                    onClick: function onClick() {
                        return entry.selectable ? props.onSelectItem(entry.path, !entry.selected, true) : props.onOpenItem(entry.path, !entry.open);
                    },
                    key: entry.path
                },
                React__default.createElement(
                    materialUi.ListItemIcon,
                    { style: entry.selectable ? {} : { opacity: 0 } },
                    entry.selected ? React__default.createElement(materialUiIcons.CheckBox, null) : React__default.createElement(materialUiIcons.CheckBoxOutlineBlank, null)
                ),
                React__default.createElement(materialUi.ListItemText, { style: { paddingLeft: entry.depth * props.theme.spacing.unit }, inset: true,
                    primary: props['textRenderer'] ? props['textRenderer'].call(_this, entry) : entry.name }),
                React__default.createElement(
                    materialUi.ListItemSecondaryAction,
                    null,
                    entry.openable && entry.hasChildren ? React__default.createElement(
                        materialUi.IconButton,
                        { onClick: function onClick() {
                                return props.onOpenItem(entry.path, !entry.open);
                            } },
                        entry.open ? React__default.createElement(materialUiIcons.ExpandLess, null) : React__default.createElement(materialUiIcons.ExpandMore, null)
                    ) : null
                )
            );
        })
    );
};

exports.PickerViewMaterialMultiple.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func
};

exports.PickerViewMaterialMultiple = materialUi.withTheme()(exports.PickerViewMaterialMultiple);

var _templateObject$2 = taggedTemplateLiteral(['\n            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {\n                jcr {\n                    rootNodes:nodesByPath(paths: $rootPaths) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}, limit:1) {\n                            pageInfo {\n                                totalCount\n                            }\n                        }\n                        selectable : isNodeType(type: {types:$selectable})\n                        openable : isNodeType(type: {types:$openable})\n                        ... node\n                    },\n                    openNodes:nodesByPath(paths: $openPaths) {\n                        path\n                        uuid\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                children(typesFilter:{types:$types}, limit:1) {\n                                    pageInfo {\n                                        totalCount\n                                    }\n                                }\n                                selectable : isNodeType(type: {types:$selectable})\n                                openable : isNodeType(type: {types:$openable})\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }'], ['\n            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {\n                jcr {\n                    rootNodes:nodesByPath(paths: $rootPaths) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}, limit:1) {\n                            pageInfo {\n                                totalCount\n                            }\n                        }\n                        selectable : isNodeType(type: {types:$selectable})\n                        openable : isNodeType(type: {types:$openable})\n                        ... node\n                    },\n                    openNodes:nodesByPath(paths: $openPaths) {\n                        path\n                        uuid\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                children(typesFilter:{types:$types}, limit:1) {\n                                    pageInfo {\n                                        totalCount\n                                    }\n                                }\n                                selectable : isNodeType(type: {types:$selectable})\n                                openable : isNodeType(type: {types:$openable})\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }']);

var Picker = function (_React$Component) {
    inherits(Picker, _React$Component);

    function Picker(props) {
        classCallCheck(this, Picker);

        var _this = possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        var fragments = props.fragments,
            render = props.render,
            rootPaths = props.rootPaths,
            queryVariables = props.queryVariables,
            hideRoot = props.hideRoot,
            openableTypes = props.openableTypes,
            selectableTypes = props.selectableTypes,
            openPaths = props.openPaths,
            onOpenItem = props.onOpenItem,
            selectedPaths = props.selectedPaths,
            onSelectItem = props.onSelectItem,
            defaultSelectedPaths = props.defaultSelectedPaths,
            onSelectionChange = props.onSelectionChange,
            defaultOpenPaths = props.defaultOpenPaths,
            onLoading = props.onLoading,
            otherProps = objectWithoutProperties(props, ['fragments', 'render', 'rootPaths', 'queryVariables', 'hideRoot', 'openableTypes', 'selectableTypes', 'openPaths', 'onOpenItem', 'selectedPaths', 'onSelectItem', 'defaultSelectedPaths', 'onSelectionChange', 'defaultOpenPaths', 'onLoading']);


        _this.isOpenControlled = openPaths != null;
        _this.isSelectionControlled = selectedPaths != null;

        _this.query = gql(_templateObject$2);

        apolloDx.replaceFragmentsInDocument(_this.query, fragments);

        var eventsHandlers = {};

        var state = {
            renderProps: otherProps,
            eventsHandlers: eventsHandlers
        };

        if (!_this.isOpenControlled) {
            state.openPaths = defaultOpenPaths ? _.clone(defaultOpenPaths) : [];
            eventsHandlers.onOpenItem = function (path, open) {
                _this.setState(function (prevState) {
                    return {
                        openPaths: open ? [].concat(toConsumableArray(prevState.openPaths), [path]) : _.filter(prevState.openPaths, function (thispath) {
                            return thispath !== path;
                        })
                    };
                });
            };
        } else {
            eventsHandlers.onOpenItem = onOpenItem;
        }

        if (!_this.isSelectionControlled) {
            state.selectedPaths = defaultSelectedPaths ? _.clone(defaultSelectedPaths) : [];
            eventsHandlers.onSelectItem = function (path, selected, multiple) {
                _this.setState(function (prevState) {
                    var newSelectedPaths = selected ? [].concat(toConsumableArray(multiple ? prevState.selectedPaths : []), [path]) : _.filter(prevState.selectedPaths, function (thispath) {
                        return thispath !== path;
                    });
                    onSelectionChange(newSelectedPaths);
                    return {
                        selectedPaths: newSelectedPaths
                    };
                });
            };
        } else {
            eventsHandlers.onSelectItem = onSelectItem;
        }

        _this.state = state;
        return _this;
    }

    createClass(Picker, [{
        key: 'getVariables',
        value: function getVariables(selectedPaths, openPaths) {
            var _props = this.props,
                rootPaths = _props.rootPaths,
                openableTypes = _props.openableTypes,
                selectableTypes = _props.selectableTypes,
                queryVariables = _props.queryVariables;


            var vars = {
                rootPaths: rootPaths,
                types: _.union(openableTypes, selectableTypes),
                selectable: selectableTypes,
                openable: openableTypes,
                openPaths: openPaths
            };

            if (queryVariables) {
                _.assign(vars, queryVariables);
            }

            return vars;
        }
    }, {
        key: 'getPickerEntries',
        value: function getPickerEntries(data, selectedPaths, openPaths) {
            var _this2 = this;

            var pickerEntries = [];
            var nodesById = {};
            var jcr = data.jcr;

            var addNode = function addNode(node, depth, index$$1) {
                var selected = false;
                if (node.selectable) {
                    selected = _.indexOf(selectedPaths, node.path) !== -1;
                }
                var pickerNode = {
                    name: node.name,
                    path: node.path,
                    open: node.openable && _.indexOf(openPaths, node.path) !== -1,
                    selected: selected,
                    openable: node.openable,
                    selectable: node.selectable,
                    depth: depth,
                    prefix: _.repeat("&nbsp;", depth * 3),
                    node: node,
                    hidden: false,
                    hasChildren: node.children.pageInfo.totalCount > 0
                };
                pickerEntries.splice(index$$1, 0, pickerNode);
                nodesById[node.uuid] = pickerNode;
                return pickerNode;
            };

            if (jcr) {
                if (jcr.rootNodes) {
                    _.forEach(jcr.rootNodes, function (rootNode) {
                        var root = addNode(rootNode, 0, 0);
                        root.hidden = _this2.props.hideRoot;
                    });
                }
                if (jcr.openNodes) {
                    _.sortBy(jcr.openNodes, ['path']).forEach(function (node) {
                        var parent = nodesById[node.uuid];
                        if (parent) {
                            var parentIndex = _.indexOf(pickerEntries, parent);
                            _.forEachRight(node.children.nodes, function (child) {
                                addNode(child, parent.depth + 1, parentIndex + 1);
                            });
                        }
                    });
                }
            }

            // Nodes loaded, fill selection list
            var selectedNodes = _.filter(pickerEntries, function (node) {
                return node.selected;
            }).map(function (node) {
                return node.node;
            });

            selectedPaths = _.map(selectedNodes, "path");
            pickerEntries = _.filter(pickerEntries, function (pickerNode) {
                return !pickerNode.hidden;
            });

            return pickerEntries;
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            var nextRender = nextProps.render,
                nextRootPaths = nextProps.rootPaths,
                nextHideRoot = nextProps.hideRoot,
                nextOpenPaths = nextProps.openPaths,
                nextSelectedPaths = nextProps.selectedPaths,
                nextDefaultSelectedPaths = nextProps.defaultSelectedPaths,
                nextDefaultOpenPaths = nextProps.defaultOpenPaths,
                nextPropsToCompare = objectWithoutProperties(nextProps, ['render', 'rootPaths', 'hideRoot', 'openPaths', 'selectedPaths', 'defaultSelectedPaths', 'defaultOpenPaths']);
            var _props2 = this.props,
                render = _props2.render,
                rootPaths = _props2.rootPaths,
                hideRoot = _props2.hideRoot,
                openPaths = _props2.openPaths,
                selectedPaths = _props2.selectedPaths,
                defaultSelectedPaths = _props2.defaultSelectedPaths,
                defaultOpenPaths = _props2.defaultOpenPaths,
                previousPropsToCompare = objectWithoutProperties(_props2, ['render', 'rootPaths', 'hideRoot', 'openPaths', 'selectedPaths', 'defaultSelectedPaths', 'defaultOpenPaths']);


            nextPropsToCompare = _.omit(nextPropsToCompare, _.functions(nextPropsToCompare));
            previousPropsToCompare = _.omit(previousPropsToCompare, _.functions(previousPropsToCompare));

            var changed = (this.isSelectionControlled ? !_.isEqual(selectedPaths, nextSelectedPaths) : !_.isEqual(this.state.selectedPaths, nextState.selectedPaths)) || (this.isOpenControlled ? !_.isEqual(openPaths, nextOpenPaths) : !_.isEqual(this.state.openPaths, nextState.openPaths)) || !_.isEqual(nextPropsToCompare, previousPropsToCompare);

            return changed;
            // return true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var selectedPaths = this.isSelectionControlled ? this.props.selectedPaths : this.state.selectedPaths;
            var openPaths = this.isOpenControlled ? this.props.openPaths : this.state.openPaths;
            var _props3 = this.props,
                rootPaths = _props3.rootPaths,
                openableTypes = _props3.openableTypes,
                selectableTypes = _props3.selectableTypes,
                queryVariables = _props3.queryVariables;


            openPaths = _.clone(openPaths);
            var fullyOpenPath = function fullyOpenPath(path) {
                var rootFound = false;
                _.tail(_.split(path, "/")).reduce(function (acc, it) {
                    if (!rootFound) {
                        _.forEach(rootPaths, function (rootPath) {
                            rootFound = rootFound || _.startsWith(acc, rootPath);
                        });
                    }
                    if (rootFound && _.indexOf(openPaths, acc) === -1) {
                        openPaths.push(acc);
                    }
                    return acc + "/" + it;
                }, "");
            };

            _.each(selectedPaths, function (path) {
                return fullyOpenPath(path);
            });

            var vars = this.getVariables(selectedPaths, openPaths);

            return React__default.createElement(
                reactApollo.Query,
                { query: this.query, variables: vars, fetchPolicy: "cache-first" },
                function (_ref) {
                    var error = _ref.error,
                        loading = _ref.loading,
                        data = _ref.data;

                    var Render = _this3.props.render;
                    if (_this3.props.onLoading) {
                        _this3.props.onLoading(loading);
                    }
                    if (loading) {
                        if (_this3.previousEntries) {
                            return React__default.createElement(Render, _extends({}, _this3.state.eventsHandlers, _this3.state.renderProps, {
                                pickerEntries: _this3.previousEntries, loading: true }));
                        } else {
                            return React__default.createElement(Render, _extends({}, _this3.state.eventsHandlers, _this3.state.renderProps, {
                                pickerEntries: [], loading: true }));
                        }
                    }
                    if (error) return 'Error! ' + error.message;
                    var pickerEntries = _this3.getPickerEntries(data, selectedPaths, openPaths);
                    _this3.previousEntries = pickerEntries;
                    return React__default.createElement(Render, _extends({}, _this3.state.eventsHandlers, _this3.state.renderProps, {
                        pickerEntries: pickerEntries, loading: false || _this3.props.loading }));
                }
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            var fragments = nextProps.fragments,
                render = nextProps.render,
                rootPaths = nextProps.rootPaths,
                queryVariables = nextProps.queryVariables,
                hideRoot = nextProps.hideRoot,
                openableTypes = nextProps.openableTypes,
                selectableTypes = nextProps.selectableTypes,
                openPaths = nextProps.openPaths,
                onOpenItem = nextProps.onOpenItem,
                selectedPaths = nextProps.selectedPaths,
                onSelectItem = nextProps.onSelectItem,
                defaultSelectedPaths = nextProps.defaultSelectedPaths,
                onSelectionChange = nextProps.onSelectionChange,
                defaultOpenPaths = nextProps.defaultOpenPaths,
                onLoading = nextProps.onLoading,
                otherProps = objectWithoutProperties(nextProps, ['fragments', 'render', 'rootPaths', 'queryVariables', 'hideRoot', 'openableTypes', 'selectableTypes', 'openPaths', 'onOpenItem', 'selectedPaths', 'onSelectItem', 'defaultSelectedPaths', 'onSelectionChange', 'defaultOpenPaths', 'onLoading']);


            if (!_.isEqual(_.omit(otherProps, _.functions(otherProps)), _.omit(prevState.renderProps, _.functions(prevState.renderProps)))) {
                return {
                    renderProps: otherProps
                };
            }

            return null;
        }
    }]);
    return Picker;
}(React__default.Component);

Picker.propTypes = {
    /**
     * List of root paths for the picker
     */
    rootPaths: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of folder paths that are open by default (uncontrolled mode)
     */
    defaultOpenPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of node types that can be "opened" (folders)
     */
    openableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * List of open folders in controlled mode
     */
    openPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of node types that can be "selected" (items)
     */
    selectableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,

    /**
     * Preselected items path (uncontrolled mode)
     */
    defaultSelectedPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of selected path in controlled mode
     */
    selectedPaths: PropTypes.arrayOf(PropTypes.string),

    /**
     * Callback when the selection has changed
     */
    onSelectionChange: PropTypes.func,

    /**
     * Component to use to do the full rendering of the tree. Should accept : pickerEntries,onSelectItem,onOpenItem . Other properties are passed through.
     */
    render: PropTypes.func,

    /**
     * Optional set of fragments to add to the graphQL query. Can be a string that identify a predefinedFragment or a fragment definition
     */
    fragments: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
        applyFor: PropTypes.string.isRequired,
        variables: PropTypes.string,
        gql: PropTypes.object.isRequired
    })])),

    /**
     * Optional set of variable to pass to the graphQL query, in order to fulfill fragments needs
     */
    queryVariables: PropTypes.object

};

exports.DxContextProvider = DxContextProvider;
exports.withDxContext = withDxContext;
exports.getI18n = getI18n;
exports.withNodeFromPath = withNodeFromPath;
exports.withNodesFromPath = withNodesFromPath;
exports.withPathFromSelection = withPathFromSelection;
exports.NotificationProvider = NotificationProvider;
exports.withNotifications = withNotifications;
exports.Picker = Picker;
exports.createOutletHistory = createOutletHistory;
exports.OutletRouter = OutletRouter;
exports.reducers = reducers;
exports.store = store;
exports.resetStateReducer = resetStateReducer;
exports.theme = theme;
exports.darkTheme = darkTheme;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-dxcomponents.umd.js.map
