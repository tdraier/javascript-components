import React from 'react';
import {OutletRouter as Router} from './router'
import {Link, Route} from 'react-router-dom'
import {Paper, Typography} from 'material-ui'
class RouterExample extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let Test1 = props => (
            <Paper elevation={4}>
                <Typography type="headline" component="h3">
                    Page 1
                </Typography>
                <Typography component="p">
                    Param = {props.match.params.value}
                </Typography>
            </Paper>
        );
        let Test2 = props => (
            <Paper elevation={4}>
                <Typography type="headline" component="h3">
                    Page 2
                </Typography>
            </Paper>

        );
        let Test3 = props => (
            <Paper elevation={4}>
                <Typography type="headline" component="h3">
                    Page 3
                </Typography>
            </Paper>
        );

        return (<Router outlet={this.props.id}>
            <div>
                <Link to={'/test1/value1'}>test1/value1</Link>
                <Link to={'/test1/value2'}>Test1/value2</Link>
                <Link to={'/test2'}>test2</Link>
                <Link to={'/test3'}>test3</Link>

                <Route path={'/test1/:value'} component={Test1}/>
                <Route path={'/test2'} component={Test2}/>
                <Route path={'/test3'} component={Test3}/>
            </div>
        </Router>);
    }

}

export {RouterExample}
