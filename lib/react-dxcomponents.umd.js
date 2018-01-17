(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('react-apollo'), require('graphql-tag'), require('lodash'), require('@jahia/apollo-dx'), require('prop-types'), require('react-redux'), require('redux'), require('material-ui'), require('material-ui-icons'), require('history'), require('react-router'), require('react-router-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'react-apollo', 'graphql-tag', 'lodash', '@jahia/apollo-dx', 'prop-types', 'react-redux', 'redux', 'material-ui', 'material-ui-icons', 'history', 'react-router', 'react-router-dom'], factory) :
	(factory((global.jahia = global.jahia || {}, global.jahia.reactcomponents = {}),global.React,global.ReactDOM,global.reactApollo,global.gql,global._,global.jahia.apollodx,global.PropTypes,global.reactRedux,global.redux,global.materialUi,global.materialUiIcons,global.history,global.reactRouter,global.reactRouterDom));
}(this, (function (exports,React,ReactDOM,reactApollo,gql,_,apolloDx,PropTypes,reactRedux,redux,materialUi,materialUiIcons,history,reactRouter,reactRouterDom) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;
ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
gql = gql && gql.hasOwnProperty('default') ? gql['default'] : gql;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





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

var _templateObject = taggedTemplateLiteral(['\n                query ComponentsQuery($query:String!) {\n                    jcr {\n                        nodesByQuery(query:$query) {\n                            nodes {\n                                name\n                                path\n                                primaryNodeType {\n                                    name\n                                }\n                                children {\n                                    nodes {\n                                        name\n                                        path\n                                        primaryNodeType {\n                                            name\n                                        }\n                                        renderedView(templateType:"js", view:"react") {\n                                            output\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }'], ['\n                query ComponentsQuery($query:String!) {\n                    jcr {\n                        nodesByQuery(query:$query) {\n                            nodes {\n                                name\n                                path\n                                primaryNodeType {\n                                    name\n                                }\n                                children {\n                                    nodes {\n                                        name\n                                        path\n                                        primaryNodeType {\n                                            name\n                                        }\n                                        renderedView(templateType:"js", view:"react") {\n                                            output\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    }\n                }']);

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
                    return safeEval("(" + n.renderedView.output + ")");
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

            return React__default.createElement(
                reactApollo.ApolloProvider,
                { client: apolloDx.client },
                React__default.createElement(Component$$1, this.props)
            );
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

var _templateObject$1 = taggedTemplateLiteral(['\n            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {\n                jcr {\n                    rootNodes:nodesByPath(paths: $rootPaths) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}, limit:1) {\n                            pageInfo {\n                                totalCount\n                            }\n                        }\n                        selectable : isNodeType(type: {types:$selectable})\n                        openable : isNodeType(type: {types:$openable})\n                        ... node\n                    },\n                    openNodes:nodesByPath(paths: $openPaths) {\n                        path\n                        uuid\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                children(typesFilter:{types:$types}, limit:1) {\n                                    pageInfo {\n                                        totalCount\n                                    }\n                                }\n                                selectable : isNodeType(type: {types:$selectable})\n                                openable : isNodeType(type: {types:$openable})\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }'], ['\n            query PickerQuery($rootPaths:[String!]!, $selectable:[String]!, $openable:[String]!, $openPaths:[String!]!, $types:[String]!) {\n                jcr {\n                    rootNodes:nodesByPath(paths: $rootPaths) {\n                        path\n                        uuid\n                        name\n                        children(typesFilter:{types:$types}, limit:1) {\n                            pageInfo {\n                                totalCount\n                            }\n                        }\n                        selectable : isNodeType(type: {types:$selectable})\n                        openable : isNodeType(type: {types:$openable})\n                        ... node\n                    },\n                    openNodes:nodesByPath(paths: $openPaths) {\n                        path\n                        uuid\n                        children(typesFilter:{types:$types}) {\n                            nodes {\n                                path\n                                uuid\n                                name\n                                children(typesFilter:{types:$types}, limit:1) {\n                                    pageInfo {\n                                        totalCount\n                                    }\n                                }\n                                selectable : isNodeType(type: {types:$selectable})\n                                openable : isNodeType(type: {types:$openable})\n                                ... node\n                            }\n                        }\n                    }\n                }\n            }']);

function withPickerModel(fragments, reduxStoreId) {

    return function (ViewComponent) {
        // GraphQL maps
        var mapResultsToProps = function mapResultsToProps(_ref) {
            var data = _ref.data,
                ownProps = _ref.ownProps;

            var selectedPaths = ownProps.selectedPaths;
            var openPaths = ownProps.openPaths ? ownProps.openPaths : [];

            var pickerEntries = [];
            var nodesById = {};
            var jcr = data.jcr;

            var addNode = function addNode(node, depth, index) {
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
                pickerEntries.splice(index, 0, pickerNode);
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
        };

        var mapPropsToOptions = function mapPropsToOptions(props) {
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
            debugger;
            if (props.queryVariables) {
                _.assign(vars, props.queryVariables);
            }

            return {
                variables: vars
            };
        };

        var query = gql(_templateObject$1);

        apolloDx.replaceFragmentsInDocument(query, fragments);

        var GraphQLComponent = reactApollo.graphql(query, {
            props: mapResultsToProps,
            options: mapPropsToOptions
        })(ViewComponent);

        if (reduxStoreId) {
            // Redux map
            var mapStateToProps = function mapStateToProps(state, ownProps) {
                return _extends({}, ownProps, {
                    openPaths: state["openPaths_" + reduxStoreId] ? state["openPaths_" + reduxStoreId] : ownProps.openPaths,
                    selectedPaths: state["selectedPaths_" + reduxStoreId] ? state["selectedPaths_" + reduxStoreId] : ownProps.selectedPaths
                });
            };

            var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
                return {
                    onSelectItem: function onSelectItem(path, select, multiple) {
                        dispatch({
                            type: select ? 'SELECT_PICKER_ENTRY_' + (multiple ? "MULTIPLE_" : "SINGLE_") + reduxStoreId : 'UNSELECT_PICKER_ENTRY_' + reduxStoreId,
                            path: path
                        });
                    },
                    onOpenItem: function onOpenItem(path, open) {
                        dispatch({
                            type: open ? 'OPEN_PICKER_ENTRY_' + reduxStoreId : 'CLOSE_PICKER_ENTRY_' + reduxStoreId,
                            path: path
                        });
                    }
                };
            };

            var ConnectedComponent = reactRedux.connect(mapStateToProps, mapDispatchToProps)(GraphQLComponent);

            return function (_React$Component) {
                inherits(_class, _React$Component);

                function _class(props) {
                    classCallCheck(this, _class);
                    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
                }

                createClass(_class, [{
                    key: 'componentWillMount',
                    value: function componentWillMount() {
                        var _this2 = this;

                        // Setup reducers
                        reducers["openPaths_" + reduxStoreId] = function () {
                            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props.openPaths || [];
                            var action = arguments[1];

                            var index = state.indexOf(action.path);
                            if (action.type === 'OPEN_PICKER_ENTRY_' + reduxStoreId && index === -1) {
                                return [].concat(toConsumableArray(state), [action.path]);
                            } else if (action.type === 'CLOSE_PICKER_ENTRY_' + reduxStoreId && index !== -1) {
                                return _.filter(state, function (path) {
                                    return path !== action.path;
                                });
                            }
                            return state;
                        };
                        reducers["selectedPaths_" + reduxStoreId] = function () {
                            var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this2.props.selectedPaths || [];
                            var action = arguments[1];

                            var index = state.indexOf(action.path);
                            if (action.type === 'SELECT_PICKER_ENTRY_MULTIPLE_' + reduxStoreId && index === -1) {
                                return [].concat(toConsumableArray(state), [action.path]);
                            } else if (action.type === 'SELECT_PICKER_ENTRY_SINGLE_' + reduxStoreId) {
                                return [action.path];
                            } else if (action.type === 'UNSELECT_PICKER_ENTRY_' + reduxStoreId && index !== -1) {
                                return _.filter(state, function (path) {
                                    return path !== action.path;
                                });
                            }
                            return state;
                        };
                    }
                }, {
                    key: 'componentWillUnmount',
                    value: function componentWillUnmount() {
                        reducers["openPaths_" + reduxStoreId] = resetStateReducer;
                        reducers["selectedPaths_" + reduxStoreId] = resetStateReducer;

                        store.dispatch({ type: "RESET_STATE" });

                        delete reducers["openPaths_" + reduxStoreId];
                        delete reducers["selectedPaths_" + reduxStoreId];
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        return React__default.createElement(ConnectedComponent, this.props);
                    }
                }]);
                return _class;
            }(React__default.Component);
        } else {
            return function (_React$Component2) {
                inherits(_class2, _React$Component2);

                function _class2(props) {
                    classCallCheck(this, _class2);

                    var _this3 = possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));

                    _this3.state = {
                        openPaths: props.openPaths ? props.openPaths : [],
                        selectedPaths: props.selectedPaths ? props.selectedPaths : props.selectedPath ? [props.selectedPath] : []
                    };
                    return _this3;
                }

                createClass(_class2, [{
                    key: 'onSelectItem',
                    value: function onSelectItem(state, path, selected, multiple) {
                        this.setState({
                            openPaths: state.openPaths,
                            selectedPaths: selected ? [].concat(toConsumableArray(multiple ? state.selectedPaths : []), [path]) : _.filter(state.selectedPaths, function (thispath) {
                                return thispath !== path;
                            })
                        });
                    }
                }, {
                    key: 'onOpenItem',
                    value: function onOpenItem(state, path, open) {
                        this.setState({
                            openPaths: open ? [].concat(toConsumableArray(state.openPaths), [path]) : _.filter(state.openPaths, function (thispath) {
                                return thispath !== path;
                            }),
                            selectedPaths: state.selectedPaths
                        });
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        return React__default.createElement(GraphQLComponent, _extends({}, this.props, {
                            onOpenItem: this.onOpenItem.bind(this, this.state),
                            onSelectItem: this.onSelectItem.bind(this, this.state),
                            openPaths: this.state.openPaths,
                            selectedPaths: this.state.selectedPaths
                        }));
                    }
                }]);
                return _class2;
            }(React__default.Component);
        }
    };
}

// PickerData.propTypes = {
//     /**
//      * List of root paths for the picker
//      */
//     rootPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
//
//     /**
//      * List of folder paths that are open
//      */
//     openPaths: PropTypes.arrayOf(PropTypes.string),
//
//     /**
//      * List of node types that can be "opened" (folders)
//      */
//     openableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
//
//     /**
//      * List of node types that can be "selected" (items)
//      */
//     selectableTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
//
//     /**
//      * If the picker allows multiple selection
//      */
//     multipleSelection: PropTypes.bool,
//
//     /**
//      * Preselected item path (for single selection picker)
//      */
//     selectedPath: PropTypes.string,
//
//     /**
//      * Preselected items path (for multiple selection picker)
//      */
//     selectedPaths: PropTypes.arrayOf(PropTypes.string),
//
//     /**
//      * Render function for the label of the tree node. Takes a JCR node as parameter, returns the string to display
//      */
//     textRenderer: PropTypes.func,
//
//     /**
//      * Component to use to do the full rendering of the tree
//      */
//     renderComponent: PropTypes.element,
//
//     /**
//      * Optional set of fragments to add to the graphQL query. Can be a string that identify a predefinedFragment or a fragment definition
//      */
//     fragments: PropTypes.arrayOf(PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.shape({
//             applyFor: PropTypes.string.isRequired,
//             variables: PropTypes.string,
//             gql: PropTypes.object.isRequired
//         })
//     ])),
//
//     /**
//      * Optional set of variable to pass to the graphQL query, in order to fulfill fragments needs
//      */
//     variables: PropTypes.object
//
// };
//

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

var TestLayout = function TestLayout(props) {
    return React__default.createElement(
        materialUi.Grid,
        { container: true },
        React__default.createElement(
            materialUi.Grid,
            { item: true, xs: 12, md: 6 },
            React__default.createElement(
                materialUi.Paper,
                null,
                ' ',
                props.leftCol
            )
        ),
        React__default.createElement(
            materialUi.Grid,
            { item: true, xs: 12, md: 6 },
            React__default.createElement(
                materialUi.Paper,
                null,
                props.rightCol
            )
        )
    );
};

TestLayout.propTypes = {
    leftCol: PropTypes.element,
    rightCol: PropTypes.element
};

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

var baseHistory = history.createHashHistory();

var OutletRouter = function (_React$Component) {
    inherits(OutletRouter, _React$Component);

    function OutletRouter(props) {
        classCallCheck(this, OutletRouter);

        var _this = possibleConstructorReturn(this, (OutletRouter.__proto__ || Object.getPrototypeOf(OutletRouter)).call(this, props));

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

var Engine = function (_React$Component) {
    inherits(Engine, _React$Component);

    function Engine(props) {
        classCallCheck(this, Engine);

        var _this = possibleConstructorReturn(this, (Engine.__proto__ || Object.getPrototypeOf(Engine)).call(this, props));

        _this.state = {
            open: false
        };
        _this.components = [{
            link: "/link1",
            label: "Link 1",
            component: function component(props) {
                return React__default.createElement(
                    'div',
                    null,
                    'toto'
                );
            }
        }, {
            link: "/link2",
            label: "Link 2",
            component: function component(props) {
                return React__default.createElement(
                    'div',
                    null,
                    'titi'
                );
            }
        }];
        return _this;
    }

    createClass(Engine, [{
        key: 'handleOpen',
        value: function handleOpen() {
            this.setState({ open: true });
        }
    }, {
        key: 'handleClose',
        value: function handleClose() {
            this.setState({ open: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React__default.createElement(
                'div',
                null,
                React__default.createElement(
                    materialUi.Button,
                    { onClick: function onClick() {
                            return _this2.handleOpen();
                        } },
                    'Open'
                ),
                React__default.createElement(
                    materialUi.Dialog,
                    {
                        open: this.state.open,
                        onClose: function onClose() {
                            return _this2.handleClose();
                        }
                    },
                    React__default.createElement(
                        materialUi.DialogTitle,
                        null,
                        'Dialog'
                    ),
                    React__default.createElement(
                        materialUi.DialogContent,
                        null,
                        React__default.createElement(
                            OutletRouter,
                            { outlet: "outlet1" },
                            React__default.createElement(
                                'div',
                                null,
                                React__default.createElement(
                                    'div',
                                    null,
                                    _.map(this.components, function (e) {
                                        return React__default.createElement(
                                            reactRouterDom.Link,
                                            { key: e.link, to: e.link },
                                            e.label
                                        );
                                    })
                                ),
                                React__default.createElement(
                                    'div',
                                    null,
                                    _.map(this.components, function (e) {
                                        return React__default.createElement(reactRouterDom.Route, { key: e.link, path: e.link, component: e.component });
                                    })
                                )
                            )
                        ),
                        React__default.createElement(
                            OutletRouter,
                            { outlet: "outlet2" },
                            React__default.createElement(
                                'div',
                                null,
                                React__default.createElement(
                                    'div',
                                    null,
                                    _.map(this.components, function (e) {
                                        return React__default.createElement(
                                            reactRouterDom.Link,
                                            { key: e.link, to: e.link },
                                            e.label
                                        );
                                    })
                                ),
                                React__default.createElement(
                                    'div',
                                    null,
                                    _.map(this.components, function (e) {
                                        return React__default.createElement(reactRouterDom.Route, { key: e.link, path: e.link, component: e.component });
                                    })
                                )
                            )
                        )
                    ),
                    React__default.createElement(
                        materialUi.DialogActions,
                        null,
                        React__default.createElement(
                            materialUi.Button,
                            { onClick: function onClick() {
                                    return _this2.handleClose();
                                } },
                            'Cancel'
                        ),
                        ',',
                        React__default.createElement(
                            materialUi.Button,
                            { onClick: function onClick() {
                                    return _this2.handleClose();
                                } },
                            'Submit'
                        )
                    )
                )
            );
        }
    }]);
    return Engine;
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
                    'div',
                    null,
                    'Test1 ',
                    props.match.params.value
                );
            };
            var Test2 = function Test2(props) {
                return React__default.createElement(
                    'div',
                    null,
                    'Test2'
                );
            };
            var Test3 = function Test3(props) {
                return React__default.createElement(
                    'div',
                    null,
                    'Test3'
                );
            };

            return React__default.createElement(
                OutletRouter,
                { outlet: this.props.id },
                React__default.createElement(
                    'div',
                    null,
                    '---- links : ----',
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test1/toto' },
                        'Test1 toto'
                    ),
                    ' -',
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test1/tutu' },
                        'Test1 tutu'
                    ),
                    ' -',
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test2' },
                        'Test2'
                    ),
                    ' -',
                    React__default.createElement(
                        reactRouterDom.Link,
                        { to: '/test3' },
                        'Test3'
                    ),
                    ' -',
                    React__default.createElement(
                        OutletRouter,
                        { outlet: 'new' },
                        React__default.createElement(
                            'div',
                            null,
                            React__default.createElement(
                                reactRouterDom.Link,
                                { to: '/test1' },
                                'Test1/other'
                            ),
                            ' -',
                            React__default.createElement(
                                reactRouterDom.Link,
                                { to: '/test2' },
                                'Test2/other'
                            )
                        )
                    ),
                    '---- routes : ----',
                    React__default.createElement(reactRouterDom.Route, { path: '/test1/:value', component: Test1 }),
                    React__default.createElement(reactRouterDom.Route, { path: '/test2', component: Test2 }),
                    React__default.createElement(reactRouterDom.Route, { path: '/test3', component: Test3 }),
                    React__default.createElement(
                        OutletRouter,
                        { outlet: 'new' },
                        React__default.createElement(
                            'div',
                            null,
                            React__default.createElement(reactRouterDom.Route, { path: '/test1', component: Test1 }),
                            React__default.createElement(reactRouterDom.Route, { path: '/test2', component: Test2 })
                        )
                    ),
                    '------------------'
                )
            );
        }
    }]);
    return RouterExample;
}(React__default.Component);

