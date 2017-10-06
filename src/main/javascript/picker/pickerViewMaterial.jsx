import React from 'react';
import * as _ from "lodash";
import {
    Checkbox,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from 'material-ui';
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'

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
            <TableHead>
                <TableRow>
                    <TableCell style={cellStyle}> </TableCell>
                    <TableCell style={cellStyle}> </TableCell>
                    <TableCell>Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.pickerEntries.map((entry) => (
                    <TableRow key={entry.path}>
                        <TableCell style={cellStyle}>

                            <Checkbox icon={<ExpandMore/>} checkedIcon={<ExpandLess/>} checked={ entry.open } onChange={(event, value) => props.onOpenItem(entry.path, value)}><ExpandMore /></Checkbox>
                        </TableCell>
                        <TableCell style={cellStyle}>
                            <Checkbox checked={ entry.selected } onChange={(event, value) => props.onSelectItem(entry.path, value)}/>
                        </TableCell>
                        <TableCell>
                            <Row entry={entry}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
};

export default PickerView;