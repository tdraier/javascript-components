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
import {muiTheme} from '../themeProvider';
import PropTypes from 'prop-types';

let NodesTableViewMaterial = function (props) {

    let headers = props['headers'] ? props['headers'] : () => (
        <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
        </TableRow>);

    let row = props['row'] ? props['row'] : (node) => (<TableRow key={node.path}>
            <TableRowColumn>{props['textRenderer'] ? props['textRenderer'].call(this, node) : node.name}</TableRowColumn>
        </TableRow>);

    return (
        <MuiThemeProvider muiTheme={muiTheme()}>
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

NodesTableViewMaterial.propTypes = {
    headers: PropTypes.func,
    row: PropTypes.func,
    textRenderer: PropTypes.func,
    nodes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export {NodesTableViewMaterial};