var _templateObject$3 = taggedTemplateLiteral(['fragment Test on JCRNode {\n            myprop:property(name:"myprop") {\n                value\n            }\n        }'], ['fragment Test on JCRNode {\n            myprop:property(name:"myprop") {\n                value\n            }\n        }']);
var _templateObject2 = taggedTemplateLiteral(['\n    mutation setProperty($value:String,$path:String!) {\n        jcr {\n            mutateNode(pathOrId:$path) {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n                node {\n                    path\n                }\n            }\n        }\n    }\n'], ['\n    mutation setProperty($value:String,$path:String!) {\n        jcr {\n            mutateNode(pathOrId:$path) {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n                node {\n                    path\n                }\n            }\n        }\n    }\n']);
var _templateObject3 = taggedTemplateLiteral(['\n    mutation addNode($value:String, $name:String!) {\n        jcr {\n            addNode(parentPathOrId:"/",name:$name,primaryNodeType:"nt:unstructured") {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n            }\n        }\n    }\n'], ['\n    mutation addNode($value:String, $name:String!) {\n        jcr {\n            addNode(parentPathOrId:"/",name:$name,primaryNodeType:"nt:unstructured") {\n                mutateProperty(name:"myprop") {\n                    setValue(value:$value)\n                }\n            }\n        }\n    }\n']);
var _templateObject4 = taggedTemplateLiteral(['\n    mutation removeNode($path:String!) {\n        jcr {\n            deleteNode(pathOrId:$path) \n        }\n    }\n'], ['\n    mutation removeNode($path:String!) {\n        jcr {\n            deleteNode(pathOrId:$path) \n        }\n    }\n']);

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
            gql: gql(_templateObject$3)
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

