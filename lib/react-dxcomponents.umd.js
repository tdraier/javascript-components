(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('material-ui'), require('material-ui/styles/index'), require('i18next'), require('i18next-xhr-backend'), require('react-i18next'), require('redux'), require('lodash'), require('material-ui/colors/index'), require('@jahia/apollo-dx'), require('react-apollo'), require('react-redux'), require('react-router-dom'), require('history'), require('react-router'), require('prop-types'), require('react-jss'), require('react-dom'), require('graphql-tag'), require('material-ui-icons')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'material-ui', 'material-ui/styles/index', 'i18next', 'i18next-xhr-backend', 'react-i18next', 'redux', 'lodash', 'material-ui/colors/index', '@jahia/apollo-dx', 'react-apollo', 'react-redux', 'react-router-dom', 'history', 'react-router', 'prop-types', 'react-jss', 'react-dom', 'graphql-tag', 'material-ui-icons'], factory) :
	(factory((global.jahia = global.jahia || {}, global.jahia.reactcomponents = {}),global.React,global.materialUi,global.materialUiStyles,global.i18n,global.XHR,global.reactI18next,global.redux,global._,global.index$1,global.jahia.apollodx,global.reactApollo,global.reactRedux,global.reactRouterDom,global.history,global.reactRouter,global.PropTypes,global.reactJss,global.ReactDOM,global.gql,global.materialUiIcons));
}(this, (function (exports,React,materialUi,index,i18n,XHR,reactI18next,redux,_,index$1,apolloDx,reactApollo,reactRedux,reactRouterDom,history,reactRouter,PropTypes,reactJss,ReactDOM,gql,materialUiIcons) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
i18n = i18n && i18n.hasOwnProperty('default') ? i18n['default'] : i18n;
XHR = XHR && XHR.hasOwnProperty('default') ? XHR['default'] : XHR;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;

// import LanguageDetector from 'i18next-browser-languagedetector/';
function getI18n(options) {
    options = options || {};
    i18n.use(XHR)
    // .use(LanguageDetector)
    // .use(reactI18nextModule) // if not using I18nextProvider
    .init({
        lng: options.currentLanguage ? options.currentLanguage : undefined,
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        },

        // react i18next special options (optional)
        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },

        backend: {
            loadPath: (options.contextPath ? options.contextPath : '') + '/modules/{{ns}}/javascript/locales/{{lng}}.json'
        }
    });
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

// All the following keys are optional.
// We try our best to provide a great default value.
var theme = materialUi.createMuiTheme({
    palette: {
        background: {
            global: index$1.grey[200]
        },
        contrastThreshold: 3.1,
        tonalOffset: 0.2,
        primary: {
            main: index$1.blueGrey[600]
        },
        secondary: {
            main: index$1.lightBlue[600]
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
        },
        MuiCheckbox: {
            default: {
                color: "inherit"
            }
        }
    }
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
        },
        MuiCheckbox: {
            default: {
                color: "inherit"
            }
        }
    }
});

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

