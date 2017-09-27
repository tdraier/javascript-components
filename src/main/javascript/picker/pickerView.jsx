import React from 'react';
import Checkbox from 'material-ui/Checkbox/index';
import * as _ from "lodash";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table/index';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less'
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more'

let cellStyle = {
    'width': '48px',
    'paddingLeft': '12px',
    'paddingRight': '12px'
};

let PickerView = function (props) {
    let Row = function({entry}) {
        if (props.rowRenderComponent) {
            return React.createElement(props.rowRenderComponent, {...props, entry})
        } else {
            return (
                <div>{entry.name}</div>
            )
        }
    };

    return (
        <Table>
            <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn style={cellStyle}></TableHeaderColumn>
                    <TableHeaderColumn style={cellStyle}></TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false} showRowHover={true}>
                {props.pickerEntries.map((entry) => (
                    <TableRow key={entry.path} selectable={false}>
                        <TableRowColumn style={cellStyle}>
                            <Checkbox checked={ entry.open } checkedIcon={<ExpandLess/>} uncheckedIcon={<ExpandMore/>} onCheck={(event, value) => props.onOpenItem(entry.path, value)}/>
                        </TableRowColumn>
                        <TableRowColumn style={cellStyle}>
                            <Checkbox checked={ entry.selected } onCheck={(event, value) => props.onSelectItem(entry.path, value)}/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <Row entry={entry}/>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

export default PickerView;