import React from 'react';

class SimpleListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactElements: []
        };
    }

    // todo should move this code dynamicList itself
    componentDidMount() {
        if (this.props.components && !this.done) {
            this.props.components.then((reactElements) => {
                this.done = true;
                this.setState({reactElements: reactElements});
            });
        }
    }

    componentDidUpdate() {
        this.componentDidMount();
    }

    render() {
        return this.done ? (<div>{this.state.reactElements}</div>) : (<div/>);
    }
}

export {SimpleListView}