var RouterExample = function (_React$Component) {
    inherits(RouterExample, _React$Component);

    function RouterExample(props) {
        classCallCheck(this, RouterExample);
        return possibleConstructorReturn(this, (RouterExample.__proto__ || Object.getPrototypeOf(RouterExample)).call(this, props));
    }

    createClass(RouterExample, [{
        key: 'render',
        value: function render() {

            var Test1 = function Test1(props) {
                return React__default.createElement(
                    materialUi.Paper,
                    { elevation: 4 },
                    React__default.createElement(
                        materialUi.Typography,
                        { type: 'headline', component: 'h3' },
                        'Page 1'
                    ),
                    React__default.createElement(
                        materialUi.Typography,
                        { component: 'p' },
                        'Param = ',
                        props.match.params.value
                    )
                );
            };
            var Test2 = function Test2(props) {
                return React__default.createElement(
                    materialUi.Paper,
                    { elevation: 4 },
                    React__default.createElement(
                        materialUi.Typography,
                        { type: 'headline', component: 'h3' },
                        'Page 2'
                    )
                );
            };
            var Test3 = function Test3(props) {
                return React__default.createElement(
                    materialUi.Paper,
                    { elevation: 4 },
                    React__default.createElement(
                        materialUi.Typography,
                        { type: 'headline', component: 'h3' },
                        'Page 3'
                    )
                );
            };

            return React__default.createElement(
                OutletRouter,
                { outlet: this.props.id },
                React__default.createElement(
                    'div',
                    null,
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test1/value1' },
                        'test1/value1'
                    ),
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test1/value2' },
                        'Test1/value2'
                    ),
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test2' },
                        'test2'
                    ),
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test3' },
                        'test3'
                    ),
                    React__default.createElement(reactRouterDom.Route, { path: '/test1/:value', component: Test1 }),
                    React__default.createElement(reactRouterDom.Route, { path: '/test2', component: Test2 }),
                    React__default.createElement(reactRouterDom.Route, { path: '/test3', component: Test3 })
                )
            );
        }
    }]);
    return RouterExample;
}(React__default.Component);

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
                var options = { currentLanguage: dxContext.uilang, contextPath: dxContext.contextPath };
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
                Component$$1 = React__default.createElement(reactJss.JssProvider, { registry: sheetsRegistry, generateClassName: generateClassName }, React__default.createElement(materialUi.MuiThemeProvider, { theme: currentTheme, sheetsManager: new Map() }, Component$$1));
                // } else {
                //     Component = React.createElement(MuiThemeProvider, {theme: currentTheme}, Component);
                // }
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

var SimpleListView = function (_React$Component) {
    inherits(SimpleListView, _React$Component);

    function SimpleListView(props) {
        classCallCheck(this, SimpleListView);

        var _this = possibleConstructorReturn(this, (SimpleListView.__proto__ || Object.getPrototypeOf(SimpleListView)).call(this, props));

        _this.state = {
            reactElements: []
        };
        return _this;
    }

    // todo should move this code dynamicList itself


    createClass(SimpleListView, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.props.components && !this.done) {
                this.props.components.then(function (reactElements) {
                    _this2.done = true;
                    _this2.setState({ reactElements: reactElements });
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.componentDidMount();
        }
    }, {
        key: 'render',
        value: function render() {
            return this.done ? React__default.createElement(
                'div',
                null,
                this.state.reactElements
            ) : React__default.createElement('div', null);
        }
    }]);
    return SimpleListView;
}(React__default.Component);

var _templateObject = taggedTemplateLiteral(['\n                query ComponentsQuery($query:String!) {\n                    jcr {\n                        nodesByQuery(query:$query) {\n                            nodes {\n                                name\n                                path\n                                primaryNodeType {\n                                    name\n                                }\n                                children {\n                                    nodes {\n                                        name\n                                        path\n                                        primaryNodeType {\n                                            name\n                                        }\n                                        renderedContent(templateType:"js", view:"react") {\n                                            output\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }'], ['\n                query ComponentsQuery($query:String!) {\n                    jcr {\n                        nodesByQuery(query:$query) {\n                            nodes {\n                                name\n                                path\n                                primaryNodeType {\n                                    name\n                                }\n                                children {\n                                    nodes {\n                                        name\n                                        path\n                                        primaryNodeType {\n                                            name\n                                        }\n                                        renderedContent(templateType:"js", view:"react") {\n                                            output\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }']);

