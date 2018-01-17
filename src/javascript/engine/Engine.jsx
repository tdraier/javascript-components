import React from 'react';
import {Button, Dialog, DialogTitle , DialogContent, DialogActions} from 'material-ui';
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
        return (
            <div>
                <Button onClick={()=>this.handleOpen()}>Open</Button>
                <Dialog
                    open={this.state.open}
                    onClose={()=>this.handleClose()}
                >
                    <DialogTitle>Dialog</DialogTitle>
                    <DialogContent>
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
                    </DialogContent>
                    <DialogActions>
                        <Button primary={true} onClick={()=>this.handleClose()}>Cancel</Button>,
                        <Button primary={true} onClick={()=>this.handleClose()}>Submit</Button>
                    </DialogActions>
                </Dialog>

            </div>);
    }


}

export {Engine}
