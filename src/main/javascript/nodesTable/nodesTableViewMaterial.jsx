import React from 'react';
import {List, ListItem} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../themeProvider';

let NodesTableViewMaterial = function (props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <List>
                {props.nodes ? props.nodes.map((node) => {
                    return (<ListItem key={node.path}
                                      primaryText={props['textRenderer'] ? props['textRenderer'].call(this, node) : node.name}
                                      innerDivStyle={{fontWeight: "400"}}/>)
                }) : []}
            </List>
        </MuiThemeProvider>
    )
};

export {NodesTableViewMaterial};