var DynamicComponentsList = function (_React$Component) {
    inherits(DynamicComponentsList, _React$Component);

    function DynamicComponentsList(props) {
        classCallCheck(this, DynamicComponentsList);

        var _this = possibleConstructorReturn(this, (DynamicComponentsList.__proto__ || Object.getPrototypeOf(DynamicComponentsList)).call(this, props));

        _this.componentCache = [];
        return _this;
    }

    createClass(DynamicComponentsList, [{
        key: 'mapResultsToProps',
        value: function mapResultsToProps(_ref) {
            var data = _ref.data,
                ownProps = _ref.ownProps;

            var components = [];

            var jcr = data.jcr;
            var safeEval = eval;
            if (jcr && jcr.nodesByQuery) {
                components = _.map(_.flatMap(jcr.nodesByQuery.nodes, "children.nodes"), function (n) {
                    return safeEval("(" + n.renderedContent.output + ")");
                });
            }

            var imports = [];
            _.each(components, function (c) {
                imports = imports.concat(c.getImports());
            });
            var promise = void 0;
            if (imports.length > 0) {
                promise = Promise.all(_.map(imports, function (imp) {
                    return SystemJS.import(imp);
                })).then(function (m) {
                    var reactElements = _.map(components, function (c) {
                        var s = c.getImports().length;
                        var r = c.createElement.apply(c, [React__default, ReactDOM].concat(toConsumableArray(m)));
                        m.splice(s);
                        return r;
                    });
                    return reactElements;
                });
            }

            return _extends({}, ownProps, {
                components: promise
            });
        }
    }, {
        key: 'mapPropsToOptions',
        value: function mapPropsToOptions(props) {
            return {
                variables: {
                    query: "select * from [reactnt:componentsFolder] where [react:id]='" + props.id + "'"
                }
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var renderComponent = this.props.renderComponent;

            var cacheMatch = _.find(this.componentCache, function (f) {
                return f.renderComponent === renderComponent;
            });
            var Component$$1 = void 0;
            if (cacheMatch) {
                Component$$1 = cacheMatch.dataComponent;
            } else {
                var query = gql(_templateObject);

                Component$$1 = reactApollo.graphql(query, {
                    props: this.mapResultsToProps,
                    options: this.mapPropsToOptions
                })(renderComponent || SimpleListView);

                this.componentCache.push({ renderComponent: renderComponent, dataComponent: Component$$1 });
            }

            return React__default.createElement(Component$$1, this.props);
        }
    }]);
    return DynamicComponentsList;
}(React__default.Component);

DynamicComponentsList.propTypes = {
    /**
     * Id of the "componentsFolder" to look for
     */
    id: PropTypes.string.isRequired,

    /**
     * Component to use to do the rendering
     */
    renderComponent: PropTypes.element
};

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
            position: 'absolute',
            margin: '0 auto',
            left: '0',
            right: '0',
            color: 'inherit',
            backgroundColor: theme.palette.primary.light,
            width: '720px',
            height: '44px',
            lineHeight: '40px',
            borderRadius: '3px',
            fontWeight: '200'
        },
        rootFocus: {
            position: 'absolute',
            margin: '0 auto',
            left: '0',
            right: '0',
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
                placeholder: placeholderLabel || t('label.searchPlaceholder'),
                startAdornment: React__default.createElement(
                    materialUi.InputAdornment,
                    { classes: { root: classes.searchIcon }, position: 'start' },
                    React__default.createElement(materialUiIcons.Search, null)
                )
            });
        }
    }]);
    return SearchBar;
}(React__default.Component);

exports.SearchBar = materialUi.withStyles(styles$1)(reactI18next.translate('react-dxcomponents')(exports.SearchBar));

var _templateObject$2 = taggedTemplateLiteral(['\n            query NodesQuery($path:String!, $types:[String]!) {\n                jcr {\n                    node:nodeByPath(path: $path) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }'], ['\n            query NodesQuery($path:String!, $types:[String]!) {\n                jcr {\n                    node:nodeByPath(path: $path) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }']);

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

        var query = gql(_templateObject$2);

        apolloDx.replaceFragmentsInDocument(query, fragments);

        return reactApollo.graphql(query, {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(ViewComponent);
    };
}

var _templateObject$1 = taggedTemplateLiteral(['fragment Test on JCRNode {\n                myprop:property(name:"myprop") {\n                    value\n                }\n            }'], ['fragment Test on JCRNode {\n                myprop:property(name:"myprop") {\n                    value\n                }\n            }']);
var _templateObject2 = taggedTemplateLiteral(['\n    mutation setProperty($value:String,$path:String!) {\n        jcr {\n            mutateNode(pathOrId:$path) {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n                node {\n                    path\n                }\n            }\n        }\n    }\n'], ['\n    mutation setProperty($value:String,$path:String!) {\n        jcr {\n            mutateNode(pathOrId:$path) {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n                node {\n                    path\n                }\n            }\n        }\n    }\n']);
var _templateObject3 = taggedTemplateLiteral(['\n    mutation addNode($value:String, $name:String!) {\n        jcr {\n            addNode(parentPathOrId:"/",name:$name,primaryNodeType:"nt:unstructured") {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n            }\n        }\n    }\n'], ['\n    mutation addNode($value:String, $name:String!) {\n        jcr {\n            addNode(parentPathOrId:"/",name:$name,primaryNodeType:"nt:unstructured") {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n            }\n        }\n    }\n']);
var _templateObject4 = taggedTemplateLiteral(['\n    mutation removeNode($path:String!) {\n        jcr {\n            deleteNode(pathOrId:$path)\n        }\n    }\n'], ['\n    mutation removeNode($path:String!) {\n        jcr {\n            deleteNode(pathOrId:$path)\n        }\n    }\n']);

