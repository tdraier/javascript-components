import PropTypes from 'prop-types';
import React from 'react';
import {compose} from 'recompose';
import ToolBar from '../components/ToolBar';

export class ToolLayout extends React.Component {
    constructor(props) {
        super(props);
    }

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

export default compose(
)(ToolLayout);

ToolLayout.propTypes = {
    children: PropTypes.element.isRequired,
    contextPath: PropTypes.string,
    label: PropTypes.string,
    title: PropTypes.string
};

ToolLayout.defaultProps = {
    expanded: false
};

