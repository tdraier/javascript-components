import React from 'react';
import {OutletRouter as Router} from './router'
import {Link, Route} from 'react-router-dom'

class RouterExample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let Test1 = props => (<div>Test1 {props.match.params.value}</div>)
        let Test2 = props => (<div>Test2</div>);
        let Test3 = props => (<div>Test3</div>);

        return (<Router outlet={this.props.id}>
            <div>

                ---- links : ----
                <Link to={'/test1/toto'}>Test1 toto</Link> -
                <Link to={'/test1/tutu'}>Test1 tutu</Link> -
                <Link to={'/test2'}>Test2</Link> -
                <Link to={'/test3'}>Test3</Link> -

                <Router outlet="new">
                    <div>
                        <Link to={'/test1'}>Test1/other</Link> -
                        <Link to={'/test2'}>Test2/other</Link>
                    </div>
                </Router>
                ---- routes : ----
                <Route path={'/test1/:value'} component={Test1}/>
                <Route path={'/test2'} component={Test2}/>
                <Route path={'/test3'} component={Test3}/>

                <Router outlet="new">
                    <div>
                        <Route path={'/test1'} component={Test1}/>
                        <Route path={'/test2'} component={Test2}/>
                    </div>
                </Router>

                ------------------
            </div>
        </Router>);
    }

}

export {RouterExample}
