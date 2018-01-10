import React from 'react';
import {Dialog, FlatButton} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import {muiTheme} from '../themeProvider';
import * as _ from "lodash";
import {OutletRouter as Router} from '../router/router'
import {Link, Route} from 'react-router-dom'

class Engine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.components = [
            {
                link:"/link1",
                label:"Link 1",
                component: (props) => <div>toto</div>
            },
            {
                link:"/link2",
                label:"Link 2",
                component: (props) => (<div>titi</div>)
            }
        ];
    }

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render() {
        return (<MuiThemeProvider muiTheme={muiTheme()}>
            <div>
                <FlatButton label="Open" onClick={()=>this.handleOpen()}/>
                <Dialog
                    title="Dialog With Actions"
                    actions={[
                        <FlatButton label="Cancel" primary={true} onClick={()=>this.handleClose()}/>,
                        <FlatButton label="Submit" primary={true} keyboardFocused={true} onClick={()=>this.handleClose()}/>
                    ]}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={()=>this.handleClose()}
                >
                    <Router outlet={"outlet1"}>
                        <div>
                            <div>
                                {_.map(this.components, (e) => (<Link key={e.link} to={e.link}>{e.label}</Link>))}
                            </div>
                            <div>
                                {_.map(this.components, (e) => (<Route key={e.link} path={e.link} component={e.component}/>))}
                            </div>
                        </div>
                    </Router>
                    <Router outlet={"outlet2"}>
                        <div>
                            <div>
                                {_.map(this.components, (e) => (<Link key={e.link} to={e.link}>{e.label}</Link>))}
                            </div>
                            <div>
                                {_.map(this.components, (e) => (<Route key={e.link} path={e.link} component={e.component}/>))}
                            </div>
                        </div>
                    </Router>
                </Dialog>

            </div>
        </MuiThemeProvider>);
    }


}

export {Engine}
