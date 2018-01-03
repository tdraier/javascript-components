import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui';
import {MuiThemeProvider} from 'material-ui/styles/index';
import getMuiTheme from '../themeProvider';

let NodesTableViewMaterial = function (props) {

    let headers = props['headers'] ? props['headers'] : () => (
        <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
        </TableRow>);

    let row = props['row'] ? props['row'] : (node) => (<TableRow key={node.path}>
            <TableRowColumn>{props['textRenderer'] ? props['textRenderer'].call(this, node) : node.name}</TableRowColumn>
        </TableRow>);

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Table>
                <TableHeader >
                    {headers()}
                </TableHeader>
                <TableBody >
                    {props.nodes ? props.nodes.map(row) : []}
                </TableBody>
            </Table>
        </MuiThemeProvider>
    )
};

export {NodesTableViewMaterial};