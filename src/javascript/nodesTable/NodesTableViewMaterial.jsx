import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from 'material-ui';
import PropTypes from 'prop-types';

let NodesTableViewMaterial = function (props) {

    let headers = props['headers'] ? props['headers'] : () => (
        <TableRow>
            <TableCell>Name</TableCell>
        </TableRow>);

    let row = props['row'] ? props['row'] : (node) => (<TableRow key={node.path}>
            <TableCell>{props['textRenderer'] ? props['textRenderer'].call(this, node) : node.name}</TableCell>
        </TableRow>);

    return (<Table>
                <TableHead>
                    {headers()}
                </TableHead>
                <TableBody>
                    {props.nodes ? props.nodes.map(row) : []}
                </TableBody>
            </Table>)
};

NodesTableViewMaterial.propTypes = {
    headers: PropTypes.func,
    row: PropTypes.func,
    textRenderer: PropTypes.func,
    nodes: PropTypes.arrayOf(PropTypes.object)
};

export {NodesTableViewMaterial};