var MutationExample = function (_React$Component) {
    inherits(MutationExample, _React$Component);

    function MutationExample(props) {
        classCallCheck(this, MutationExample);

        var _this3 = possibleConstructorReturn(this, (MutationExample.__proto__ || Object.getPrototypeOf(MutationExample)).call(this, props));

        _this3.Component = reactApollo.graphql(setProperty, { name: 'setPropertyMutation' })(reactApollo.graphql(addNode, { name: 'addNodeMutation' })(reactApollo.graphql(removeNode, { name: 'removeNodeMutation' })(MutationExampleView)));
        return _this3;
    }

    createClass(MutationExample, [{
        key: 'render',
        value: function render() {
            var Component$$1 = this.Component;
            return React__default.createElement(
                reactApollo.ApolloProvider,
                { client: apolloDx.client },
                React__default.createElement(Component$$1, null)
            );
        }
    }]);
    return MutationExample;
}(React__default.Component);

var theme = materialUi.createMuiTheme();

// All the following keys are optional.
// We try our best to provide a great default value.
// const theme = createMuiTheme({
//     palette: {
//         contrastThreshold: 3.1,
//         tonalOffset: 0.07,
//         primary: {
//             light: indigo[300],
//             main: indigo[500],
//             dark: indigo[700],
//             contrastText: defaultTheme.palette.getContrastText(indigo[500]),
//         },
//         secondary: {
//             light: pink.A200,
//             main: pink.A400,
//             dark: pink.A700,
//             contrastText: defaultTheme.palette.getContrastText(pink.A400),
//         },
//         error: red.A400,
//     },
// });
console.log(theme);

exports.DynamicComponentsList = DynamicComponentsList;
exports.SimpleListView = SimpleListView;
exports.withPickerModel = withPickerModel;
exports.NodesTableViewMaterial = NodesTableViewMaterial;
exports.withNodesFromPath = withNodesFromPath;
exports.withPathFromSelection = withPathFromSelection;
exports.TestLayout = TestLayout;
exports.Engine = Engine;
exports.createOutletHistory = createOutletHistory;
exports.OutletRouter = OutletRouter;
exports.RouterExample = RouterExample;
exports.MutationExample = MutationExample;
exports.reducers = reducers;
exports.store = store;
exports.resetStateReducer = resetStateReducer;
exports.theme = theme;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-dxcomponents.umd.js.map
