import React from 'react';
import PropTypes from 'prop-types';

function withDxContext() {
    return (WrappedComponent) => {
        let Component = class extends React.Component {
            render() {
                return (<WrappedComponent dxContext={this.context.dxContext} {...this.props} />)
            }
        }

        Component.contextTypes = {
            dxContext: PropTypes.object
        };

        return Component
    }
}

export { withDxContext }