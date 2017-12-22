import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui';
import {DynamicComponentsList, SimpleListView} from "../dynamicList";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from '../themeProvider';

let NodesTableViewMaterial = function (props) {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Table selectable={false}>
                <TableHeader >
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Actions</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody >
                    {props.nodes ? props.nodes.map((node) => {
                        return (<TableRow key={node.path}>
                            <TableRowColumn>{props['textRenderer'] ? props['textRenderer'].call(this, node) : node.name}</TableRowColumn>
                            <TableRowColumn><DynamicComponentsList id="main" renderComponent={SimpleListView} /></TableRowColumn>
                        </TableRow>)
                    }) : []}
                </TableBody>
            </Table>
        </MuiThemeProvider>
    )
};

export {NodesTableViewMaterial};