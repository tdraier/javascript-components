import PropTypes from 'prop-types';
import React from 'react';
import {compose} from 'recompose';
import ToolBar from '../../components/ToolBar';

export class ToolLayout extends React.Component {
    render() {
        const {children, label, title, contextPath} = this.props;
        return (
            <React.Fragment>
                <ToolBar contextPath={contextPath} title={title} label={label}/>
                {children}
            </React.Fragment>
        );
    }
}

ToolLayout.propTypes = {
    children: PropTypes.element.isRequired,
    contextPath: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string
};

ToolLayout.defaultProps = {
    contextPath: null,
    label: null,
    title: null
};

export default compose(
)(ToolLayout);