var MutationExampleView = function (_Component) {
    inherits(MutationExampleView, _Component);

    function MutationExampleView(props) {
        classCallCheck(this, MutationExampleView);

        var _this = possibleConstructorReturn(this, (MutationExampleView.__proto__ || Object.getPrototypeOf(MutationExampleView)).call(this, props));

        var RenderComponent = function RenderComponent(props) {
            return React__default.createElement(
                materialUi.Table,
                null,
                React__default.createElement(
                    materialUi.TableHead,
                    null,
                    React__default.createElement(
                        materialUi.TableRow,
                        null,
                        React__default.createElement(
                            materialUi.TableCell,
                            null,
                            'Name'
                        ),
                        React__default.createElement(
                            materialUi.TableCell,
                            null,
                            'Value'
                        ),
                        React__default.createElement(
                            materialUi.TableCell,
                            null,
                            'Update'
                        ),
                        React__default.createElement(
                            materialUi.TableCell,
                            null,
                            'Delete'
                        )
                    )
                ),
                React__default.createElement(
                    materialUi.TableBody,
                    null,
                    props.nodes ? props.nodes.map(function (node) {
                        return React__default.createElement(
                            materialUi.TableRow,
                            { key: node.uuid },
                            React__default.createElement(
                                materialUi.TableCell,
                                null,
                                node.name
                            ),
                            React__default.createElement(
                                materialUi.TableCell,
                                null,
                                node.myprop.value
                            ),
                            React__default.createElement(
                                materialUi.TableCell,
                                null,
                                React__default.createElement(
                                    materialUi.Button,
                                    { onClick: function onClick() {
                                            return _this.props.setPropertyMutation({
                                                variables: {
                                                    path: node.path,
                                                    value: "test:" + new Date()
                                                },
                                                refetchQueries: ["NodesQuery"]
                                                // update: update
                                            });
                                        } },
                                    'Update'
                                )
                            ),
                            React__default.createElement(
                                materialUi.TableCell,
                                null,
                                React__default.createElement(
                                    materialUi.Button,
                                    { onClick: function onClick() {
                                            return _this.props.removeNodeMutation({
                                                variables: {
                                                    path: node.path
                                                },
                                                refetchQueries: ["NodesQuery"]
                                            });
                                        } },
                                    'Delete'
                                )
                            )
                        );
                    }) : []
                )
            );
        };

        _this.Component = withNodesFromPath([{
            applyFor: "node",
            gql: gql(_templateObject$1)
        }])(RenderComponent);
        return _this;
    }

    createClass(MutationExampleView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var Component$$1 = this.Component;
            return React__default.createElement(
                'div',
                null,
                React__default.createElement(
                    materialUi.Button,
                    { onClick: function onClick() {
                            return _this2.props.addNodeMutation({
                                variables: {
                                    name: "name-" + new Date().getTime(),
                                    value: "test:" + new Date()
                                },
                                refetchQueries: ["NodesQuery"]
                            });
                        } },
                    'New'
                ),
                React__default.createElement(Component$$1, { path: "/", types: ["nt:unstructured"] })
            );
        }
    }]);
    return MutationExampleView;
}(React.Component);

var setProperty = gql(_templateObject2);

var addNode = gql(_templateObject3);

var removeNode = gql(_templateObject4);

var MutationExample = reactApollo.graphql(setProperty, { name: 'setPropertyMutation' })(reactApollo.graphql(addNode, { name: 'addNodeMutation' })(reactApollo.graphql(removeNode, { name: 'removeNodeMutation' })(MutationExampleView)));

