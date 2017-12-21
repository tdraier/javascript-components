import React from 'react';

import {createMemoryHistory, createHashHistory, createBrowserHistory} from "history";
import createOutletHistory from "./createOutletHistory"
import {Router,Route} from 'react-router'
import {Link, HashRouter, BrowserRouter} from 'react-router-dom'

// const routerHistory = createOutletHistory(createHashHistory());
// let MyRouter = (props) => (<Router history={routerHistory}>{props.children}</Router>);

let MyRouter = (props) => (<HashRouter>{props.children}</HashRouter>);

// let MyRouter = (props) => (<BrowserRouter >{props.children}</BrowserRouter>);


export default MyRouter;