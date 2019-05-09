import React from 'react';
import {translate} from 'react-i18next';
import {IconButton, Table, TableFooter, TablePagination, TableRow, withStyles} from '@material-ui/core';
import {FirstPage, KeyboardArrowLeft, KeyboardArrowRight, LastPage} from '@material-ui/icons';
import * as _ from 'lodash';
import PropTypes from 'prop-types';

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing.unit * 2.5
    }
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick(event) {
        this.props.onChangePage(event, 0);
    }

    handleBackButtonClick(event) {
        this.props.onChangePage(event, this.props.page - 1);
    }

    handleNextButtonClick(event) {
        this.props.onChangePage(event, this.props.page + 1);
    }

    handleLastPageButtonClick(event) {
        this.props.onChangePage(event,
            Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
        );
    }

    render() {
        const {classes, count, page, rowsPerPage, theme} = this.props;

        return (
            <div className={classes.root}>
                <IconButton
                    onClick={this.handleFirstPageButtonClick.bind(this)}
                    disabled={page === 0}
                    aria-label="First Page"
                    data-jrm-role="table-pagination-button-first-page"
                >
                    <FirstPage/>
                </IconButton>
                <IconButton
                    onClick={this.handleBackButtonClick.bind(this)}
                    disabled={page === 0}
                    aria-label="Previous Page"
                >
                    <KeyboardArrowLeft/>
                </IconButton>
                <IconButton
                    onClick={this.handleNextButtonClick.bind(this)}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Next Page"
                    data-jrm-role="table-pagination-button-next-page"
                >
                    <KeyboardArrowRight/>
                </IconButton>
                <IconButton
                    onClick={this.handleLastPageButtonClick.bind(this)}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="Last Page"
                >
                    <LastPage/>
                </IconButton>
            </div>
        );
    }
}

TablePaginationActions = withStyles(actionsStyles, {name: 'DxPaginationActions', withTheme: true})(TablePaginationActions);

class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangePage(event, page) {
        this.props.onChangePage(page);
    }

    render() {
        let {totalCount, pageSize, currentPage, onChangeRowsPerPage, t} = this.props;
        return (
            <Table>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        count={totalCount}
                        rowsPerPage={pageSize}
                        page={currentPage}
                        onChangePage={this.onChangePage.bind(this)}
                        onChangeRowsPerPage={event => onChangeRowsPerPage(event.target.value)}
                        ActionsComponent={TablePaginationActions}
                        labelRowsPerPage={t('label.pagination.rowsPerPage')}
                        labelDisplayedRows={({from, to, count}) => `${from}-${to} ` + t('label.pagination.of') + ` ${count}`}
                        data-jrm-role="table-pagination"
                    />
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }
}

Pagination.propTypes = {
    totalCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChangeRowsPerPage: PropTypes.func.isRequired,
    onChangePage: PropTypes.func.isRequired
};

Pagination = _.flowRight(
    translate('react-material')
)(Pagination);

export {Pagination};