var NodesTableViewMaterial = function NodesTableViewMaterial(props) {
    var _this = this;

    var headers = props['headers'] ? props['headers'] : function () {
        return React__default.createElement(
            materialUi.TableRow,
            null,
            React__default.createElement(
                materialUi.TableCell,
                null,
                'Name'
            )
        );
    };

    var row = props['row'] ? props['row'] : function (node) {
        return React__default.createElement(
            materialUi.TableRow,
            { key: node.path },
            React__default.createElement(
                materialUi.TableCell,
                null,
                props['textRenderer'] ? props['textRenderer'].call(_this, node) : node.name
            )
        );
    };

    return React__default.createElement(
        materialUi.Table,
        null,
        React__default.createElement(
            materialUi.TableHead,
            null,
            headers()
        ),
        React__default.createElement(
            materialUi.TableBody,
            null,
            props.nodes ? props.nodes.map(row) : []
        )
    );
};

NodesTableViewMaterial.propTypes = {
    headers: PropTypes.func,
    row: PropTypes.func,
    textRenderer: PropTypes.func,
    nodes: PropTypes.arrayOf(PropTypes.object)
};

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

exports.PickerViewMaterial = function PickerViewMaterial(props) {
    var _this = this;

    return React__default.createElement(
        materialUi.List,
        null,
        props.pickerEntries.map(function (entry) {
            return React__default.createElement(
                materialUi.ListItem,
                { button: true,
                    onClick: function onClick() {
                        return entry.selectable ? props.onSelectItem(entry.path, !entry.selected) : props.onOpenItem(entry.path, !entry.open);
                    },
                    key: entry.path
                },
                React__default.createElement(
                    materialUi.ListItemIcon,
                    { style: entry.selectable ? {} : { opacity: 0 } },
                    entry.selected ? React__default.createElement(materialUiIcons.RadioButtonChecked, null) : React__default.createElement(materialUiIcons.RadioButtonUnchecked, null)
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

exports.PickerViewMaterial.propTypes = {
    pickerEntries: PropTypes.array.isRequired,
    onSelectItem: PropTypes.func,
    onOpenItem: PropTypes.func,
    textRenderer: PropTypes.func
};

exports.PickerViewMaterial = materialUi.withTheme()(exports.PickerViewMaterial);

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

var _templateObject$3 = taggedTemplateLiteral(['\n            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {\n                jcr {\n                    rootNodes:nodesByPath(paths: $rootPaths) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}, limit:1) {\n                            pageInfo {\n                                totalCount\n                            }\n                        }\n                        selectable : isNodeType(type: {types:$selectable})\n                        openable : isNodeType(type: {types:$openable})\n                        ... node\n                    },\n                    openNodes:nodesByPath(paths: $openPaths) {\n                        path\n                        uuid\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                children(typesFilter:{types:$types}, limit:1) {\n                                    pageInfo {\n                                        totalCount\n                                    }\n                                }\n                                selectable : isNodeType(type: {types:$selectable})\n                                openable : isNodeType(type: {types:$openable})\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }'], ['\n            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {\n                jcr {\n                    rootNodes:nodesByPath(paths: $rootPaths) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}, limit:1) {\n                            pageInfo {\n                                totalCount\n                            }\n                        }\n                        selectable : isNodeType(type: {types:$selectable})\n                        openable : isNodeType(type: {types:$openable})\n                        ... node\n                    },\n                    openNodes:nodesByPath(paths: $openPaths) {\n                        path\n                        uuid\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                children(typesFilter:{types:$types}, limit:1) {\n                                    pageInfo {\n                                        totalCount\n                                    }\n                                }\n                                selectable : isNodeType(type: {types:$selectable})\n                                openable : isNodeType(type: {types:$openable})\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }']);

var Picker = function (_React$Component) {
    inherits(Picker, _React$Component);

    function Picker(props) {
        classCallCheck(this, Picker);

        var _this = possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

        var query = gql(_templateObject$3);

        var fragments = props.fragments,
            graphqlComponentProps = objectWithoutProperties(props, ['fragments']);


        apolloDx.replaceFragmentsInDocument(query, fragments);

        _this.graphqlComponentProps = graphqlComponentProps;

        var state = {};
        var that = _this;
        if (!props.openPaths) {
            state.openPaths = props.defaultOpenPaths ? _.clone(props.defaultOpenPaths) : [];
            graphqlComponentProps.onOpenItem = function (path, open) {
                that.setState(function (prevState, props) {
                    return {
                        openPaths: open ? [].concat(toConsumableArray(prevState.openPaths), [path]) : _.filter(prevState.openPaths, function (thispath) {
                            return thispath !== path;
                        })
                    };
                });
                if (props.onOpenItem) {
                    props.onOpenItem(path, open);
                }
            };
        }

        if (!props.selectedPaths) {
            state.selectedPaths = props.defaultSelectedPaths ? _.clone(props.defaultSelectedPaths) : [];
            graphqlComponentProps.onSelectItem = function (path, selected, multiple) {
                that.setState(function (prevState, props) {
                    return {
                        selectedPaths: selected ? [].concat(toConsumableArray(multiple ? prevState.selectedPaths : []), [path]) : _.filter(prevState.selectedPaths, function (thispath) {
                            return thispath !== path;
                        })
                    };
                });
                if (props.onSelectItem) {
                    props.onSelectItem(path, select, multiple);
                }
            };
        }
        _this.state = state;

        _this.GraphQLComponent = reactApollo.graphql(query, {
            props: _this.mapResultsToProps,
            options: _this.mapPropsToOptions
        })(_this.props.render);
        return _this;
    }

    createClass(Picker, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState, prevContext) {
            if (this.props.onSelectionChange && !_.isEqual(this.state.selectedPaths, prevState.selectedPaths)) {
                this.props.onSelectionChange(this.state.selectedPaths);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps, nextState) {
            var fragments = nextProps.fragments,
                onOpenItem = nextProps.onOpenItem,
                onSelectItem = nextProps.onSelectItem,
                graphqlComponentProps = objectWithoutProperties(nextProps, ['fragments', 'onOpenItem', 'onSelectItem']);

            _.assign(this.graphqlComponentProps, graphqlComponentProps);
        }
    }, {
        key: 'mapResultsToProps',
        value: function mapResultsToProps(_ref) {
            var data = _ref.data,
                ownProps = _ref.ownProps;

            var selectedPaths = ownProps.selectedPaths;
            var openPaths = ownProps.openPaths ? ownProps.openPaths : [];

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
                        root.hidden = ownProps.hideRoot;
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

            return _extends({}, ownProps, {
                pickerEntries: pickerEntries
            });
        }
    }, {
        key: 'mapPropsToOptions',
        value: function mapPropsToOptions(props) {
            var openPaths = props.openPaths ? props.openPaths : [];

            var fullyOpenPath = function fullyOpenPath(props, path) {
                var rootFound = false;
                _.tail(_.split(path, "/")).reduce(function (acc, it) {
                    if (!rootFound) {
                        _.forEach(props.rootPaths, function (rootPath) {
                            rootFound = rootFound || _.startsWith(acc, rootPath);
                        });
                    }
                    if (rootFound && _.indexOf(openPaths, acc) === -1) {
                        openPaths.push(acc);
                    }
                    return acc + "/" + it;
                }, "");
            };

            if (props.selectedPaths) {
                _.each(props.selectedPaths, function (path) {
                    return fullyOpenPath(props, path);
                });
            }

            var vars = {
                rootPaths: props.rootPaths,
                types: _.union(props.openableTypes, props.selectableTypes),
                selectable: props.selectableTypes,
                openable: props.openableTypes,
                openPaths: openPaths
            };

            if (props.queryVariables) {
                _.assign(vars, props.queryVariables);
            }

            return {
                variables: vars
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var GraphQLComponent = this.GraphQLComponent;

            return React__default.createElement(GraphQLComponent, _extends({}, this.graphqlComponentProps, this.state));
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
exports.DynamicComponentsList = DynamicComponentsList;
exports.SimpleListView = SimpleListView;
exports.getI18n = getI18n;
exports.MutationExample = MutationExample;
exports.NodesTableViewMaterial = NodesTableViewMaterial;
exports.withNodesFromPath = withNodesFromPath;
exports.withPathFromSelection = withPathFromSelection;
exports.Picker = Picker;
exports.createOutletHistory = createOutletHistory;
exports.OutletRouter = OutletRouter;
exports.RouterExample = RouterExample;
exports.reducers = reducers;
exports.store = store;
exports.resetStateReducer = resetStateReducer;
exports.theme = theme;
exports.darkTheme = darkTheme;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-dxcomponents.umd.js.map
